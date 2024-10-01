import React from 'react'

const Terms = () => {
    return (
        <section className="h-max py-10 flex flex-col gap-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
                <p className="text-lg mb-4">
                    Welcome to Cleanatrix, LLC. By using our website and booking our services, you agree to the following terms and conditions. These terms govern your use of our services, and it’s important that you understand them before booking with us.
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. Service Agreement</h2>
                <p className="mb-4">
                    Upon booking, a service agreement will be created between the client and Cleanatrix, LLC, outlining the scope of services to be provided, pricing, and scheduling. Both parties are expected to adhere to the terms of this agreement.
                </p>

                <h2 className="text-2xl font-semibold mt-6">2. Payment Terms</h2>
                <p className="mb-4">
                    Payment for cleaning services is due upon completion of the service, unless otherwise agreed upon. We accept major credit cards, debit cards, and electronic payments. Recurring services may require upfront payment arrangements.
                </p>

                <h2 className="text-2xl font-semibold mt-6">3. Cancellations and Rescheduling</h2>
                <p className="mb-4">
                    Cancellations or rescheduling requests must be made at least 24 hours prior to the scheduled service to avoid a cancellation fee. Any cancellations made less than 24 hours before the service will incur a 50% cancellation fee.
                </p>

                <h2 className="text-2xl font-semibold mt-6">4. Liability and Damages</h2>
                <p className="mb-4">
                    Cleanatrix, LLC is committed to delivering services with care and professionalism. However, we are not liable for any pre-existing damage or issues within your property.
                </p>
            </div>
        </section>
    )
}

export default Terms