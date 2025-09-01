// Base application types
export const baseTypes = {
    "landing-page": [
        {
            id: "landing-page-starter",
            label: "Landing Page (Starter)",
            price: 400000,
            desc: "1-3 pages, template design, basic contact form, mobile responsive, social media links.",
        },
        {
            id: "landing-page-professional",
            label: "Landing Page (Professional)",
            price: 750000,
            desc: "Up to 5 pages, custom design, blog integration, basic CMS, advanced form, basic SEO setup.",
        },
        {
            id: "landing-page-enterprise",
            label: "Landing Page (Enterprise)",
            price: 1500000,
            desc: "5+ pages, premium custom design, advanced animations, A/B testing setup, multi-language support.",
        },
    ],
    "business-website": [
        {
            id: "business-website-starter",
            label: "Business Website (Starter)",
            price: 1500000,
            desc: "Up to 10 pages, CMS (WordPress), custom design, blog, photo gallery, team section.",
        },
        {
            id: "business-website-professional",
            label: "Business Website (Professional)",
            price: 3000000,
            desc: "Up to 20 pages, advanced CMS features, lead generation forms, live chat integration, analytics dashboard.",
        },
        {
            id: "business-website-enterprise",
            label: "Business Website (Enterprise)",
            price: 6000000,
            desc: "20+ pages, multi-language, role-based access, custom module development, API integrations.",
        },
    ],
    dashboard: [
        {
            id: "dashboard-starter",
            label: "Dashboard App (Starter)",
            price: 500000,
            desc: "Single user role, basic data visualization (up to 5 charts), static reports, manual data import.",
        },
        {
            id: "dashboard-professional",
            label: "Dashboard App (Professional)",
            price: 750000,
            desc: "Multi-user roles, interactive dashboard, customizable reports, user management, basic API integration.",
        },
        {
            id: "dashboard-enterprise",
            label: "Dashboard App (Enterprise)",
            price: 1500000,
            desc: "Advanced access control, real-time analytics, data export (PDF/Excel), 3rd party integrations, audit logs.",
        },
    ],
    ecommerce: [
        {
            id: "ecommerce-starter",
            label: "E-commerce (Starter)",
            price: 1000000,
            desc: "Up to 100 products, template-based design, 1 payment gateway, basic inventory management.",
        },
        {
            id: "ecommerce-professional",
            label: "E-commerce (Professional)",
            price: 2000000,
            desc: "Up to 1000 products, custom design, multiple payment gateways, discount/voucher system, customer accounts.",
        },
        {
            id: "ecommerce-enterprise",
            label: "E-commerce (Enterprise)",
            price: 4000000,
            desc: "Unlimited products, multi-vendor support, advanced reporting, API for integrations, subscription models.",
        },
    ],
    "enterprise-portal": [
        {
            id: "enterprise-portal-starter",
            label: "Enterprise Portal (Starter)",
            price: 2000000,
            desc: "Internal portal with document management, basic user directory, and news/announcements.",
        },
        {
            id: "enterprise-portal-professional",
            label: "Enterprise Portal (Professional)",
            price: 3500000,
            desc: "Multi-department structure, basic workflows, CRM/ERP integration (1 system), advanced search.",
        },
        {
            id: "enterprise-portal-enterprise",
            label: "Enterprise Portal (Enterprise)",
            price: 6000000,
            desc: "Custom workflows, SSO integration, comprehensive API layer, advanced security audits, multi-system integration.",
        },
    ],
    sis: [
        {
            id: "sis-starter",
            label: "Student Info System (Starter)",
            price: 1750000,
            desc: "Student database, enrollment management (single program), basic attendance tracking, manual reporting.",
        },
        {
            id: "sis-professional",
            label: "Student Info System (Professional)",
            price: 3000000,
            desc: "Multiple programs, online admissions, gradebook management, parent/student portal, automated reporting.",
        },
        {
            id: "sis-enterprise",
            label: "Student Info System (Enterprise)",
            price: 6000000,
            desc: "Financial aid integration, scheduling automation, compliance reporting, integration with other school systems (LMS, library).",
        },
    ],
    lms: [
        {
            id: "lms-starter",
            label: "Learning Management System (Starter)",
            price: 2000000,
            desc: "Course creation & content upload, basic quizzing, student forum, progress tracking for individuals.",
        },
        {
            id: "lms-professional",
            label: "Learning Management System (Professional)",
            price: 3500000,
            desc: "Advanced assessment tools, certification paths, SCORM/xAPI compliance, live video integration (basic), group management.",
        },
        {
            id: "lms-enterprise",
            label: "Learning Management System (Enterprise)",
            price: 7500000,
            desc: "Gamification, AI-powered recommendations, learning analytics dashboard, multi-tenancy, e-commerce for courses.",
        },
    ],
};

