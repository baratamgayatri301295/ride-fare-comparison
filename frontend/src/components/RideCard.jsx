import uber from "../assets/uber.png";
import ola from "../assets/ola.png";
import rapido from "../assets/rapido.png";
import namma from "../assets/namma.png";

const logos = {
    Uber: uber,
    Ola: ola,
    Rapido: rapido,
    "Namma Yatri": namma,
};

export default function RideCard({ ride, isCheapest }) {
    return (
        <div
            className={`bg-white rounded-2xl shadow-md p-5 mb-4 border transition hover:shadow-xl ${
                isCheapest
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200"
            }`}
        >
            <div className="flex items-center justify-between">

                {/* LEFT */}

                <div className="flex items-center gap-5">

                    <img
                        src={logos[ride.provider]}
                        alt={ride.provider}
                        className="w-14 h-14 object-contain"
                    />

                    <div>

                        <h2 className="text-xl font-bold">
                            {ride.provider}
                        </h2>

                        <p className="text-gray-500">
                            {ride.vehicleType}
                        </p>

                        {isCheapest && (
                            <span className="text-green-600 text-sm font-semibold">
                ✓ Cheapest
              </span>
                        )}

                    </div>

                </div>

                {/* CENTER */}

                <div className="text-center">

                    <p className="text-gray-500">
                        ETA
                    </p>

                    <h3 className="text-lg font-bold">
                        {Math.round(ride.eta)} min
                    </h3>

                </div>

                {/* PRICE */}

                <div className="text-center">

                    <h2 className="text-3xl font-bold">
                        ₹{ride.fare}
                    </h2>

                </div>

                {/* BUTTON */}

                <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
                    Book
                </button>

            </div>
        </div>
    );
}