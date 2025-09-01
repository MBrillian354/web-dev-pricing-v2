import React from "react";
import { formatCurrency } from "../utils/formatCurrency";

const BaseTypeSelector = ({ baseTypes, selectedBase, onSelect }) => {
    return (
        <div className="mb-6">
            <h3 className="section-title">Base Application Type</h3>
            <div className="grid-cols-md">
                {baseTypes.map((base) => (
                    <div
                        key={base.id}
                        className={`card-base ${
                            selectedBase.id === base.id
                                ? "card-selected"
                                : "card-unselected"
                        }`}
                        onClick={() => onSelect(base)}
                    >
                        <div className="flex items-center mb-2">
                            <div
                                className={`radio-base ${
                                    selectedBase.id === base.id
                                        ? "radio-selected"
                                        : "radio-unselected"
                                }`}
                            >
                                {selectedBase.id === base.id && (
                                    <svg
                                        className="check-icon"
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
                            <div className="flex-1">
                                <span className="font-medium">
                                    {base.label}
                                </span>
                                <div className="font-semibold text-blue-500">
                                    {formatCurrency(base.price)}
                                </div>
                            </div>
                        </div>
                        <p className="desc-text">{base.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BaseTypeSelector;
