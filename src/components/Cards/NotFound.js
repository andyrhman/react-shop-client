import React from 'react'

const NotFound = () => {
    return (
        <>
            <section className="bg-white">
                <div className="container flex items-center px-6 py-12 mx-auto">
                    <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                        <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">Search not found</h1>
                        <p className="mt-4 text-gray-500">The product you are looking for does not exist.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound