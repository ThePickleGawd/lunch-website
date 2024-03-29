import React from "react";
import Container from "@/components/layout/Container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="">
      <div className="mx-auto w-full max-w-2xl rounded-2xl p-2">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }: { open: boolean }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-emerald-100 focus-visible:ring-opacity-75 dark:bg-neutral-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-emerald-500`}
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
      "Yes, students will still need to be checked by a cashier for a CDE complient meal. Because lunch is free, lines will be blazing fast!",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We do not offer refunds. Please email us if you have any questions.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "Yes, email us at dylan@lunchtrak.com and we'll get back to you as soon as possible.",
  },
];

export default Faq;
