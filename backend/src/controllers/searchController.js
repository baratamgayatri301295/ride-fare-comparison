const mapService = require("../services/mapService");
const { generateFares } = require("../services/fareService");

async function searchFares(req, res) {
    try {
        const { pickup, dropoff } = req.body;

        if (!pickup || !dropoff) {
            return res.status(400).json({
                success: false,
                message: "Pickup and dropoff are required",
            });
        }

        console.log("Pickup:", pickup);
        console.log("Dropoff:", dropoff);

        // Convert pickup address
        const pickupCoords = await mapService.geocodeAddress(pickup);
        console.log("Pickup Coordinates:", pickupCoords);

        // Convert dropoff address
        const dropoffCoords = await mapService.geocodeAddress(dropoff);
        console.log("Dropoff Coordinates:", dropoffCoords);

        // Calculate distance
        const distanceData = await mapService.getDistance(
            pickupCoords,
            dropoffCoords
        );
        console.log("Distance Data:", distanceData);

        // Generate fares
        const fares = generateFares(
            distanceData.distance,
            distanceData.duration
        );

        return res.status(200).json({
            success: true,
            pickup: req.body.pickup,
            dropoff: req.body.dropoff,
            distance: Number(distanceData.distance.toFixed(2)),
            duration: Number(distanceData.duration.toFixed(2)),
            fares,
        });

    } catch (error) {
        console.error("FULL ERROR:");
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
}

module.exports = {
    searchFares,
};