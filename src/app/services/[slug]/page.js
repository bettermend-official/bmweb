"use client";
import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Car,
  Bike,
  Wrench,
  ShoppingBag,
  Globe,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  Zap,
  Users,
  Building2,
  FileText,
  CreditCard,
  Droplets,
  Lightbulb,
  Stethoscope,
  Hammer,
  GraduationCap,
  Laptop,
} from "lucide-react";

// Complete dataset for all 4 services from PDF developer handoff
const servicesData = {
  transportation: {
    id: "transportation",
    slug: "transportation",
    title: "BetterMend Transportation",
    navLabel: "Transportation",
    h1: "Move Around With a Simpler Way to Travel",
    tagline: "Move with ease. Stay connected. Keep it simple.",
    image: "/trasport.jpeg",
    icon: Car,
    summary:
      "BetterMend Transportation is designed to connect people with convenient local and regional mobility options through one simple platform. From everyday commuting and local travel to larger group journeys, BetterMend brings different transportation options together within its wider super app ecosystem.",
    connectedOverview: {
      title: "Everyday Transportation, Connected",
      description:
        "Getting around should not require managing multiple services or searching through different options. BetterMend is building a connected transportation experience that brings local mobility options closer to the people who need them. The goal is simple: make everyday transportation easier to discover, request and manage.",
      quote: "Simple transportation for everyday life.",
    },
    optionsHeading: "Transportation Options",
    optionsSubheading:
      "BetterMend Transportation is designed around a range of mobility options that can serve different travel needs.",
    options: [
      {
        title: "Bikes",
        desc: "Convenient mobility for short local journeys and everyday travel.",
        icon: Bike,
        badge: "Short Journeys",
      },
      {
        title: "Autos",
        desc: "A practical option for local commuting and point to point travel.",
        icon: Zap,
        badge: "Local Commute",
      },
      {
        title: "Prime Sedans",
        desc: "Comfortable passenger transportation for everyday journeys and selected travel requirements.",
        icon: Car,
        badge: "Comfort & Style",
      },
      {
        title: "Seven Seater Cars",
        desc: "More space for families, groups and journeys that require additional passenger capacity.",
        icon: Users,
        badge: "Family & Groups",
      },
    ],
    pillars: [
      {
        title: "Local and Regional Mobility",
        desc: "BetterMend is designed to support transportation needs within cities as well as selected regional travel requirements. Whether you are travelling for work, visiting a nearby area, meeting family or simply moving around your community, the BetterMend transportation ecosystem is designed to make the experience simpler.",
      },
      {
        title: "A More Connected Transportation Experience",
        desc: "BetterMend brings transportation into the wider super app experience. Customers can discover transportation alongside other everyday services such as Delivery, Workers and E Services. This connected approach is designed to reduce the need to move between multiple platforms for different everyday requirements. One platform. More ways to move.",
      },
    ],
    features: [
      {
        title: "Pricing Approach",
        desc: "BetterMend aims to create a transportation experience with clear and understandable pricing. The platform is designed to support transparent fare experiences and practical options for everyday commuters. Where applicable, pricing and fare policies may vary by service, location, time and transportation category.",
      },
      {
        title: "GPS and Trip Visibility",
        desc: "BetterMend Transportation is designed to support digital trip visibility through location based technology. Where available, customers can receive relevant trip information and transportation updates through the platform. Location and tracking features may vary depending on the service, vehicle and operating area.",
      },
      {
        title: "Safety and Support",
        desc: "Safety is an important part of a connected transportation experience. BetterMend aims to provide appropriate support features for transportation services, including relevant trip information and safety assistance where available. Specific safety and support features may vary depending on the service and operating location.",
      },
      {
        title: "Built for Everyday Commuting",
        desc: "From going to work and college to visiting family, shopping, attending appointments or travelling around your city, transportation is part of everyday life. BetterMend is designed to make these everyday journeys easier to discover and manage through one connected platform.",
      },
    ],
    workflowHeading: "How BetterMend Transportation Works",
    workflow: [
      {
        step: "01",
        title: "Choose your transportation requirement",
        desc: "Select the type of transportation that matches your journey.",
      },
      {
        step: "02",
        title: "Provide your trip details",
        desc: "Enter the relevant pickup, destination and travel information.",
      },
      {
        step: "03",
        title: "Request a transportation option",
        desc: "Submit your request through the BetterMend platform where the service is available.",
      },
      {
        step: "04",
        title: "Connect with transportation",
        desc: "The platform is designed to connect your request with an applicable transportation option based on availability and location.",
      },
      {
        step: "05",
        title: "Complete your journey",
        desc: "Travel to your destination through the selected transportation service.",
      },
      {
        step: "06",
        title: "Share your experience",
        desc: "Customer feedback can help improve the overall transportation experience.",
      },
    ],
    partnerSection: {
      tag: "FOR OPERATORS & DRIVERS",
      title: "For Transportation Providers",
      desc: "BetterMend is also building an ecosystem for transportation providers and local mobility operators. The goal is to create digital opportunities for eligible transportation providers to connect with customers and participate in a connected mobility network. If you operate a taxi, auto, passenger vehicle or other eligible transportation service, you can explore becoming part of the BetterMend transportation ecosystem, subject to applicable onboarding and service requirements.",
      btnText: "Join Transportation Network",
      btnHref: "/contact",
    },
    faqs: [
      {
        q: "What is BetterMend Transportation?",
        a: "BetterMend Transportation is a mobility service within the BetterMend super app ecosystem, designed to connect customers with local and regional transportation options.",
      },
      {
        q: "What transportation options are available?",
        a: "The BetterMend Transportation category is designed around options such as bikes, autos, prime sedans and seven seater cars, subject to availability and location.",
      },
      {
        q: "Can I use BetterMend for daily commuting?",
        a: "BetterMend Transportation is designed to support everyday commuting and local travel requirements, subject to service availability in your area.",
      },
      {
        q: "Does BetterMend offer auto transportation?",
        a: "Autos are one of the transportation categories included within the BetterMend mobility ecosystem, subject to local availability.",
      },
      {
        q: "Does BetterMend offer sedan transportation?",
        a: "Prime sedans are included within the BetterMend transportation offering, subject to availability and applicable service areas.",
      },
      {
        q: "Are seven seater vehicles available?",
        a: "Seven seater cars are part of the BetterMend transportation category and may be available depending on location and vehicle availability.",
      },
      {
        q: "Does BetterMend provide regional transportation?",
        a: "The BetterMend transportation vision includes local and regional mobility options. Actual service coverage depends on the operating area and available transportation providers.",
      },
      {
        q: "Does BetterMend have live GPS tracking?",
        a: "The BetterMend transportation experience is designed to support location based trip visibility and tracking features where available.",
      },
      {
        q: "Does BetterMend provide SOS support?",
        a: "Safety and support features may be available for applicable transportation services. Specific features depend on the service and operating location.",
      },
      {
        q: "How much does BetterMend Transportation cost?",
        a: "Transportation pricing can vary depending on the service, vehicle category, location, trip details and applicable fare policies.",
      },
      {
        q: "Is BetterMend Transportation available everywhere?",
        a: "Service availability depends on location. BetterMend is expanding its transportation ecosystem progressively.",
      },
      {
        q: "Can transportation providers join BetterMend?",
        a: "Eligible transportation providers can explore becoming part of the BetterMend transportation ecosystem, subject to applicable onboarding and service requirements.",
      },
    ],
    cta: {
      h2: "Move around with a simpler experience.",
      desc: "Explore BetterMend Transportation and discover a connected way to access everyday mobility.",
      tag: "Move with ease. Stay connected.",
    },
  },

  delivery: {
    id: "delivery",
    slug: "delivery",
    title: "BetterMend Delivery",
    navLabel: "Delivery",
    h1: "Everything You Need, From Nearby Stores",
    tagline: "Groceries. Food. Pharmacy essentials. One simpler experience.",
    image: "/delivery.jpeg",
    icon: ShoppingBag,
    summary:
      "BetterMend Delivery is designed to make local shopping simpler by bringing multiple neighborhood businesses together in one delivery experience. Choose products from different participating stores, add them to one cart where supported, and receive your selected items through a connected local delivery service.",
    connectedOverview: {
      title: "A Better Way to Shop Locally",
      description:
        "Sometimes what you need is available at different stores. Vegetables from one shop. Bakery items from another. Pharmacy essentials from somewhere else. BetterMend is designed to bring supported neighborhood stores into one connected shopping experience so customers can discover everyday products without managing separate orders across different platforms.",
      quote: "One cart. Multiple local stores. A simpler way to shop.",
    },
    optionsHeading: "Delivery Product Categories",
    optionsSubheading:
      "Order everyday essentials, fresh meals, and pharmacy items from supported local stores.",
    options: [
      {
        title: "Fresh Groceries",
        desc: "Find everyday grocery requirements: fresh vegetables, fruits, daily household essentials, and packaged groceries.",
        icon: ShoppingBag,
        badge: "Fresh & Packaged",
      },
      {
        title: "Food and Bakery",
        desc: "Discover food and bakery products: prepared hot food, bakery items, quick snacks, and meals from local businesses.",
        icon: Sparkles,
        badge: "Hot & Fresh",
      },
      {
        title: "Pharmacy & Essentials",
        desc: "Selected pharmacy and health essentials handled strictly according to provider and regulatory requirements.",
        icon: ShieldCheck,
        badge: "Health & Care",
      },
      {
        title: "Multi Store Shopping",
        desc: "Combine products from up to 3 participating neighborhood stores into a single consolidated checkout and delivery.",
        icon: Zap,
        badge: "Up to 3 Stores",
      },
    ],
    pillars: [
      {
        title: "Multi Store Shopping Experience",
        desc: "One of the core ideas behind BetterMend Delivery is multi vendor shopping. Where supported, customers can combine products from up to three participating neighborhood stores in one cart. A coordinated delivery experience can then bring the selected items together for delivery.",
      },
      {
        title: "Local Stores, One Connected Marketplace",
        desc: "BetterMend Delivery helps bring local businesses closer to customers through a connected digital marketplace. Instead of relying only on separate store visits or multiple ordering platforms, customers can discover participating neighborhood businesses through BetterMend. For local businesses, the platform creates another digital channel to reach customers in their community.",
      },
    ],
    features: [
      {
        title: "Designed for Faster Local Delivery",
        desc: "BetterMend Delivery is designed around convenient local delivery and an efficient multi store fulfilment model. The intended service model can support fast doorstep delivery, including a target delivery window of 10 to 30 minutes for eligible orders and locations. Actual delivery time can depend on store preparation, distance, traffic, product availability, order size, weather and delivery partner availability.",
      },
      {
        title: "Live Delivery Visibility",
        desc: "BetterMend is designed to provide customers with useful delivery information throughout the order journey. Where supported, customers can receive live location and delivery updates through the platform. Tracking availability can depend on the delivery service, order status and operating area.",
      },
      {
        title: "Simple and Transparent Ordering",
        desc: "Customers should be able to understand what they are ordering before completing a purchase. The BetterMend delivery experience is designed to provide relevant product, store, delivery and payment information during checkout. Applicable product prices, delivery charges, taxes and other fees can vary depending on the order and participating store.",
      },
      {
        title: "Part of the BetterMend Super App",
        desc: "Delivery is one of the core service categories within the BetterMend super app ecosystem alongside Transportation, Workers and E Services. Together, these services are designed to create one connected experience for everyday needs.",
      },
    ],
    workflowHeading: "How BetterMend Delivery Works",
    workflow: [
      {
        step: "01",
        title: "Discover local stores",
        desc: "Explore participating businesses and the products available in your area.",
      },
      {
        step: "02",
        title: "Add what you need",
        desc: "Choose products from one or multiple participating stores.",
      },
      {
        step: "03",
        title: "Build your cart",
        desc: "Where supported, combine products from up to three neighborhood stores in one cart.",
      },
      {
        step: "04",
        title: "Confirm your order",
        desc: "Review your selected items, delivery details and applicable charges before completing the order.",
      },
      {
        step: "05",
        title: "Local delivery",
        desc: "A delivery partner coordinates the collection and delivery of the selected items where the multi store delivery service is supported.",
      },
      {
        step: "06",
        title: "Receive your order",
        desc: "Get your selected products at the delivery location provided during checkout.",
      },
    ],
    partnerSection: {
      tag: "FOR LOCAL SHOPS & FLEET",
      title: "For Local Businesses & Delivery Partners",
      desc: "Are you a local store, restaurant, bakery, pharmacy or other neighborhood business? BetterMend helps you reach nearby customers, showcase products, receive digital orders, and participate in local delivery. Delivery partners can also become part of the wider BetterMend ecosystem subject to onboarding and operating requirements.",
      btnText: "Register as Merchant / Partner",
      btnHref: "/contact",
    },
    faqs: [
      {
        q: "What is BetterMend Delivery?",
        a: "BetterMend Delivery is a local multi vendor delivery service within the BetterMend super app ecosystem, designed to connect customers with participating neighborhood stores.",
      },
      {
        q: "Can I order from multiple stores in one cart?",
        a: "Where supported, customers can combine products from up to three participating neighborhood stores in one cart.",
      },
      {
        q: "What can I order through BetterMend Delivery?",
        a: "Depending on location and participating stores, customers may find groceries, fresh food, bakery products, pharmacy items and other everyday essentials.",
      },
      {
        q: "Can I order groceries through BetterMend?",
        a: "Yes. Grocery products are one of the core categories supported by the BetterMend Delivery concept, subject to participating store and location availability.",
      },
      {
        q: "Can I order food through BetterMend?",
        a: "Food and bakery products are part of the BetterMend Delivery offering, subject to participating businesses and local availability.",
      },
      {
        q: "Can I order pharmacy products?",
        a: "Selected pharmacy and essential items may be available through participating providers, subject to applicable product, provider and regulatory requirements.",
      },
      {
        q: "How does multi store delivery work?",
        a: "Where the feature is supported, customers can add products from up to three participating stores to one cart. A coordinated delivery process can then collect the selected items and deliver them together.",
      },
      {
        q: "How fast is BetterMend Delivery?",
        a: "The delivery model is designed around fast local fulfilment, with a target window of 10 to 30 minutes for eligible orders and locations. Actual delivery time can vary depending on operating conditions.",
      },
      {
        q: "Can I track my delivery?",
        a: "Where supported, BetterMend is designed to provide live delivery and location updates through the platform.",
      },
      {
        q: "Are all stores available everywhere?",
        a: "No. Participating stores and product availability depend on location and the BetterMend delivery network.",
      },
      {
        q: "Does BetterMend charge a delivery fee?",
        a: "Applicable delivery charges can vary depending on the order, location, store and delivery conditions. Relevant charges should be shown during checkout.",
      },
      {
        q: "Can local businesses join BetterMend Delivery?",
        a: "Eligible local businesses can explore participating in the BetterMend delivery ecosystem, subject to applicable onboarding and service requirements.",
      },
    ],
    cta: {
      h2: "Shop local. Discover more.",
      desc: "Get what you need through one connected delivery experience. Explore BetterMend Delivery and discover everyday products from participating neighborhood businesses.",
      tag: "One cart. Multiple local stores. A simpler way to shop.",
    },
  },

  workers: {
    id: "workers",
    slug: "workers",
    title: "BetterMend Workers",
    navLabel: "Workers",
    h1: "Get Things Done With the Right Professional",
    tagline: "Local skills. Everyday solutions. One platform.",
    image: "/worker.jpeg",
    icon: Wrench,
    summary:
      "Everyday life comes with jobs that need the right skills. Electrical work. Plumbing. Carpentry. Tutoring. Technical assistance. Freelance services. BetterMend Workers is designed to connect people with skilled professionals through a simple and trusted digital experience.",
    connectedOverview: {
      title: "Professional Services, Made Simpler",
      description:
        "Finding the right person for a job can often mean asking friends, searching online, making calls, and comparing different options. BetterMend is building a simpler way to discover professional services. The Workers ecosystem is designed to bring customers and skilled professionals together through one connected platform. From household repairs to learning support and technical requirements, the goal is simple: make it easier to find the right person for the job.",
      quote: "Find the right service. Connect with the right professional.",
    },
    optionsHeading: "Skilled Trade & Professional Categories",
    optionsSubheading:
      "Verified specialists ready to support everyday household repairs, learning, and freelance technical needs.",
    options: [
      {
        title: "Electrical Services",
        desc: "Repairs, switch & socket work, lighting, fan installations, troubleshooting, and household electrical requirements.",
        icon: Lightbulb,
        badge: "Certified Electricians",
      },
      {
        title: "Plumbing Services",
        desc: "Leak repairs, tap/faucet fixes, pipe work, drainage issues, bathroom plumbing, and water connection solutions.",
        icon: Droplets,
        badge: "Expert Plumbers",
      },
      {
        title: "Carpentry Services",
        desc: "Furniture repair, door and window work, shelf installations, woodwork, assembly, and maintenance.",
        icon: Hammer,
        badge: "Master Carpenters",
      },
      {
        title: "Tutoring & Learning",
        desc: "Academic tutoring, subject specific learning support, homework assistance, and exam preparation for students.",
        icon: GraduationCap,
        badge: "Academic Tutors",
      },
      {
        title: "Technical & Freelance",
        desc: "Specialized computer support, digital tasks, technical assistance, and freelance professional services.",
        icon: Laptop,
        badge: "Tech & Freelancers",
      },
    ],
    pillars: [
      {
        title: "Built Around Local Professionals",
        desc: "BetterMend Workers is designed around the people who provide valuable skills within local communities. The goal is to create a simple digital connection between customers who need help and professionals who can provide it. As the BetterMend ecosystem grows, the Workers category can support a wider range of professional services and local expertise.",
      },
      {
        title: "Part of the BetterMend Super App",
        desc: "Workers is one of the core BetterMend service categories alongside Transportation, Delivery and E Services, helping connect customers with professional services through one platform. One app. More of everyday life.",
      },
    ],
    features: [
      {
        title: "Transparent & Standardized Access",
        desc: "Clear service categories and standardized arrangements help both customers and technicians understand job scopes and expectations upfront.",
      },
      {
        title: "Vetted & Verified Network",
        desc: "Professionals undergo onboarding verifications to ensure reliability and safety for in-home service appointments.",
      },
      {
        title: "Direct Hyperlocal Matching",
        desc: "Our platform matches service requests with available qualified technicians nearby to reduce waiting time.",
      },
      {
        title: "Created in Kerala. Built for the World.",
        desc: "BetterMend was created in Kerala with an understanding of the everyday service needs of local communities, built with the ambition to scale across India and wider markets.",
      },
    ],
    workflowHeading: "How the Workers Service Works",
    workflow: [
      {
        step: "01",
        title: "Describe the service you need",
        desc: "Tell BetterMend what kind of professional service you are looking for.",
      },
      {
        step: "02",
        title: "Find the right service category",
        desc: "Choose the professional service that best matches your requirement.",
      },
      {
        step: "03",
        title: "Connect with a professional",
        desc: "The platform is designed to connect customers with suitable professionals based on the service requirement and applicable availability.",
      },
      {
        step: "04",
        title: "Complete the service",
        desc: "The professional provides the requested service according to the applicable service arrangements.",
      },
      {
        step: "05",
        title: "Share your experience",
        desc: "Customer feedback can help improve the overall service experience and the wider BetterMend ecosystem.",
      },
    ],
    partnerSection: {
      tag: "FOR SKILLED TRADESPEOPLE",
      title: "Are You a Skilled Professional?",
      desc: "BetterMend is building opportunities for skilled professionals to connect with customers who need their services. If you are an electrician, plumber, carpenter, tutor, technician, freelancer or another service professional, you can explore becoming part of the BetterMend professional ecosystem. Build your presence. Connect with local demand. Grow your opportunities.",
      btnText: "Join as a Verified Professional",
      btnHref: "/contact",
    },
    faqs: [
      {
        q: "What is BetterMend Workers?",
        a: "BetterMend Workers is a professional services category within the BetterMend super app ecosystem, designed to connect customers with local professionals for everyday service requirements.",
      },
      {
        q: "What types of professional services does BetterMend Workers cover?",
        a: "The Workers category is designed around services such as electrical work, plumbing, carpentry, tutoring, technical assistance and freelance professional services.",
      },
      {
        q: "Can I find an electrician through BetterMend?",
        a: "Electrical services are one of the professional service categories planned within the BetterMend Workers ecosystem.",
      },
      {
        q: "Does BetterMend include plumbing services?",
        a: "Plumbing is one of the professional service categories included within the BetterMend Workers ecosystem.",
      },
      {
        q: "Does BetterMend include carpentry services?",
        a: "Carpentry is one of the professional service categories included within the BetterMend Workers ecosystem.",
      },
      {
        q: "Does BetterMend offer tutoring services?",
        a: "Tutoring and learning support are included within the broader BetterMend Workers service category.",
      },
      {
        q: "What are technical and freelance services?",
        a: "Technical and freelance services refer to specialized professional requirements that may be provided by qualified professionals through the BetterMend ecosystem.",
      },
      {
        q: "How does Workers fit into the BetterMend super app?",
        a: "Workers is one of the core BetterMend service categories alongside Transportation, Delivery and E Services, helping connect customers with professional services through one platform.",
      },
      {
        q: "Where is BetterMend from?",
        a: "BetterMend was created in Kerala, India, with a broader ambition to build technology for communities in India and beyond.",
      },
      {
        q: "Is Workers available in every location?",
        a: "Service availability and professional coverage can vary by location as the BetterMend ecosystem develops and expands.",
      },
    ],
    cta: {
      h2: "Need help with an everyday professional requirement?",
      desc: "Explore the BetterMend Workers ecosystem and discover a simpler way to connect with local skills.",
      tag: "Find the right service. Connect with the right professional.",
    },
  },

  eservices: {
    id: "eservices",
    slug: "e-services",
    title: "BetterMend E Services",
    navLabel: "E Services",
    h1: "Your Everyday Digital Services, Made Simpler",
    tagline: "Less waiting. Less searching. A simpler digital experience.",
    image: "/e service.jpeg",
    icon: Globe,
    summary:
      "BetterMend E Services is designed to bring essential civic, public utility and professional services together through one simple digital platform. From electricity and water related payments to municipal services, civic documents and professional appointments, BetterMend aims to make everyday digital tasks easier to discover and manage.",
    connectedOverview: {
      title: "One Place for Everyday Digital Services",
      description:
        "Everyday public and professional services can often require different websites, offices, forms and processes. BetterMend is designed to bring selected services together through one connected digital experience. The goal is simple: make essential services easier to access while reducing unnecessary complexity.",
      quote: "Less searching. Less complexity. More convenience.",
    },
    optionsHeading: "Digital Utility & Civic Categories",
    optionsSubheading:
      "Manage public utility payments, civic registrations, and appointments without waiting in queues.",
    options: [
      {
        title: "KSEB Electricity Services",
        desc: "Access electricity related payment services and bill inquiries through a simpler digital experience.",
        icon: Lightbulb,
        badge: "Power Utility",
      },
      {
        title: "KWA Water Services",
        desc: "Manage applicable water authority payment requirements and connection records through the platform.",
        icon: Droplets,
        badge: "Water Board",
      },
      {
        title: "Municipal & Tax Services",
        desc: "Access selected municipal tax and civic payment services where supported.",
        icon: Building2,
        badge: "Civic Taxes",
      },
      {
        title: "Civic & E-Governance",
        desc: "Support for e-governance registrations, civic document support, and public certificate processes.",
        icon: FileText,
        badge: "Public Certificates",
      },
      {
        title: "Doctor & Expert Appointments",
        desc: "Discover appointment scheduling options for doctors, experts, and professional advisors.",
        icon: Stethoscope,
        badge: "Healthcare & Experts",
      },
    ],
    pillars: [
      {
        title: "Designed to Reduce Unnecessary Queues",
        desc: "Many everyday services require people to spend time searching for information, visiting offices or managing separate processes. BetterMend E Services is designed to bring supported services into a more convenient digital experience. The aim is not to replace official authorities or service providers. It is to make supported digital access simpler for customers.",
      },
      {
        title: "Digital Receipts & Payment Convenience",
        desc: "Keeping records of important payments matters. Where supported, BetterMend E Services is designed to provide digital confirmation or official digital receipts for applicable transactions. Transparent payment methods and processing ensure peace of mind.",
      },
    ],
    features: [
      {
        title: "No Extra Platform Surcharges",
        desc: "Where a service does not have an additional BetterMend service fee, transparent transaction details are shown before completion.",
      },
      {
        title: "Instant Digital Receipts",
        desc: "Receive digital confirmation and downloadable receipts for official record-keeping on completed settlements.",
      },
      {
        title: "Unified Civic Hub",
        desc: "Brings public utilities, municipal requirements, and expert bookings into one accessible interface.",
      },
      {
        title: "Official Channel Alignment",
        desc: "Works alongside official authorities to simplify access without altering underlying governance guidelines.",
      },
    ],
    workflowHeading: "How BetterMend E Services Works",
    workflow: [
      {
        step: "01",
        title: "Choose the service you need",
        desc: "Select the civic, utility or professional service that matches your requirement.",
      },
      {
        step: "02",
        title: "Provide the required details",
        desc: "Enter the information needed to process or request the selected service.",
      },
      {
        step: "03",
        title: "Review the applicable information",
        desc: "Check the service details, applicable charges and requirements before continuing.",
      },
      {
        step: "04",
        title: "Complete the request or payment",
        desc: "Submit the request or complete the applicable payment through the supported process.",
      },
      {
        step: "05",
        title: "Receive confirmation",
        desc: "Where supported, receive digital confirmation or an applicable receipt for your transaction or request.",
      },
    ],
    partnerSection: {
      tag: "FOR SERVICE PROVIDERS & CLINICS",
      title: "For Service Providers and Professionals",
      desc: "BetterMend is also designed to create a connected digital environment for eligible service providers and professionals. Doctors, experts, businesses and other eligible providers can participate in supported appointment or service categories. The goal is to create a simpler connection between people who need services and the providers who deliver them.",
      btnText: "Partner with E-Services",
      btnHref: "/contact",
    },
    faqs: [
      {
        q: "What is BetterMend E Services?",
        a: "BetterMend E Services is a digital services category within the BetterMend super app ecosystem, designed to bring selected civic, public utility and professional services together through one platform.",
      },
      {
        q: "What services can I access through BetterMend E Services?",
        a: "Depending on availability, services may include electricity related payments, water authority payments, municipal taxes, e governance registrations, civic document support, public certificates, and doctor or professional appointments.",
      },
      {
        q: "Can I pay my KSEB electricity bill through BetterMend?",
        a: "KSEB electricity payment services are part of the E Services category and may be available subject to the applicable service and operating area.",
      },
      {
        q: "Can I pay KWA water charges through BetterMend?",
        a: "KWA water related payment services are included within the E Services category and may be available subject to applicable service availability.",
      },
      {
        q: "Can I pay municipal taxes through BetterMend?",
        a: "Selected municipal tax payment services may be supported through BetterMend E Services depending on the applicable municipality and service availability.",
      },
      {
        q: "What are e governance services?",
        a: "E governance services refer to supported digital government and civic processes that can be accessed or requested through an online service experience.",
      },
      {
        q: "Can BetterMend help with certificates and civic documents?",
        a: "Selected public certificate and civic document related services may be supported through BetterMend E Services depending on the service and applicable requirements.",
      },
      {
        q: "Can I book a doctor through BetterMend?",
        a: "Doctor and professional appointment scheduling is part of the E Services category and may be available for supported providers and locations.",
      },
      {
        q: "Does BetterMend charge extra fees for E Services?",
        a: "Applicable fees depend on the selected service and provider requirements. Where a service does not have an additional BetterMend service fee, the applicable transaction details can be shown before completion.",
      },
      {
        q: "Will I receive a digital receipt?",
        a: "Where supported, BetterMend E Services is designed to provide digital confirmation or an applicable receipt for completed transactions.",
      },
      {
        q: "Are E Services available everywhere?",
        a: "Service availability depends on the specific service, location and applicable provider or authority. BetterMend is expanding its digital service ecosystem progressively.",
      },
      {
        q: "Does BetterMend replace government departments?",
        a: "No. BetterMend is designed to simplify access to supported digital services. Official authorities and service providers remain responsible for their respective services, requirements and processing.",
      },
    ],
    cta: {
      h2: "Make everyday digital services simpler.",
      desc: "Explore BetterMend E Services and discover a more connected way to access supported civic, utility and professional services.",
      tag: "Less searching. Less complexity. More convenience.",
    },
  },
};

