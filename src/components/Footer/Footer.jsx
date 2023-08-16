import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer aria-label="Site Footer" class="bg-gray-100  dark:bg-gray-900 mt-[2rem]">
            <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center">
                    <img className='h-12' src="/logo.png" alt="" />
                    <p class=" text-center leading-relaxed text-[1.25rem] text-gray-800 dark:text-gray-400">
                        S.S Alternative Medicines
                    </p>
                    <br></br>
                </div>

                <h3 className='dark:text-gray-200 font-normal text-center'>Address: <br>
                </br>130/38T, polytechnic road,<br>
                </br>Gandhi Nagar,<br>
                </br>Gudiyatham,<br>
                </br>Vellore-632602<br>
                </br><br>
                </br>8838793089<br>
                </br>
                <a href="mailto:bachflowerremedies369@gmail.com?subject=Appointment%20Needed&body=Hi,%20Just%20visited%20your%20website!!%20Looking%20for%20an%20appointement">bachflowerremedies369@gmail.com</a>
            
                </h3>
                <nav aria-label="Footer Nav" class="mt-12">
                    <ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <Link to="/" className="ml-2 text-gray-400 hover:text-teal-800">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/about" className="ml-2 text-gray-400 hover:text-teal-800">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="/testimonial" className="ml-2 text-gray-400 hover:text-teal-800">
                                Testimonials
                            </Link>
                        </li> 

                        <li>
                            <Link to="/events" className="ml-2 text-gray-400 hover:text-teal-800">
                                Events
                            </Link>
                        </li>

                        <li>
                            <Link to="/kit" className="ml-2 text-gray-400 hover:text-teal-800">
                                Kit
                            </Link>
                        </li>

                        <li>
                            <Link to="/classes" className="ml-2 text-gray-400 hover:text-teal-800">
                                Classes
                            </Link>
                        </li>

                        <li>
                            <Link to="https://wa.me/918838793089?text=Hi,%20Just%20visited%20your%20website!!%20Looking%20for%20an%20appointement" className="ml-2 text-gray-400 hover:text-teal-800">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <ul class="mt-12 flex justify-center gap-6 md:gap-8">
                    <li>
                        <a
                            href="https://www.facebook.com/TuningThoughts?mibextid=ZbWKwL"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-600 transition hover:text-gray-700/75"
                        >
                            <span class="sr-only">Facebook</span>
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <Link
                            to="https://www.instagram.com/tuning_thoughts/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-600 transition hover:text-gray-700/75"
                        >
                            <span class="sr-only">Instagram</span>
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="https://www.youtube.com/@tuningthoughts"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-600 transition hover:text-gray-700/75"
                        >
                            <span class="sr-only">Youtube</span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>

                        </Link>
                    </li>

                </ul>

            </div>
            <div className="text-center pb-3 underline">
                <Link to="https://akshayk.dev/" target='_blank' className='mx-auto text-blue-500 mt-5'>Created By Akshay</Link>
            </div>
        </footer>

    )
}

export default Footer