import React, { useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";

const BaseTypeSelector = ({ baseTypes, selectedBase, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6 relative">
            <h3 className="section-title">Base Application Type</h3>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:cursor-pointer transition-all duration-200 ease-in-out"
            >
                <span>
                    {`${selectedBase.label} ${formatCurrency(
                        selectedBase.price
                    )}`.replace(/\b\w/g, (l) => l.toUpperCase())}
                </span>
                <svg
                    className={`w-5 h-5 transform transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-96 overflow-y-auto">
                    {Object.entries(baseTypes).map(([category, types]) => (
                        <div key={category}>
                            <div className="px-3 py-2 text-sm font-semibold text-gray-700 bg-gray-100">
                                {category.replace(/-/g, " ").toUpperCase()}
                            </div>
                            {types.map((base) => (
                                <div
                                    key={base.id}
                                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                    onClick={() => {
                                        onSelect(base);
                                        setIsOpen(false);
                                    }}
                                >
                                    <div className="flex-1">
                                        <span className="font-medium">
                                            {base.label
                                                .replace(/-/g, " ")
                                                .replace(/\b\w/g, (l) =>
                                                    l.toUpperCase()
                                                )}
                                        </span>
                                        <div className="text-sm text-blue-500">
                                            {formatCurrency(base.price)}
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {base.desc}
                                        </p>
                                    </div>
                                    {selectedBase.id === base.id && (
                                        <svg
                                            className="w-5 h-5 text-blue-500"
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
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BaseTypeSelector;
