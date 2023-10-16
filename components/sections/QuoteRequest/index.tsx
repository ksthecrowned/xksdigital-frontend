import React from 'react'

interface QuoteRequestProps {}

const QuoteRequest:React.FC<QuoteRequestProps> = () => {
    return (
        <div className="mt-12 max-w-2xl mx-auto gap-6 lg:gap-16">   
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                    Quote Request
                </h1>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                    We'd love to talk about how we can help you.
                </p>
            </div>         
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Fill in the form
                </h2>

                <form>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstname" className="sr-only">First Name</label>
                                <input type="text" name="firstname" id="firstname" className="autofill:bg-transparent dark:text-gray-300 dark:placeholder:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:focus:border-red-600/50 p-4 block w-full border rounded-md text-sm focus:outline-none focus:border-red-500 focus:ring-red-50" placeholder="First Name" />
                            </div>

                            <div>
                                <label htmlFor="lastname" className="sr-only">Last Name</label>
                                <input type="text" name="lastname" id="lastname" className="autofill:bg-transparent dark:text-gray-300 dark:placeholder:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:focus:border-red-600/50 p-4 block w-full border rounded-md text-sm focus:outline-none focus:border-red-500 focus:ring-red-50" placeholder="Last Name" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" autoComplete="email" className="autofill:bg-transparent dark:text-gray-300 dark:placeholder:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:focus:border-red-600/50 p-4 block w-full border rounded-md text-sm focus:outline-none focus:border-red-500 focus:ring-red-50" placeholder="Email" />
                        </div>

                        <div>
                            <label htmlFor="phone" className="sr-only">Phone Number</label>
                            <input type="text" name="phone" id="phone" className="autofill:bg-transparent dark:text-gray-300 dark:placeholder:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:focus:border-red-600/50 p-4 block w-full border rounded-md text-sm focus:outline-none focus:border-red-500 focus:ring-red-50" placeholder="Phone Number" />
                        </div>

                        <div>
                            <label htmlFor="message" className="sr-only">Details</label>
                            <textarea id="message" name="message" rows={4} className="autofill:bg-transparent dark:text-gray-300 dark:placeholder:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:focus:border-red-600/50 p-4 block w-full border rounded-md text-sm focus:outline-none focus:border-red-500 focus:ring-red-50" placeholder="Details"></textarea>
                        </div>
                    </div>

                    <div className="mt-4 grid">
                        <button type="submit" className="inline-flex justify-center items-center gap-x-3 text-center bg-red-600 hover:bg-red-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">Send inquiry</button>
                    </div>

                    <div className="mt-3 text-center">
                        <p className="text-sm text-gray-500">
                            We'll get back to you in 1-2 business days.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default QuoteRequest