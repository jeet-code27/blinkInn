import React from "react";

export default function TermsOfService()
{
    return (
        <main className="bg-[#FDF7F3] text-gray-800">
            {/* Hero Section */}
            <section className="bg-[#F8EEE2] py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Terms of Service
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Welcome to BlinkInn Luxury Hotels. By using our website and booking
                    services, you agree to the following Terms of Service designed to
                    ensure a transparent and reliable experience for all guests.
                </p>
            </section>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-6 py-12 space-y-12">
                {/* Use of Services */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        1. Use of Our Services
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our platform enables you to explore, compare, and book luxury hotel
                        accommodations. You agree to use our website responsibly and only
                        for lawful purposes. Fraudulent activities, misuse, or attempts to
                        disrupt the platform are strictly prohibited.
                    </p>
                </div>

                {/* Bookings and Payments */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        2. Bookings & Payments
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        All bookings are subject to availability and confirmation by the
                        respective hotel partner. Prices displayed are transparent and free
                        from hidden charges. Payments must be made securely through the
                        payment gateway provided on our site.
                    </p>
                </div>

                {/* Cancellations */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        3. Cancellations & Refunds
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Cancellation and refund policies may vary based on the hotel’s
                        terms and conditions. Please review the cancellation policy at the
                        time of booking. BlinkInn is not liable for refunds beyond the
                        partner hotel’s specified conditions.
                    </p>
                </div>

                {/* Guest Responsibilities */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        4. Guest Responsibilities
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Guests are expected to respect hotel policies, including check-in
                        and check-out times, safety regulations, and general codes of
                        conduct. Any misconduct or property damage may result in penalties
                        or cancellation of services.
                    </p>
                </div>

                {/* Intellectual Property */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        5. Intellectual Property
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        All content, branding, and design elements featured on our website
                        are the intellectual property of BlinkInn or its partners. You may
                        not use, copy, or distribute this content without prior written
                        permission.
                    </p>
                </div>

                {/* Limitation of Liability */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        6. Limitation of Liability
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        While we strive to ensure accuracy and seamless service, BlinkInn
                        cannot be held responsible for errors, interruptions, or issues
                        caused by third-party hotel partners. Liability is limited as
                        permitted by applicable law.
                    </p>
                </div>

                {/* Updates to Terms */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                        7. Updates to These Terms
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        BlinkInn may update these Terms of Service from time to time. Any
                        changes will be reflected on this page with an updated effective
                        date. Continued use of our services implies agreement with the
                        revised terms.
                    </p>
                </div>

               
            </section>
        </main>
    );
}
