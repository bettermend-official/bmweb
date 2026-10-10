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
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-900 font-sans antialiased overflow-x-hidden">

      {/* 1. Floating Capsule Navbar (Screenshot Base) */}
      <Navbar activePage="home" />

      {/* 2. Hero Section Card */}
      <section className="pt-[105px] sm:pt-[123px] pb-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
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
              <p className="flex items-center gap-1.5 flex-wrap">
                <span>Created with</span>
                <Heart size={20} className="text-rose-500 fill-rose-500 inline-block shrink-0" />
                <span>in Kerala</span>
              </p>
              <p>Built for the world</p>
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
                  <FaApple className="w-6 h-6 shrink-0 text-white" />
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
                  <IoLogoGooglePlaystore className="w-5 h-5 shrink-0 text-white" />
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
      <section className="pt-6 pb-2 sm:pt-8 sm:pb-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto text-center">
        <div className="space-y-2.5 sm:space-y-3">
          <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-black text-slate-950 tracking-tight leading-[1.1] font-montserrat select-none">
            India&apos;s ever <br />
            super app
          </h2>

          <div className="space-y-0.5 text-xs sm:text-sm lg:text-base text-slate-700 font-sans font-medium">
            <p className="flex items-center justify-center gap-1.5 flex-wrap">
              <span>created with</span>
              <Heart size={16} className="text-rose-600 fill-rose-600 inline-block shrink-0" />
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
