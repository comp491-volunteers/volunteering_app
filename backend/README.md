# Volunteering App Backend (Serverless + AWS)

This folder contains a minimal AWS Serverless backend with:
- API Gateway (HTTP API)
- Lambda functions (Node.js 20)
- DynamoDB tables (Users, Events, Reservations, Attendance)

Endpoints (after deploy):
- GET /health → returns `{ status: "ok" }`
- GET /events → list events (scans table)
- POST /events → create an event (see request body below)

## Prerequisites
- Node.js 18+ and npm available on your PATH
- AWS account and credentials configured locally (`aws configure`)
- Serverless Framework (via npx or global install)

## Deploy
From this directory:
```bash
# Option A: use npx (no global install needed)
npx serverless deploy

# Option B: if you have serverless installed globally
# serverless deploy
```

After deployment, the output will show your HTTP API URL. You can verify health:
```bash
curl "$HTTP_API_URL/health"
```

## Remove stack
```bash
npx serverless remove
```

## Environment/Tables
DynamoDB table names are derived from the service and stage:
- USERS_TABLE
- EVENTS_TABLE
- RESERVATIONS_TABLE (GSIs: byUser, byEvent)
- ATTENDANCE_TABLE (GSIs: byUser, byEvent)

These are created automatically during `deploy`.

## Event payload (POST /events)
```json
{
  "eventId": "evt_123",
  "title": "Park Cleanup",
  "description": "Bring gloves",
  "location": { "latitude": 40.7128, "longitude": -74.0060, "addressText": "NYC" },
  "startTime": "2025-10-30T10:00:00.000Z",
  "endTime": "2025-10-30T13:00:00.000Z",
  "capacity": 50,
  "skillsRequired": ["lifting"],
  "orgId": "org_123"
}
```

## Local development
You can iterate quickly without full infra by deploying just Lambdas/API first, then add Cognito and more routes later. To run offline you'd add plugins like `serverless-offline` and `serverless-dynamodb-local`, but for simplicity this starter deploys directly to AWS.

## Next steps
- Add Cognito user pool + identity pool for auth
- Protect routes with authorizers
- Add reservation and attendance endpoints
- Wire the mobile app to call the `/health` and `/events` endpoints
