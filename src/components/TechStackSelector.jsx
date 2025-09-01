import React from "react";

const TechStackSelector = ({ techStacks, selectedTech, onSelect }) => {
    return (
        <div className="mb-6">
            <h3 className="section-title">Technology Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {techStacks.map((tech) => (
                    <div
                        key={tech.id}
                        className={`card-base ${
                            selectedTech.id === tech.id
                                ? "card-selected"
                                : "card-unselected"
                        }`}
                        onClick={() => onSelect(tech)}
                    >
                        <div className="flex items-center">
                            <div
                                className={`radio-base ${
                                    selectedTech.id === tech.id
                                        ? "radio-selected"
                                        : "radio-unselected"
                                }`}
                            >
                                {selectedTech.id === tech.id && (
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
                            <span className="font-medium">{tech.label}</span>
                        </div>
                        <div className="desc-text">
                            Multiplier: {tech.multiplier}x
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackSelector;
