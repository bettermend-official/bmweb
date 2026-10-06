import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | BetterMend",
  description: "Official Privacy Policy of Bettermend Private Limited under the DPDP Act 2023.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased">
      
      {/* 1. Project Theme Blue Header: Wordmark Logo + PRIVACY POLICY */}
      <header className="sticky top-0 z-50 bg-[#030C54] text-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center gap-5 sm:gap-7">
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative h-6 sm:h-7 w-32 sm:w-40 flex items-center">
              <Image
                src="/bettermend wordmark.png"
                alt="BetterMend Urban Services"
                fill
                priority
                className="object-contain object-left group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>
          
          <div className="h-5 w-[1px] bg-white/30" />
          
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/95 font-heading">
            PRIVACY POLICY
          </span>
        </div>
      </header>

      {/* 2. Main Policy Document Card */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-sm border border-slate-200/80 space-y-8 leading-relaxed text-[13.5px] sm:text-[14.5px] text-slate-800">
          
          {/* Header metadata block */}
          <div className="border-b border-slate-200 pb-6 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 font-heading tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base font-bold text-slate-800">
              Bettermend Private Limited
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500 font-medium pt-1">
              <span>Version 1.2</span>
              <span>•</span>
              <span>Effective date: 5 October 2026</span>
            </div>
          </div>

          {/* 1. About this policy */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              1. About this policy
            </h2>
            <p>
              This policy explains how Bettermend Private Limited (&quot;Bettermend&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, shares and protects your personal data when you use our website, our mobile app, or any service we offer through them (together, the &quot;Platform&quot;).
            </p>
            <p>
              Bettermend is a marketplace that connects customers with local shops, service professionals, delivery partners and drivers. We decide why and how your personal data is processed, which makes us the &quot;Data Fiduciary&quot; under the Digital Personal Data Protection Act, 2023 (the &quot;DPDP Act&quot;).
            </p>
            <p>
              Please read this policy before you use the Platform. If you do not agree with it, please do not use the Platform.
            </p>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1.5 mt-4">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950">
                Our details
              </h3>
              <p className="font-semibold text-slate-900">Bettermend Private Limited</p>
              <p className="text-xs sm:text-sm text-slate-700"><strong>CIN:</strong> U63122KL2026PTC104735</p>
              <p className="text-xs sm:text-sm text-slate-700"><strong>Registered office:</strong> 1st Floor, Chemmili Complex, Valakolam, Tirurangadi, Malappuram - 676508, Kerala, India</p>
              <p className="text-xs sm:text-sm text-slate-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:mubashirmanayath@bettermend.in" className="text-[#030C54] font-semibold underline hover:text-blue-800">
                  mubashirmanayath@bettermend.in
                </a>
              </p>
            </div>
          </section>

          {/* 2. Who this policy covers */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              2. Who this policy covers
            </h2>
            <p>It applies to everyone whose data we handle through the Platform:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li><strong>Visitors</strong> who browse our website</li>
              <li><strong>Customers</strong> who place orders or book services</li>
              <li><strong>Vendors</strong>, meaning shops, restaurants, pharmacies and other businesses listed on the Platform</li>
              <li><strong>Delivery partners, drivers and service professionals</strong> who take jobs through the Platform</li>
            </ul>
            <p className="text-slate-600 text-xs sm:text-sm italic">
              Some sections apply only to one group. We say so where that is the case.
            </p>
          </section>

          {/* 3. What we collect */}
          <section className="space-y-4">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              3. What we collect
            </h2>
            <p>
              We collect only what we need to run the Platform. Depending on how you use it, that may include:
            </p>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900">Information you give us</h3>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1.5">
                <li>Name, phone number, email address</li>
                <li>Delivery and service addresses</li>
                <li>For vendors: shop name, address, PAN, GSTIN and licence details (such as FSSAI or trade licence)</li>
                <li>Bank account details, so we can pay out vendors, delivery partners, drivers and service professionals</li>
                <li>For delivery partners, drivers and service professionals: identity and verification documents such as PAN, driving licence and vehicle documents</li>
                <li>Messages you send our support team, and any feedback or complaints</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900">Information collected as you use the Platform</h3>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1.5">
                <li>Order, booking and transaction history</li>
                <li>Location. We use it to match you with nearby shops, pickups, drivers and deliveries. For delivery partners and drivers, this includes live location while you are on an active job.</li>
                <li>Device and technical details such as device model, operating system, app version, IP address and crash logs</li>
                <li>Basic usage data, such as which screens you visit and how you use features</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900">Information from others</h3>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1.5">
                <li>Payment status and confirmation from our payment partner</li>
                <li>Details a vendor or customer shares with us about an order, for example a delivery instruction</li>
              </ul>
            </div>

            <p className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-slate-800">
              We do not ask for your card number, UPI PIN or net-banking password. Payments are handled by Razorpay on its own secure systems.
            </p>
          </section>

          {/* 4. Why we use your data */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              4. Why we use your data
            </h2>
            <p>We use your personal data to:</p>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-1.5">
              <li>Create and manage your account, and verify vendors, delivery partners, drivers and service professionals (KYC)</li>
              <li>Show you nearby shops and services, and process your orders and bookings</li>
              <li>Assign and track deliveries and rides</li>
              <li>Collect payments, issue refunds and settle payouts</li>
              <li>Send you order updates, payout notices, service messages and important changes to our terms</li>
              <li>Handle support requests, complaints and disputes</li>
              <li>Prevent fraud, misuse and security incidents</li>
              <li>Improve the Platform, fix bugs and understand how features are used</li>
              <li>Comply with law, including tax, accounting and regulatory requirements</li>
              <li>Send you offers and promotions by SMS, WhatsApp, email or app notification, if you have agreed to receive them. You can opt out at any time.</li>
            </ol>
            <p className="text-slate-600 text-xs sm:text-sm pt-1">
              We will not use your data for a purpose that is materially different from these without telling you first and, where the law requires it, asking for your consent again.
            </p>
          </section>

          {/* 5. Our legal basis */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              5. Our legal basis
            </h2>
            <p>
              Most of what we do rests on your consent, which you give when you tick the consent box or use the Platform after reading this policy. You can withdraw it at any time (see section 10).
            </p>
            <p>
              In limited situations the DPDP Act allows us to process data without fresh consent, for example to comply with a legal obligation, to respond to a court order or government request, or to protect against fraud. We rely on those grounds only when they genuinely apply.
            </p>
          </section>

          {/* 6. Marketing messages */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              6. Marketing messages
            </h2>
            <p>
              Promotional messages are optional. They are never a condition for using the Platform. To stop them, use the opt-out link in the message, change the setting in the app, or write to us at{" "}
              <a href="mailto:mubashirmanayath@bettermend.in" className="text-[#030C54] font-semibold underline hover:text-blue-800">
                mubashirmanayath@bettermend.in
              </a>. Order and account messages are service messages and will continue.
            </p>
          </section>

          {/* 7. Who we share it with */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              7. Who we share it with
            </h2>
            <p>We do not sell your personal data. We share it only as follows:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                <strong>Vendors and service providers</strong>, to complete your order. A shop sees your name, delivery address and order details.
              </li>
              <li>
                <strong>Delivery partners and drivers</strong>, to complete a delivery or ride. They see your name, pickup and drop locations and your phone number, so they can reach you if there is a problem with delivery. They may use your number only for that order.
              </li>
              <li>
                <strong>Customers</strong>, to the extent needed to complete an order. A customer may see a delivery partner&apos;s name, photo, vehicle details and live location while the order is in progress.
              </li>
              <li>
                <strong>Razorpay and banks</strong>, to process payments, refunds and payouts under RBI rules.
              </li>
              <li>
                <strong>Technology service providers</strong> who help us run the Platform. These include Amazon Web Services (cloud hosting) and providers of mapping, SMS, notification, analytics and customer support tools. They may process data only on our instructions and under confidentiality obligations.
              </li>
              <li>
                <strong>Government authorities, regulators, courts and law-enforcement agencies</strong>, when required by law or to protect rights and safety.
              </li>
              <li>
                <strong>A buyer or successor</strong>, if Bettermend is ever merged with or acquired by another business. Your data would stay protected and, where required, we would tell you.
              </li>
            </ul>
            <p className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-800">
              We do not share a vendor&apos;s bank or PAN details with other vendors or customers.
            </p>
          </section>

          {/* 8. Where your data is stored */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              8. Where your data is stored
            </h2>
            <p>
              Your data is stored on servers located in India, hosted by Amazon Web Services. If we ever process data outside India, we will do so only in ways the DPDP Act and any government restrictions on transfers permit.
            </p>
          </section>

          {/* 9. How long we keep it */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              9. How long we keep it
            </h2>
            <p>
              We keep your data for as long as your account is active and as needed to provide the Platform. After that, we keep different kinds of data for different periods:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 my-4 shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100/90 text-slate-950 font-bold border-b border-slate-200">
                    <th className="py-3 px-4 sm:px-5 w-1/3">Data</th>
                    <th className="py-3 px-4 sm:px-5 w-2/3">How long</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 sm:px-5 font-semibold text-slate-900 align-top">Account profile and contact details</td>
                    <td className="py-3 px-4 sm:px-5 text-slate-700">Deleted or anonymised within 30 days after account closure, unless needed for a legal reason below</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 sm:px-5 font-semibold text-slate-900 align-top">Order, invoice, payment and payout records</td>
                    <td className="py-3 px-4 sm:px-5 text-slate-700">8 years, as accounting and tax laws require</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 sm:px-5 font-semibold text-slate-900 align-top">KYC and verification records of vendors and partners</td>
                    <td className="py-3 px-4 sm:px-5 text-slate-700">8 years after the relationship ends</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 sm:px-5 font-semibold text-slate-900 align-top">Support chats, complaints and dispute records</td>
                    <td className="py-3 px-4 sm:px-5 text-slate-700">3 years after the matter is closed</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 sm:px-5 font-semibold text-slate-900 align-top">Live location and trip logs</td>
                    <td className="py-3 px-4 sm:px-5 text-slate-700">6 months, or longer if an incident or dispute is open</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 sm:px-5 font-semibold text-slate-900 align-top">Marketing preferences</td>
                    <td className="py-3 px-4 sm:px-5 text-slate-700">Until you opt out, then a record of the opt-out is kept</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 sm:px-5 font-semibold text-slate-900 align-top">Device and usage logs</td>
                    <td className="py-3 px-4 sm:px-5 text-slate-700">Up to 12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm">
              If a court, regulator or investigation requires us to keep data for longer, we will do so. Once there is no longer a reason to keep your data, we delete or anonymise it.
            </p>
          </section>

          {/* 10. Your rights */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              10. Your rights
            </h2>
            <p>Under the DPDP Act you have the right to:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li><strong>Access.</strong> Ask for a summary of the personal data we hold about you and how it is being processed.</li>
              <li><strong>Correction and updating.</strong> Ask us to fix data that is wrong or out of date.</li>
              <li><strong>Erasure.</strong> Ask us to delete your data, unless we need to keep it for a legal reason.</li>
              <li><strong>Withdraw consent.</strong> You can do this whenever you like. Withdrawal does not affect what we did with your data before. For vendors, delivery partners, drivers and service professionals, withdrawing consent may mean we can no longer keep your account active, because we need this data to run it.</li>
              <li><strong>Grievance redressal.</strong> Raise a complaint with us about how your data is handled.</li>
              <li><strong>Nominate someone.</strong> Name a person who can exercise these rights for you if you die or become unable to do so.</li>
            </ul>
            <p className="pt-1">
              To use any of these rights, write to us at{" "}
              <a href="mailto:mubashirmanayath@bettermend.in" className="text-[#030C54] font-semibold underline hover:text-blue-800">
                mubashirmanayath@bettermend.in
              </a>. We may ask you to confirm your identity first. We aim to respond within 15 days.
            </p>
          </section>

          {/* 11. Children */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              11. Children
            </h2>
            <p>
              The Platform is meant for adults. We do not knowingly collect personal data from anyone under 18. Where a service would require us to process a child&apos;s data, we will first obtain verifiable consent from a parent or legal guardian. If you believe a child has given us their data without that consent, please write to us and we will delete it.
            </p>
          </section>

          {/* 12. Security */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              12. Security
            </h2>
            <p>
              We use reasonable safeguards to protect your data, including encryption in transit, access controls limited to staff who need the data, and monitoring of our systems. No system is completely secure, and we cannot promise absolute security. You can help by keeping your login details private and telling us at once if you suspect misuse of your account.
            </p>
            <p>
              If a personal data breach affects you, we will notify you and the Data Protection Board of India as the law requires.
            </p>
          </section>

          {/* 13. Cookies and similar tools */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              13. Cookies and similar tools
            </h2>
            <p>
              Our website uses cookies and similar technologies to keep you signed in, remember your preferences and understand how the site is used. You can control cookies through your browser settings. Blocking some of them may affect how the site works.
            </p>
          </section>

          {/* 14. Third-party links */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              14. Third-party links
            </h2>
            <p>
              The Platform may link to other websites or services. We do not control them and are not responsible for their privacy practices. Please read their policies before sharing your data.
            </p>
          </section>

          {/* 15. Changes to this policy */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              15. Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. When we make a significant change, we will post the new version here with a new effective date and, where appropriate, notify you through the app or by email. Continuing to use the Platform after an update means you accept it, except where the law requires fresh consent.
            </p>
          </section>

          {/* 16. Grievance Officer and contact */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              16. Grievance Officer and contact
            </h2>
            <p>
              If you have a question, a complaint or a request about your data, please contact our Grievance Officer:
            </p>
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1">
              <p className="font-bold text-slate-950 text-sm sm:text-base">Mubashir Manayath</p>
              <p className="text-xs sm:text-sm text-slate-700">Grievance Officer, Bettermend Private Limited</p>
              <p className="text-xs sm:text-sm text-slate-700">1st Floor, Chemmili Complex, Valakolam, Tirurangadi, Malappuram - 676508, Kerala</p>
              <p className="text-xs sm:text-sm text-slate-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:mubashirmanayath@bettermend.in" className="text-[#030C54] font-semibold underline hover:text-blue-800">
                  mubashirmanayath@bettermend.in
                </a>
              </p>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm pt-1">
              We will acknowledge your complaint within 48 hours and aim to resolve it within 15 days. If you are not satisfied with our response, you may complain to the Data Protection Board of India once it is operational under the DPDP Act.
            </p>
          </section>

          {/* 17. Governing law */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              17. Governing law
            </h2>
            <p>
              This policy is governed by the laws of India. Courts at Malappuram, Kerala will have jurisdiction over any dispute arising from it, subject to any rights you have under applicable law.
            </p>
          </section>

        </div>
      </main>

      {/* Minimal Clean Footer */}
      <footer className="border-t border-slate-200/80 py-6 text-center text-xs text-slate-500 bg-white">
        <p>© 2020 Bettermend Private Limited. All rights reserved.</p>
      </footer>

    </div>
  );
}
