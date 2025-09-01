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
    onRemoveModule,
    onRemoveAddOn,
}) => {
    return (
        <div className="lg:col-span-1">
            <div className="flex flex-col gap-6 sticky top-6">
                <div className="bg-white rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 p-6">
                        Cost Estimate
                    </h2>

                    <div className="space-y-4 mb-6 px-6">
                        <div className="flex-between">
                            <span className="text-gray-600">
                                Base Application
                            </span>
                            <span className="font-medium">
                                {formatCurrency(selectedBase.price)}
                            </span>
                        </div>

                        <div className="flex-between">
                            <span className="text-gray-600">
                                Tech Stack Multiplier ({selectedTech.multiplier}
                                x)
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
                                <div className="flex-between font-medium">
                                    <span className="text-gray-600">
                                        Modules
                                    </span>
                                    <span>
                                        {formatCurrency(
                                            selectedModules.reduce(
                                                (sum, id) => {
                                                    const module = modules.find(
                                                        (m) => m.id === id
                                                    );
                                                    return (
                                                        sum +
                                                        (module
                                                            ? module.price
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
                                                className="flex justify-between items-center text-gray-600"
                                            >
                                                <span>{module.label}</span>
                                                <div className="flex items-center gap-2">
                                                    <span>
                                                        {formatCurrency(
                                                            module.price
                                                        )}
                                                    </span>
                                                    <div className="size-8 flex items-center justify-center hover:bg-gray-200 rounded-full hover:cursor-pointer transition-colors duration-200">
                                                        <button
                                                            onClick={() =>
                                                                onRemoveModule(
                                                                    id
                                                                )
                                                            }
                                                            className=" text-red-500 hover:cursor-pointer transition-colors duration-200"
                                                            title="Remove module"
                                                        >
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                        )}

                        <div className="border-t pt-4">
                            <div className="flex-between font-medium">
                                <span>Subtotal</span>
                                <span>{formatCurrency(subtotal)}</span>
                            </div>
                        </div>

                        {selectedAddOns.length > 0 && (
                            <div>
                                <div className="flex-between font-medium">
                                    <span className="text-gray-600">
                                        Add-ons
                                    </span>
                                    <span>{formatCurrency(addOnsTotal)}</span>
                                </div>
                                <div className="mt-2 pl-4 text-sm">
                                    {selectedAddOns.map((selected) => {
                                        const addOn = addOns.find(
                                            (a) => a.id === selected.id
                                        );
                                        return addOn ? (
                                            <div
                                                key={selected.id}
                                                className="flex justify-between items-center text-gray-600"
                                            >
                                                <span>
                                                    {addOn.label} (
                                                    {
                                                        selected.selectedPricing
                                                            .label
                                                    }
                                                    )
                                                </span>
                                                <div className="flex items-center gap-2">
                                                    <span>
                                                        {formatCurrency(
                                                            selected
                                                                .selectedPricing
                                                                .amount
                                                        )}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            onRemoveAddOn(
                                                                selected.id
                                                            )
                                                        }
                                                        className="text-red-500 hover:text-red-700 transition-colors"
                                                        title="Remove add-on"
                                                    >
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-gray-800 p-6 rounded-b-lg text-white">
                        <div className="flex-between text-md font-medium">
                            <span>Estimated Cost</span>
                            <span className="text-green-400">
                                {formatCurrency(total)}
                            </span>
                        </div>

                        <button className="w-full mt-4 bg-blue-200 hover:bg-blue-300 text-black font-medium py-3 px-4 rounded-full hover:cursor-pointer transition-colors">
                            Get Detailed Quote
                        </button>
                    </div>
                </div>
                <div className="px-4 text-xs text-gray-700 ">
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
