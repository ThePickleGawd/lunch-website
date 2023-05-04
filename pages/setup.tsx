import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Instructions from "@/components/setup/Instructions";
import LoadingCircle from "@/components/setup/LoadingCircle";
import Stepper from "@/components/setup/Stepper";
import StudentInput from "@/components/setup/StudentInput";
import { useBtDevice } from "@/hooks/useBtDevice";
import { useSleep } from "@/hooks/useSleep";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

enum SetupState {
  PAIR_TAG,
  ENTER_ID,
  DONE,
  ERROR,
}

const Setup: NextPage = () => {
  const [setupState, setSetupState] = useState<SetupState>(SetupState.PAIR_TAG);
  const [loading, setLoading] = useState(false);

  // Step 2: Enter ID
  const [studentID, setStudentID] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    supportsBluetooth,
    isConnected,
    pairDevice,
    writeStudentID,
    readStudentID,
    readSchoolID,
  } = useBtDevice();
  const { sleep } = useSleep();

  const handleConnect = () => {
    // Connect then set lunch data
    setLoading(true);
    pairDevice()
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
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
      <Container className="flex justify-center items-center w-full h-full">
        <div className="">
          <Stepper currentStep={setupState} />
          <div className="flex justify-between items-center flex-col w-full h-full bg-gray-100 rounded-lg p-8 dark:bg-trueGray-800">
            <Instructions currentStep={setupState} />

            {/* Step One: Pair tag*/}
            {setupState === SetupState.PAIR_TAG && (
              <button
                className="mt-8 px-6 py-4 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-400 text-white font-semibold text-md shadow-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500"
                onClick={handleConnect}
              >
                Pair Your Tag
              </button>
            )}

            {/* Step Two: Type Student ID */}
            {setupState === SetupState.ENTER_ID && (
              <div className="w-full flex flex-col items-center">
                <div className="w-64 py-4">
                  <StudentInput
                    onChange={(e) => setStudentID(e.target.value)}
                    value={studentID}
                    errorMessage={errorMessage}
                  />
                  <button className="mt-4 px-4 py-2 bg-emerald-500 rounded-lg w-full">
                    Confirm
                  </button>
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
