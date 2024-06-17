import React, { useEffect } from "react";

const StripePricingTable = (tableId, tableKey) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.stripe.com/v3/pricing-table.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return React.createElement("stripe-pricing-table", {
        "pricing-table-id": {tableId},
        "publishable-key": {tableKey},
    });
};

export default StripePricingTable;