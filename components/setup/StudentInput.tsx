import { useState } from "react";

interface StudentInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const StudentInput = ({ value, onChange, onSubmit }: StudentInputProps) => {
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!value.startsWith("950") || value.length != 8) {
      setError("Invalid Student ID. Please Check");
    } else onSubmit();
  };

  return (
    <>
      <label
        htmlFor="text"
        className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
      >
        Student ID
      </label>
      <input
        type="text"
        id="text"
        placeholder="950XXXXX"
        autoComplete="off"
        onChange={onChange}
        onBlur={() => setError("")}
        value={value}
        className={`w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-4xl text-gray-600 placeholder-gray-300 focus:outline-none focus:ring dark:bg-gray-700 dark:text-white  ${
          error !== ""
            ? "border-red-600 ring-red-100 focus:border-red-600"
            : "border-gray-300 ring-indigo-100 focus:border-indigo-600"
        }`}
      />

      {error !== "" && (
        <div className="invalid-feedback mt-1 text-sm text-red-400">
          {error}
        </div>
      )}

      <button
        className="mt-4 w-full rounded-lg bg-emerald-500 px-4 py-2"
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </>
  );
};

export default StudentInput;
