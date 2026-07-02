# E-Commerce Backend System 🛒

A robust, secure, and scalable backend system for an E-Commerce application. Built using the MERN stack's backend technologies (Node.js, Express.js, MongoDB), this API handles user authentication, product management, advanced search and filtering, and order processing.

## 🔗 Live API URL
**Base URL:**  [https://m4-e-commerce-backend-system.onrender.com]

**🔍 Quick Test (View Products in Browser):** [https://m4-e-commerce-backend-system.onrender.com/api/products]


## 🚀 Features

- **Authentication & Authorization:** Secure user registration and login using `bcryptjs` for password hashing and `jsonwebtoken` (JWT) for token-based access.
- **Role-Based Access Control (RBAC):** Distinct privileges for `admin` and `user` roles. (e.g., only admins can add products or change order statuses).
- **Product Management:** Complete CRUD operations for products.
- **Advanced Filtering & Search:** Search products by name, filter by category, and sort dynamically.
- **Order Management:** Users can place orders; Admins can view all orders and update delivery statuses.
- **Centralized Error Handling:** Custom middleware for consistent and clear error responses.
- **Security Best Practices:** Environment variables protection and input validations.

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas & Mongoose ODM
- **Security:** bcryptjs, jsonwebtoken, cors
- **Deployment:** Render

## 📂 Recommended Folder Structure

```text
ecommerce-backend/
├── config/           # Database connection setup
├── controllers/      # Route logic and database interactions
├── middleware/       # Custom middlewares (Auth, RBAC, Error Handling)
├── models/           # Mongoose schemas (User, Product, Order)
├── routes/           # Express API route definitions
├── testing-screenshots/ # API testing proofs via Postman/Atlas
├── .env              # Environment variables (Ignored in Git)
├── .gitignore        # Files to ignore in version control
└── main.js           # Entry point for the application

```

## ⚙️ Installation & Setup (Local Development)

Follow these steps to run the project locally.

**1. Clone the repository:**

```bash
git clone https://github.com/gunasekaran006-alt/Module-4--Building-an--E-Commerce-Backend-System.git
cd Module-4--Building-an-E-Commerce-Backend-System

```

**2. Install dependencies:**

```bash
npm install

```

**3. Set up Environment Variables:**
Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key

```

**4. Run the Development Server:**

```bash
npm run dev

```

*The server will start securely on `http://localhost:5000*`

## 📡 API Endpoints

### Authentication

* `POST /api/auth/register` - Register a new user
* `POST /api/auth/login` - Authenticate user & get token

### Users

* `GET /api/users/profile` - Get logged-in user's profile (Protected)

### Products

* `GET /api/products` - Get all products (Supports `?search=`, `?category=`, `?sort=`)
* `POST /api/products` - Create a product (Admin only)

### Orders

* `POST /api/orders` - Place a new order (Protected)
* `GET /api/orders` - Get logged-in user's orders (Protected)

## 📸 API Testing & Proof of Execution

Screenshots of the API functionality tested via **Postman** and the **MongoDB Atlas** database collections are available in the `testing-screenshots/` directory. Sensitive data like JWT tokens have been securely redacted to ensure data privacy.

---

*Developed as part of the Full Stack Development program.*

```
