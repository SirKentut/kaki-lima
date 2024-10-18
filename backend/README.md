# Kaki Lima Backend

Welcome to the backend service of the Kaki Lima app, which is responsible for managing all server-side logic, APIs, and database operations. This service is built with Go and is designed to handle requests from the frontend, manage data, and ensure efficient communication between all components of the application.

## Table of Contents

1. [Overview](#overview)
3. [Setup and Installation](#setup-and-installation)
4. [Running the Server](#running-the-server)
5. [API Endpoints](#api-endpoints)
6. [Database](#database)
7. [Environment Variables](#environment-variables)
9. [Contributing](#contributing)


## Overview
This backend is responsible for handling all the core functionalities such as:
- User authentication
- Chef and user management
- Orders and menu handling
- Payment processing (future implementation)
- Real-time notifications (future implementation)

## Making Changes
Once you're done making changes and want to run on your localhost first run:
```bash
go build
```

## Running the Server
Once you've ran the build:
```bash
go run server.go
```