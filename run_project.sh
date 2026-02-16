#!/bin/bash

# Function to handle cleanup on exit
cleanup() {
    echo "Stopping all services..."
    kill $(jobs -p)
    exit
}

trap cleanup SIGINT

echo "Starting Kindle Minds Play School..."

# Start Backend
echo "Starting Backend..."
cd backend
mvn spring-boot:run &
BACKEND_PID=$!
cd ..

# Wait for backend to be somewhat ready (not a strict check)
sleep 10

# Start Frontend
echo "Starting Frontend..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo "Application started!"
echo "Backend running on port 8080"
echo "Frontend running on port 5173"
echo "Press Ctrl+C to stop."

wait
