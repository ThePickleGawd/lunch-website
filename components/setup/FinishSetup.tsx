import { useState } from "react";

const FinishSetup = ({
  studentID,
  schoolID,
  isConnected,
}: {
  studentID: string;
  schoolID: string;
  isConnected: boolean;
}) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      {confirmed ? (
        <div className="my-8 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">
          {"Thank you!"}
        </div>
      ) : (
        <>
          <div className="flex w-full flex-col items-center space-y-2 px-6">
            <div className="font-semi-bold w-full rounded-lg bg-gray-300 px-4 py-2 text-center text-3xl text-gray-700 dark:bg-trueGray-700 dark:text-white">
              {studentID}
            </div>
            <div className="font-semi-bold w-full rounded-lg bg-gray-300 px-4 py-2 text-center text-3xl text-gray-700 dark:bg-trueGray-700 dark:text-white">
              {schoolID}
            </div>
          </div>
          <button
            className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 font-bold disabled:opacity-25"
            onClick={() => setConfirmed(true)}
            disabled={!isConnected}
          >
            Done
          </button>
        </>
      )}
    </>
  );
};

export default FinishSetup;
