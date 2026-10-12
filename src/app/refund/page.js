import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Refund and Cancellation Policy | BetterMend",
  description: "Official Refund and Cancellation Policy of Bettermend Private Limited.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased">
      
      {/* 1. Project Theme Blue Header: Wordmark Logo + REFUND & CANCELLATION */}
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
            REFUND &amp; CANCELLATION
          </span>
        </div>
      </header>

      {/* 2. Main Policy Document Card */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-sm border border-slate-200/80 space-y-8 leading-relaxed text-[13.5px] sm:text-[14.5px] text-slate-800">
          
          {/* Header metadata block */}
          <div className="border-b border-slate-200 pb-6 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 font-heading tracking-tight">
              Refund and Cancellation Policy
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

          {/* 1. About this policy */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              1. About this policy
            </h2>
            <p>
              This policy explains when you can cancel an order or booking on the Bettermend Platform, and when and how you will get a refund. It forms part of our Terms and Conditions. Bettermend Private Limited (&quot;Bettermend&quot;, &quot;we&quot;, &quot;us&quot;) is a marketplace. Goods are sold by vendors and services are provided by independent drivers and professionals, so some outcomes depend on what went wrong and who was responsible. We will always look into your complaint fairly.
            </p>
          </section>

          {/* 2. General rules */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              2. General rules
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>2.1</strong> Refunds are paid to the original payment method, for example the UPI account, card or bank account you used. Refunds for cash payments are handled as explained in section 10.
              </p>
              <p>
                <strong>2.2</strong> Online refunds are started as soon as a refund is approved. They usually reach your account within 5 to 7 working days, depending on your bank or payment provider. Razorpay and your bank control the final step, so we cannot speed it up once it has left us.
              </p>
              <p>
                <strong>2.3</strong> To claim a refund, report the problem through the app (or to the contact in section 11) within the time given for that category below, and give a short description. A photo helps for damaged, wrong or spoilt items.
              </p>
              <p>
                <strong>2.4</strong> We may ask for more information, check with the vendor or Partner, and look at order and delivery records before approving a refund. We aim to decide within 3 working days.
              </p>
              <p>
                <strong>2.5</strong> If we cancel an order, or an order fails because of something on our side or the vendor&apos;s side, you will get a full refund of everything you paid for it, including delivery fees and taxes.
              </p>
              <p>
                <strong>2.6</strong> Refunds are not available for losses caused by misuse, fraud or a false claim. Repeated false claims may lead to account suspension.
              </p>
            </div>
          </section>

          {/* 3. Who pays a cancellation charge */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              3. Who pays a cancellation charge
            </h2>
            <p>
              We do not apply a cancellation charge to everyone in the same way. Whether a charge applies depends on who caused the cancellation.
            </p>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>3.1</strong> If the cancellation is the customer&apos;s choice or fault, for example a change of mind, a wrong or incomplete address, or the customer being unreachable, a charge may apply once the vendor has started preparing the order, a driver has been assigned, or a professional has been dispatched.
              </p>
              <p>
                <strong>3.2</strong> If the cancellation is the fault of the vendor, driver, professional or Bettermend, for example the vendor rejects the order or an item is out of stock, a driver cancels or does not arrive, a professional does not turn up, the wrong order is prepared, or we cannot deliver, the customer pays no cancellation charge and receives a full refund, including delivery fees and taxes.
              </p>
              <p>
                <strong>3.3</strong> Where the cause is outside everyone&apos;s control, such as a sudden road closure or severe weather, no cancellation charge is applied to the customer.
              </p>
              <p>
                <strong>3.4</strong> Any charge we apply is shown in the app before you confirm the cancellation. It will never be more than the cost actually incurred by the vendor or Partner because of the cancellation, and for goods never more than the value of the order.
              </p>
              <p>
                <strong>3.5</strong> If the customer and the vendor or Partner disagree about who caused the cancellation, we will check the order, chat and location records and decide fairly. If we find that a charge was applied wrongly, we will refund it.
              </p>
              <p>
                <strong>3.6</strong> Where a vendor or Partner is at fault, they may be charged or have their settlement adjusted as set out in their agreement with us. A cancellation charge paid by a customer who was at fault is passed on to the vendor or Partner who lost out, after deducting our applicable fees.
              </p>
            </div>
          </section>

          {/* 4. Cancelling an order (food, grocery and other goods) */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              4. Cancelling an order (food, grocery and other goods)
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>4.1</strong> Before the vendor accepts or starts preparing your order: you can cancel for free and get a full refund.
              </p>
              <p>
                <strong>4.2</strong> After the vendor has started preparing or packing it: the vendor has already spent time and materials, so cancellation may not be possible, or a cancellation charge may apply if the cancellation is your choice or fault (see section 3). No charge applies if the cancellation is due to the vendor, delivery partner or Bettermend.
              </p>
              <p>
                <strong>4.3</strong> After the order has been picked up for delivery: it cannot be cancelled for a refund, unless it is delayed far beyond the estimated time or you have a valid complaint under the sections below.
              </p>
              <p>
                <strong>4.4</strong> If you are unreachable or no one is available at the address: our delivery partner will try to reach you. If the order cannot be delivered because of this, it may be cancelled without a refund.
              </p>
              <p>
                <strong>4.5</strong> If a vendor cancels your order, for example because an item is out of stock, you will receive a full refund.
              </p>
            </div>
          </section>

          {/* 5. Wrong, missing, damaged or poor-quality items */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              5. Wrong, missing, damaged or poor-quality items
            </h2>
            <p>
              Because food and groceries are perishable, please check your order at delivery and report any problem within <strong>2 hours of delivery</strong>.
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                <strong>Wrong item or missing item:</strong> refund for that item, or a replacement where the vendor can arrange one.
              </li>
              <li>
                <strong>Damaged, spilt, spoilt or poor-quality item:</strong> refund for the affected item, with a photo as proof.
              </li>
              <li>
                <strong>Whole order wrong, or not delivered:</strong> full refund.
              </li>
              <li>
                <strong>Taste or personal preference:</strong> we cannot usually refund for this, but please tell us and we will pass your feedback to the vendor.
              </li>
            </ul>
            <p className="text-slate-700 text-xs sm:text-sm pt-1">
              For packaged goods that are unopened and unused, you may ask for a return or exchange within 24 hours of delivery if the vendor allows it. Items that are perishable, opened, used or custom-made cannot be returned. Fresh produce and meat are covered by the 2-hour rule above.
            </p>
          </section>

          {/* 6. Medicines */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              6. Medicines
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>6.1</strong> Medicines are sold by licensed pharmacies. For safety and legal reasons, medicines that have been delivered cannot be returned or exchanged once they leave the pharmacy, except where the wrong medicine was delivered, the item is damaged, the seal is broken, or the medicine has expired.
              </p>
              <p>
                <strong>6.2</strong> Please check the medicine name, strength, quantity and expiry date at delivery. Report any problem through the app within <strong>24 hours of delivery</strong> and do not use the medicine. Keep the item and packaging until we have looked into your complaint.
              </p>
              <p>
                <strong>6.3</strong> If the pharmacy cannot supply a medicine, or it cannot be sold without a valid prescription, your order will be cancelled and you will receive a full refund.
              </p>
              <p>
                <strong>6.4</strong> We do not give medical advice. If you have taken a wrong medicine or feel unwell, please see a doctor first and tell us afterwards.
              </p>
            </div>
          </section>

          {/* 7. Taxi and ride bookings */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              7. Taxi and ride bookings
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>7.1</strong> Before a driver is assigned: you can cancel for free.
              </p>
              <p>
                <strong>7.2</strong> After a driver is assigned: a cancellation fee may apply only if the cancellation is your choice or fault, especially once the driver is on the way or has reached you (see section 3). The fee, if any, is shown in the app before you confirm the cancellation.
              </p>
              <p>
                <strong>7.3</strong> If the driver cancels, or does not arrive: you pay nothing, and any amount already paid is refunded in full.
              </p>
              <p>
                <strong>7.4</strong> If a ride cannot be completed or you were charged more than the fare shown for the trip: report it in the app within 48 hours and we will review the trip details. We will refund any amount that was charged wrongly.
              </p>
              <p>
                <strong>7.5</strong> Tolls, parking or waiting charges, where they apply, are shown in the app or fare details. They are not refundable unless they were charged wrongly.
              </p>
            </div>
          </section>

          {/* 8. Home services and repairs */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              8. Home services and repairs
            </h2>
            <div className="space-y-2.5 pl-2 sm:pl-3">
              <p>
                <strong>8.1</strong> Before the professional is on the way: you can cancel for free and get a full refund of any advance paid.
              </p>
              <p>
                <strong>8.2</strong> After the professional has been dispatched or has reached you: a visit or call-out charge may apply if the cancellation is your choice or fault (see section 3). It is shown to you before you confirm the cancellation. No charge applies if the professional or Bettermend is the cause.
              </p>
              <p>
                <strong>8.3</strong> If the professional does not arrive: full refund.
              </p>
              <p>
                <strong>8.4</strong> If you are not happy with the service: report it within 48 hours. We will first ask the professional to put it right at no extra cost. If it cannot be fixed, we will refund all or part of the amount, depending on the work done.
              </p>
              <p>
                <strong>8.5</strong> Spare parts and materials that were fitted and used cannot be refunded, unless they were faulty or not what you agreed to.
              </p>
            </div>
          </section>

          {/* 9. Late delivery */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              9. Late delivery
            </h2>
            <p>
              Delivery times shown in the app are estimates. If your order is delayed so much that it is no longer useful to you, please contact us. Where the delay was caused by Bettermend or the delivery partner and you chose to cancel, we will review and refund the order. We cannot refund for delays caused by weather, road closures, strikes or other events beyond our control, unless the order is not delivered at all.
            </p>
          </section>

          {/* 10. Cash payments */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              10. Cash payments
            </h2>
            <p>
              If you paid in cash and a refund is due, we will refund it to your bank account, UPI ID or other method we agree with you. We may need your payment details for this. If a cash order is cancelled before you pay, you owe nothing.
            </p>
          </section>

          {/* 11. How to ask for a refund or complain */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              11. How to ask for a refund or complain
            </h2>
            <p>
              Please report the problem in the app first. If you need more help, write to our Grievance Officer:
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
              We will acknowledge your complaint within 48 hours and aim to resolve it within 15 days.
            </p>
          </section>

          {/* 12. Vendors and Partners */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              12. Vendors and Partners
            </h2>
            <p>
              If a refund is paid because of a vendor&apos;s or Partner&apos;s fault, such as a wrong or poor-quality item, the amount may be deducted from that vendor&apos;s or Partner&apos;s next settlement, as set out in their agreement with us.
            </p>
          </section>

          {/* 13. Your other rights */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              13. Your other rights
            </h2>
            <p>
              This policy does not take away any right you have under the Consumer Protection Act, 2019, the Consumer Protection (E-Commerce) Rules, 2020, or any other law. Bettermend may update this policy from time to time. The version in force when you placed your order applies to that order.
            </p>
          </section>

          {/* 14. Governing law */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              14. Governing law
            </h2>
            <p>
              This policy is governed by the laws of India. Courts at Malappuram, Kerala will have jurisdiction, without affecting your right as a consumer to approach a consumer forum that has jurisdiction over you.
            </p>
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
