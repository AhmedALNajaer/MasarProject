"use client";
import logo from "../assets/images/white logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const ActiveLink = ({ isActive }) => {
  return isActive ? "text-cyan-500" : "text-gray-700";
};
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 rounded-b-2xl  w-[95%] mx-auto">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between py-2.5 lg:px-8 max-lg:px-5"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="logo" src={logo} className="h-18 w-auto" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lg/6 font-zain text-lg font-normal text-cyan-500"
                : "text-lg font-zain text-lg font-normal text-white hover:text-cyan-500"
            }
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/departments"
            className={({ isActive }) =>
              isActive
                ? "text-lg/6 font-zain text-lg font-normal text-cyan-500"
                : "text-lg font-zain text-lg font-normal text-white hover:text-cyan-500"
            }
          >
            أقسام الكلية
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "text-lg/6 font-zain text-lg font-normal text-cyan-500"
                : "text-lg font-zain text-lg font-normal text-white hover:text-cyan-500"
            }
          >
            الدورات
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? "text-lg/6 font-zain text-lg font-normal text-cyan-500"
                : "text-lg font-zain text-lg font-normal text-white hover:text-cyan-500"
            }
          >
            الأسئلة الشائعة
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-lg/6 font-zain text-lg font-normal text-cyan-500"
                : "text-lg font-zain text-lg font-normal text-white hover:text-cyan-500"
            }
          >
            من نحن
          </NavLink>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="/signup"
            className="text-lg/6 font-zain font-bold text-blue-900 py-1 px-3 rounded-lg bg-white hover:bg-cyan-700 hover:text-white"
          >
            انضم لنا <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel
          dir="rtl"
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-15 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* start mobile links  */}
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-zain text-blue-900  font-normal  ${
                      isActive ? "text-cyan-500" : "text-gray-900"
                    } hover:bg-gray-50`
                  }
                >
                  الرئيسية
                </NavLink>

                <NavLink
                  to="/College"
                  className={({ isActive }) =>
                    `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-zain text-blue-900  font-normal ${
                      isActive ? "text-cyan-500" : "text-gray-900"
                    } hover:bg-gray-50`
                  }
                >
                  أقسام الكلية
                </NavLink>

                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-zain text-blue-900  font-normal  ${
                      isActive ? "text-cyan-500" : "text-gray-900"
                    } hover:bg-gray-50`
                  }
                >
                  الدورات
                </NavLink>

                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-zain text-blue-900  font-normal ${
                      isActive ? "text-cyan-500" : "text-gray-900"
                    } hover:bg-gray-50`
                  }
                >
                  الأسئلة الشائعة
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-zain text-blue-900  font-normal ${
                      isActive ? "text-cyan-500" : "text-gray-900"
                    } hover:bg-gray-50`
                  }
                >
                  من نحن
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-zain  font-normal text-white bg-blue-900 hover:bg-cyan-700"
                >
                  انضم لنا
                </NavLink>
              </div>
              {/* end mobile links  */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
