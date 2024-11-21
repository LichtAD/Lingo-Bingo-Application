import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {



    // ! theme function
    const [theme, setTheme] = useState('winter');
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);



    // menu menu-horizontal
    const links = <div className='flex gap-8 items-center'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/learning">Start Learning</NavLink></li>
        <li><NavLink to="/tutorials">Tutorials</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/profile">My Profile</NavLink></li>

        {/* <li><a>Start Learning</a></li>
        <li><a>Tutorials</a></li>
        <li><a>About Us</a></li> */}

        {/* <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li> */}
    </div>

    return (
        <div className='font-roboto bg-[#F2F7FF]'>
            <div className="navbar flex justify-between items-center">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                        <h1>Welcome ABC</h1>
                    </div>
                </div>

                <div className="hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className='flex gap-4'>



                    <div>
                        <a className="btn bg-white border-none">Button</a>
                    </div>

                    {/* <div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn m-1">
                                {theme === 'dark' ? 'Dark' : theme === 'winter' ? 'Winter' : 'Light'}
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a onClick={() => setTheme('dark')}>Dark</a></li>
                                <li><a onClick={() => setTheme('winter')}>Winter</a></li>
                                <li><a onClick={() => setTheme('light')}>Light</a></li>
                            </ul>
                        </div>
                    </div> */}



                    {/* ⁡⁢⁣⁢customize start⁡ */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-white border-none">
                            Theme
                            <svg
                                width="12px"
                                height="12px"
                                className="inline-block h-2 w-2 fill-current opacity-60"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 2048 2048">
                                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                            </svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content bg-base-300 w-24 rounded-box z-[1] p-2 shadow-2xl">

                            <li>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="Winter"
                                    value="winter"
                                    checked={theme === 'winter'}
                                    onChange={e => setTheme(e.target.value)} />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="Dark"
                                    value="dark"
                                    checked={theme === 'dark'}
                                    onChange={e => setTheme(e.target.value)} />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="Light"
                                    value="light"
                                    checked={theme === 'light'}
                                    onChange={e => setTheme(e.target.value)} />
                            </li>

                        </ul>
                    </div>
                    {/* customize end */}



                </div>
            </div>
        </div>
    );
};

export default Navbar;

