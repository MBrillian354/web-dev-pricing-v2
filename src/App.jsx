import React, { useState, useMemo } from "react";

const App = () => {
    // Base application types
    const baseTypes = [
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
    const techStacks = [
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
    const modules = [
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
    const addOns = [
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

    // State
    const [selectedBase, setSelectedBase] = useState(baseTypes[0]);
    const [selectedTech, setSelectedTech] = useState(techStacks[0]);
    const [selectedModules, setSelectedModules] = useState([]);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [pointValue] = useState(350000); // IDR 350,000 per point

    // Calculate costs
    const { subtotal, addOnsTotal, total } = useMemo(() => {
        const baseCost = selectedBase.points * pointValue;
        const techMultipliedCost = baseCost * selectedTech.multiplier;
        const modulesCost = selectedModules.reduce((sum, moduleId) => {
            const module = modules.find((m) => m.id === moduleId);
            return sum + (module ? module.points * pointValue : 0);
        }, 0);

        const subtotal = techMultipliedCost + modulesCost;

        const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
            const addOn = addOns.find((a) => a.id === addOnId);
            return sum + (addOn ? addOn.cost : 0);
        }, 0);

        return {
            subtotal,
            addOnsTotal,
            total: subtotal + addOnsTotal,
        };
    }, [
        selectedBase,
        selectedTech,
        selectedModules,
        selectedAddOns,
        pointValue,
    ]);

    // Toggle module selection
    const toggleModule = (moduleId) => {
        setSelectedModules((prev) =>
            prev.includes(moduleId)
                ? prev.filter((id) => id !== moduleId)
                : [...prev, moduleId]
        );
    };

    // Toggle add-on selection
    const toggleAddOn = (addOnId) => {
        setSelectedAddOns((prev) =>
            prev.includes(addOnId)
                ? prev.filter((id) => id !== addOnId)
                : [...prev, addOnId]
        );
    };

    // Format currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Web Development Pricing Calculator
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Estimate the cost of your custom web application based
                        on your specific requirements
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Configuration Panel */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Project Configuration
                            </h2>

                            {/* Base Application Type */}
                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-gray-700 mb-3">
                                    Base Application Type
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {baseTypes.map((base) => (
                                        <div
                                            key={base.id}
                                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                                selectedBase.id === base.id
                                                    ? "border-blue-500 bg-blue-50"
                                                    : "border-gray-200 hover:border-blue-300"
                                            }`}
                                            onClick={() =>
                                                setSelectedBase(base)
                                            }
                                        >
                                            <div className="flex items-center mb-2">
                                                <div
                                                    className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                                                        selectedBase.id ===
                                                        base.id
                                                            ? "border-blue-500 bg-blue-500"
                                                            : "border-gray-400"
                                                    }`}
                                                >
                                                    {selectedBase.id ===
                                                        base.id && (
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span className="font-medium">
                                                    {base.label}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 ml-8">
                                                {base.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-gray-700 mb-3">
                                    Technology Stack
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {techStacks.map((tech) => (
                                        <div
                                            key={tech.id}
                                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                                selectedTech.id === tech.id
                                                    ? "border-blue-500 bg-blue-50"
                                                    : "border-gray-200 hover:border-blue-300"
                                            }`}
                                            onClick={() =>
                                                setSelectedTech(tech)
                                            }
                                        >
                                            <div className="flex items-center">
                                                <div
                                                    className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                                                        selectedTech.id ===
                                                        tech.id
                                                            ? "border-blue-500 bg-blue-500"
                                                            : "border-gray-400"
                                                    }`}
                                                >
                                                    {selectedTech.id ===
                                                        tech.id && (
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span className="font-medium">
                                                    {tech.label}
                                                </span>
                                            </div>
                                            <div className="text-sm text-gray-600 ml-8">
                                                Multiplier: {tech.multiplier}x
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Functional Modules */}
                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-gray-700 mb-3">
                                    Functional Modules
                                </h3>
                                <div className="border rounded-lg divide-y">
                                    {[
                                        "User & Access",
                                        "Payments",
                                        "E-commerce",
                                        "Communication",
                                        "Data & Analytics",
                                        "Advanced",
                                    ].map((category) => (
                                        <div key={category} className="p-4">
                                            <h4 className="font-medium text-gray-800 mb-2">
                                                {category}
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {modules
                                                    .filter(
                                                        (module) =>
                                                            module.category ===
                                                            category
                                                    )
                                                    .map((module) => (
                                                        <div
                                                            key={module.id}
                                                            className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer"
                                                            onClick={() =>
                                                                toggleModule(
                                                                    module.id
                                                                )
                                                            }
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedModules.includes(
                                                                    module.id
                                                                )}
                                                                onChange={() => {}}
                                                                className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                                                            />
                                                            <label className="ml-2 text-sm text-gray-700 flex-1 cursor-pointer">
                                                                {module.label}
                                                            </label>
                                                            <span className="text-xs font-medium text-blue-600">
                                                                +{module.points}{" "}
                                                                pts
                                                            </span>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Add-on Services */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-700 mb-3">
                                    Add-on Services
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {addOns.map((addOn) => (
                                        <div
                                            key={addOn.id}
                                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                                selectedAddOns.includes(
                                                    addOn.id
                                                )
                                                    ? "border-blue-500 bg-blue-50"
                                                    : "border-gray-200 hover:border-blue-300"
                                            }`}
                                            onClick={() =>
                                                toggleAddOn(addOn.id)
                                            }
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedAddOns.includes(
                                                            addOn.id
                                                        )}
                                                        onChange={() => {}}
                                                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                                                    />
                                                    <label className="ml-2 text-sm font-medium text-gray-700 cursor-pointer">
                                                        {addOn.label}
                                                    </label>
                                                </div>
                                                <span className="text-sm font-medium text-blue-600">
                                                    {formatCurrency(addOn.cost)}
                                                    {addOn.monthly && "/mo"}
                                                    {addOn.yearly && "/yr"}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Cost Estimate
                            </h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Base Application
                                    </span>
                                    <span className="font-medium">
                                        {formatCurrency(
                                            selectedBase.points * pointValue
                                        )}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Tech Stack Multiplier (
                                        {selectedTech.multiplier}x)
                                    </span>
                                    <span className="font-medium">
                                        {formatCurrency(
                                            selectedBase.points *
                                                pointValue *
                                                (selectedTech.multiplier - 1)
                                        )}
                                    </span>
                                </div>

                                {selectedModules.length > 0 && (
                                    <div>
                                        <div className="flex justify-between font-medium">
                                            <span className="text-gray-600">
                                                Modules
                                            </span>
                                            <span>
                                                {formatCurrency(
                                                    selectedModules.reduce(
                                                        (sum, id) => {
                                                            const module =
                                                                modules.find(
                                                                    (m) =>
                                                                        m.id ===
                                                                        id
                                                                );
                                                            return (
                                                                sum +
                                                                (module
                                                                    ? module.points *
                                                                      pointValue
                                                                    : 0)
                                                            );
                                                        },
                                                        0
                                                    )
                                                )}
                                            </span>
                                        </div>
                                        <div className="mt-2 pl-4 text-sm">
                                            {selectedModules.map((id) => {
                                                const module = modules.find(
                                                    (m) => m.id === id
                                                );
                                                return module ? (
                                                    <div
                                                        key={id}
                                                        className="flex justify-between text-gray-600"
                                                    >
                                                        <span>
                                                            + {module.label}
                                                        </span>
                                                        <span>
                                                            {formatCurrency(
                                                                module.points *
                                                                    pointValue
                                                            )}
                                                        </span>
                                                    </div>
                                                ) : null;
                                            })}
                                        </div>
                                    </div>
                                )}

                                <div className="border-t pt-4">
                                    <div className="flex justify-between font-medium">
                                        <span>Subtotal</span>
                                        <span>{formatCurrency(subtotal)}</span>
                                    </div>
                                </div>

                                {selectedAddOns.length > 0 && (
                                    <div>
                                        <div className="flex justify-between font-medium">
                                            <span className="text-gray-600">
                                                Add-ons
                                            </span>
                                            <span>
                                                {formatCurrency(addOnsTotal)}
                                            </span>
                                        </div>
                                        <div className="mt-2 pl-4 text-sm">
                                            {selectedAddOns.map((id) => {
                                                const addOn = addOns.find(
                                                    (a) => a.id === id
                                                );
                                                return addOn ? (
                                                    <div
                                                        key={id}
                                                        className="flex justify-between text-gray-600"
                                                    >
                                                        <span>
                                                            + {addOn.label}
                                                        </span>
                                                        <span>
                                                            {formatCurrency(
                                                                addOn.cost
                                                            )}
                                                        </span>
                                                    </div>
                                                ) : null;
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total Estimated Cost</span>
                                    <span className="text-blue-600">
                                        {formatCurrency(total)}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                    One-time development cost
                                </p>
                            </div>

                            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                                Get Detailed Quote
                            </button>

                            <div className="mt-6 text-sm text-gray-500">
                                <p>
                                    This estimate is based on our modular
                                    pricing model. Final pricing may vary based
                                    on specific requirements and complexity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
