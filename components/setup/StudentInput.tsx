import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";

interface StudentInputProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const StudentInput = ({
  value,
  placeholder,
  onChange,
  onSubmit,
}: StudentInputProps) => {
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 8) return;
    onChange(e);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!value.startsWith("950") || value.length != 8) {
      setError("Invalid Student ID. Please Check");
    } else onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="text"
        className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
      >
        Student ID
      </label>
      <input
        type="text"
        id="text"
        placeholder={placeholder || "950XXXXX"}
        autoComplete="off"
        onChange={handleChange}
        onBlur={() => setError("")}
        value={value}
        className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-4xl text-gray-600 placeholder-gray-300 focus:outline-none focus:ring dark:bg-gray-700 dark:text-white  ${
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
        className="mt-4 w-full rounded-lg bg-emerald-600 px-4 py-2 font-bold text-white"
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </form>
  );
};

export default StudentInput;
