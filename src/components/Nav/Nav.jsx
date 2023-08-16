import React, { useEffect } from 'react';
import { useState } from 'react';
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

    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <header className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md">
            <div className="logo">
                
                <a href="/">
                  <img src="/logo.png" alt="" />
                </a>

                
                <a href="/" className='dark:text-gray-100 sm:text-xl md:text-2xl lg:text-3xl'>Tuning Thoughts</a>

                <Link
                    to="https://www.youtube.com/@tuningthoughts"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-600 transition hover:text-gray-700/75"
                >
                    <span class="sr-only">Youtube</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={44}
                        height={44}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
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
            
            <ul className="nav flex space-x-4 dark:text-gray-100 dark:bg-[#030712] xl:dark:bg-transparent ">

                <li>
                    <NavLink link="/" activeLink={activeLink} onClick={handleLinkClick}>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink link="/about" activeLink={activeLink} onClick={handleLinkClick}>
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink link="/testimonial" activeLink={activeLink} onClick={handleLinkClick}>
                        Testimonials
                    </NavLink>
                </li>

                <li>
                    <NavLink link="/events" activeLink={activeLink} onClick={handleLinkClick}>
                        Events
                    </NavLink>
                </li>

                <li>
                    <NavLink link="/kit" activeLink={activeLink} onClick={handleLinkClick}>
                        Products
                    </NavLink>
                </li>

                <li>
                    <NavLink link="/classes" activeLink={activeLink} onClick={handleLinkClick}>
                        Classes
                    </NavLink>
                </li>

                <li>
                    <NavLink link="/feedback" activeLink={activeLink} onClick={handleLinkClick}>
                        Feedback
                    </NavLink>
                </li>
            </ul>

            <Dark />
            <div className="cta font-bold cta px-5 py-2 mr-[0.5em] contact rounded-xl bg-[#1e3a8a] border-indigo-900">

                <Link to="https://wa.me/918838793089?text=Hi,%20Just%20visited%20your%20website!!%20Looking%20for%20an%20appointement">Contact</Link>
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
                        className=" feather-align-right dark:text-gray-100"
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
                        stroke="gray"
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

function NavLink({ link, activeLink, onClick, children }) {
    const isActive = link === activeLink;
  
    return (
      <Link
        to={link}
        className={`block p-2 ${isActive ? 'text-blue-500' : 'text-gray dark:text-gray-100'}`}
        onClick={() => onClick(link)}
      >
        {children}
      </Link>
    );
  }

export default Nav;
