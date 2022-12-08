import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useBtDevice } from "../hooks/useBtDevice";
import { useSleep } from "../hooks/useSleep";
import ConnectedIcon from "../public/connected.svg";

enum PageState {
  LANDING,
  CONNECTED,
  CONFIRMATION,
}

const Home: NextPage = () => {
  const [pageState, setPageState] = useState<PageState>(PageState.LANDING);
  const [text, setText] = useState("");
  const [successWriteData, setSuccessWriteData] = useState(false);
  const [schoolID, setSchoolID] = useState("Loading...");
  const [studentID, setStudentID] = useState("Loading...");

  const { connect, isConnected, writeStudentID, readStudentID, readSchoolID } =
    useBtDevice();
  const { sleep } = useSleep();

  useEffect(() => {
    if (pageState === PageState.LANDING && isConnected) {
      setPageState(PageState.CONNECTED);
    }
  }, [isConnected, pageState]);

  const handleConnect = async () => {
    await connect();
  };

  const handleWriteData = async () => {
    const success = await writeStudentID(text);
    setSuccessWriteData(success);
    setPageState(PageState.CONFIRMATION);

    await sleep(500);
    const schoolID_val = await readSchoolID();
    await sleep(500);
    const studentID_val = await readStudentID();

    setSchoolID(schoolID_val);
    setStudentID(studentID_val);
  };

  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>LunchTrak</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isConnected && (
        <div className="bg-white fixed rounded-lg right-0 mt-10 mr-12 p-2">
          <Image width={80} height={80} src={ConnectedIcon} alt="connected" />
          <div className="text-black">Connected</div>
        </div>
      )}
      <div className="fixed top-0 w-full flex flex-col items-center justify-center space-y-3">
        <div className="text-5xl font-bold pt-10 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          LunchTrak
        </div>
        <div className="text-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          No more waiting for your food
        </div>
      </div>
      <div className="h-full flex flex-col items-center justify-center space-y-5">
        {pageState == PageState.LANDING && (
          <>
            <div className="">
              <button
                className="bg-gradient-to-r from-blue-900 to-violet-500 hover:from-fuchsia-600 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleConnect}
              >
                Connect to Device
              </button>
            </div>
          </>
        )}

        {pageState == PageState.CONNECTED && (
          <>
            <div className="w-64">
              <input
                type="text"
                className="w-full h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please enter your student ID"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="">
              <button
                className="hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleWriteData}
              >
                Confirm
              </button>
            </div>
          </>
        )}

        {pageState == PageState.CONFIRMATION && (
          <div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg flex flex-col justify-center items-center p-5">
              <div
                className={`bg-gradient-to-r text-transparent bg-clip-text ${
                  successWriteData
                    ? "from-green-500 to-green-600"
                    : "from-red-500 to-red-600"
                } font-bold text-5xl pt-3`}
              >
                {successWriteData ? "Success!" : "Failure!"}
              </div>
              <div className="bg-gradient-to-r from-gray-500 to-gray-600 m-5 p-12 rounded-lg">
                <div className="text-gray-300 font-bold text-2xl">
                  Device Settings
                </div>
                <div className="text-gray-100 font-bold text-xl">
                  {`School ID: ${schoolID}`}
                </div>
                <div className="text-gray-100 font-bold text-xl">
                  {`Student ID: ${studentID}`}
                </div>
              </div>
            </div>
            <div className="flex justify-start mt-3">
              <button
                className="hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => {
                  setPageState(PageState.CONNECTED);
                }}
              >
                Go back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
