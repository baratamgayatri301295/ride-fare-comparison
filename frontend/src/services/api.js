import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const searchFares = async (pickup, dropoff) => {
    const response = await api.post("/search", {
        pickup,
        dropoff,
    });

    return response.data;
};

export default api;