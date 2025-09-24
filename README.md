# 🚛 Route Management System

> A modern RESTful API for intelligent transportation management with automated driver assignment and real-time schedule tracking.

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1+-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)

## 🌟 Features

### 🎯 Core Functionality
- **Smart Driver Management** - Add drivers with license validation and real-time availability tracking
- **Intelligent Route Planning** - Create routes with automatic optimal driver assignment
- **Dynamic Schedule System** - Real-time tracking of active, completed, and unassigned schedules
- **Historical Analytics** - Comprehensive driver performance history with pagination support
- **Auto-Completion Engine** - Cron-based automatic schedule completion and driver availability restoration

### 🔧 Technical Features
- **Data Validation** - Robust request validation using Joi schemas
- **Error Handling** - Comprehensive error management with detailed responses
- **Pagination Support** - Efficient data retrieval for large datasets
- **RESTful Architecture** - Clean, intuitive API design following REST principles

---

## 📡 API Endpoints

| Method | Endpoint | Description | Features |
|--------|----------|-------------|----------|
| `POST` | `/api/drivers` | Add new driver | ✅ Validation, 🔒 License verification |
| `GET` | `/api/drivers/:id/history` | Driver route history | 📄 Pagination, 🔍 Status filtering |
| `POST` | `/api/routes` | Create new route | 🤖 Auto-assignment, ⚡ Instant scheduling |
| `GET` | `/api/schedules` | List all schedules | 📄 Pagination, 🔗 Population |

---

## 🚀 Quick Start

### 📋 Prerequisites
- **Node.js** `v18.0.0+`
- **MongoDB** `v4.4+` running on `localhost:27017`
- **npm** or **yarn** package manager

### ⚡ Installation

1. **Clone & Navigate**
   ```bash
   git clone <repository-url>
   cd route-management-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env file
   touch .env
   ```
   
   Add the following configuration:
   ```env
   SERVER_PORT=3000
   DB_CONNECTION=mongodb://127.0.0.1:27017/routeSystem
   ```
   
   > 🔒 **Security Note**: The `.env` file is automatically excluded from version control via `.gitignore`

4. **Launch Application**
   ```bash
   npm start
   ```

🎉 **Server running at** `http://localhost:3000`

---

## 🧠 Assumptions Made

- **Driver Assignment**: The first available driver is automatically assigned to a new route when created.
- **Availability Management**: Drivers become unavailable during active schedules and are restored to available once the schedule ends.
- **Auto-Completion**: A background cron job runs every minute to automatically mark expired schedules as completed.
- **Unassigned Routes**: If no drivers are available, the route is created but marked as unassigned.
- **Time Formats**: Supports natural language inputs like "2 hours 30 mins", "45 mins", or "1 hour".
- **Pagination Defaults**: API endpoints return 4 items per page by default, with a customizable limit query parameter.

---

## 🌟 Features Implemented

### 🚦 Core Functionality
- **Driver Management**: Add drivers with license validation and real-time availability tracking.  
- **Route Planning**: Create routes with automatic optimal driver assignment.  
- **Dynamic Scheduling**: Track active, completed, and unassigned schedules in real time.  
- **Driver History**: View detailed driver performance and schedule history with pagination.  
- **Auto-Completion Engine**: Automated schedule completion and driver availability restoration via cron job.  

### 🔧 Technical Features
- **Robust Data Validation** using Joi schemas.  
- **Comprehensive Error Handling** with clear, field-specific messages.  
- **Pagination & Filtering** for efficient data retrieval.  
- **RESTful API Architecture** following modern Node.js best practices.  


---

<div align="center">

**🌟 Built with modern Node.js practices for scalable transportation management**

*For support or contributions, please refer to the project documentation*

</div>
