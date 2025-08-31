import React from "react";
import { formatCurrency } from "../utils/formatCurrency";

const BaseTypeSelector = ({ baseTypes, selectedBase, onSelect }) => {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
                Base Application Type
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {baseTypes.map((base) => (
                    <div
                        key={base.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            selectedBase.id === base.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300"
                        }`}
                        onClick={() => onSelect(base)}
                    >
                        <div className="flex items-center mb-2">
                            <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                                    selectedBase.id === base.id
                                        ? "border-blue-500 bg-blue-500"
                                        : "border-gray-400"
                                }`}
                            >
                                {selectedBase.id === base.id && (
                                    <svg
                                        className="w-3 h-3 text-white"
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
                        <p className="text-sm text-gray-600 ml-8">
                            {base.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BaseTypeSelector;
