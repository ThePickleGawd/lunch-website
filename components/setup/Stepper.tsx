interface StepperProps {
  currentStep: number;
}

const Stepper = ({ currentStep }: StepperProps) => {
  const steps = ["Pair Tag", "Enter ID", "All Done!"];

  return (
    <div className="flex justify-center items-center w-full p-3 space-x-2 text-xs font-medium text-center text-gray-500 rounded-lg dark:text-gray-400 sm:text-base sm:p-4 sm:space-x-4">
      {steps.map((text, index) => (
        <div
          key={text}
          className={`flex items-center ${
            currentStep >= index ? "text-violet-600 dark:text-violet-500" : ""
          }`}
        >
          <span
            className={`flex items-center justify-center w-5 h-5 mr-2 text-xs border rounded-full shrink-0 ${
              currentStep >= index
                ? "border-violet-600  dark:border-violet-500"
                : ""
            }`}
          >
            {index + 1}
          </span>
          <span className=" sm:tracking-wider">{text}</span>
          {index < steps.length - 1 && (
            <svg
              aria-hidden="true"
              className={`w-4 h-4 ml-2 sm:ml-4`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
