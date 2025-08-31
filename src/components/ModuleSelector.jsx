import React from "react";
import { modules } from "../constants/pricingData.js";
import { formatCurrency } from "../utils/formatCurrency.js";

const ModuleSelector = ({ selectedModules, onToggle }) => {
    // Dynamically get unique categories from modules data
    const categories = Array.from(new Set(modules.map((m) => m.category)));

    return (
        <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
                Functional Modules
            </h3>
            <div className="border border-gray-400 rounded-lg divide-y divide-gray-400">
                {categories.map((category) => (
                    <div key={category} className="p-4">
                        <h4 className="font-medium text-gray-800 mb-2">
                            {category}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {modules
                                .filter(
                                    (module) => module.category === category
                                )
                                .map((module) => (
                                    <div
                                        key={module.id}
                                        className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer"
                                        onClick={() => onToggle(module.id)}
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
