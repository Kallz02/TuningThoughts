import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Dark from './Dark';

function Nav() {
    useEffect(() => {
        const navLinks = document.querySelectorAll('.nav li a');

        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                const checkbox = document.getElementById('nav-menu');
                checkbox.checked = false;
            });
        });
    }, []);

    return (
        <header className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md">
            <div className="logo">
                <img src="/logo.png" alt="" />
                <p className='dark:text-gray-100'>TuningThoughts</p>

                <Link
                    href="https://www.youtube.com/channel/UCU1U_hqYjzEKjG6txI3OHjQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=''
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-youtube dark:fill-gray-100"
                    >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                </Link>
            </div>
            <input type="checkbox" id="nav-menu" />
            <ul className="nav dark:text-gray-100 dark:bg-[#030712] xl:dark:bg-transparent ">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/testimonial">Testimonials</Link>
                </li>
                <li>
                    <Link to="/Events">Events</Link>
                </li>
                <li>
                    <Link to="/Kit">Kit</Link>
                </li>
                <li>
                    <Link to="/Classes">Classes</Link>
                </li>
            </ul>

            <Dark />
            <div className="contact">

                <Link to="https://wa.me/919080276429?text=I%20am%20interested%20to%20know%20more%20about%20classes">Contact</Link>
            </div>
            <label htmlFor="nav-menu">
                <div className="navmenu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        viewBox="0 0 26 26"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" feather-align-right dark:text-gray-100 "
                    >
                        <line x1={21} y1={10} x2={7} y2={10} />
                        <line x1={21} y1={6} x2={3} y2={6} />
                        <line x1={21} y1={14} x2={3} y2={14} />
                        <line x1={21} y1={18} x2={7} y2={18} />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" feather-x fill-current dark:text-gray-100"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </label>
        </header>
    );
}

export default Nav;
