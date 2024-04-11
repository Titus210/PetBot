#!/bin/bash

# Petbot Deployment Script
# Date: [Date]
# Description: This script is used to deploy the Tabibu application. It starts various backend and frontend processes,
# Ensures open ports are killed, and provides error handling and process monitoring.


# Function to gracefully stop process
stop_processes() {
    echo "Stopping all processes..."
    pkill -P $$ # Kill all child processes
    echo "All processes stopped."
}

# Function to kill specified ports
kill_ports() {
    echo "Killing ports 5173, 5000, 5001, 5002..."
    fuser -k 5173/tcp
    fuser -k 5000/tcp
    fuser -k 5001/tcp
    fuser -k 5002/tcp
    echo "Ports killed."
}

# Trap Ctrl+C to stop processes before exiting
trap stop_processes SIGINT

# Kill specified ports
kill_ports

# Run backend authentication code
echo "Starting authentication process..."
cd backend/app/authentication
python3 app.py &
sleep 5
if [ $? -eq 0 ]; then
    echo "Authentication process is running at $(pwd)"
else
    echo "Error: Authentication process failed to start."
    stop_processes
    exit 1
fi

# Run backend machine learning code
echo "Starting machine learning process..."
cd ../machine_learning
python3 new.py  &
sleep 5
chatbot.py 
sleep 5 &
if [ $? -eq 0 ]; then
    echo "Machine learning process is running at $(pwd)"
else
    echo "Error: Machine learning process failed to start."
    stop_processes
    exit 1
fi

# Run frontend code
cd ../../../frontend/PetBot
npm run dev &
sleep 5
if [ $? -eq 0 ]; then
    echo "Frontend process is running at $(pwd)"
else
    echo "Error: Frontend process failed to start."
    stop_processes
    exit 1
fi

echo "All processes started successfully."

# Wait for all child processes to finish
wait

