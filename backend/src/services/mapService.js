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