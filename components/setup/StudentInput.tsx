interface StudentInputProps {
  errorMessage: string;
  value: string;
  onChange: (e: any) => void;
}

const StudentInput = ({ errorMessage, value, onChange }: StudentInputProps) => {
  return (
    <>
      <label
        htmlFor="text"
        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
      >
        Student ID
      </label>
      <input
        type="text"
        id="text"
        placeholder="950XXXXX"
        onChange={onChange}
        value={value}
        className={`w-full px-3 py-2 text-gray-600 text-4xl placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring dark:text-white dark:bg-gray-700  ${
          errorMessage !== ""
            ? "border-red-600 focus:border-red-600 ring-red-100"
            : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
        }`}
      />

      {errorMessage !== "" && (
        <div className="mt-1 text-sm text-red-400 invalid-feedback">
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default StudentInput;
