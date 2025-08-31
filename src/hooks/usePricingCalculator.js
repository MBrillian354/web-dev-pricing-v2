import { useMemo } from "react";
import { modules, addOns } from "../constants/pricingData.js";

export const usePricingCalculator = (
    selectedBase,
    selectedTech,
    selectedModules,
    selectedAddOns
) => {
    return useMemo(() => {
        const baseCost = selectedBase.price;
        const techMultipliedCost = baseCost * selectedTech.multiplier;
        const modulesCost = selectedModules.reduce((sum, moduleId) => {
            const module = modules.find((m) => m.id === moduleId);
            return sum + (module ? module.price : 0);
        }, 0);

        const subtotal = techMultipliedCost + modulesCost;

        const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
            const addOn = addOns.find((a) => a.id === addOnId);
            return sum + (addOn ? addOn.cost : 0);
        }, 0);

        return {
            subtotal,
            addOnsTotal,
            total: subtotal + addOnsTotal,
        };
    }, [selectedBase, selectedTech, selectedModules, selectedAddOns]);
};
