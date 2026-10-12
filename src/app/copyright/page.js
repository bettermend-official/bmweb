import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Copyright & Intellectual Property Notice | BetterMend",
  description: "Official Copyright and Intellectual Property Notice of Bettermend Private Limited.",
};

export default function CopyrightPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased">
      
      {/* 1. Project Theme Blue Header: Wordmark Logo + COPYRIGHT & IP */}
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
            COPYRIGHT & IP NOTICE
          </span>
        </div>
      </header>

      {/* 2. Main Policy Document Card */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-sm border border-slate-200/80 space-y-8 leading-relaxed text-[13.5px] sm:text-[14.5px] text-slate-800">
          
          {/* Header metadata block */}
          <div className="border-b border-slate-200 pb-6 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 font-heading tracking-tight">
              Copyright and Intellectual Property Notice
            </h1>
            <p className="text-sm sm:text-base font-bold text-slate-800">
              Bettermend Private Limited
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500 font-medium pt-1">
              <span>Version 1.0</span>
              <span>•</span>
              <span>Effective date: 5 October 2026</span>
              <span>•</span>
              <span>© 2026 Bettermend Private Limited. All rights reserved.</span>
            </div>
          </div>

          {/* 1. About this notice */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              1. About this notice
            </h2>
            <p>
              This notice explains who owns the content and technology on the Bettermend website and mobile app (the &quot;Platform&quot;), how you may use it, and how to tell us if you believe something on the Platform infringes your rights. It forms part of our Terms and Conditions. Bettermend Private Limited, CIN U63122KL2026PTC104735, is referred to as &quot;Bettermend&quot;, &quot;we&quot; or &quot;us&quot;.
            </p>
          </section>

          {/* 2. What belongs to Bettermend */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              2. What belongs to Bettermend
            </h2>
            <p>
              Unless stated otherwise, Bettermend owns or holds the licence to the following, which are protected by Indian law, including the Copyright Act, 1957, the Trade Marks Act, 1999 and the Information Technology Act, 2000:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>The Bettermend name, logo, taglines and brand identity</li>
              <li>The website, mobile apps (customer, vendor and driver or partner apps), and admin systems</li>
              <li>Software, source code, databases, algorithms, APIs and technical designs</li>
              <li>App and website design, layouts, user interface, graphics, icons, animations and screens</li>
              <li>Text, descriptions, policies, guides, marketing material, photographs and videos that we create</li>
              <li>Our compilations of data, including how listings, orders and ratings are organised and displayed</li>
              <li>Trade secrets, business processes and confidential information</li>
            </ul>
            <p className="text-slate-600 text-xs sm:text-sm italic">
              Nothing on the Platform gives you ownership of any of these. Using the Platform does not transfer any rights to you, other than the limited right in section 4.
            </p>
          </section>

          {/* 3. Trademarks */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              3. Trademarks
            </h2>
            <p>
              &quot;Bettermend&quot;, the Bettermend logo and related names and slogans are trademarks of Bettermend Private Limited, whether or not they are registered. You may not use them, or anything confusingly similar, in a business name, domain name, social media handle, app name, advertisement or product without our written permission.
            </p>
            <p>
              Other names, logos and brands that appear on the Platform, such as those of vendors, restaurants, shops, payment services and partners, belong to their owners. Their appearance on the Platform does not mean that they endorse us or that we endorse them.
            </p>
          </section>

          {/* 4. What you may do */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              4. What you may do
            </h2>
            <p>
              We give you a limited, personal, non-exclusive, non-transferable and revocable permission to access and use the Platform for its intended purpose, as set out in our Terms and Conditions. You may view pages, place orders and bookings, and keep a copy of your own order information and invoices for your personal records.
            </p>
            <p>
              If you are a vendor or partner, you may use our brand name and approved material only to show that you are listed on Bettermend, and only in the way we allow in writing or in your agreement with us.
            </p>
          </section>

          {/* 5. What you may not do */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              5. What you may not do
            </h2>
            <p>Without our written permission, you may not:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>Copy, reproduce, modify, publish, sell, rent, license or distribute any part of the Platform or its content</li>
              <li>Reverse-engineer, decompile, disassemble or try to extract the source code of the apps or website</li>
              <li>Scrape, crawl, harvest or mine data from the Platform using bots, scripts or any automated means</li>
              <li>Remove or change any copyright, trademark or other ownership notice</li>
              <li>Create a competing app or service using our content, designs, vendor lists or data</li>
              <li>Frame, mirror or copy our website or app, or build anything that looks like it to mislead people</li>
              <li>Bypass or interfere with security, access limits or technical protections</li>
            </ul>
            <p className="text-red-700 font-semibold text-xs sm:text-sm pt-1">
              Breaking these rules may lead to suspension of your account and legal action.
            </p>
          </section>

          {/* 6. Content you provide */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              6. Content you provide
            </h2>
            <p>
              You keep ownership of content you provide, such as reviews, ratings, photos, product images, menus, logos and descriptions. By posting it on the Platform, you give Bettermend a non-exclusive, worldwide, royalty-free right to use, display, copy, adapt and share it on the Platform and in our marketing and promotion, for as long as it remains on the Platform and for a reasonable period afterwards, and as needed to keep records the law requires.
            </p>
            <p>
              You confirm that you own the content you post or have the right to use it, and that it does not infringe anyone else&apos;s rights or break any law. Vendors are responsible for the images, names and descriptions of their products. Please do not upload material you do not have the right to use.
            </p>
          </section>

          {/* 7. Feedback and ideas */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              7. Feedback and ideas
            </h2>
            <p>
              If you send us suggestions or ideas about the Platform, we may use them without any obligation to you, and without payment, unless we have agreed otherwise in writing.
            </p>
          </section>

          {/* 8. Work created for Bettermend */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              8. Work created for Bettermend
            </h2>
            <p>
              Software, designs, content and other work created for Bettermend by employees, developers, designers, consultants and contractors is owned by Bettermend as set out in their agreements with us. If you worked for Bettermend and believe you have a claim to any such work, please contact us at the address below.
            </p>
          </section>

          {/* 9. Reporting infringement */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              9. Reporting infringement
            </h2>
            <p>
              We respect the rights of others and expect the same from everyone who uses the Platform. If you believe that content on the Platform, such as a listing, image, menu, review or logo, copies your copyright, trademark or other intellectual property without permission, please write to us and include:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-2">
              <li>Your name, address, phone number and email address</li>
              <li>A description of your work or mark, and proof that you own it or are authorised to act for the owner (for example, a registration certificate or the original file)</li>
              <li>The exact location of the content you object to, such as the link, listing name or a screenshot</li>
              <li>A short explanation of why you believe it infringes your rights</li>
              <li>A statement that you are acting in good faith and that the information you have given is accurate</li>
              <li>Your signature (a typed name is enough if sending by email)</li>
            </ol>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1.5 mt-4">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950">
                Send your notice to our Grievance Officer:
              </h3>
              <p className="font-semibold text-slate-900">Mubashir Manayath</p>
              <p className="text-xs sm:text-sm text-slate-700">Grievance Officer, Bettermend Private Limited</p>
              <p className="text-xs sm:text-sm text-slate-700">1st Floor, Chemmili Complex, Valakolam, Tirurangadi, Malappuram - 676508, Kerala</p>
              <p className="text-xs sm:text-sm text-slate-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:mubashirmanayath@bettermend.in" className="text-[#030C54] font-semibold underline hover:text-blue-800">
                  mubashirmanayath@bettermend.in
                </a>
              </p>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm pt-2">
              We will acknowledge your notice within 48 hours and aim to deal with it within 15 days. Where the notice is complete and appears valid, we may remove or disable access to the content while we look into it. We may share your notice with the person who posted the content so that they can respond.
            </p>
          </section>

          {/* 10. Response by the content owner */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              10. Response by the content owner
            </h2>
            <p>
              If your content has been removed and you believe this was a mistake or that you have the right to post it, please write to us at the address above and explain why, with any proof. We will review your reply fairly. If we find the content is lawful, we may restore it. Nothing in this section affects either party&apos;s right to go to court.
            </p>
          </section>

          {/* 11. Repeat infringement */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              11. Repeat infringement
            </h2>
            <p>
              We may suspend or close the account of any vendor, partner or user who repeatedly posts content that infringes the rights of others.
            </p>
          </section>

          {/* 12. Government and court orders */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              12. Government and court orders
            </h2>
            <p>
              We will remove or disable access to content when a court or competent government authority directs us to under law.
            </p>
          </section>

          {/* 13. Disclaimer */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              13. Disclaimer
            </h2>
            <p>
              This notice is intended to give general information about our intellectual property practices. It does not limit any right that you or Bettermend has under law, and it does not give anyone a licence to Bettermend&apos;s intellectual property except as stated here.
            </p>
          </section>

          {/* 14. Changes */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              14. Changes
            </h2>
            <p>
              We may update this notice from time to time. The latest version will always be on the Platform, with its effective date.
            </p>
          </section>

          {/* 15. Governing law */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              15. Governing law
            </h2>
            <p>
              This notice is governed by the laws of India. Courts at Malappuram, Kerala will have jurisdiction over any dispute arising from it, subject to any rights you have under applicable law.
            </p>
          </section>

          {/* 16. Contact */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-950 font-heading">
              16. Contact
            </h2>
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1.5">
              <p className="font-semibold text-slate-900">Bettermend Private Limited</p>
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
