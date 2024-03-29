import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Instructions from "@/components/setup/Instructions";
import LoadingCircle from "@/components/setup/LoadingCircle";
import Stepper from "@/components/setup/Stepper";
import StudentInput from "@/components/setup/StudentInput";
import Unsupported from "@/components/setup/Unsupported";
import { useBtDevice } from "@/lib/hooks/useBtDevice";
import { useSleep } from "@/lib/hooks/useSleep";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FinishSetup from "@/components/setup/FinishSetup";
import { instructions } from "@/data/setupInstructions";
import ImageSlides from "@/components/setup/ImageSlides";

enum SetupState {
  PAIR_TAG,
  ENTER_ID,
  DONE,
  ERROR,
}

const Setup: NextPage = () => {
  // Generic State
  const [setupState, setSetupState] = useState<SetupState>(SetupState.PAIR_TAG);
  const [loading, setLoading] = useState(false);

  // Step 2: Enter ID
  const [studentIDInput, setStudentIDInput] = useState("");
  const [writeError, setWriteError] = useState("");

  const {
    supportsBluetooth,
    isConnected,
    studentID,
    schoolID,
    bleAddr,
    pairDevice,
    writeStudentID,
    refreshLunchData,
  } = useBtDevice();
  const { sleep } = useSleep();

  useEffect(() => {
    if (isConnected) refreshLunchData();
  }, [isConnected]);

  const handleConnect = () => {
    // Connect then set lunch data
    setLoading(true);
    pairDevice()
      .then(() => {
        setSetupState(SetupState.ENTER_ID);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  const handleWriteStudentID = async () => {
    setLoading(true);

    try {
      const success = await writeStudentID(studentIDInput);
      if (success) {
        await sleep();
        await refreshLunchData();

        setSetupState(SetupState.DONE);

        fetch("/api/update_tag", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            student_id: studentIDInput,
            ble_addr: bleAddr,
          }),
        })
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        setWriteError("Failed. Please try again or contact support");
      }
    } catch (e) {
      setWriteError("Failed. Please try again or contact support");
      console.error(e);
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>LunchTrak: Setup LunchTrak Tags By Entering Student ID</title>
        <meta
          name="description"
          content="Setup LunchTrak tags by entering your student ID. This is necessary for your device to be valid in the lunch line. Please only use the ID assigned to you."
        />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      {loading && <LoadingCircle />}
      <Navbar />
      <Container className="flex h-full w-full items-center justify-center">
        <div className="w-[30rem]">
          <Stepper currentStep={setupState} setStep={setSetupState} />
          <div className="flex h-full w-full flex-col items-center justify-between rounded-lg bg-gray-200 p-8 shadow-sm dark:bg-neutral-800">
            <Instructions currentStep={setupState} />
            {/* Step One: Pair tag*/}
            {setupState === SetupState.PAIR_TAG && (
              <>
                {supportsBluetooth ? (
                  <button
                    className="text-md rounded-lg bg-gradient-to-br from-emerald-400 to-blue-400 px-6 py-4 font-semibold text-white shadow-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 disabled:from-gray-500 disabled:to-gray-500"
                    onClick={handleConnect}
                    disabled={isConnected}
                  >
                    {isConnected ? "Already Connected" : "Pair Your Tag"}
                  </button>
                ) : (
                  <Unsupported />
                )}
              </>
            )}

            {/* Step Two: Type Student ID */}
            {setupState === SetupState.ENTER_ID && (
              <div className="flex w-full flex-col items-center">
                <div className="w-64 py-4">
                  {isConnected ? (
                    <>
                      <StudentInput
                        onChange={(e) => setStudentIDInput(e.target.value)}
                        value={studentIDInput}
                        placeholder={studentID}
                        onSubmit={handleWriteStudentID}
                      />
                      {writeError !== "" && (
                        <div className="mt-2 text-red-400">{writeError}</div>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col items-center space-y-4">
                      <div className="text-center text-2xl text-gray-500 dark:text-gray-400">
                        Hold on, your device is not connected!
                      </div>
                      <button
                        className="rounded-lg  px-4 py-2 font-bold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-neutral-700"
                        onClick={() => setSetupState(SetupState.PAIR_TAG)}
                      >
                        Go Back
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step Three: Verify */}
            {setupState === SetupState.DONE && (
              <FinishSetup
                studentID={studentID}
                schoolID={schoolID}
                isConnected={isConnected}
              />
            )}

            {/* Instruction Images */}
            {instructions[setupState].images.length > 0 && (
              <ImageSlides images={instructions[setupState].images} />
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Setup;