// Tech stack multipliers
export const techStacks = [
    {
        id: "wordpress-theme",
        label: "WordPress (Theme-based)",
        multiplier: 0.7,
    },
    { id: "wordpress-custom", label: "WordPress (Custom)", multiplier: 1.0 },
    { id: "laravel-blade", label: "Laravel + Blade", multiplier: 1.1 },
    { id: "laravel-vue", label: "Laravel + Vue.js", multiplier: 1.3 },
    { id: "mern", label: "MERN Stack", multiplier: 1.5 },
    { id: "nextjs", label: "Next.js + Node", multiplier: 1.6 },
    {
        id: "flutter-react-native",
        label: "Flutter/React Native (Mobile)",
        multiplier: 2.0,
    },
];

// Functional modules
export const modules = [
    // Authentication & Users
    {
        id: "basic-login",
        label: "Basic Login/Register",
        price: 100000,
        category: "Authentication & Users",
    },
    {
        id: "social-login",
        label: "Social Login (OAuth)",
        price: 150000,
        category: "Authentication & Users",
    },
    {
        id: "multi-factor-auth",
        label: "Multi-factor Auth",
        price: 250000,
        category: "Authentication & Users",
    },
    {
        id: "role-based-access",
        label: "Role-based Access",
        price: 400000,
        category: "Authentication & Users",
    },
    // Payment & Commerce
    {
        id: "payment-gateway",
        label: "Payment Gateway (1 gateway)",
        price: 250000,
        category: "Payment & Commerce",
    },
    {
        id: "multiple-gateways",
        label: "Multiple Gateways",
        price: 500000,
        category: "Payment & Commerce",
    },
    {
        id: "subscription-billing",
        label: "Subscription Billing",
        price: 700000,
        category: "Payment & Commerce",
    },
    {
        id: "invoice-system",
        label: "Invoice System",
        price: 500000,
        category: "Payment & Commerce",
    },
    {
        id: "advanced-product-options",
        label: "Advanced Product Options",
        price: 350000,
        category: "Payment & Commerce",
    },
    {
        id: "promotions-discount",
        label: "Promotions & Discount Engine",
        price: 437500,
        category: "Payment & Commerce",
    },
    {
        id: "inventory-management",
        label: "Inventory Management",
        price: 525000,
        category: "Payment & Commerce",
    },
    // Communication
    {
        id: "email-sms",
        label: "Email/SMS Notifications",
        price: 100000,
        category: "Communication",
    },
    {
        id: "push-notifications",
        label: "Push Notifications",
        price: 250000,
        category: "Communication",
    },
    {
        id: "live-chat",
        label: "Live Chat Widget/Real-time Messaging",
        price: 500000,
        category: "Communication",
    },
    {
        id: "video-conferencing",
        label: "Video Conferencing",
        price: 1000000,
        category: "Communication",
    },
    // Data & Analytics
    {
        id: "basic-analytics",
        label: "Basic Analytics / Admin Dashboard",
        price: 175000,
        category: "Data & Analytics",
    },
    {
        id: "custom-dashboard",
        label: "Custom Dashboard / Advanced Reporting",
        price: 500000,
        category: "Data & Analytics",
    },
    {
        id: "report-generation",
        label: "Report Generation / Data Export",
        price: 250000,
        category: "Data & Analytics",
    },
    // Content Management
    {
        id: "blog-news",
        label: "Blog/News System",
        price: 250000,
        category: "Content Management",
    },
    {
        id: "media-library",
        label: "Media Library",
        price: 150000,
        category: "Content Management",
    },
    {
        id: "multi-language",
        label: "Multi-language Support",
        price: 400000,
        category: "Content Management",
    },
    {
        id: "version-control",
        label: "Version Control",
        price: 500000,
        category: "Content Management",
    },
    {
        id: "document-management",
        label: "Document Management",
        price: 700000,
        category: "Content Management",
    },
    // Educational Modules
    {
        id: "course-management",
        label: "Course Management",
        price: 500000,
        category: "Educational Modules",
    },
    {
        id: "student-enrollment",
        label: "Student Enrollment",
        price: 400000,
        category: "Educational Modules",
    },
    {
        id: "gradebook-transcripts",
        label: "Gradebook & Transcripts",
        price: 600000,
        category: "Educational Modules",
    },
    {
        id: "attendance-tracking",
        label: "Attendance Tracking",
        price: 250000,
        category: "Educational Modules",
    },
    {
        id: "online-assessment",
        label: "Online Assessment",
        price: 500000,
        category: "Educational Modules",
    },
    // AI Integrations
    {
        id: "basic-chatbot",
        label: "Basic Chatbot (FAQ/Rule-based)",
        price: 250000,
        category: "AI Integrations",
    },
    {
        id: "advanced-chatbot",
        label: "Advanced Chatbot (NLP/Generative)",
        price: 750000,
        category: "AI Integrations",
    },
    {
        id: "ai-search",
        label: "AI-Powered Search",
        price: 750000,
        category: "AI Integrations",
    },
    {
        id: "recommendation-engine",
        label: "Recommendation Engine",
        price: 1250000,
        category: "AI Integrations",
    },
    {
        id: "content-personalization",
        label: "Content Personalization",
        price: 1000000,
        category: "AI Integrations",
    },
    {
        id: "ai-analytics",
        label: "AI Analytics & Insights",
        price: 750000,
        category: "AI Integrations",
    },
    // Integration
    {
        id: "custom-api-development",
        label: "Custom API Development",
        price: 500000,
        category: "Integration",
    },
    {
        id: "third-party-api",
        label: "Third-party API",
        price: 250000,
        category: "Integration",
    },
    {
        id: "erp-integration",
        label: "ERP Integration",
        price: 1000000,
        category: "Integration",
    },
    {
        id: "crm-integration",
        label: "CRM Integration",
        price: 750000,
        category: "Integration",
    },
];

