import ThemeToggle from "@/ui/Toggle"
import Link from "next/link"
import { FaCode } from "react-icons/fa6"

export const Navbar = () => {
  const navLinks = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/#portfolio">Portfolio</Link></li>
      {/* Add more links here if needed */}
    </>
  )

  return (
    <div className="bg-base-100 sticky top-0 z-50 border-b border-base-200/50">
      <div className="navbar w-10/12 mx-auto text-base-content px-0">

        {/* NAVBAR START: Brand / Logo */}
        <div className="navbar-start">
          <Link href="/" className=" text-xl hover:bg-transparent px-0 flex items-center gap-2">
            <div className="p-2  rounded-full ">
              <FaCode />
            </div>
            <span className="font-bold tracking-tight">Nick Roy</span>
          </Link>
        </div>

        {/* NAVBAR CENTER: Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            {navLinks}
          </ul>
        </div>

        {/* NAVBAR END: Theme Toggle & Mobile Menu */}
        <div className="navbar-end gap-2">

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Dropdown */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-xl border border-base-200 z-[1] gap-1"
            >
              {navLinks}
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}