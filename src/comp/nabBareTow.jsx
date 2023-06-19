

export default function NabBareTow() {
    return(
        <>
            <nav className="grid grid-cols-3 gap-y-1.5 h-5 justify-center align-middle">
                <div className="p-3">
                    <ul className="flex flex-col gap-10 pl-20 sm:flex-row  ">
                        <li className="transition ease-in-out duration-700" ><a href="/home" className="nav-barlink">Home</a></li>
                        <li className="transition ease-in-out duration-300"><a href="/about" className="nav-barlink">About</a></li>
                        <li className="transition ease-in-out duration-300"><a href="/contact" className="nav-barlink">Contact</a></li>
                    </ul>
                </div>
                <div className="p-3 font-bold text-3xl text-fillBtn ">Landing</div>
                <div className="p-3">
                    <button className=" border-2 border-fillBtn py-2 px-16 rounded bg-fillBtn fill-blue-50 text-cyan-50 hover:bg-white hover:text-fillBtn"> Buy Now</button>
                </div>

            </nav>
        </>
        )

}
