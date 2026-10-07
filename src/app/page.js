import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurServiceSection from "@/components/OurServiceSection";
import EcosystemSection from "@/components/EcosystemSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import NewsletterSection from "@/components/NewsletterSection";
import { Heart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-900 font-sans antialiased overflow-x-hidden">

      {/* 1. Floating Capsule Navbar (Screenshot Base) */}
      <Navbar activePage="home" />

      {/* 2. Hero Section Card (Figma Exact: 1312px width, 552px height, 38px border-radius) */}
      <section className="pt-[105px] sm:pt-[123px] pb-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
        <div className="relative w-full rounded-[28px] sm:rounded-[38px] overflow-hidden min-h-[480px] sm:min-h-[552px] lg:h-[552px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] flex items-center selection:bg-white selection:text-[#030C54]">

          {/* Background Image: Taxi & City Night */}
          <Image
            src="/heroimage.png"
            alt="BetterMend Super App Taxi"
            fill
            priority
            className="object-cover object-right sm:object-center"
          />

          {/* Left Dark Gradient Overlay for Maximum Typography Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 sm:via-black/45 to-transparent z-10 pointer-events-none" />

          {/* Foreground Hero Content */}
          <div className="relative z-20 p-6 sm:p-12 lg:p-16 max-w-2xl text-left">

            {/* Headline (Montserrat 800, 80px, line-height 100%, letter-spacing -1%, uppercase) */}
            <h1
              className="text-4xl sm:text-6xl lg:text-[80px] font-extrabold font-montserrat text-white uppercase tracking-[-0.01em] leading-[1.0] select-none"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              INDIA&apos;S EVER <br />
              SUPER APP
            </h1>

            {/* Subtitle (Figma Exact: Roboto 400, 21px, line-height 140%, letter-spacing 1%) */}
            <div
              className="mt-5 sm:mt-6 space-y-0.5 text-white/95 font-roboto font-normal text-[15px] sm:text-[18px] lg:text-[21px] leading-[1.4] tracking-[0.01em]"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              <p>Created with love in Kerala</p>
              <p>Build for the world</p>
            </div>

            {/* CTA & App Store Badges */}
            <div className="mt-8 sm:mt-10">
              <p
                className="text-white/95 font-roboto font-normal text-[15px] sm:text-[18px] lg:text-[21px] leading-[1.4] tracking-[0.01em] mb-3"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Get the BetterMend App
              </p>

              <div className="flex flex-wrap items-center gap-3">

                {/* Apple Store Badge */}
                <a
                  href="#download"
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-white/90 bg-black/60 backdrop-blur-md text-white hover:bg-black/90 hover:scale-105 transition-all shadow-md"
                >
                  <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.7-84.5-22.7-46.9 0-92.4 26.5-116.6 68.7-49.9 86.8-12.8 215.1 35.4 284.7 23.6 34.1 51.2 72.3 87.8 71 35.6-1.4 49.4-22.8 89.6-22.8 39.9 0 53 22.8 89.6 22.4 37.6-.5 62-34.9 85.5-69.1 27.2-40 38.4-78.7 38.9-80.7-1.5-.8-75.1-28.8-75.6-114.7zM259.4 75.6c16-19.4 26.8-46.6 23.8-75.6-24.9 1-55.5 16.6-73.4 37.6-15.8 18.3-29.7 45.8-25.9 74.3 27.8 2.2 56.6-13.6 75.5-36.3z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[9px] text-white/80 font-normal">Available on the</span>
                    <span className="block text-xs font-bold font-heading">App Store</span>
                  </div>
                </a>

                {/* Google Play Store Badge */}
                <a
                  href="#download"
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-white/90 bg-black/60 backdrop-blur-md text-white hover:bg-black/90 hover:scale-105 transition-all shadow-md"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 512 512">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 118.1 26.8c12.1 6.1 20 18.2 20 31.5 0 13.3-7.9 25.4-20 31.5zm-300.5 40.7l60.1 60.1L104.6 499l220.7-221.3-63.5-11.4z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[8px] text-white/80 uppercase font-semibold">GET IT ON</span>
                    <span className="block text-xs font-bold font-heading">Google Play</span>
                  </div>
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Our Service Section (4-Cards Grid) */}
      <OurServiceSection />

      {/* 4. One Platform, Four Integrated Apps Section */}
      <EcosystemSection />

      {/* 5. Empowering Region, Connecting Communities (About Section) */}
      <AboutSection />

      {/* 6. Frequently Asked Questions Section */}
      <FaqSection />

      {/* 7. Join Us In Uplifting Millions (Newsletter Section) */}
      <NewsletterSection />

      {/* 8. Super App Regional Branding Ribbon (Center aligned, sentence case with only 'I' capital) */}
      <section className="pt-6 pb-2 sm:pt-8 sm:pb-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto text-center">
        <div className="space-y-2.5 sm:space-y-3">
          <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-black text-slate-950 tracking-tight leading-[1.1] font-montserrat select-none">
            India&apos;s ever <br />
            super app
          </h2>

          <div className="space-y-0.5 text-xs sm:text-sm lg:text-base text-slate-700 font-sans font-medium">
            <p className="flex items-center justify-center gap-1.5 flex-wrap">
              <span>created with</span>
              <Heart size={16} className="text-rose-600 fill-rose-600 inline-block animate-pulse shrink-0" />
              <span>in kerala</span>
            </p>
            <p className="text-slate-500 font-normal">built for the world</p>
          </div>
        </div>
      </section>

      {/* 9. Footer Capsule */}
      <Footer />

    </div>
  );
}
