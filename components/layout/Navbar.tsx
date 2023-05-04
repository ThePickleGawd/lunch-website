import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import ThemeChanger from "@/components/home/DarkSwitch";

const Navbar = () => {
  //const navigation = ["Product", "Pricing", "Company", "Blog"];
  const navigation: string[] = [];

  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }: { open: boolean }) => (
            <>
              <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                <Link
                  href="/"
                  className="rounded-lg px-4 py-2 hover:bg-gray-200 dark:hover:bg-trueGray-700"
                >
                  <span className="flex items-center space-x-2 text-2xl font-medium text-emerald-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>LunchTrak</span>
                  </span>
                </Link>

                <div className="flex space-x-2">
                  {open && <ThemeChanger />}
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-500 hover:text-emerald-500 focus:bg-emerald-100 focus:text-emerald-500 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700 lg:hidden"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <Disclosure.Panel className="my-5 flex w-full flex-wrap lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={`/${item}`}
                        className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-emerald-500 focus:bg-emerald-100 focus:text-emerald-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
                      >
                        {item}
                      </Link>
                    ))}
                    <Link
                      href="/setup"
                      className="mt-3 w-full rounded-md bg-emerald-600 px-6 py-2 text-center text-white hover:bg-emerald-700 lg:ml-5"
                    >
                      Setup Tags
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            {navigation.map((menu, index) => (
              <li className="nav__item mr-3" key={index}>
                <Link
                  href="/"
                  className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-emerald-500 focus:bg-emerald-100 focus:text-emerald-500 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__item mr-3 hidden space-x-4 lg:flex">
          <Link
            href="/setup"
            className="rounded-md bg-emerald-600 px-6 py-2 text-white hover:bg-emerald-700 md:ml-5"
          >
            Setup Tags
          </Link>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
