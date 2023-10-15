const Pricing: React.FC = () => {
    return (
        <section className="w-full bg-gray-50 dark:bg-gray-900">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
                Solo, agency or team? We’ve got you covered.
                </h2>
            </div>

            <div className="relative xl:w-10/12 xl:mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div>
                    <div className="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Professional</h3>
                    <div className="text-sm text-gray-500">Everything a small team needs.</div>

                    <div className="mt-5">
                        <span className="text-6xl font-bold text-gray-800 dark:text-gray-200">$18</span>
                        <span className="text-lg font-bold text-gray-800 dark:text-gray-200">.00</span>
                        <span className="ml-3 text-gray-500">USD / monthly</span>
                    </div>

                    <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                        <ul role="list" className="space-y-2 text-sm sm:text-base">
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-red-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="9" fill="currentColor" fillOpacity="0.1"/>
                            <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Up to 10 people
                            </span>
                        </li>

                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-red-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="9" fill="currentColor" fillOpacity="0.1"/>
                            <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Collect data
                            </span>
                        </li>

                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-red-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="9" fill="currentColor" fillOpacity="0.1"/>
                            <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Code extensibility
                            </span>
                        </li>
                        </ul>

                        <ul role="list" className="space-y-2 text-sm sm:text-base">
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-500" width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9Z' fill='currentColor' fillOpacity='0.1'/>
                            <path d='M5.64639 5.64654C5.74016 5.55281 5.86731 5.50015 5.99989 5.50015C6.13248 5.50015 6.25963 5.55281 6.35339 5.64654L8.99989 8.29304L11.6464 5.64654C11.6925 5.59879 11.7477 5.56069 11.8087 5.53449C11.8697 5.50829 11.9353 5.49449 12.0017 5.49392C12.0681 5.49334 12.1339 5.50599 12.1954 5.53113C12.2568 5.55627 12.3126 5.5934 12.3596 5.64034C12.4065 5.68729 12.4437 5.74312 12.4688 5.80456C12.4939 5.86601 12.5066 5.93185 12.506 5.99824C12.5054 6.06463 12.4916 6.13024 12.4654 6.19124C12.4392 6.25224 12.4011 6.30742 12.3534 6.35354L9.70689 9.00004L12.3534 11.6465C12.4445 11.7408 12.4949 11.8671 12.4937 11.9982C12.4926 12.1293 12.44 12.2547 12.3473 12.3474C12.2546 12.4402 12.1292 12.4927 11.9981 12.4939C11.867 12.495 11.7407 12.4446 11.6464 12.3535L8.99989 9.70704L6.35339 12.3535C6.25909 12.4446 6.13279 12.495 6.00169 12.4939C5.87059 12.4927 5.74519 12.4402 5.65248 12.3474C5.55978 12.2547 5.5072 12.1293 5.50606 11.9982C5.50492 11.8671 5.55531 11.7408 5.64639 11.6465L8.29289 9.00004L5.64639 6.35354C5.55266 6.25978 5.5 6.13262 5.5 6.00004C5.5 5.86746 5.55266 5.7403 5.64639 5.64654V5.64654Z' fill='currentColor'/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Custom reports
                            </span>
                        </li>

                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-500" width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9Z' fill='currentColor' fillOpacity='0.1'/>
                            <path d='M5.64639 5.64654C5.74016 5.55281 5.86731 5.50015 5.99989 5.50015C6.13248 5.50015 6.25963 5.55281 6.35339 5.64654L8.99989 8.29304L11.6464 5.64654C11.6925 5.59879 11.7477 5.56069 11.8087 5.53449C11.8697 5.50829 11.9353 5.49449 12.0017 5.49392C12.0681 5.49334 12.1339 5.50599 12.1954 5.53113C12.2568 5.55627 12.3126 5.5934 12.3596 5.64034C12.4065 5.68729 12.4437 5.74312 12.4688 5.80456C12.4939 5.86601 12.5066 5.93185 12.506 5.99824C12.5054 6.06463 12.4916 6.13024 12.4654 6.19124C12.4392 6.25224 12.4011 6.30742 12.3534 6.35354L9.70689 9.00004L12.3534 11.6465C12.4445 11.7408 12.4949 11.8671 12.4937 11.9982C12.4926 12.1293 12.44 12.2547 12.3473 12.3474C12.2546 12.4402 12.1292 12.4927 11.9981 12.4939C11.867 12.495 11.7407 12.4446 11.6464 12.3535L8.99989 9.70704L6.35339 12.3535C6.25909 12.4446 6.13279 12.495 6.00169 12.4939C5.87059 12.4927 5.74519 12.4402 5.65248 12.3474C5.55978 12.2547 5.5072 12.1293 5.50606 11.9982C5.50492 11.8671 5.55531 11.7408 5.64639 11.6465L8.29289 9.00004L5.64639 6.35354C5.55266 6.25978 5.5 6.13262 5.5 6.00004C5.5 5.86746 5.55266 5.7403 5.64639 5.64654V5.64654Z' fill='currentColor'/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Product support
                            </span>
                        </li>

                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-500" width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9Z' fill='currentColor' fillOpacity='0.1'/>
                            <path d='M5.64639 5.64654C5.74016 5.55281 5.86731 5.50015 5.99989 5.50015C6.13248 5.50015 6.25963 5.55281 6.35339 5.64654L8.99989 8.29304L11.6464 5.64654C11.6925 5.59879 11.7477 5.56069 11.8087 5.53449C11.8697 5.50829 11.9353 5.49449 12.0017 5.49392C12.0681 5.49334 12.1339 5.50599 12.1954 5.53113C12.2568 5.55627 12.3126 5.5934 12.3596 5.64034C12.4065 5.68729 12.4437 5.74312 12.4688 5.80456C12.4939 5.86601 12.5066 5.93185 12.506 5.99824C12.5054 6.06463 12.4916 6.13024 12.4654 6.19124C12.4392 6.25224 12.4011 6.30742 12.3534 6.35354L9.70689 9.00004L12.3534 11.6465C12.4445 11.7408 12.4949 11.8671 12.4937 11.9982C12.4926 12.1293 12.44 12.2547 12.3473 12.3474C12.2546 12.4402 12.1292 12.4927 11.9981 12.4939C11.867 12.495 11.7407 12.4446 11.6464 12.3535L8.99989 9.70704L6.35339 12.3535C6.25909 12.4446 6.13279 12.495 6.00169 12.4939C5.87059 12.4927 5.74519 12.4402 5.65248 12.3474C5.55978 12.2547 5.5072 12.1293 5.50606 11.9982C5.50492 11.8671 5.55531 11.7408 5.64639 11.6465L8.29289 9.00004L5.64639 6.35354C5.55266 6.25978 5.5 6.13262 5.5 6.00004C5.5 5.86746 5.55266 5.7403 5.64639 5.64654V5.64654Z' fill='currentColor'/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Activity reporting
                            </span>
                        </li>
                        </ul>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                        <div>
                        <p className="text-sm text-gray-500">Cancel anytime.</p>
                        <p className="text-sm text-gray-500">No card required.</p>
                        </div>

                        <div className="flex justify-end">
                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">Start free trial</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div>
                    <div className="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Teams</h3>
                    <div className="text-sm text-gray-500">For growing businesses.</div>
                    <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-red-600">Most popular</span>

                    <div className="mt-5">
                        <span className="text-6xl font-bold text-gray-800 dark:text-gray-200">$36</span>
                        <span className="text-lg font-bold text-gray-800 dark:text-gray-200">.99</span>
                        <span className="ml-3 text-gray-500">USD / monthly</span>
                    </div>

                    <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                        <ul role="list" className="space-y-2 text-sm sm:text-base">
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-red-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="9" fill="currentColor" fillOpacity="0.1"/>
                            <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Up to 10 people
                            </span>
                        </li>

                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-red-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="9" fill="currentColor" fillOpacity="0.1"/>
                            <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Collect data
                            </span>
                        </li>

                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-red-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="9" fill="currentColor" fillOpacity="0.1"/>
                            <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Code extensibility
                            </span>
                        </li>
                        </ul>

                        <ul role="list" className="space-y-2 text-sm sm:text-base">
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-red-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="9" fill="currentColor" fillOpacity="0.1"/>
                            <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Custom reports
                            </span>
                        </li>

                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-red-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="9" fill="currentColor" fillOpacity="0.1"/>
                            <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Product support
                            </span>
                        </li>

                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 h-5 w-5 text-red-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="9" fill="currentColor" fillOpacity="0.1"/>
                            <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                            </svg>
                            <span className="text-gray-800 dark:text-gray-200">
                            Activity reporting
                            </span>
                        </li>
                        </ul>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                        <div>
                        <p className="text-sm text-gray-500">Cancel anytime.</p>
                        <p className="text-sm text-gray-500">No card required.</p>
                        </div>

                        <div className="flex justify-end">
                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Start free trial</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="hidden md:block absolute top-0 right-0 translate-y-16 translate-x-16">
                <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                    <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                    <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                </svg>
                </div>

                <div className="hidden md:block absolute bottom-0 left-0 translate-y-16 -translate-x-16">
                <svg className="w-56 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                </svg>
                </div>
            </div>

            <div className="mt-7 text-center">
                <p className="text-xs text-gray-400">
                Prices in USD. Taxes may apply.
                </p>
            </div>
            </div>

            <div className="relative">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Compare plans</h2>
                </div>

                <div className="hidden lg:block sticky top-0 left-0 py-2 bg-white/60 backdrop-blur-md dark:bg-slate-900/60">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-2">
                    <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        Features
                    </span>
                    </div>

                    <div className="col-span-1">
                    <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        Free
                    </span>
                    <p className="mt-2 text-sm text-gray-500">
                        Free forever
                    </p>
                    </div>

                    <div className="col-span-1">
                    <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        Startup
                    </span>
                    <p className="mt-2 text-sm text-gray-500">
                        $39 per month billed annually
                    </p>
                    </div>

                    <div className="col-span-1">
                    <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        Team
                    </span>
                    <p className="mt-2 text-sm text-gray-500">
                        $89 per month billed annually
                    </p>
                    </div>

                    <div className="col-span-1">
                    <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        Enterprise
                    </span>
                    <p className="mt-2 text-sm text-gray-500">
                        $149 per month billed annually
                    </p>
                    </div>
                </div>
                </div>

                <div className="space-y-4 lg:space-y-0">
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 lg:py-3">
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        General
                    </span>
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Number of seats
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                        1
                        </span>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                        Up to 3
                        </span>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                        Up to 10
                        </span>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                        Unlimited
                        </span>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Storage
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                        15 GB
                        </span>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                        1 TB
                        </span>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                        15 TB
                        </span>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                        Unlimited
                        </span>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Email sharing
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Any time, anywhere access
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>
                </div>

                <div className="mt-6 space-y-4 lg:space-y-0">
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 lg:py-3">
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Financial data
                    </span>
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Open/High/Low/Close
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Price-volume difference indicator
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>
                </div>

                <div className="mt-6 space-y-4 lg:space-y-0">
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 lg:py-3">
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        On-chain data
                    </span>
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Network growth
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Average token age consumed
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Exchange flow
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Total ERC20 exchange funds flow
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Transaction volume
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Total circulation (beta)
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Velocity of tokens (beta)
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        ETH gas used
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>
                </div>

                <div className="mt-6 space-y-4 lg:space-y-0">
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 lg:py-3">
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Social data
                    </span>
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>

                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Dev activity
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Topic search
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>

                <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        Relative social dominance
                    </span>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Free
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Startup
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Team
                        </span>
                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </div>
                    </li>

                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                        </span>
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    </li>
                </ul>
                </div>

                <div className="hidden lg:block mt-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-2">
                    </div>

                    <div className="col-span-1">
                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                        Get started
                    </a>
                    </div>

                    <div className="col-span-1">
                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-3 text-center bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white transition dark:focus:ring-offset-gray-800" href="#">
                        Get started
                    </a>
                    </div>

                    <div className="col-span-1">
                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                        Get started
                    </a>
                    </div>

                    <div className="col-span-1">
                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                        Get started
                    </a>
                    </div>
                </div>
                </div>

                <div className="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Need a custom plan?
                </p>

                <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                    Contact us
                </button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Pricing