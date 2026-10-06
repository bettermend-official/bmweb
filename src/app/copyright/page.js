import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Copyright } from "lucide-react";

export const metadata = {
  title: "Copyright Notice | BetterMend",
  description: "Copyright and Intellectual Property Notice for BetterMend platform.",
};

export default function CopyrightPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
            <Copyright size={14} />
            Intellectual Property Notice
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 font-heading">
            Copyright & IP Notice
          </h1>
          <p className="text-xs text-text-muted">
            Effective Date: July 6, 2026 • Last Updated: July 6, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-text-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Ownership of Materials</h2>
            <p>
              All materials, software codes, interfaces, graphics, brand logos, typography, audio assets, and database schemas published across the BetterMend applications (Customer App, Vendor App, Delivery App, Sector Manager) and website are the intellectual property of <strong>BetterMend Technologies Private Limited</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Prohibited Uses</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reproduction, scraping, or redistribution of catalog data or proprietary UI designs without written authorization.</li>
              <li>Reverse engineering or decompilation of Flutter mobile applications or API endpoints.</li>
              <li>Use of BetterMend trademark assets in deceptive or unauthorized third-party commercial applications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Third-Party Licenses</h2>
            <p>
              Open source libraries incorporated within the platform (such as React, Next.js, Flutter modules, and Tailwind CSS) remain under their respective permissive open-source licenses (MIT, Apache 2.0, BSD).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Infringement Contact</h2>
            <p>
              If you believe your intellectual property rights have been infringed on our service, notify our legal department at{" "}
              <a href="mailto:legal@bettermend.com" className="text-primary underline">
                legal@bettermend.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
