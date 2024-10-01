import React from 'react'

const Privacy = () => {
    return (
        <section className="h-max py-10 flex flex-col gap-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <p className="text-lg mb-4">
                    Your privacy is important to us. Cleanatrix, LLC is committed to protecting your personal information and ensuring that your experience on our website is secure. This Privacy Policy outlines the types of information we collect, how we use it, and how we protect it.
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
                <p className="mb-4">
                    We may collect personal information such as your name, phone number, email address, and payment details when you contact us, book services, or make payments.
                </p>

                <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
                <p className="mb-4">
                    We use your information to provide our cleaning services, communicate with you, and process transactions. We do not share your information with third parties without your consent.
                </p>

                <h2 className="text-2xl font-semibold mt-6">3. Data Protection</h2>
                <p className="mb-4">
                    We take appropriate security measures to protect your personal data from unauthorized access, disclosure, or misuse.
                </p>

                <p className="mt-4">
                    For more details, please contact us at
                    <a href="mailto:info@cleanatrix.com" className='ml-1 underline underline-offset-2 text-blue-600'>
                         info@cleanatrix.com.
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Privacy