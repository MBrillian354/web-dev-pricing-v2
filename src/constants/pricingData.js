// Base application types
export const baseTypes = [
    {
        id: "cms",
        label: "CMS/Company Profile",
        points: 40,
        desc: "Standard informational website (5-10 pages)",
    },
    {
        id: "ecommerce",
        label: "E-commerce Store",
        points: 80,
        desc: "Product catalog, cart, basic order management",
    },
    {
        id: "dashboard",
        label: "Business Dashboard",
        points: 100,
        desc: "Secure user area with data visualization",
    },
    {
        id: "custom-app",
        label: "Custom Business App",
        points: 150,
        desc: "Specific business process solutions",
    },
    {
        id: "enterprise",
        label: "Enterprise Portal",
        points: 250,
        desc: "Complex workflows, roles, and integrations",
    },
];

// Tech stack multipliers
export const techStacks = [
    { id: "wordpress", label: "WordPress Standard", multiplier: 1.0 },
    { id: "wordpress-custom", label: "Custom WordPress", multiplier: 1.3 },
    { id: "php", label: "PHP Framework", multiplier: 1.4 },
    { id: "laravel-vue", label: "Laravel + Vue.js/React", multiplier: 1.6 },
    { id: "mern", label: "MERN Stack", multiplier: 1.75 },
    {
        id: "enterprise-stack",
        label: "Python/Java/Enterprise",
        multiplier: 1.9,
    },
];

// Functional modules
export const modules = [
    {
        id: "auth",
        label: "Standard Authentication",
        points: 25,
        category: "User & Access",
    },
    {
        id: "social-auth",
        label: "Social Login",
        points: 15,
        category: "User & Access",
    },
    {
        id: "rbac",
        label: "Multi-Role Access Control",
        points: 30,
        category: "User & Access",
    },
    {
        id: "payment",
        label: "Payment Gateway",
        points: 20,
        category: "Payments",
    },
    {
        id: "subscription",
        label: "Subscription Billing",
        points: 40,
        category: "Payments",
    },
    {
        id: "products",
        label: "Advanced Product Options",
        points: 20,
        category: "E-commerce",
    },
    {
        id: "promotions",
        label: "Promotions & Discounts",
        points: 25,
        category: "E-commerce",
    },
    {
        id: "inventory",
        label: "Inventory Management",
        points: 30,
        category: "E-commerce",
    },
    {
        id: "notifications",
        label: "Email/SMS Notifications",
        points: 20,
        category: "Communication",
    },
    {
        id: "chat",
        label: "Real-time Chat",
        points: 50,
        category: "Communication",
    },
    {
        id: "blog",
        label: "Blog/Content System",
        points: 25,
        category: "Communication",
    },
    {
        id: "analytics",
        label: "Admin Analytics Dashboard",
        points: 30,
        category: "Data & Analytics",
    },
    {
        id: "reporting",
        label: "Advanced Reporting",
        points: 45,
        category: "Data & Analytics",
    },
    {
        id: "third-party-analytics",
        label: "Third-party Analytics",
        points: 10,
        category: "Data & Analytics",
    },
    {
        id: "multi-lang",
        label: "Multi-language Support",
        points: 35,
        category: "Advanced",
    },
    {
        id: "custom-api",
        label: "Custom API Development",
        points: 60,
        category: "Advanced",
    },
    {
        id: "documents",
        label: "Document Management",
        points: 40,
        category: "Advanced",
    },
];

// Add-on services
export const addOns = [
    {
        id: "seo-setup",
        label: "Basic SEO Setup",
        cost: 3500000,
        oneTime: true,
    },
    {
        id: "seo-ongoing",
        label: "Ongoing SEO Management",
        cost: 5000000,
        monthly: true,
    },
    {
        id: "hosting",
        label: "Managed Cloud Hosting",
        cost: 12000000,
        yearly: true,
    },
    {
        id: "maintenance",
        label: "Basic Maintenance",
        cost: 2000000,
        monthly: true,
    },
    {
        id: "support",
        label: "Premium Support",
        cost: 10000000,
        monthly: true,
    },
    {
        id: "training",
        label: "Team Training",
        cost: 10000000,
        oneTime: true,
    },
];

// Point value
export const POINT_VALUE = 350000; // IDR 350,000 per point
