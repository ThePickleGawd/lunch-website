import Image from "next/image";

import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import LunchTrakTag from "@/public/img/lunchtrak/LunchTrakTag.png";
import Link from "next/link";

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
              className="absolute top-0 h-full w-full rounded-2xl bg-white shadow-xl transition duration-500 dark:bg-neutral-800"
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
                  <span>
                    Easily pair with <Link href="/setup">LunchTrak Setup</Link>
                  </span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>Very convinient for students and staff</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>Meets all CDE standards</span>
                </li>
              </ul>

              <a
                href="mailto:dylan@lunchtrak.com"
                className="block w-full rounded-xl bg-emerald-600 py-3 px-6 text-center transition hover:bg-emerald-700 focus:bg-cyan-500 active:bg-emerald-800"
              >
                <span className="font-semibold text-white">
                  Send us an email
                </span>
              </a>
            </div>
          </div>

          <div className="group relative md:w-6/12 lg:w-7/12">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-2xl bg-white shadow-lg dark:bg-neutral-800"
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
                  <span>Make lunch lines less painful for students</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>No more messy barcode scanners and keypads</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>More time to run your school events</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-emerald-500">
                    &#10003;
                  </span>
                  <span>Full email support at dylan@lunchtrak.com</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-white">
                Scholarships are available for schools who are less able to pay
                the expense. Please contact us for custom quotes.
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
