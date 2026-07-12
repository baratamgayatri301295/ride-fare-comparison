const axios = require("axios");

// Convert address to coordinates using OpenStreetMap
async function geocodeAddress(address) {
    try {
        let response = await axios.get(
            "https://nominatim.openstreetmap.org/search",
            {
                params: {
                    q: address,
                    format: "jsonv2",
                    limit: 1,
                    countrycodes: "in",
                },
                headers: {
                    "User-Agent": "RideFareComparisonApp",
                },
            }
        );

        // Retry with a simpler address if nothing is found
        if (response.data.length === 0) {
            const simplified = address
                .replace("Rajiv Gandhi International Airport", "Hyderabad Airport")
                .replace("International", "")
                .replace("Airport,", "Airport")
                .trim();

            console.log("Retrying with:", simplified);

            response = await axios.get(
                "https://nominatim.openstreetmap.org/search",
                {
                    params: {
                        q: simplified,
                        format: "jsonv2",
                        limit: 1,
                        countrycodes: "in",
                    },
                    headers: {
                        "User-Agent": "RideFareComparisonApp",
                    },
                }
            );
        }

        if (response.data.length === 0) {
            throw new Error("Address not found");
        }

        const result = response.data[0];

        return {
            lat: Number(result.lat),
            lng: Number(result.lon),
            formatted: result.display_name,
        };
    } catch (error) {
        console.error("Geocoding Error:", error.message);
        throw error;
    }
}

// Calculate distance using OSRM
async function getDistance(pickup, dropoff) {
    try {
        const url = `https://router.project-osrm.org/route/v1/driving/${pickup.lng},${pickup.lat};${dropoff.lng},${dropoff.lat}?overview=false`;

        const response = await axios.get(url);

        if (!response.data.routes || response.data.routes.length === 0) {
            throw new Error("Route not found");
        }

        const route = response.data.routes[0];

        return {
            distance: route.distance / 1000,
            duration: route.duration / 60,
        };
    } catch (error) {
        console.error("Distance Error:", error.message);
        throw error;
    }
}

module.exports = {
    geocodeAddress,
    getDistance,
};