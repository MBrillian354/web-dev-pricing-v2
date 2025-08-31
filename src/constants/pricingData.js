// Base application types
export const baseTypes = [
    {
        id: "cms",
        label: "CMS/Company Profile",
        price: 14000000,
        desc: "Standard informational website (5-10 pages)",
    },
    {
        id: "ecommerce",
        label: "E-commerce Store",
        price: 28000000,
        desc: "Product catalog, cart, basic order management",
    },
    {
        id: "dashboard",
        label: "Business Dashboard",
        price: 35000000,
        desc: "Secure user area with data visualization",
    },
    {
        id: "custom-app",
        label: "Custom Business App",
        price: 52500000,
        desc: "Specific business process solutions",
    },
    {
        id: "enterprise",
        label: "Enterprise Portal",
        price: 87500000,
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
        price: 8750000,
        category: "User & Access",
    },
    {
        id: "social-auth",
        label: "Social Login",
        price: 5250000,
        category: "User & Access",
    },
    {
        id: "rbac",
        label: "Multi-Role Access Control",
        price: 10500000,
        category: "User & Access",
    },
    {
        id: "payment",
        label: "Payment Gateway",
        price: 7000000,
        category: "Payments",
    },
    {
        id: "subscription",
        label: "Subscription Billing",
        price: 14000000,
        category: "Payments",
    },
    {
        id: "products",
        label: "Advanced Product Options",
        price: 7000000,
        category: "E-commerce",
    },
    {
        id: "promotions",
        label: "Promotions & Discounts",
        price: 8750000,
        category: "E-commerce",
    },
    {
        id: "inventory",
        label: "Inventory Management",
        price: 10500000,
        category: "E-commerce",
    },
    {
        id: "notifications",
        label: "Email/SMS Notifications",
        price: 7000000,
        category: "Communication",
    },
    {
        id: "chat",
        label: "Real-time Chat",
        price: 17500000,
        category: "Communication",
    },
    {
        id: "blog",
        label: "Blog/Content System",
        price: 8750000,
        category: "Communication",
    },
    {
        id: "analytics",
        label: "Admin Analytics Dashboard",
        price: 10500000,
        category: "Data & Analytics",
    },
    {
        id: "reporting",
        label: "Advanced Reporting",
        price: 15750000,
        category: "Data & Analytics",
    },
    {
        id: "third-party-analytics",
        label: "Third-party Analytics",
        price: 3500000,
        category: "Data & Analytics",
    },
    {
        id: "multi-lang",
        label: "Multi-language Support",
        price: 12250000,
        category: "Advanced",
    },
    {
        id: "custom-api",
        label: "Custom API Development",
        price: 21000000,
        category: "Advanced",
    },
    {
        id: "documents",
        label: "Document Management",
        price: 14000000,
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
