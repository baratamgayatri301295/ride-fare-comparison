async function geocodeAddress(address) {
    try {
        console.log("Geocoding:", address);

        const response = await axios.get(
            "https://nominatim.openstreetmap.org/search",
            {
                params: {
                    q: address,
                    format: "jsonv2",
                    limit: 1,
                    countrycodes: "in",
                },
                headers: {
                    "User-Agent": "RideFareComparisonApp/1.0 (baratamgayatri15@gmail.com)",
                },
            }
        );

        return {
            lat: Number(response.data[0].lat),
            lng: Number(response.data[0].lon),
            formatted: response.data[0].display_name,
        };
    } catch (error) {
        console.log("Status:", error.response?.status);
        console.log("Body:", error.response?.data);
        throw error;
    }
}