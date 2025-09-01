import React from "react";
import { addOns } from "../constants/pricingData.js";
import { formatCurrency } from "../utils/formatCurrency.js";

const AddOnSelector = ({ selectedAddOns, onToggle }) => {
    const getPriceText = (addOn) => {
        let text = "";
        if (addOn.oneTime) {
            if (Array.isArray(addOn.oneTime)) {
                text += `${formatCurrency(addOn.oneTime[0])} - ${formatCurrency(
                    addOn.oneTime[1]
                )}`;
            } else {
                text += formatCurrency(addOn.oneTime);
            }
            text += " (one-time)";
        }
        if (addOn.monthly) {
            if (text) text += " | ";
            if (Array.isArray(addOn.monthly)) {
                text += `${formatCurrency(addOn.monthly[0])} - ${formatCurrency(
                    addOn.monthly[1]
                )}/mo`;
            } else {
                text += formatCurrency(addOn.monthly) + "/mo";
            }
        }
        if (addOn.annual) {
            if (text) text += " | ";
            if (Array.isArray(addOn.annual)) {
                text += `${formatCurrency(addOn.annual[0])} - ${formatCurrency(
                    addOn.annual[1]
                )}/yr`;
            } else {
                text += formatCurrency(addOn.annual) + "/yr";
            }
        }
        return text;
    };
    return (
        <div>
            <h3 className="section-title">Add-on Services</h3>
            <div className="grid-cols-md">
                {addOns.map((addOn) => (
                    <div
                        key={addOn.id}
                        className={`card-base ${
                            selectedAddOns.includes(addOn.id)
                                ? "card-selected"
                                : "card-unselected"
                        }`}
                        onClick={() => onToggle(addOn.id)}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center flex-shrink-0">
                                <input
                                    type="checkbox"
                                    checked={selectedAddOns.includes(addOn.id)}
                                    onChange={() => {}}
                                    className="checkbox"
                                />
                                <label className="ml-2 text-sm font-medium text-gray-700 cursor-pointer">
                                    {addOn.label}
                                </label>
                            </div>
                            <span className="text-sm font-medium text-blue-600">
                                {getPriceText(addOn)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddOnSelector;