// Mapping of base type categories to relevant module categories
export const baseTypeModuleCategories = {
    "landing-page": [
        "Authentication & Users",
        "Communication",
        "Content Management",
        "Data & Analytics",
    ],
    "business-website": [
        "Authentication & Users",
        "Communication",
        "Content Management",
        "Data & Analytics",
        "Integration",
    ],
    dashboard: [
        "Authentication & Users",
        "Data & Analytics",
        "Integration",
        "AI Integrations",
    ],
    ecommerce: [
        "Authentication & Users",
        "Payment & Commerce",
        "Communication",
        "Data & Analytics",
        "Content Management",
        "Integration",
    ],
    "enterprise-portal": [
        "Authentication & Users",
        "Communication",
        "Data & Analytics",
        "Content Management",
        "Integration",
    ],
    sis: [
        "Authentication & Users",
        "Educational Modules",
        "Data & Analytics",
        "Communication",
        "Integration",
    ],
    lms: [
        "Authentication & Users",
        "Educational Modules",
        "Data & Analytics",
        "Communication",
        "Integration",
        "AI Integrations",
    ],
};

// Add-on services
export const addOns = [
    // Maintenance Packages
    {
        id: "maintenance-basic",
        label: "Basic (Updates & Backup)",
        monthly: 75000,
        annual: 750000,
    },
    {
        id: "maintenance-standard",
        label: "Standard (+ Monitoring)",
        monthly: 150000,
        annual: 1500000,
    },
    {
        id: "maintenance-premium",
        label: "Premium (+ Priority Support)",
        monthly: 300000,
        annual: 3000000,
    },
    // Performance & Security
    {
        id: "speed-optimization",
        label: "Speed Optimization",
        oneTime: 500000,
    },
    {
        id: "security-audit",
        label: "Security Audit",
        oneTime: 700000,
    },
    {
        id: "penetration-testing",
        label: "Penetration Testing",
        oneTime: 1375000,
    },
    // {
    //     id: "cdn-setup",
    //     label: "CDN Setup",
    //     oneTime: 275000,
    //     monthly: 25000,
    //     annual: 250000,
    // },
    // Marketing & SEO
    // { id: "seo-audit", label: "SEO Audit", oneTime: 425000 },
    // {
    //     id: "seo-optimization",
    //     label: "SEO Optimization",
    //     oneTime: 875000,
    //     monthly: 275000,
    //     annual: 2750000,
    // },
    {
        id: "content-creation",
        label: "Content Creation",
        monthly: 100000,
        annual: 1000000,
    },
    {
        id: "google-ads-management",
        label: "Google Ads Management",
        oneTime: 150000,
        monthly: 175000,
        annual: 1500000,
    },
    // Training & Documentation
    {
        id: "training-basic",
        label: "Basic Training (2 hours)",
        oneTime: 200000,
    },
    {
        id: "training-advanced",
        label: "Advanced Training (8 hours)",
        oneTime: 700000,
    },
    {
        id: "documentation",
        label: "Documentation",
        oneTime: 500000,
    },
    {
        id: "video-tutorials",
        label: "Video Tutorials",
        oneTime: 800000,
    },
    // Hosting & Infrastructure
    { id: "hosting-basic", label: "Basic Hosting", annual: 75000 },
    {
        id: "hosting-vps",
        label: "VPS/Cloud Hosting",
        annual: 675000,
    },
    {
        id: "domain-registration",
        label: "Domain Registration",
        annual: 50000,
    },
    {
        id: "ssl-certificate",
        label: "SSL Certificate",
        annual: 120000,
    },
];
