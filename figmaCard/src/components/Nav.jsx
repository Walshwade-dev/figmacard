//Navbar

export default function Nav() {
    return(
        <nav className="h-16 flex justify-end lg:justify-center items-center bg-transparent text-white w-screen">

            <h3 className="hidden md:flex items-center mx-auto ml-2 -m-4 name name-logo text-[#FFC165] text-5xl text-center tracking-wider">Walshwade</h3>

            <ul className="hidden nav-list md:flex justify-end px-4 mr-4 font-semibold font-heading space-x-12">
                <li data-index="0"><a className="hover:text-[#966d30]  text-[#FFC165]" >Home</a></li>
                <li data-index="1"><a className="hover:text-[#966d30] text-[#FFC165]" href="#About" >About</a></li>
                <li data-index="2"><a className="hover:text-[#966d30] text-[#FFC165]" >Skills</a></li>
                <li data-index="3"><a className="hover:text-[#966d30] text-[#ffb84d]" >Contact</a></li>
            </ul>

            <div className="grid mt-10 mr-4 grid-cols-1 gap-16 sm:grid-cols-3">
                <div className="md:hidden  grid grid-cols-1 gap-16 sm:grid-cols-3 sm:col-end-12 sm:-mr-16">
                <button className="group relative">
                    <div
                    className="relative flex h-[50px] w-[50px] transform items-center justify-center rounded-full bg-[#FFC165] shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4"
                    >
                    <div
                        className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300 group-focus:-rotate-[45deg]"
                    >
                        <div
                        className="h-[2px] w-1/2 origin-right transform rounded bg-white transition-all delay-75 duration-300 group-focus:h-[1px] group-focus:-translate-y-[1px] group-focus:-rotate-90"
                        ></div>
                        <div className="h-[1px] rounded bg-white"></div>
                        <div
                        className="h-[2px] w-1/2 origin-left transform self-end rounded bg-white transition-all delay-75 duration-300 group-focus:h-[1px] group-focus:translate-y-[1px] group-focus:-rotate-90"
                        ></div>
                    </div>
                    </div>
                </button>
                </div>
            </div>
            
            
        </nav>
    );
}