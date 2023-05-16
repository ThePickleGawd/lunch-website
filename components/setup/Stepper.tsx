interface StepperProps {
  currentStep: number;
  setStep: (step: number) => void;
}

const Stepper = ({ currentStep, setStep }: StepperProps) => {
  const steps = ["Pair Tag", "Enter ID", "Verify"];

  return (
    <div className="flex w-full items-center justify-center space-x-2 rounded-lg p-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 sm:space-x-4 sm:p-4 sm:text-base">
      {steps.map((text, index) => (
        <button
          key={text}
          className={`flex items-center hover:text-cyan-600 dark:hover:text-cyan-400 ${
            currentStep >= index ? "text-cyan-500 dark:text-cyan-300" : ""
          }`}
          onClick={() => setStep(index)}
        >
          <span
            className={`mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
              currentStep >= index
                ? "border-cyan-500  dark:border-cyan-300"
                : ""
            }`}
          >
            {index + 1}
          </span>
          <span className=" sm:tracking-wider">{text}</span>
          {index < steps.length - 1 && (
            <svg
              aria-hidden="true"
              className={`ml-2 h-4 w-4 sm:ml-4`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          )}
        </button>
      ))}
    </div>
  );
};

export default Stepper;
