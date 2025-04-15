# 🧠 AI Documentation Platform - EU AI Act Compliance

> A unified, web-based platform for full-lifecycle AI documentation, designed to meet **EU AI Act (Article 11)** requirements using the **MERN stack** and **AdminJS** with built-in **RBAC** (Role-Based Access Control) and a **transparency/trustworthiness scoring system**.

---

## 🚀 Project Overview

Transparency and trust in AI systems are critical, especially for high-risk applications in regulated sectors like healthcare. While tools like **AI Factsheets**, **Model Cards**, and **Datasheets for Datasets** offer partial solutions, none satisfy the **legal and lifecycle documentation needs** mandated by the EU AI Act.

This platform:

- Provides **pre-formatted documentation templates** for AI system lifecycle.
- Offers **RBAC** to manage contributions across stakeholder roles.
- Includes a **scoring mechanism** to evaluate AI **trustworthiness and transparency**.
- Was successfully tested on CE-certified AI medical devices: **Vara**, **Annalise**, and **Us2.ai**.

---

## 🛠️ Tech Stack

- **MongoDB Atlas**
- **Express.js**
- **React.js**
- **Node.js**
- **AdminJS**
- **TypeScript**

---

## 📦 Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-doc-platform.git
cd ai-doc-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Node.js

If you don't have Node.js installed, download it from the [official website](https://nodejs.org/) (version >= 18 recommended).

Or use **nvm**:

```bash
nvm install 18
nvm use 18
```

---

## 🔐 Environment Variables Setup

Create a `.env` file in the root of the project with the following structure:

```env
DATABASE_URL=<Your MongoDB connection string>
DATABASE_DIALECT=mongodb
DATABASE_NAME=ai-docs
DATABASE_HOST=cluster0.mongodb.net
DATABASE_USER=<your-db-user>
DATABASE_PASSWORD=<your-db-password>
COOKIE_SECRET=your-secret-key
PORT=5000
```

---

## 🌐 MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new **free-tier cluster**.
3. Add a **new database user** under “Database Access”.
4. Under **Network Access**, allow access from your IP.
5. Copy the **connection string** and use it in your `.env` file (`DATABASE_URL`).

---

## ⚙️ Run Locally

Compile the TypeScript files and start the project:

```bash
npm run build
npm start
```

Or for development:

```bash
npm run dev
```

AdminJS dashboard will be available at:

```
http://localhost:5000/admin
```

---

## 👤 Admin Logins

Use the following test credentials:

### Admin Access
- **Email**: `admin@aol.com`  
- **Password**: `ADMIN!`

### Contributor Access
- **Email**: `abc@aol.com`  
- **Password**: `ABC!`

---

## 🔐 RBAC (Role-Based Access Control)

The platform supports structured access across roles:
- **Admin**: Full system access.
- **Contributors**: Role-specific edit/view permissions.
- **Auditors**: Read-only access with compliance view.

---

## ✅ Features

- 📋 Pre-formatted, regulation-aligned templates
- 🔐 Role-based access control (RBAC)
- ⚖️ Trustworthiness & transparency scoring
- 🌍 MongoDB Atlas integration
- 📊 Full lifecycle documentation for AI systems
- 🧪 Tested on CE-certified medical AI devices

---

## 🧩 Future Plans

- Multi-language support
- Plug-and-play regulatory updates
- Integration with CI/CD pipelines for auto-doc updates

---

## 📄 License

MIT License © 2025
