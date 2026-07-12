import { useState } from "react";
import { useSelector } from "react-redux";
import RideCard from "./RideCard";

export default function FareComparison() {
    const { loading, error, results } = useSelector((state) => state.search);

    const [selectedVehicle, setSelectedVehicle] = useState("Car");

    if (loading) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center text-xl font-semibold">
                Loading rides...
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 text-red-600 rounded-2xl p-6 text-center">
                {error}
            </div>
        );
    }

    if (!results) return null;

    const rides = results.fares
        .filter((ride) => ride.vehicle === selectedVehicle)
        .sort((a, b) => a.fare - b.fare);

    if (rides.length === 0) return null;

    const cheapest = rides[0];
    const savings = rides[rides.length - 1].fare - cheapest.fare;

    return (
        <div className="space-y-6">

            {/* Route Card */}

            <div className="bg-white rounded-2xl shadow-lg p-6">

                <div className="flex flex-col md:flex-row md:justify-between gap-6">

                    <div>

                        <h3 className="text-gray-500 text-sm uppercase">
                            Pickup
                        </h3>

                        <p className="text-xl font-semibold">
                            {results.pickup.split(",")[0]}
                        </p>

                    </div>

                    <div>

                        <h3 className="text-gray-500 text-sm uppercase">
                            Dropoff
                        </h3>

                        <p className="text-xl font-semibold">
                            {results.dropoff.split(",")[0]}
                        </p>

                    </div>

                </div>

                <div className="flex gap-10 mt-6">

                    <div>

                        <p className="text-gray-500">
                            Distance
                        </p>

                        <p className="text-xl font-bold">
                            📏 {Number(results.distance).toFixed(2)} km
                        </p>

                    </div>

                    <div>

                        <p className="text-gray-500">
                            Duration
                        </p>

                        <p className="text-xl font-bold">
                            ⏱ {Math.round(results.duration)} mins
                        </p>

                    </div>

                </div>

            </div>

            {/* Vehicle Buttons */}

            <div className="bg-white rounded-2xl shadow-lg p-6">

                <h2 className="font-bold text-xl mb-5">
                    Choose Vehicle
                </h2>

                <div className="grid grid-cols-3 gap-5">

                    <button
                        onClick={() => setSelectedVehicle("Bike")}
                        className={`rounded-2xl p-5 transition ${
                            selectedVehicle === "Bike"
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    >
                        <div className="text-5xl">🏍</div>
                        <div className="mt-2 font-bold text-lg">Bike</div>
                    </button>

                    <button
                        onClick={() => setSelectedVehicle("Auto")}
                        className={`rounded-2xl p-5 transition ${
                            selectedVehicle === "Auto"
                                ? "bg-green-600 text-white shadow-lg"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    >
                        <div className="text-5xl">🛺</div>
                        <div className="mt-2 font-bold text-lg">Auto</div>
                    </button>

                    <button
                        onClick={() => setSelectedVehicle("Car")}
                        className={`rounded-2xl p-5 transition ${
                            selectedVehicle === "Car"
                                ? "bg-yellow-500 text-white shadow-lg"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    >
                        <div className="text-5xl">🚗</div>
                        <div className="mt-2 font-bold text-lg">Car</div>
                    </button>

                </div>

            </div>

            {/* Cheapest */}

            <div className="bg-green-50 border border-green-300 rounded-2xl p-5">

                <h2 className="text-2xl font-bold text-green-700">
                    💰 Save ₹{savings}
                </h2>

                <p className="mt-2">
                    Cheapest ride:
                    <span className="font-bold">
            {" "}
                        {cheapest.provider} {cheapest.vehicleType}
          </span>
                </p>

            </div>

            {/* Ride List */}

            <div className="space-y-4">

                {rides.map((ride, index) => (
                    <RideCard
                        key={index}
                        ride={ride}
                        isCheapest={
                            ride.provider === cheapest.provider &&
                            ride.vehicleType === cheapest.vehicleType
                        }
                    />
                ))}

            </div>

        </div>
    );
}