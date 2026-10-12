import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | BetterMend",
  description: "Official Terms and Conditions of Bettermend Private Limited under the Information Technology Act, 2000.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased">
      
      {/* 1. Project Theme Blue Header: Wordmark Logo + TERMS AND CONDITIONS */}
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
          
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/95 font-heading truncate">
            TERMS AND CONDITIONS
          </span>
        </div>
      </header>

      {/* 2. Main Policy Document Card */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-sm border border-slate-200/80 space-y-8 leading-relaxed text-[13.5px] sm:text-[14.5px] text-slate-800">
          
          {/* Header metadata block */}
          <div className="border-b border-slate-200 pb-6 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 font-heading tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-sm sm:text-base font-bold text-slate-800">
              Bettermend Private Limited
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500 font-medium pt-1">
              <span>Version 1.1</span>
              <span>•</span>
              <span>Effective date: 5 October 2026</span>
            </div>
          </div>

          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              1. Introduction
            </h2>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your use of the website, mobile app and related services (the &quot;Platform&quot;) operated by Bettermend Private Limited, CIN U63122KL2026PTC104735, whose registered office is at 1st Floor, Chemmili Complex, Valakolam, Tirurangadi, Malappuram - 676508, Kerala, India (&quot;Bettermend&quot;, &quot;we&quot;, &quot;us&quot;).
            </p>
            <p>
              By creating an account, ticking the acceptance box, or using the Platform, you agree to these Terms and to our Privacy Policy and Refund Policy, which form part of them. This is an electronic contract under the Information Technology Act, 2000 and does not need a physical signature. If you do not agree, please do not use the Platform.
            </p>
            <p>
              &quot;You&quot; means anyone who uses the Platform, whether as a visitor, a customer, a vendor, or a delivery partner, driver or service professional (together, &quot;Partners&quot;).
            </p>
          </section>

          {/* 2. What Bettermend is, and what it is not */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              2. What Bettermend is, and what it is not
            </h2>
            <p>
              Bettermend is a technology platform and marketplace. We connect customers with local shops, restaurants, pharmacies, drivers, service professionals and delivery partners. We help you discover them, place orders or bookings, and pay.
            </p>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>2.1 Vendors are the sellers.</strong> When you buy goods, the contract of sale is between you and the vendor. The vendor is responsible for the quality, quantity, description, pricing, packaging, licences and legality of what it sells. Bettermend is not the seller.
              </p>
              <p>
                <strong>2.2 Drivers and service professionals provide their own services.</strong> For taxi, bike, auto, vehicle rental and home or repair services, the service is provided by the independent driver or professional. Bettermend provides the technology that connects you and does not itself provide transport or home services.
              </p>
              <p>
                <strong>2.3 Delivery.</strong> Bettermend arranges delivery of orders from vendors to customers, through delivery partners who may be engaged by us or by our logistics partners.
              </p>
              <p>
                <strong>2.4 Medicines.</strong> Medicines are sold only by pharmacies holding valid licences. We do not practise medicine or pharmacy and do not give medical advice. Prescription medicines require a valid prescription, which the pharmacy checks, and the pharmacy may refuse an order without one. Our delivery partners carry only sealed orders packed by the pharmacy and do not open, check or advise on medicines.
              </p>
              <p>
                <strong>2.5 Services may change.</strong> Services available on the Platform differ by area and may be added, changed or withdrawn. Not every service is available everywhere.
              </p>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm italic pt-1">
              Nothing in this section limits any right you have as a consumer under law.
            </p>
          </section>

          {/* 3. Eligibility and your account */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              3. Eligibility and your account
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>3.1</strong> You must be at least 18 years old and capable of entering a binding contract in India to use the Platform.
              </p>
              <p>
                <strong>3.2</strong> You must give accurate and complete information when you register and keep it up to date. Partners must submit genuine KYC documents that belong to them.
              </p>
              <p>
                <strong>3.3</strong> You are responsible for everything done through your account. Keep your login details and OTPs private, and tell us promptly if you think your account has been misused.
              </p>
              <p>
                <strong>3.4</strong> One person may not hold multiple accounts to abuse offers or evade a suspension.
              </p>
            </div>
          </section>

          {/* 4. Orders, bookings and prices */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              4. Orders, bookings and prices
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>4.1</strong> Prices, product details, availability, fees and estimated delivery times shown on the Platform are provided by vendors and Partners or calculated by us. They can change, and estimated times are not guaranteed.
              </p>
              <p>
                <strong>4.2</strong> An order or booking is confirmed only when you receive a confirmation on the Platform. A vendor or Partner may reject or cancel an order if, for example, an item is unavailable or a delivery address cannot be reached.
              </p>
              <p>
                <strong>4.3</strong> The final amount you pay includes the item price, taxes, delivery fee, platform or service fee and any other charge, all shown to you before you confirm. If we find a clear pricing error, we may cancel the order and refund you in full.
              </p>
              <p>
                <strong>4.4</strong> Please check the delivery address, contact number and order details before confirming. We are not responsible for failed delivery caused by wrong or incomplete details you provided.
              </p>
              <p>
                <strong>4.5</strong> Offers, coupons and discounts are subject to their own conditions and can be withdrawn at any time. We may cancel offers obtained through misuse or fraud.
              </p>
            </div>
          </section>

          {/* 5. Payments */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              5. Payments
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>5.1</strong> You may pay using the payment methods shown at checkout. Online payments are processed by our payment partner, Razorpay, and by your bank or payment provider. Their terms apply to the payment itself.
              </p>
              <p>
                <strong>5.2</strong> We collect the customer&apos;s payment on behalf of the vendor or Partner, deduct our commission and fees, and pass on the balance as set out in section 8.
              </p>
              <p>
                <strong>5.3</strong> If a payment fails but your account is debited, the amount is generally returned to you by your bank or payment provider within the time set by RBI rules. Contact us if it does not arrive.
              </p>
              <p>
                <strong>5.4</strong> You are responsible for any taxes that apply to you. We will issue invoices and collect taxes as the law requires.
              </p>
            </div>
          </section>

          {/* 6. Cancellations and refunds */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              6. Cancellations and refunds
            </h2>
            <p>
              Cancellations, returns, refunds and replacements are covered in our Refund Policy. In short, an order can generally be cancelled before the vendor starts preparing it, and refunds are processed to the original payment method. Please read the Refund Policy for the details.
            </p>
          </section>

          {/* 7. Delivery */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              7. Delivery
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>7.1</strong> Delivery partners will collect orders from the vendor and bring them to the address you gave. You or someone at the address should be reachable to receive the order.
              </p>
              <p>
                <strong>7.2</strong> If you cannot be reached or the order cannot be delivered because of something on your side, we may cancel it, and the Refund Policy will explain what is refundable.
              </p>
              <p>
                <strong>7.3</strong> Please check your order at delivery. If something is wrong, report it through the app as soon as you can so that we can look into it.
              </p>
              <p>
                <strong>7.4</strong> You may not ask a delivery partner to carry anything unlawful, dangerous or prohibited.
              </p>
            </div>
          </section>

          {/* 8. Terms for Vendors */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              8. Terms for Vendors
            </h2>
            <p>
              If you list your business on the Platform, these terms apply in addition to the rest of this document and to the Vendor Agreement you accept when you onboard. If there is a conflict, the Vendor Agreement prevails for vendor matters.
            </p>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>8.1 You are the seller.</strong> You are responsible for your goods, pricing, stock, packaging and quality at handover, and for holding every licence your business needs (for example FSSAI, drug licence, trade licence and GST registration). Keep your items, prices and availability accurate on the Platform and fulfil the orders you accept.
              </p>
              <p>
                <strong>8.2 Commission.</strong> We charge a commission on each completed order at the rate agreed with you at onboarding or notified in the vendor app. It is deducted before settlement.
              </p>
              <p>
                <strong>8.3 Settlement.</strong> We pay you the order value less commission and any applicable fees and taxes within 48 hours of delivery, to the bank account you registered. We may hold or adjust payments where there is a refund, chargeback, dispute, or suspected fraud.
              </p>
              <p>
                <strong>8.4 KYC.</strong> You confirm that the business details, PAN and bank account you submit are accurate and belong to you.
              </p>
              <p>
                <strong>8.5 Ending the listing.</strong> Either of us may end your listing at any time with 15 days&apos; written notice. We may suspend or remove it immediately for fraud, repeated complaints, or breach of these Terms or the law.
              </p>
            </div>
          </section>

          {/* 9. Terms for delivery partners, drivers and service professionals */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              9. Terms for delivery partners, drivers and service professionals
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>9.1</strong> Partners use the Platform under the separate agreement or onboarding terms they accept. Those terms set out the commercial arrangement, payouts and conduct standards.
              </p>
              <p>
                <strong>9.2</strong> Partners must hold and keep valid every licence, permit, registration and insurance that the law requires for their work, including a driving licence and vehicle documents where relevant. They must follow traffic and safety laws.
              </p>
              <p>
                <strong>9.3</strong> Partners must behave respectfully with customers and vendors, handle orders carefully, and keep customer information confidential, using it only for the order or booking concerned.
              </p>
              <p>
                <strong>9.4</strong> Partners must not collect any amount from a customer other than what is shown on the Platform for the order or booking.
              </p>
            </div>
          </section>

          {/* 10. Your conduct */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              10. Your conduct
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>Give false information or pretend to be someone else</li>
              <li>Use the Platform for anything unlawful, fraudulent or abusive</li>
              <li>Harass, threaten or discriminate against any customer, vendor or Partner</li>
              <li>Place fake orders, misuse offers, or manipulate ratings and reviews</li>
              <li>Interfere with the Platform, attempt unauthorised access, or use bots or scrapers</li>
              <li>Copy, reverse-engineer or resell any part of the Platform</li>
              <li>Take transactions off the Platform to avoid fees, where you first met the other party through us</li>
            </ul>
          </section>

          {/* 11. Ratings and content */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              11. Ratings and content
            </h2>
            <p>
              You may post ratings, reviews and other content. You keep ownership, but you give Bettermend a non-exclusive, free right to use, display and share that content on the Platform and in our marketing. Content must be truthful, lawful and respectful. We may remove content that breaks these Terms or the law.
            </p>
          </section>

          {/* 12. Intellectual property */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              12. Intellectual property
            </h2>
            <p>
              The Platform, including the Bettermend name, logo, app, website, software, designs and content we create, belongs to Bettermend or its licensors and is protected by law. We give you a limited, personal, non-transferable right to use the Platform in line with these Terms. Nothing here transfers any ownership to you. Vendors and Partners keep ownership of their own names, logos and listings, and grant us the right to display them on the Platform.
            </p>
          </section>

          {/* 13. Suspension and termination */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              13. Suspension and termination
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>13.1</strong> You may stop using the Platform and close your account at any time, subject to completing any open orders and settling dues.
              </p>
              <p>
                <strong>13.2</strong> We may suspend or close an account, with or without notice, if you breach these Terms, if we suspect fraud or misuse, or if the law or a regulator requires it. Where reasonable, we will tell you why.
              </p>
              <p>
                <strong>13.3</strong> Closing an account does not affect rights and liabilities that arose before it. Sections that by their nature should continue (including those on payments, intellectual property, liability and disputes) will continue.
              </p>
            </div>
          </section>

          {/* 14. Disclaimers */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              14. Disclaimers
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>14.1</strong> We work to keep the Platform running smoothly, but we cannot promise it will always be available, error-free or free from interruptions caused by maintenance, networks or events outside our control.
              </p>
              <p>
                <strong>14.2</strong> Bettermend does not guarantee the quality, safety or legality of goods or services provided by vendors and Partners, or their conduct. We do take steps to verify Partners, and we act on complaints.
              </p>
              <p>
                <strong>14.3</strong> Vendors, drivers and service professionals are not our employees unless we have told you so in writing.
              </p>
            </div>
          </section>

          {/* 15. Limitation of liability */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              15. Limitation of liability
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>15.1</strong> To the extent the law allows, Bettermend is not liable for any indirect, incidental or consequential loss, or for loss of profit, business or goodwill, arising from your use of the Platform.
              </p>
              <p>
                <strong>15.2</strong> Where we are found liable to you for something related to an order or booking, our total liability is limited to the amount you paid through the Platform for that order or booking.
              </p>
              <p>
                <strong>15.3</strong> Nothing in these Terms excludes or limits liability that cannot lawfully be excluded, including liability for fraud, death or personal injury caused by our negligence, or any right you have under the Consumer Protection Act, 2019.
              </p>
            </div>
          </section>

          {/* 16. Indemnity */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              16. Indemnity
            </h2>
            <p>
              You agree to compensate Bettermend for losses, claims and reasonable costs arising from your breach of these Terms, your violation of any law or third-party right, or content you post. This applies to the extent allowed by law, and does not apply where the loss was caused by our own fault.
            </p>
          </section>

          {/* 17. Events beyond our control */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              17. Events beyond our control
            </h2>
            <p>
              Neither side is responsible for failure or delay caused by events outside its reasonable control, such as natural disasters, floods, strikes, riots, government orders, power or network outages, or pandemics. Obligations to pay money already due are not suspended by this section.
            </p>
          </section>

          {/* 18. Complaints and Grievance Officer */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              18. Complaints and Grievance Officer
            </h2>
            <p>
              If you have a complaint about the Platform, an order, a Partner or your data, please contact our Grievance Officer:
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
              We will acknowledge your complaint within 48 hours and aim to resolve it within 15 days. You may also approach the consumer commission or any other forum open to you under law.
            </p>
          </section>

          {/* 19. Changes to these Terms */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              19. Changes to these Terms
            </h2>
            <p>
              We may update these Terms from time to time. We will post the new version here with a new effective date, and tell you through the app or by email if the change is significant. If you keep using the Platform after the change, you accept the updated Terms. If you disagree, you should stop using the Platform.
            </p>
          </section>

          {/* 20. General */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              20. General
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>20.1 Entire agreement.</strong> These Terms, the Privacy Policy, the Refund Policy and any agreement you have separately accepted with us are the whole agreement between you and Bettermend on this subject.
              </p>
              <p>
                <strong>20.2 Severability.</strong> If any part of these Terms is found unenforceable, the rest remains in effect.
              </p>
              <p>
                <strong>20.3 No waiver.</strong> If we do not enforce a right straight away, that does not mean we have given it up.
              </p>
              <p>
                <strong>20.4 Assignment.</strong> You may not transfer your rights under these Terms. We may transfer ours as part of a merger, acquisition or restructuring.
              </p>
              <p>
                <strong>20.5 Notices.</strong> We may send notices to the phone number or email you registered or through the app. You may write to us at the Grievance Officer&apos;s address above.
              </p>
            </div>
          </section>

          {/* 21. Governing law and disputes */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              21. Governing law and disputes
            </h2>
            <p>
              These Terms are governed by the laws of India. We encourage you to contact us first so we can try to settle any dispute informally. If it cannot be settled, the courts at Malappuram, Kerala will have jurisdiction, without affecting your right as a consumer to approach a consumer forum that has jurisdiction over you.
            </p>
          </section>

          {/* 22. Contact us */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              22. Contact us
            </h2>
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1">
              <p className="font-bold text-slate-950 text-sm sm:text-base">Bettermend Private Limited</p>
              <p className="text-xs sm:text-sm text-slate-700">1st Floor, Chemmili Complex, Valakolam, Tirurangadi, Malappuram - 676508, Kerala, India</p>
              <p className="text-xs sm:text-sm text-slate-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:mubashirmanayath@bettermend.in" className="text-[#030C54] font-semibold underline hover:text-blue-800">
                  mubashirmanayath@bettermend.in
                </a>
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* Minimal Clean Footer */}
      <footer className="border-t border-slate-200/80 py-6 text-center text-xs text-slate-500 bg-white">
        <p>© 2026 Bettermend Private Limited. All rights reserved.</p>
      </footer>

    </div>
  );
}
