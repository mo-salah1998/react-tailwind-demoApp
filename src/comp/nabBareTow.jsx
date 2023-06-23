//eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */

import {Disclosure} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

const navigationTab = [{name: "home", href: "/home", current: true}, {
    name: "about", href: "/about", current: false
}, {name: "contact", href: "/contact", current: false},];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

let NabBareTow = () => {
    return (<>
        <Disclosure>
            {({open}) => (
                <>
                    <nav className="flex gap-y-1.5 gap-x-36 justify-center align-middle mx-auto max-w-7xl sm:px-6  lg:px-8 px-2">
                        <div className="flex-1 relative inset-y-0  flex items-center sm:hidden  ">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className=" inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-20">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="hidden sm:block ">
                            <div className="flex p-3 space-x-1 place-content-end px-14">
                            {navigationTab.map((item) => (<a href={item.href}
                                                             key={item.name}
                                                             className={classNames(item.current ? 'text-black' : 'text-fillBtn hover:text-red-300', 'px-3 py-2 rounded-md text-sm font-semibold')}
                                                             aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>))}
                            </div>

                            {/*<ul className="flex flex-col gap-10 sm:flex-row place-content-end px-14  ">*/}
                            {/*<li className="transition ease-in-out duration-700" ><a href="/home" className="nav-barlink">Home</a></li>*/}
                            {/*<li className="transition ease-in-out duration-300"><a href="/about" className="nav-barlink">About</a></li>*/}
                            {/*<li className="transition ease-in-out duration-300"><a href="/contact" className="nav-barlink">Contact</a></li>*/}
                            {/*</ul>*/}


                        </div>
                        <div className="p-3 flex-1 text-3xl text-fillBtn font-bold ">Landing</div>
                        <div className="p-3 hidden flex-1 sm:block">
                            <button
                                className=" border-2 border-fillBtn py-2 px-8 rounded bg-fillBtn fill-blue-50 text-cyan-50 hover:bg-white hover:text-fillBtn sm:px-16"> Buy
                                Now
                            </button>
                        </div>
                    </nav>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigationTab.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>

                            ))}
                        </div>
                    </Disclosure.Panel>
                </>)}
        </Disclosure>
    </>)

}
export default NabBareTow;
