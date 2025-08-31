// Base application types
export const baseTypes = [
    {
        id: "cms",
        label: "CMS/Company Profile",
        price: 14000000,
        desc: "5-10 pages, basic CMS, contact form, responsive",
    },
    {
        id: "ecommerce",
        label: "E-commerce Store (Basic)",
        price: 28000000,
        desc: "Product catalog, cart, checkout, basic order management",
    },
    {
        id: "dashboard",
        label: "Business Dashboard",
        price: 35000000,
        desc: "Secure user area, data visualization, basic settings",
    },
    {
        id: "custom-app",
        label: "Custom Business App",
        price: 52500000,
        desc: "Specific business process tool (inventory, booking, etc.)",
    },
    {
        id: "enterprise",
        label: "Enterprise Portal",
        price: 87500000,
        desc: "Complex workflows, multi-role access, advanced integrations",
    },
];

// Tech stack multipliers
export const techStacks = [
    { id: "wordpress", label: "WordPress (Theme-based)", multiplier: 1.0 },
    { id: "wordpress-custom", label: "WordPress (Custom)", multiplier: 1.3 },
    { id: "php", label: "Laravel + Blade", multiplier: 1.4 },
    { id: "laravel-vue", label: "Laravel + Vue.js", multiplier: 1.6 },
    { id: "mern", label: "MERN Stack", multiplier: 1.75 },
    { id: "nextjs", label: "Next.js + Node", multiplier: 1.8 },
    {
        id: "enterprise-stack",
        label: "Python/Java Enterprise",
        multiplier: 1.9,
    },
    { id: "shopify", label: "Shopify", multiplier: 1.2 },
];

// Functional modules
export const modules = [
    // Authentication & Users
    {
        id: "auth",
        label: "Standard Authentication",
        price: 8750000,
        category: "Authentication & Users",
    },
    {
        id: "social-auth",
        label: "Social Login (OAuth)",
        price: 5250000,
        category: "Authentication & Users",
    },
    {
        id: "mfa",
        label: "Multi-factor Authentication",
        price: 7000000,
        category: "Authentication & Users",
    },
    {
        id: "rbac",
        label: "Role-based Access Control",
        price: 10500000,
        category: "Authentication & Users",
    },
    // Payment & Commerce
    {
        id: "payment",
        label: "Payment Gateway (1 gateway)",
        price: 7000000,
        category: "Payment & Commerce",
    },
    {
        id: "payment-extra",
        label: "Additional Gateways",
        price: 3500000,
        category: "Payment & Commerce",
    },
    {
        id: "subscription",
        label: "Subscription/Recurring Billing",
        price: 14000000,
        category: "Payment & Commerce",
    },
    {
        id: "products",
        label: "Advanced Product Options",
        price: 7000000,
        category: "Payment & Commerce",
    },
    {
        id: "promotions",
        label: "Promotions & Discount Engine",
        price: 8750000,
        category: "Payment & Commerce",
    },
    {
        id: "inventory",
        label: "Inventory Management",
        price: 10500000,
        category: "Payment & Commerce",
    },
    // Communication
    {
        id: "notifications",
        label: "Email/SMS Notifications",
        price: 7000000,
        category: "Communication",
    },
    {
        id: "blog",
        label: "Blog/Content System",
        price: 8750000,
        category: "Communication",
    },
    {
        id: "chat",
        label: "Real-time Chat/Messaging",
        price: 17500000,
        category: "Communication",
    },
    // Data & Analytics
    {
        id: "analytics",
        label: "Basic Admin Dashboard",
        price: 10500000,
        category: "Data & Analytics",
    },
    {
        id: "reporting",
        label: "Advanced Reporting & Export",
        price: 15750000,
        category: "Data & Analytics",
    },
    {
        id: "third-party-analytics",
        label: "Third-party Analytics Integration",
        price: 3500000,
        category: "Data & Analytics",
    },
    // Advanced Features
    {
        id: "multi-lang",
        label: "Multi-language Support",
        price: 12250000,
        category: "Advanced Features",
    },
    {
        id: "custom-api",
        label: "Custom API Development",
        price: 21000000,
        category: "Advanced Features",
    },
    {
        id: "documents",
        label: "Document Management",
        price: 14000000,
        category: "Advanced Features",
    },
];

// Add-on services
export const addOns = [
    // Maintenance Packages
    {
        id: "maintenance-basic",
        label: "Basic Maintenance (Updates & Backup)",
        cost: 1500000,
        monthly: true,
        annual: 15000000,
    },
    {
        id: "maintenance-standard",
        label: "Standard Maintenance (+ Monitoring)",
        cost: 3000000,
        monthly: true,
        annual: 30000000,
    },
    {
        id: "maintenance-premium",
        label: "Premium Maintenance (+ Priority Support)",
        cost: 6000000,
        monthly: true,
        annual: 60000000,
    },
    // Performance & Security
    {
        id: "speed-opt",
        label: "Speed Optimization",
        cost: 5000000,
        oneTime: true,
        max: 15000000,
    },
    {
        id: "security-audit",
        label: "Security Audit",
        cost: 8000000,
        oneTime: true,
        max: 20000000,
    },
    {
        id: "pentest",
        label: "Penetration Testing",
        cost: 15000000,
        oneTime: true,
        max: 40000000,
    },
    {
        id: "cdn",
        label: "CDN Setup",
        cost: 3000000,
        oneTime: true,
        monthly: 500000,
        annual: 5000000,
        max: 8000000,
    },
    // Marketing & SEO
    {
        id: "seo-audit",
        label: "SEO Audit",
        cost: 5000000,
        oneTime: true,
        max: 12000000,
    },
    {
        id: "seo-optimization",
        label: "SEO Optimization",
        cost: 10000000,
        monthly: true,
        annual: 30000000,
        max: 25000000,
    },
    {
        id: "content",
        label: "Content Creation",
        monthly: true,
        cost: 5000000,
        max: 15000000,
        annual: 50000000,
    },
    {
        id: "google-ads",
        label: "Google Ads Management",
        cost: 3000000,
        oneTime: true,
        monthly: 2000000,
        max: 5000000,
        annual: 20000000,
    },
    // Training & Documentation
    {
        id: "training-basic",
        label: "Basic Training (2 hours)",
        cost: 2000000,
        oneTime: true,
        max: 5000000,
    },
    {
        id: "training-advanced",
        label: "Advanced Training (8 hours)",
        cost: 8000000,
        oneTime: true,
        max: 15000000,
    },
    {
        id: "documentation",
        label: "Documentation",
        cost: 5000000,
        oneTime: true,
        max: 15000000,
    },
    {
        id: "video-tutorials",
        label: "Video Tutorials",
        cost: 10000000,
        oneTime: true,
        max: 25000000,
    },
    // Hosting & Infrastructure
    {
        id: "hosting-basic",
        label: "Basic Hosting",
        cost: 500000,
        annual: 2500000,
    },
    {
        id: "hosting-vps",
        label: "VPS/Cloud Hosting",
        cost: 6000000,
        annual: 25000000,
    },
    {
        id: "domain",
        label: "Domain Registration",
        cost: 150000,
        annual: 500000,
    },
    { id: "ssl", label: "SSL Certificate", cost: 400000, annual: 2000000 },
];
