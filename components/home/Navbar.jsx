import ThemeToggle from "@/ui/Toggle"
import Link from "next/link"
import { FaCode } from "react-icons/fa6"

export const Navbar = () => {
  const links =<>
    <Link  href={'/'}>Home</Link>
    <Link href={'/portfolio'}>Portfolio</Link>
    <Link href={'/'}>Home</Link>
  </>
  return (
    <div className="bg-base-100">
      <div className="navbar w-10/12 mx-auto text-base-content">
        
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
           <FaCode />
            </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow space-y-4">
             {links}
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <a className="btn btn-ghost text-xl text-base-content">
            Nick Roy
          </a>
        </div>

        <div className="navbar-end">
    

          <div>
            <ThemeToggle />
          </div>
        </div>

      </div>
    </div>
  )
}