// Map URL aliases
const slugMap = {
  transportation: "transportation",
  transport: "transportation",
  delivery: "delivery",
  workers: "workers",
  worker: "workers",
  "e-services": "eservices",
  eservices: "eservices",
};

export default function ServiceDetailPage({ params }) {
  const unwrappedParams = use(params);
  const rawSlug = unwrappedParams.slug;
  const targetKey = slugMap[rawSlug?.toLowerCase()];

  if (!targetKey || !servicesData[targetKey]) {
    notFound();
  }

  const currentService = servicesData[targetKey];
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const navTabs = [
    { key: "transportation", label: "Transportation", href: "/services/transportation" },
    { key: "delivery", label: "Delivery", href: "/services/delivery" },
    { key: "workers", label: "Workers", href: "/services/workers" },
    { key: "eservices", label: "E Services", href: "/services/e-services" },
  ];

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-900 font-sans antialiased overflow-x-hidden">
      
      {/* 1. Header Capsule Navbar */}
      <Navbar activePage="services" />

      {/* 2. Top Navigation Tabs Bar */}
      <section className="pt-[105px] sm:pt-[125px] pb-3 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-md p-2 rounded-full border border-slate-200 shadow-xs max-w-2xl mx-auto">
          {navTabs.map((tab) => {
            const isActive = tab.key === targetKey;
            return (
              <Link
                key={tab.key}
                href={tab.href}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-[#030C54] text-white shadow-md scale-105"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. Hero Header Section */}
      <section className="py-3 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-6 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Headings & Intro */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-black uppercase tracking-widest font-mono text-blue-200">
                {currentService.title}
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] font-heading font-montserrat text-white">
                {currentService.h1}
              </h1>

              <p className="text-xs sm:text-base text-white/85 leading-relaxed font-sans font-normal pt-1 max-w-xl">
                {currentService.summary}
              </p>

              <div className="pt-2 text-xs sm:text-sm font-semibold text-white/70 italic">
                &ldquo;{currentService.tagline}&rdquo;
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="/#download"
                  className="px-6 py-2.5 rounded-full bg-white text-[#030C54] hover:bg-slate-100 font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
                >
                  Get Started on App
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-full border border-white/40 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Contact Desk
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Showcase Image */}
            <div className="lg:col-span-5 relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-white/5">
              <Image
                src={currentService.image}
                alt={currentService.title}
                fill
                priority
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* 4. Connected Overview & Pillars */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-white rounded-[28px] sm:rounded-[38px] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm text-slate-900">
          
          <div className="max-w-3xl mb-8 text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase font-heading text-slate-950 tracking-tight">
              {currentService.connectedOverview.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {currentService.connectedOverview.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {currentService.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between space-y-3 text-left"
              >
                <h3 className="text-base sm:text-lg font-black uppercase font-heading text-slate-950">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Service Options / Offerings Grid */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-6 sm:p-10 lg:p-12 text-white shadow-2xl">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase font-heading tracking-tight text-white mb-2">
              {currentService.optionsHeading}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
              {currentService.optionsSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {currentService.options.map((opt, idx) => {
              const IconComp = opt.icon || Sparkles;
              return (
                <div
                  key={idx}
                  className="bg-white text-slate-900 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col justify-between space-y-3 text-left hover:-translate-y-1 transition-transform"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#030C54]/5 text-[#030C54] flex items-center justify-center font-bold">
                      <IconComp size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 font-heading block">
                      {opt.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-black font-heading text-slate-950">
                      {opt.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {opt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Step-by-Step Workflow (How it Works 01 to 06) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-white rounded-[28px] sm:rounded-[38px] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm text-slate-900">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase font-heading text-slate-950 tracking-tight">
              {currentService.workflowHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {currentService.workflow.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 text-left flex flex-col justify-between space-y-2"
              >
                <div className="w-9 h-9 rounded-full bg-[#030C54] text-white flex items-center justify-center font-black text-xs font-mono shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-sm sm:text-base font-black uppercase font-heading text-slate-950 pt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Operational Standards & Architecture (4 Key Feature Highlights) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {currentService.features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border border-slate-200/80 shadow-sm text-left flex flex-col justify-between space-y-2"
            >
              <h3 className="text-sm sm:text-base font-black uppercase font-heading text-slate-950">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. For Providers / Professionals / Businesses Banner */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-6 sm:p-10 lg:p-12 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-200">
                {currentService.partnerSection.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading text-white">
                {currentService.partnerSection.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans">
                {currentService.partnerSection.desc}
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href={currentService.partnerSection.btnHref}
                className="px-7 py-3 rounded-full bg-white text-[#030C54] hover:bg-slate-100 font-black text-xs uppercase tracking-wider transition-all shadow-md inline-block text-center"
              >
                {currentService.partnerSection.btnText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions (Service-Specific Accordion) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-white rounded-[28px] sm:rounded-[38px] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm text-slate-900">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Common questions about {currentService.navLabel}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {currentService.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-50/60 transition-all duration-200 text-left"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-slate-100/70 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-black uppercase font-heading text-slate-950">
                      {faq.q}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-[#030C54] text-white rotate-180" : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-200/60 animate-fadeIn">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. Final Call to Action */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-8 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase font-heading text-white tracking-tight mb-3">
            {currentService.cta.h2}
          </h2>

          <p className="text-xs sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed font-sans mb-3">
            {currentService.cta.desc}
          </p>

          <p className="text-xs sm:text-sm font-bold text-white/70 tracking-wider mb-8">
            {currentService.cta.tag}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="/#download"
              className="px-7 py-3 rounded-full bg-white text-[#030C54] hover:bg-slate-100 font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
            >
              EXPLORE BETTERMEND
            </a>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full border border-white/40 hover:bg-white/10 text-white font-black text-xs uppercase tracking-wider transition-all"
            >
              BECOME A PARTNER
            </Link>
          </div>

          <div className="text-[10px] sm:text-xs text-white/60 font-medium tracking-wider uppercase flex flex-wrap items-center justify-center gap-4 sm:gap-6 border-t border-white/10 pt-6">
            <span>Created in Kerala. Built for the world.</span>
          </div>

        </div>
      </section>

      {/* 11. Footer Capsule */}
      <Footer />

    </div>
  );
}
