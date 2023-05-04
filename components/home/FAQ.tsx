import React from "react";
import Container from "@/components/layout/Container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }: { open: boolean }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-emerald-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-emerald-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question:
      "Is this program compliant with new California Free Meal Program?",
    answer:
      "Yes, students will still need to be checked by a cashier for a CDE complient meal. In fact, free lunch means the line moves a lot faster!",
  },
  {
    question: "What is your refund policy?",
    answer:
      "If you have any hardware issues, we'll replace them for free. At the time, however, we are not offering refunds.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "Yes, email us at dylan@lunchtrak.com and we'll get back to you as soon as possible.",
  },
];

export default Faq;
