import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer aria-label="Site Footer" className="bg-gray-100  dark:bg-gray-900 mt-[2rem]">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center">
                    <img className='h-12' src="/logo.png" alt="" />
                    <p className=" text-center leading-relaxed text-[1.25rem] text-gray-800 dark:text-gray-400">
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
                <nav aria-label="Footer Nav" className="mt-12">
                    <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
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

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    <li>
                        <a
                            href="https://www.facebook.com/TuningThoughts?mibextid=ZbWKwL"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-600 transition hover:text-gray-700/75"
                        >
                            <span className="sr-only">Facebook</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <Link
                            to="https://instagram.com/tuningthoughtsseshathiri?igshid=MzNlNGNkZWQ4Mg=="
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-600 transition hover:text-gray-700/75"
                        >
                            <span className="sr-only">Instagram</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
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
                            <span className="sr-only">Youtube</span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>

                        </Link>
                    </li>

                    <li>
                        <Link
                            to="https://twitter.com/tuningthoughts?t=z6prgnVTvIFmuEEWkSEuUg&s=09"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-600 transition hover:text-gray-700/75"
                        >
                            <span className="sr-only">Twitter</span>

                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>

                        </Link>
                    </li>

                    <li>
                        <Link
                            to="https://twitter.com/tuningthoughts?t=z6prgnVTvIFmuEEWkSEuUg&s=09"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-600 transition hover:text-gray-700/75"
                        >
                            <span className="sr-only">Twitter</span>

                            <li>
                                <Link
                                    to="https://t.me/tuningthoughts"
                                    rel="noreferrer"
                                    target="_blank"
                                    class="text-gray-600 transition hover:text-gray-700/75"
                                >
                                    <span className="sr-only">Twitter</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                    </svg>

                                </Link>
                            </li>

                        </Link>
                    </li>

                    <li>
                        <Link
                            to="https://twitter.com/tuningthoughts?t=z6prgnVTvIFmuEEWkSEuUg&s=09"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-600 transition hover:text-gray-700/75"
                        >
                            <span className="sr-only">Twitter</span>

                            <li>
                                <Link
                                    to="https://wa.me/918838793089?text=Hi,%20Just%20visited%20your%20website!!%20Looking%20for%20an%20appointement"
                                    rel="noreferrer"
                                    target="_blank"
                                    class="text-gray-600 transition hover:text-gray-700/75"
                                >
                                    <span className="sr-only">Twitter</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>

                                </Link>
                            </li>

                        </Link>
                    </li>

                </ul>

            </div>
            <div className="text-center pb-3 dark:text-gray-200">
                Created By <Link to="https://akshayk.dev/" target='_blank' className='mx-auto text-blue-500 mt-5 decoration-indigo-500 underline'>Akshay</Link>
                &nbsp;,&nbsp;<Link to="#" target='_blank' className='mx-auto text-blue-500 mt-5 underline'>Ram</Link>
                &nbsp;,&nbsp;<Link to="#" target='_blank' className='mx-auto text-blue-500 mt-5 underline '>Arun</Link>
            </div>
        </footer>

    )
}

export default Footer