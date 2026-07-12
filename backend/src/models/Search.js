import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRides } from "../redux/searchSlice";

export default function SearchBar() {
    const dispatch = useDispatch();

    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");

    const handleSearch = () => {
        if (!pickup || !dropoff) {
            alert("Please enter pickup and dropoff locations.");
            return;
        }

        dispatch(
            searchRides({
                pickup,
                dropoff,
            })
        );
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

            <h2 className="text-2xl font-bold mb-6">
                Search Ride
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

                <div>

                    <label className="block text-gray-700 font-semibold mb-2">
                        📍 Pickup
                    </label>

                    <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="Enter pickup location"
                        className="w-full border rounded-xl px-5 py-4 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                </div>

                <div>

                    <label className="block text-gray-700 font-semibold mb-2">
                        📍 Dropoff
                    </label>

                    <input
                        type="text"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        placeholder="Enter drop location"
                        className="w-full border rounded-xl px-5 py-4 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                </div>

            </div>

            <button
                onClick={handleSearch}
                className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-xl transition"
            >
                Compare Prices
            </button>

        </div>
    );
}