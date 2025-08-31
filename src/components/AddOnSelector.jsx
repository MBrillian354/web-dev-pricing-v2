import React from "react";
import { addOns } from "../constants/pricingData.js";
import { formatCurrency } from "../utils/formatCurrency.js";

const AddOnSelector = ({ selectedAddOns, onToggle }) => {
    return (
        <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">
                Add-on Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {addOns.map((addOn) => (
                    <div
                        key={addOn.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            selectedAddOns.includes(addOn.id)
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300"
                        }`}
                        onClick={() => onToggle(addOn.id)}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={selectedAddOns.includes(addOn.id)}
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
    );
};

export default AddOnSelector;
