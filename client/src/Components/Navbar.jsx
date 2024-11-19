import { Link } from "react-router-dom"
import Logo from "./Helpers/Logo"

function Navbar() {
  return (
    <div className="z-[999] flex items-center h-[70px] justify-between pt-4 pb-4 pl-10 pr-10 phone:pl-4 phone:pr-4 bg-main-color fixed top-0 left-0 w-full">
        <Logo />

        <div className="flex items-center gap-4">
            <Link className='link navLink '>Who We are</Link>
            <Link className='link navLink '>Get Started</Link>
            <Link className='link navLink '>Login</Link>
        </div>
    </div>
  )
}

export default Navbar