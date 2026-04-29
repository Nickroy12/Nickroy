import ThemeToggle from "@/ui/Toggle"
import Link from "next/link"

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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
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