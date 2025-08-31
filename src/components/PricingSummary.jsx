import React from "react";
import { modules, addOns } from "../constants/pricingData.js";
import { formatCurrency } from "../utils/formatCurrency.js";

const PricingSummary = ({
    selectedBase,
    selectedTech,
    selectedModules,
    selectedAddOns,
    subtotal,
    addOnsTotal,
    total,
}) => {
    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Cost Estimate
                </h2>

                <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Base Application</span>
                        <span className="font-medium">
                            {formatCurrency(selectedBase.price)}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">
                            Tech Stack Multiplier ({selectedTech.multiplier}x)
                        </span>
                        <span className="font-medium">
                            {formatCurrency(
                                selectedBase.price *
                                    (selectedTech.multiplier - 1)
                            )}
                        </span>
                    </div>

                    {selectedModules.length > 0 && (
                        <div>
                            <div className="flex justify-between font-medium">
                                <span className="text-gray-600">Modules</span>
                                <span>
                                    {formatCurrency(
                                        selectedModules.reduce((sum, id) => {
                                            const module = modules.find(
                                                (m) => m.id === id
                                            );
                                            return (
                                                sum +
                                                (module ? module.price : 0)
                                            );
                                        }, 0)
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
                                            <span>+ {module.label}</span>
                                            <span>
                                                {formatCurrency(module.price)}
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
                                <span className="text-gray-600">Add-ons</span>
                                <span>{formatCurrency(addOnsTotal)}</span>
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
                                            <span>+ {addOn.label}</span>
                                            <span>
                                                {formatCurrency(addOn.cost)}
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

                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-md hover:cursor-pointer transition-colors">
                    Get Detailed Quote
                </button>

                <div className="mt-6 text-sm text-gray-500">
                    <p>
                        This estimate is based on our modular pricing model.
                        Final pricing may vary based on specific requirements
                        and complexity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingSummary;
