import React from 'react'
import { useContext, useEffect,useState} from 'react'
import { Transition } from "@headlessui/react";
import { Routes,Route} from 'react-router-dom'

function NavBar({is_loggedIn}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center">
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-200 inline-flex items-center justify-center p-2 rounded-md text-black-600 hover:text-Fuchsia-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" hover:bg-gray-900 text-black px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Dashboard
                  </a>

                  <a
                    href="#"
                    className="text-gray-600 hover:bg-gray-500 hover:text-black px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Team
                  </a>

                  <a
                    href="#"
                    className="text-gray-600 hover:bg-gray-500 hover:text-black px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="#"
                    className="text-gray-600 hover:bg-gray-500 hover:text-black px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Calendar
                  </a>

                  <a
                    href="#"
                    className="text-gray-600 hover:bg-gray-500 hover:text-black px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Reports
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="items-center justify-center lg:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-500 text-black block px-3 py-2 rounded-md text-base font-large"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-500 hover:text-black block px-3 py-2 rounded-md text-base font-large"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-500 hover:text-black block px-3 py-2 rounded-md text-base font-large"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-500 hover:text-black block px-3 py-2 rounded-md text-base font-large"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-500 hover:text-black block px-3 py-2 rounded-md text-base font-large"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar