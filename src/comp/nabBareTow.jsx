//eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */

const navigationTab= [
    { name : "home" , href:"/home" , current: true },
    { name : "about" , href:"/about" , current: false },
    { name : "contact" , href:"/contact" , current: false },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

let NabBareTow = () => {
    return(
        <>
            <nav className="grid grid-cols-3 gap-y-1.5 justify-center align-middle ">
                <div className="p-3 flex space-x-1 place-content-end px-14 ">
                    {navigationTab.map((item) => (
                        <a href={item.href}
                           key = {item.name}
                           className={classNames(item.current ? 'text-black' : 'text-fillBtn hover:text-red-300', 'px-3 py-2 rounded-md text-sm font-semibold'
                           )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                    ))}




                    {/*<ul className="flex flex-col gap-10 sm:flex-row place-content-end px-14  ">*/}
                        {/*<li className="transition ease-in-out duration-700" ><a href="/home" className="nav-barlink">Home</a></li>*/}
                        {/*<li className="transition ease-in-out duration-300"><a href="/about" className="nav-barlink">About</a></li>*/}
                        {/*<li className="transition ease-in-out duration-300"><a href="/contact" className="nav-barlink">Contact</a></li>*/}
                    {/*</ul>*/}


                </div>
                <div className="p-3 font-bold text-3xl text-fillBtn ">Landing</div>
                <div className="p-3">
                    <button className=" border-2 border-fillBtn py-2 px-16 rounded bg-fillBtn fill-blue-50 text-cyan-50 hover:bg-white hover:text-fillBtn"> Buy Now</button>
                </div>

            </nav>
        </>
        )

}
export default NabBareTow;
