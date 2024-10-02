import React from 'react';

const Privacy = () => {
    return (
        <section className="h-max py-10 flex flex-col gap-10 px-5 lg:px-20">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <p className="text-lg mb-4">
                    <strong>Effective Date: September 18, 2024</strong>
                </p>
                <p className="mb-4">
                    Cleanatrix (“we,” “our,” or “us”) is committed to safeguarding your privacy. This privacy policy outlines the types of information we collect, how we use and protect that information, and your rights in relation to your data. This policy complies with federal and state laws, including the <em>California Consumer Privacy Act (CCPA)</em> and the <em>General Data Protection Regulation (GDPR)</em> where applicable.
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
                <p className="mb-4">
                    We collect both personal and non-personal information when you use our services or visit our website.
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Personal Information:</strong> This includes your name, address, phone number, email address, and payment information when you book our cleaning services.</li>
                    <li><strong>Non-Personal Information:</strong> This includes browser type, device information, and website analytics to improve our services and website functionality.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
                <p className="mb-4">
                    We use your personal information to:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Provide and manage our janitorial services, including scheduling and billing.</li>
                    <li>Communicate with you regarding appointments, services, or customer support.</li>
                    <li>Improve our service offerings and enhance the user experience.</li>
                    <li>Comply with legal obligations, such as tax records and accounting.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">3. Data Sharing</h2>
                <p className="mb-4">
                    We do not sell or share your personal information with third parties except in the following cases:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Service Providers:</strong> We may share your data with third-party vendors (e.g., payment processors) to perform necessary business functions.</li>
                    <li><strong>Legal Compliance:</strong> If required by law, we may disclose your information to government authorities or regulatory bodies in compliance with federal or state regulations.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">4. Data Security</h2>
                <p className="mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction. This includes encryption of sensitive data and regular security audits.
                </p>

                <h2 className="text-2xl font-semibold mt-6">5. Your Rights</h2>
                <p className="mb-4">
                    Depending on your location and applicable laws, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Right to Access:</strong> You can request a copy of the data we hold about you.</li>
                    <li><strong>Right to Rectification:</strong> You can request that we correct inaccurate or incomplete information.</li>
                    <li><strong>Right to Deletion:</strong> You can request that we delete your personal data, subject to legal obligations like record-keeping for tax purposes.</li>
                    <li><strong>Right to Opt-Out:</strong> You may opt out of certain data collection, such as for marketing purposes.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">6. Compliance with Federal and State Laws</h2>
                <p className="mb-4">
                    We comply with federal privacy laws such as the <em>Gramm-Leach-Bliley Act</em> (for financial data protection) and any applicable state laws, including <em>New York State consumer protection laws</em> and <em>California Consumer Privacy Act (CCPA)</em> if your data falls under these jurisdictions.
                </p>

                <h2 className="text-2xl font-semibold mt-6">7. Changes to This Policy</h2>
                <p className="mb-4">
                    We reserve the right to update this privacy policy as needed. Any changes will be posted on our website with the effective date of the updated policy.
                </p>

                <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
                <p className="mt-4">
                    If you have any questions or concerns regarding this privacy policy, please contact us at:
                    <br />
                    Email: 
                    <a href="mailto:info@cleanatrix.com" className='ml-1 underline underline-offset-2 text-blue-600'>
                         info@cleanatrix.com.
                    </a>
                    <br />
                    Address: 5000 Thayer Center STE C, Oakland, MD
                </p>
            </div>
        </section>
    );
}

export default Privacy;
