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
                newSet.clear();
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
        if (options.length === 1) {
            return `Prices from only ${formatCurrency(options[0].amount)}`;
        }
        const amounts = options.map((o) => o.amount);
        const minAmount = Math.min(...amounts);
        const maxAmount = Math.max(...amounts);
        return `Prices from ${formatCurrency(minAmount)} to ${formatCurrency(
            maxAmount
        )}`;
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
                            className={`card-base flex justify-between items-center ${
                                selected ? "card-selected" : "card-unselected"
                            }`}
                            onClick={() => toggleExpand(addOn.id)}
                            style={{ position: "relative" }}
                        >
                            <div className="flex flex-col justify-start">
                                <div className="flex items-center flex-shrink-0">
                                    <span className="text-base font-medium text-gray-700 cursor-pointer">
                                        {addOn.label}
                                    </span>
                                </div>
                                <div className="flex items-center flex-shrink-0">
                                    <span className="text-sm text-gray-500 cursor-pointer">
                                        {addOn.desc}
                                    </span>
                                </div>
                                <div className="mt-4">
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
                                </div>
                            </div>
                            {isExpanded && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "100%",
                                        left: 0,
                                        right: 0,
                                        zIndex: 10,
                                        backgroundColor: "white",
                                        border: "1px solid #e5e7eb",
                                        borderRadius: "0.5rem",
                                        boxShadow:
                                            "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                        // padding: "1rem",
                                    }}
                                >
                                    {getPricingOptions(addOn).map((pricing) => (
                                        <button
                                            key={pricing.type}
                                            className={`w-full text-left px-4 py-2 hover:cursor-pointer hover:bg-blue-50 ${
                                                isSelected(addOn.id, pricing)
                                                    ? "bg-blue-100"
                                                    : "bg-white"
                                            }`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onToggle(addOn.id, pricing);
                                                toggleExpand(addOn.id);
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
                            <span className="ml-2">
                                {isExpanded ? "▲" : "▼"}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AddOnSelector;
