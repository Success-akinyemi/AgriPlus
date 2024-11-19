import Logo from "./Helpers/Logo"

function Footer() {
  return (
    <div className="w-full bg-main-color p-8 flex flex-col">
        <div>
            <Logo />

        </div>

        <div className="flex items-center justify-center text-center text-white">
            By Success 
        </div>
    </div>
  )
}

export default Footer