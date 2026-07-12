import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    setLoading,
    setResults,
    setError,
    setSearchParams,
} from "../redux/store";
import { searchFares } from "../services/api";

export default function SearchBar() {
    const dispatch = useDispatch();

    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");

    const handleSearch = async () => {

        if (!pickup || !dropoff) {
            alert("Please enter pickup and dropoff");
            return;
        }

        dispatch(setLoading(true));
        dispatch(setSearchParams({ pickup, dropoff }));

        try {

            const data = await searchFares(pickup, dropoff);

            dispatch(setResults(data));

        } catch (err) {

            dispatch(setError("Unable to fetch fares"));

        } finally {

            dispatch(setLoading(false));

        }
    };

    return (

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

            <h2 className="text-3xl font-bold mb-6">
                Search Ride
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

                <input
                    type="text"
                    placeholder="📍 Pickup Location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="border rounded-xl p-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    placeholder="📍 Dropoff Location"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="border rounded-xl p-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
                />

            </div>

            <button
                onClick={handleSearch}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 text-lg font-bold"
            >
                Compare Prices
            </button>

        </div>

    );
}