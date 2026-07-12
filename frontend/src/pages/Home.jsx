import SearchBar from "../components/SearchBar";
import FareComparison from "../components/FareComparison";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}

            <div className="bg-gradient-to-r from-black to-gray-800 text-white py-6 shadow-lg">

                <div className="max-w-6xl mx-auto px-6">

                    <h1 className="text-4xl font-bold">
                        🚖 Ride Fare Comparison
                    </h1>

                    <p className="text-gray-300 mt-2">
                        Compare Uber, Ola, Rapido & Namma Yatri instantly
                    </p>

                </div>

            </div>

            <div className="max-w-6xl mx-auto px-6 py-8">

                <SearchBar />

                <FareComparison />

            </div>

        </div>
    );
}