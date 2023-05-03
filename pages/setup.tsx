import Navbar from "@/components/layout/Navbar";
import Instructions from "@/components/setup/Instructions";
import Stepper from "@/components/setup/Stepper";
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

  const {
    supportsBluetooth,
    isConnected,
    pairDevice,
    writeStudentID,
    readStudentID,
    readSchoolID,
  } = useBtDevice();
  const { sleep } = useSleep();

  return (
    <>
      <Head>
        <title>LunchTrak - Tag Setup</title>
        <meta
          name="description"
          content="Students, setup your LunchTrak tags here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex justify-center items-center w-full h-full">
        <div className="p-4">
          <Stepper currentStep={setupState} />
          <div className="flex justify-center items-center flex-col space-y-4 mt-4 w-full h-full bg-white border border-gray-200 rounded-lg p-4">
            <Instructions currentStep={setupState} />
            <button className="px-6 py-2 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-400 text-white font-semibold text-md shadow-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500">
              Pair Your Tag
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setup;
