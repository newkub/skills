# API Reference

## Purpose

API reference for Windsurf Analytics and Management APIs

## Overview

Windsurf provides REST APIs for:
- Analytics and usage tracking
- Team and user management
- Configuration management
- Role-based access control

## Base URL

```
https://api.windsurf.com/v1
```

## Authentication

### Creating a Service Key

1. Go to Admin Portal
2. Navigate to API Keys
3. Create new service key
4. Copy key for use

### Required Permissions

Service keys require:
- `analytics:read` - For analytics endpoints
- `team:manage` - For team management
- `user:manage` - For user management

### Using Service Keys

Include in request headers:
```
Authorization: Bearer YOUR_SERVICE_KEY
```

## Available Endpoints

### Analytics Endpoints

**Get Cascade Analytics**
- `GET /analytics/cascade`
- Retrieve Cascade usage data

**Custom Analytics Query**
- `POST /analytics/query`
- Execute custom analytics queries

**Get Team Credit Balance**
- `GET /teams/{teamId}/credits`
- Check team credit balance

**Get Usage Configuration**
- `GET /teams/{teamId}/usage-config`
- Get usage limits and caps

**Set Usage Configuration**
- `PUT /teams/{teamId}/usage-config`
- Set usage limits and caps

**Get User Page Analytics**
- `GET /users/{userId}/analytics`
- Get user-specific analytics

### Management Endpoints

**Role Management**
- `GET /roles` - List roles
- `POST /roles` - Create role
- `PUT /roles/{roleId}` - Update role
- `DELETE /roles/{roleId}` - Delete role

**User Management**
- `GET /users` - List users
- `POST /users` - Create user
- `PUT /users/{userId}` - Update user
- `DELETE /users/{userId}` - Delete user

## Rate Limits

- 100 requests per minute per service key
- 10,000 requests per day per team
- Contact support for higher limits

## Summary

| Category | Endpoints |
|----------|-----------|
| **Analytics** | cascade, query, credits, usage-config |
| **Management** | roles, users |
| **Authentication** | Service keys |