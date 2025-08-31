import React from "react";

const TechStackSelector = ({ techStacks, selectedTech, onSelect }) => {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
                Technology Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {techStacks.map((tech) => (
                    <div
                        key={tech.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            selectedTech.id === tech.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300"
                        }`}
                        onClick={() => onSelect(tech)}
                    >
                        <div className="flex items-center">
                            <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                                    selectedTech.id === tech.id
                                        ? "border-blue-500 bg-blue-500"
                                        : "border-gray-400"
                                }`}
                            >
                                {selectedTech.id === tech.id && (
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
                            <span className="font-medium">{tech.label}</span>
                        </div>
                        <div className="text-sm text-gray-600 ml-8">
                            Multiplier: {tech.multiplier}x
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackSelector;
