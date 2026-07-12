function randomOffset() {
    return Math.floor(Math.random() * 21) - 10;
}

function generateFares(distanceKm, durationMin) {
    return [
        {
            provider: "Uber",
            vehicleType: "Uber Go",
            vehicle: "Car",
            fare: Math.round(60 + distanceKm * 15 + randomOffset()),
            eta: Math.round(durationMin + 2),
            availability: true,
        },
        {
            provider: "Uber",
            vehicleType: "Moto",
            vehicle: "Bike",
            fare: Math.round(30 + distanceKm * 8 + randomOffset()),
            eta: Math.round(durationMin),
            availability: true,
        },
        {
            provider: "Uber",
            vehicleType: "Auto",
            vehicle: "Auto",
            fare: Math.round(40 + distanceKm * 10 + randomOffset()),
            eta: Math.round(durationMin + 1),
            availability: true,
        },

        {
            provider: "Ola",
            vehicleType: "Mini",
            vehicle: "Car",
            fare: Math.round(55 + distanceKm * 14 + randomOffset()),
            eta: Math.round(durationMin + 3),
            availability: true,
        },
        {
            provider: "Ola",
            vehicleType: "Bike",
            vehicle: "Bike",
            fare: Math.round(28 + distanceKm * 8 + randomOffset()),
            eta: Math.round(durationMin),
            availability: true,
        },
        {
            provider: "Ola",
            vehicleType: "Auto",
            vehicle: "Auto",
            fare: Math.round(38 + distanceKm * 9 + randomOffset()),
            eta: Math.round(durationMin + 2),
            availability: true,
        },

        {
            provider: "Rapido",
            vehicleType: "Bike",
            vehicle: "Bike",
            fare: Math.round(25 + distanceKm * 7 + randomOffset()),
            eta: Math.round(durationMin),
            availability: true,
        },
        {
            provider: "Rapido",
            vehicleType: "Auto",
            vehicle: "Auto",
            fare: Math.round(35 + distanceKm * 8 + randomOffset()),
            eta: Math.round(durationMin + 2),
            availability: true,
        },

        {
            provider: "Namma Yatri",
            vehicleType: "Auto",
            vehicle: "Auto",
            fare: Math.round(32 + distanceKm * 8 + randomOffset()),
            eta: Math.round(durationMin + 1),
            availability: true,
        }
    ].sort((a, b) => a.fare - b.fare);
}

module.exports = { generateFares };