#!/bin/bash

set -euf -o pipefail

# Creating the DB is required for backend API to work:
echo "SELECT 'CREATE DATABASE employeemanager' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'employeemanager')\gexec" | psql -U postgres
