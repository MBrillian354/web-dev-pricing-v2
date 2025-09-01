import React, { useState } from "react";
import BaseTypeSelector from "./components/BaseTypeSelector";
import TechStackSelector from "./components/TechStackSelector";
import ModuleSelector from "./components/ModuleSelector";
import AddOnSelector from "./components/AddOnSelector";
import PricingSummary from "./components/PricingSummary";
import { baseTypes, techStacks } from "./constants/pricingData";
import { usePricingCalculator } from "./hooks/usePricingCalculator";

const App = () => {
    // State
    const firstCategoryTypes = Object.values(baseTypes)[0];
    const [selectedBase, setSelectedBase] = useState(firstCategoryTypes[0]);
    const [selectedTech, setSelectedTech] = useState(techStacks[0]);
    const [selectedModules, setSelectedModules] = useState([]);
    const [selectedAddOns, setSelectedAddOns] = useState([]);

    // Calculate costs
    const { subtotal, addOnsTotal, total } = usePricingCalculator(
        selectedBase,
        selectedTech,
        selectedModules,
        selectedAddOns
    );

    // Toggle module selection
    const toggleModule = (moduleId) => {
        setSelectedModules((prev) =>
            prev.includes(moduleId)
                ? prev.filter((id) => id !== moduleId)
                : [...prev, moduleId]
        );
    };

    // Toggle add-on selection
    const toggleAddOn = (addOnId, selectedPricing) => {
        setSelectedAddOns((prev) => {
            const existingIndex = prev.findIndex((s) => s.id === addOnId);
            if (existingIndex !== -1) {
                const existing = prev[existingIndex];
                if (
                    existing.selectedPricing &&
                    existing.selectedPricing.type === selectedPricing.type &&
                    existing.selectedPricing.amount === selectedPricing.amount
                ) {
                    // Deselect if same
                    return prev.filter((s) => s.id !== addOnId);
                } else {
                    // Update pricing
                    const newSelected = [...prev];
                    newSelected[existingIndex] = {
                        id: addOnId,
                        selectedPricing,
                    };
                    return newSelected;
                }
            } else {
                // Add new
                return [...prev, { id: addOnId, selectedPricing }];
            }
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Web Development Pricing Calculator
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Estimate the cost of your custom web application based
                        on your specific requirements
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Configuration Panel */}
                    <div className="lg:col-span-2 bg-white rounded-lg p-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Project Configuration
                            </h2>

                            <BaseTypeSelector
                                baseTypes={baseTypes}
                                selectedBase={selectedBase}
                                onSelect={setSelectedBase}
                            />

                            <TechStackSelector
                                techStacks={techStacks}
                                selectedTech={selectedTech}
                                onSelect={setSelectedTech}
                            />

                            <ModuleSelector
                                selectedModules={selectedModules}
                                onToggle={toggleModule}
                            />

                            <AddOnSelector
                                selectedAddOns={selectedAddOns}
                                onToggle={toggleAddOn}
                            />
                        </div>
                    </div>

                    <PricingSummary
                        selectedBase={selectedBase}
                        selectedTech={selectedTech}
                        selectedModules={selectedModules}
                        selectedAddOns={selectedAddOns}
                        subtotal={subtotal}
                        addOnsTotal={addOnsTotal}
                        total={total}
                        onRemoveModule={toggleModule}
                        onRemoveAddOn={(selected) =>
                            toggleAddOn(selected.id, selected.selectedPricing)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
