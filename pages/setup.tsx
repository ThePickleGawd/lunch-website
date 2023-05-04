import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Instructions from "@/components/setup/Instructions";
import LoadingCircle from "@/components/setup/LoadingCircle";
import Stepper from "@/components/setup/Stepper";
import StudentInput from "@/components/setup/StudentInput";
import Unsupported from "@/components/setup/Unsupported";
import { useBtDevice } from "@/hooks/useBtDevice";
import { useSleep } from "@/hooks/useSleep";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

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
    pairDevice,
    writeStudentID,
    refreshLunchData,
  } = useBtDevice();
  const { sleep } = useSleep();

  useEffect(() => {
    return () => {};
  });

  const handleConnect = () => {
    // Connect then set lunch data
    setLoading(true);
    pairDevice()
      .then(() => {
        setLoading(false);
        setSetupState(SetupState.ENTER_ID);

        sleep().then(refreshLunchData);
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
        <title>LunchTrak - Setup</title>
        <meta name="description" content="Setup your LunchTrak tags here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && <LoadingCircle />}
      <Navbar />
      <Container className="flex h-full w-full items-center justify-center">
        <div className="w-[30rem]">
          <Stepper currentStep={setupState} setStep={setSetupState} />
          <div className="flex h-full w-full flex-col items-center justify-between rounded-lg bg-gray-200 p-8 shadow-sm dark:bg-trueGray-800">
            <Instructions currentStep={setupState} />

            {/* Step One: Pair tag*/}
            {setupState === SetupState.PAIR_TAG && (
              <>
                {supportsBluetooth ? (
                  <button
                    className="text-md rounded-lg bg-gradient-to-br from-emerald-400 to-blue-400 px-6 py-4 font-semibold text-white shadow-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500"
                    onClick={handleConnect}
                  >
                    Pair Your Tag
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
                        className="rounded-lg  px-4 py-2 font-bold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-trueGray-700"
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
              <div className="flex w-full flex-col items-center space-y-2 px-6">
                <div className="font-semi-bold w-full rounded-lg bg-gray-300 px-4 py-2 text-center text-3xl text-gray-700 dark:bg-trueGray-700 dark:text-white">
                  {studentID}
                </div>
                <div className="font-semi-bold w-full rounded-lg bg-gray-300 px-4 py-2 text-center text-3xl text-gray-700 dark:bg-trueGray-700 dark:text-white">
                  {schoolID}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Setup;
