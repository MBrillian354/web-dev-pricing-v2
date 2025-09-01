import React from "react";
import { addOns } from "../constants/pricingData.js";
import { formatCurrency } from "../utils/formatCurrency.js";

const AddOnSelector = ({ selectedAddOns, onToggle }) => {
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
                            <div className="flex items-center">
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
