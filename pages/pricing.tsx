import Image from "next/image";

import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import LunchTrakTag from "@/public/img/lunchtrak/LunchTrakTag.png";

const Pricing = () => {
  const prices = {
    unitPrice: "7.5",
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2 className="text-2xl font-bold md:text-4xl">
            Purchase LunchTrak tags for your students.
          </h2>
        </div>
        <div className="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
          <div className="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-2xl bg-white shadow-xl transition duration-500 dark:bg-trueGray-800"
            ></div>
            <div className="relative space-y-6 p-6 lg:p-8">
              <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
                LunchTrak Tags
              </h3>
              <div>
                <div className="relative flex justify-around">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      <span className="flex items-start text-start text-2xl font-bold text-gray-800 dark:text-white">
                        $
                      </span>
                      <span className="text-5xl font-bold text-gray-800 dark:text-white">
                        {prices.unitPrice}
                      </span>
                    </div>
                    <span className="text-sm font-light text-gray-800 dark:text-white">
                      per student
                    </span>
                  </div>
                </div>
              </div>

              <ul
                role="list"
                className="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-200"
              >
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>First premium advantage</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>Second advantage weekly</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>Third advantage donate to project</span>
                </li>
              </ul>

              <button
                type="submit"
                title="Submit"
                className="block w-full rounded-xl bg-emerald-600 py-3 px-6 text-center transition hover:bg-emerald-700 focus:bg-indigo-600 active:bg-emerald-800"
              >
                <span className="font-semibold text-white">
                  Send us an email
                </span>
              </button>
            </div>
          </div>

          <div className="group relative md:w-6/12 lg:w-7/12">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-2xl bg-white shadow-lg dark:bg-trueGray-800"
            ></div>
            <div className="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-12 lg:p-16 lg:pl-20">
              <ul
                role="list"
                className="space-y-4 py-6 text-gray-600 dark:text-white"
              >
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>First premium advantage</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>Second advantage weekly</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>Third advantage donate to project</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>Fourth, access to all components weekly</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-white">
                Team can be any size, and you can add or switch members as
                needed. Companies using our platform include:
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Pricing;
