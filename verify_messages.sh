#!/bin/bash

# 1. Send path public message
echo "Sending public message..."
curl -X POST http://localhost:8089/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Parent", "email": "test@parent.com", "subject": "Inquiry", "message": "Is admission open?", "phone": "1234567890"}'
echo -e "\n\n"

# 2. Login as Admin
echo "Logging in as Admin..."
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:8089/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@kindleminds.com", "password": "admin123"}')

TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"accessToken":"[^"]*' | cut -d'"' -f3)

if [ -z "$TOKEN" ]; then
  echo "Login failed. Response: $LOGIN_RESPONSE"
  exit 1
fi
echo "Login successful!"

# 3. Fetch Messages
echo "Fetching messages as Admin..."
curl -X GET http://localhost:8089/api/contact \
  -H "Authorization: Bearer $TOKEN"
echo -e "\n"
