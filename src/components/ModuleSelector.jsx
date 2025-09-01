import React from "react";
import { modules, baseTypeModuleCategories } from "../constants/pricingData.js";
import { formatCurrency } from "../utils/formatCurrency.js";

const ModuleSelector = ({ selectedModules, onToggle, selectedBase }) => {
    // Get the base type category from selectedBase.id (e.g., "landing-page-starter" -> "landing-page")
    const baseTypeCategory = selectedBase.id.split("-").slice(0, -1).join("-");

    // Get relevant categories for the selected base type
    const relevantCategories = baseTypeModuleCategories[baseTypeCategory] || [];

    // Filter modules to only those in relevant categories
    const relevantModules = modules.filter((module) =>
        relevantCategories.includes(module.category)
    );

    // Get unique categories from relevant modules
    const categories = Array.from(
        new Set(relevantModules.map((m) => m.category))
    );

    return (
        <div className="mb-6">
            <h3 className="section-title">Functional Modules</h3>
            <div className="border border-gray-400 rounded-lg divide-y divide-gray-400">
                {categories.map((category) => (
                    <div key={category} className="p-4">
                        <h4 className="font-medium text-gray-800 mb-2">
                            {category}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {relevantModules
                                .filter(
                                    (module) => module.category === category
                                )
                                .map((module) => (
                                    <div
                                        key={module.id}
                                        className="flex items-center p-2 rounded hover:bg-blue-50 cursor-pointer"
                                        onClick={() => onToggle(module.id)}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedModules.includes(
                                                module.id
                                            )}
                                            onChange={() => {}}
                                            className="checkbox"
                                        />
                                        <label className="ml-2 text-sm text-gray-700 flex-1 cursor-pointer">
                                            {module.label}
                                        </label>
                                        <span className="text-xs font-medium text-blue-600">
                                            {formatCurrency(module.price)}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModuleSelector;
