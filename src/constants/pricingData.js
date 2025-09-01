// Base application types
export const baseTypes = {
    "Standard Business Applications": [
        {
            id: "landing-page-starter",
            label: "Landing Page (Starter)",
            price: 8000000,
            desc: "1-3 pages, template design, basic contact form, mobile responsive, social media links.",
        },
        {
            id: "landing-page-professional",
            label: "Landing Page (Professional)",
            price: 15000000,
            desc: "Up to 5 pages, custom design, blog integration, basic CMS, advanced form, basic SEO setup.",
        },
        {
            id: "landing-page-enterprise",
            label: "Landing Page (Enterprise)",
            price: 30000000,
            desc: "5+ pages, premium custom design, advanced animations, A/B testing setup, multi-language support.",
        },
        {
            id: "business-website-starter",
            label: "Business Website (Starter)",
            price: 15000000,
            desc: "Up to 10 pages, CMS (WordPress), custom design, blog, photo gallery, team section.",
        },
        {
            id: "business-website-professional",
            label: "Business Website (Professional)",
            price: 30000000,
            desc: "Up to 20 pages, advanced CMS features, lead generation forms, live chat integration, analytics dashboard.",
        },
        {
            id: "business-website-enterprise",
            label: "Business Website (Enterprise)",
            price: 60000000,
            desc: "20+ pages, multi-language, role-based access, custom module development, API integrations.",
        },
        {
            id: "dashboard-starter",
            label: "Dashboard App (Starter)",
            price: 25000000,
            desc: "Single user role, basic data visualization (up to 5 charts), static reports, manual data import.",
        },
        {
            id: "dashboard-professional",
            label: "Dashboard App (Professional)",
            price: 45000000,
            desc: "Multi-user roles, interactive dashboard, customizable reports, user management, basic API integration.",
        },
        {
            id: "dashboard-enterprise",
            label: "Dashboard App (Enterprise)",
            price: 80000000,
            desc: "Advanced access control, real-time analytics, data export (PDF/Excel), 3rd party integrations, audit logs.",
        },
        {
            id: "ecommerce-starter",
            label: "E-commerce (Starter)",
            price: 20000000,
            desc: "Up to 100 products, template-based design, 1 payment gateway, basic inventory management.",
        },
        {
            id: "ecommerce-professional",
            label: "E-commerce (Professional)",
            price: 40000000,
            desc: "Up to 1000 products, custom design, multiple payment gateways, discount/voucher system, customer accounts.",
        },
        {
            id: "ecommerce-enterprise",
            label: "E-commerce (Enterprise)",
            price: 80000000,
            desc: "Unlimited products, multi-vendor support, advanced reporting, API for integrations, subscription models.",
        },
        {
            id: "enterprise-portal-starter",
            label: "Enterprise Portal (Starter)",
            price: 40000000,
            desc: "Internal portal with document management, basic user directory, and news/announcements.",
        },
        {
            id: "enterprise-portal-professional",
            label: "Enterprise Portal (Professional)",
            price: 70000000,
            desc: "Multi-department structure, basic workflows, CRM/ERP integration (1 system), advanced search.",
        },
        {
            id: "enterprise-portal-enterprise",
            label: "Enterprise Portal (Enterprise)",
            price: 120000000,
            desc: "Custom workflows, SSO integration, comprehensive API layer, advanced security audits, multi-system integration.",
        },
    ],
    "Educational & Academic Systems": [
        {
            id: "sis-starter",
            label: "Student Info System (Starter)",
            price: 35000000,
            desc: "Student database, enrollment management (single program), basic attendance tracking, manual reporting.",
        },
        {
            id: "sis-professional",
            label: "Student Info System (Professional)",
            price: 60000000,
            desc: "Multiple programs, online admissions, gradebook management, parent/student portal, automated reporting.",
        },
        {
            id: "sis-enterprise",
            label: "Student Info System (Enterprise)",
            price: 120000000,
            desc: "Financial aid integration, scheduling automation, compliance reporting, integration with other school systems (LMS, library).",
        },
        {
            id: "lms-starter",
            label: "Learning Management System (Starter)",
            price: 40000000,
            desc: "Course creation & content upload, basic quizzing, student forum, progress tracking for individuals.",
        },
        {
            id: "lms-professional",
            label: "Learning Management System (Professional)",
            price: 70000000,
            desc: "Advanced assessment tools, certification paths, SCORM/xAPI compliance, live video integration (basic), group management.",
        },
        {
            id: "lms-enterprise",
            label: "Learning Management System (Enterprise)",
            price: 150000000,
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
        price: 2000000,
        category: "Authentication & Users",
    },
    {
        id: "social-login",
        label: "Social Login (OAuth)",
        price: 3000000,
        category: "Authentication & Users",
    },
    {
        id: "multi-factor-auth",
        label: "Multi-factor Auth",
        price: 5000000,
        category: "Authentication & Users",
    },
    {
        id: "role-based-access",
        label: "Role-based Access",
        price: 8000000,
        category: "Authentication & Users",
    },
    // Payment & Commerce
    {
        id: "payment-gateway",
        label: "Payment Gateway (1 gateway)",
        price: 5000000,
        category: "Payment & Commerce",
    },
    {
        id: "multiple-gateways",
        label: "Multiple Gateways",
        price: 10000000,
        category: "Payment & Commerce",
    },
    {
        id: "subscription-billing",
        label: "Subscription Billing",
        price: 14000000,
        category: "Payment & Commerce",
    },
    {
        id: "invoice-system",
        label: "Invoice System",
        price: 10000000,
        category: "Payment & Commerce",
    },
    {
        id: "advanced-product-options",
        label: "Advanced Product Options",
        price: 7000000,
        category: "Payment & Commerce",
    },
    {
        id: "promotions-discount",
        label: "Promotions & Discount Engine",
        price: 8750000,
        category: "Payment & Commerce",
    },
    {
        id: "inventory-management",
        label: "Inventory Management",
        price: 10500000,
        category: "Payment & Commerce",
    },
    // Communication
    {
        id: "email-sms",
        label: "Email/SMS Notifications",
        price: 2000000,
        category: "Communication",
    },
    {
        id: "push-notifications",
        label: "Push Notifications",
        price: 5000000,
        category: "Communication",
    },
    {
        id: "live-chat",
        label: "Live Chat Widget/Real-time Messaging",
        price: 10000000,
        category: "Communication",
    },
    {
        id: "video-conferencing",
        label: "Video Conferencing",
        price: 20000000,
        category: "Communication",
    },
    // Data & Analytics
    {
        id: "basic-analytics",
        label: "Basic Analytics / Admin Dashboard",
        price: 3500000,
        category: "Data & Analytics",
    },
    {
        id: "custom-dashboard",
        label: "Custom Dashboard / Advanced Reporting",
        price: 10000000,
        category: "Data & Analytics",
    },
    {
        id: "report-generation",
        label: "Report Generation / Data Export",
        price: 5000000,
        category: "Data & Analytics",
    },
    // Content Management
    {
        id: "blog-news",
        label: "Blog/News System",
        price: 5000000,
        category: "Content Management",
    },
    {
        id: "media-library",
        label: "Media Library",
        price: 3000000,
        category: "Content Management",
    },
    {
        id: "multi-language",
        label: "Multi-language Support",
        price: 8000000,
        category: "Content Management",
    },
    {
        id: "version-control",
        label: "Version Control",
        price: 10000000,
        category: "Content Management",
    },
    {
        id: "document-management",
        label: "Document Management",
        price: 14000000,
        category: "Content Management",
    },
    // Educational Modules
    {
        id: "course-management",
        label: "Course Management",
        price: 10000000,
        category: "Educational Modules",
    },
    {
        id: "student-enrollment",
        label: "Student Enrollment",
        price: 8000000,
        category: "Educational Modules",
    },
    {
        id: "gradebook-transcripts",
        label: "Gradebook & Transcripts",
        price: 12000000,
        category: "Educational Modules",
    },
    {
        id: "attendance-tracking",
        label: "Attendance Tracking",
        price: 5000000,
        category: "Educational Modules",
    },
    {
        id: "online-assessment",
        label: "Online Assessment",
        price: 10000000,
        category: "Educational Modules",
    },
    // AI Integrations
    {
        id: "basic-chatbot",
        label: "Basic Chatbot (FAQ/Rule-based)",
        price: 5000000,
        category: "AI Integrations",
    },
    {
        id: "advanced-chatbot",
        label: "Advanced Chatbot (NLP/Generative)",
        price: 15000000,
        category: "AI Integrations",
    },
    {
        id: "ai-search",
        label: "AI-Powered Search",
        price: 15000000,
        category: "AI Integrations",
    },
    {
        id: "recommendation-engine",
        label: "Recommendation Engine",
        price: 25000000,
        category: "AI Integrations",
    },
    {
        id: "content-personalization",
        label: "Content Personalization",
        price: 20000000,
        category: "AI Integrations",
    },
    {
        id: "ai-analytics",
        label: "AI Analytics & Insights",
        price: 15000000,
        category: "AI Integrations",
    },
    // Integration
    {
        id: "custom-api-development",
        label: "Custom API Development",
        price: 10000000,
        category: "Integration",
    },
    {
        id: "third-party-api",
        label: "Third-party API",
        price: 5000000,
        category: "Integration",
    },
    {
        id: "erp-integration",
        label: "ERP Integration",
        price: 20000000,
        category: "Integration",
    },
    {
        id: "crm-integration",
        label: "CRM Integration",
        price: 15000000,
        category: "Integration",
    },
];

// Add-on services
export const addOns = [
    // Maintenance Packages
    {
        id: "maintenance-basic",
        label: "Basic (Updates & Backup)",
        monthly: 1500000,
        annual: 15000000,
    },
    {
        id: "maintenance-standard",
        label: "Standard (+ Monitoring)",
        monthly: 3000000,
        annual: 30000000,
    },
    {
        id: "maintenance-premium",
        label: "Premium (+ Priority Support)",
        monthly: 6000000,
        annual: 60000000,
    },
    // Performance & Security
    {
        id: "speed-optimization",
        label: "Speed Optimization",
        oneTime: [5000000, 15000000],
    },
    {
        id: "security-audit",
        label: "Security Audit",
        oneTime: [8000000, 20000000],
    },
    {
        id: "penetration-testing",
        label: "Penetration Testing",
        oneTime: [15000000, 40000000],
    },
    {
        id: "cdn-setup",
        label: "CDN Setup",
        oneTime: [3000000, 8000000],
        monthly: 500000,
        annual: 5000000,
    },
    // Marketing & SEO
    { id: "seo-audit", label: "SEO Audit", oneTime: [5000000, 12000000] },
    {
        id: "seo-optimization",
        label: "SEO Optimization",
        oneTime: [10000000, 25000000],
        monthly: [3000000, 8000000],
        annual: [30000000, 80000000],
    },
    {
        id: "content-creation",
        label: "Content Creation",
        monthly: [5000000, 15000000],
        annual: [50000000, 150000000],
    },
    {
        id: "google-ads-management",
        label: "Google Ads Management",
        oneTime: 3000000,
        monthly: [2000000, 5000000],
        annual: [20000000, 50000000],
    },
    // Training & Documentation
    {
        id: "training-basic",
        label: "Basic Training (2 hours)",
        oneTime: [2000000, 5000000],
    },
    {
        id: "training-advanced",
        label: "Advanced Training (8 hours)",
        oneTime: [8000000, 15000000],
    },
    {
        id: "documentation",
        label: "Documentation",
        oneTime: [5000000, 15000000],
    },
    {
        id: "video-tutorials",
        label: "Video Tutorials",
        oneTime: [10000000, 25000000],
    },
    // Hosting & Infrastructure
    { id: "hosting-basic", label: "Basic Hosting", annual: [500000, 2500000] },
    {
        id: "hosting-vps",
        label: "VPS/Cloud Hosting",
        annual: [2000000, 25000000],
    },
    {
        id: "domain-registration",
        label: "Domain Registration",
        annual: [150000, 500000],
    },
    {
        id: "ssl-certificate",
        label: "SSL Certificate",
        annual: [400000, 2000000],
    },
];
