import React from "react";

export default function PrivacyPolicy()
{
    return (
        <main className="bg-[#FDF7F3] text-gray-800">
            {/* Hero Section */}
            <section className="bg-[#F8EEE2]  py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Privacy Policy
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    At BlinkInn Luxury Hotels, we value your trust. This Privacy Policy
                    explains how we collect, use, and protect your information when you
                    use our services.
                </p>
            </section>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-6 py-12 space-y-12">
                {/* Introduction */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        1. Information We Collect
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        We may collect personal details such as your name, email address,
                        phone number, payment details, and booking preferences when you make
                        a reservation. Additionally, we collect information about your use
                        of our website to enhance your experience.
                    </p>
                </div>

                {/* Usage */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        2. How We Use Your Information
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>To process bookings and payments securely</li>
                        <li>To personalize your hotel experience</li>
                        <li>To send confirmations, updates, and promotions</li>
                        <li>To improve our website and customer service</li>
                    </ul>
                </div>

                {/* Sharing */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        3. Sharing of Information
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        We do not sell your personal information. Data may be shared with
                        trusted partners such as payment providers or service staff to
                        ensure a seamless booking and stay experience.
                    </p>
                </div>

                {/* Data Security */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        4. Data Security
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        We implement strict security measures to protect your personal data
                        from unauthorized access, alteration, or disclosure.
                    </p>
                </div>

                {/* Cookies */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        5. Cookies & Tracking
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our website uses cookies to enhance your browsing experience,
                        remember your preferences, and analyze site performance. You can
                        manage cookie settings through your browser.
                    </p>
                </div>

                {/* Policy Updates */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        6. Updates to This Policy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        We may update this Privacy Policy occasionally. Changes will be
                        posted on this page with a revised effective date.
                    </p>
                </div>

               
            </section>

          
        </main>
    );
}
