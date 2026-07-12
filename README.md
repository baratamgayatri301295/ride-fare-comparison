# Ride Fare Comparison

Full-stack application that aggregates real-time fare quotes from multiple ride-sharing platforms (Uber, Ola, Rapido) and helps users find the cheapest option with detailed comparison.

## Quick Start

### Prerequisites
- Node.js 18+, npm 9+
- MongoDB (local or MongoDB Atlas)
- Google Maps, Uber, Ola, Rapido API keys

### Setup
```bash
# Clone repository
git clone <repository-url>
cd ride-fare-comparison

# Set environment variables
cp .env.example .env
# Update .env with your API keys

# Backend (Terminal 1)
cd backend
npm install
npm start

# Frontend (Terminal 2)
cd frontend
npm install
npm run dev

# Open http://localhost:5173
```

## Tech Stack
- **Frontend**: React 18, Redux, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: Mocked the data from using this "https://nominatim.openstreetmap.org/search"

## API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/search` | Get fare quotes |
|

## Project Structure
```
frontend/          → React application
backend/           → Express server
database/          → Database schemas
docs/              → Documentation
```

## Features
- Real-time fare comparison
- Multi-provider aggregation
- Google Maps integration
- Search history
- Responsive UI
- Error handling


## Troubleshooting

| Issue | Fix                                      |
|-------|------------------------------------------|
| MongoDB connection error | Verify connection string in .env         |
| API key invalid | Check API credentials & permissions      |
| Port in use | Kill process: `lsof -i :5001` or `:5173` |
| Module not found | Run `npm install` in respective folder   |

## Author
Gayatri Baratam  
📧 baratamgayatri15@gmail.com  
💼 LinkedIn | 🐙 GitHub

---

**Version**: 1.0.0 | **Status**: Production Ready
