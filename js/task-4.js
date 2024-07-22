function getShippingCost(country) {
    switch (country) {
        case "Australia":
            return "Shipping to Australia will cost 170 credits";
        case "China":
            return "Shipping to China will cost 100 credits";
        case "Chile":
            return "Shipping to Chile will cost 250 credits";
        case "Jamaica":
            return "Shipping to Jamaica will cost 120 credits";
        case "Germany":
        case "Sweden":
            return "Sorry, there is no delivery to your country";
        default:
            return "Shipping cost for " + country + " is not available";
    }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
console.log(getShippingCost("France"));
