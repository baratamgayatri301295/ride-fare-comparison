const axios = require("axios");

// Convert address to coordinates using LocationIQ
async function geocodeAddress(address) {
    try {
        const response = await axios.get(
            "https://us1.locationiq.com/v1/search",
            {
                params: {
                    key: process.env.LOCATIONIQ_API_KEY,
                    q: address,
                    format: "json",
                    limit: 1,
                },
            }
        );

        if (!response.data || response.data.length === 0) {
            throw new Error("Address not found");
        }

        const result = response.data[0];

        return {
            lat: Number(result.lat),
            lng: Number(result.lon),
            formatted: result.display_name,
        };
    } catch (error) {
        console.error("LocationIQ Error:", error.response?.data || error.message);
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