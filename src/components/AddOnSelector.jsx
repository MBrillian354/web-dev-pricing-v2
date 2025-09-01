import React, { useState } from "react";
import { addOns } from "../constants/pricingData.js";
import { formatCurrency } from "../utils/formatCurrency.js";

const AddOnSelector = ({ selectedAddOns, onToggle }) => {
    const [expandedAddOns, setExpandedAddOns] = useState(new Set());

    const toggleExpand = (addOnId) => {
        setExpandedAddOns((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(addOnId)) {
                newSet.delete(addOnId);
            } else {
                newSet.add(addOnId);
            }
            return newSet;
        });
    };

    const getPricingOptions = (addOn) => {
        const options = [];
        if (addOn.oneTime) {
            const amount = Array.isArray(addOn.oneTime)
                ? addOn.oneTime[0]
                : addOn.oneTime;
            options.push({ type: "oneTime", amount, label: "One-time" });
        }
        if (addOn.monthly) {
            const amount = Array.isArray(addOn.monthly)
                ? addOn.monthly[0]
                : addOn.monthly;
            options.push({ type: "monthly", amount, label: "Monthly" });
        }
        if (addOn.annual) {
            const amount = Array.isArray(addOn.annual)
                ? addOn.annual[0]
                : addOn.annual;
            options.push({ type: "annual", amount, label: "Annual" });
        }
        return options;
    };

    const getSummaryText = (addOn) => {
        const options = getPricingOptions(addOn);
        if (options.length === 0) return "";
        const prices = options.map((o) => formatCurrency(o.amount));
        return `Prices from ${prices.join(" to ")}`;
    };

    const isSelected = (addOnId, pricing) => {
        const selected = selectedAddOns.find((s) => s.id === addOnId);
        return (
            selected &&
            selected.selectedPricing &&
            selected.selectedPricing.type === pricing.type &&
            selected.selectedPricing.amount === pricing.amount
        );
    };

    return (
        <div>
            <h3 className="section-title">Add-on Services</h3>
            <div className="grid-cols-md">
                {addOns.map((addOn) => {
                    const isExpanded = expandedAddOns.has(addOn.id);
                    const selected = selectedAddOns.find(
                        (s) => s.id === addOn.id
                    );
                    return (
                        <div
                            key={addOn.id}
                            className={`card-base ${
                                selected ? "card-selected" : "card-unselected"
                            }`}
                            onClick={() => toggleExpand(addOn.id)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center flex-shrink-0">
                                    <span className="text-sm font-medium text-gray-700 cursor-pointer">
                                        {addOn.label}
                                    </span>
                                </div>
                                <div className="text-right">
                                    {selected ? (
                                        <span className="text-sm font-medium text-blue-600">
                                            Selected:{" "}
                                            {selected.selectedPricing.label}{" "}
                                            {formatCurrency(
                                                selected.selectedPricing.amount
                                            )}
                                        </span>
                                    ) : (
                                        <span className="text-sm text-gray-500">
                                            {getSummaryText(addOn)}
                                        </span>
                                    )}
                                    <span className="ml-2">
                                        {isExpanded ? "▲" : "▼"}
                                    </span>
                                </div>
                            </div>
                            {isExpanded && (
                                <div className="mt-4 space-y-2">
                                    {getPricingOptions(addOn).map((pricing) => (
                                        <button
                                            key={pricing.type}
                                            className={`w-full text-left p-2 rounded ${
                                                isSelected(addOn.id, pricing)
                                                    ? "bg-blue-100 border-blue-300"
                                                    : "bg-gray-50 border-gray-200"
                                            } border`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onToggle(addOn.id, pricing);
                                            }}
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-medium">
                                                    {pricing.label}
                                                </span>
                                                <span className="text-sm font-medium text-blue-600">
                                                    {formatCurrency(
                                                        pricing.amount
                                                    )}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AddOnSelector;
