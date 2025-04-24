# 🍽️ Food Ordering Website - MERN Stack

A fully responsive Food Ordering web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This platform allows users to browse food items, place orders, and make secure payments via Stripe. An Admin Dashboard is provided to manage food items and process deliveries.

## 🚀 Features

- 🔐 User Authentication & Authorization
- 🍔 Browse and Order Delicious Food
- 💳 Stripe Payment Integration
- 🧑‍🍳 Admin Dashboard (Add / Delete Food, Process Orders)
- 📱 Fully Responsive Design
- 🔍 Search and Filter Food Items
- 🛒 Cart Functionality
- 📦 Order Management

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Redux / Context API (for state management)
- Bootstrap / Tailwind CSS / CSS Modules (for styling)
- Axios (for API requests)

**Backend:**
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Stripe (Payment Integration)
- JSON Web Tokens (JWT) for Auth


## 🔑 Authentication Flow

- Users can register and login using email & password.
- JWT token is issued on successful login.
- Protected routes ensure only logged-in users access order/cart.
- Admin panel is accessible only by admins.

## 🛒 User Flow

1. User lands on the homepage.
2. Browses through available food items.
3. Adds desired items to the cart.
4. Proceeds to checkout.
5. Makes payment via Stripe.
6. Order details are stored in MongoDB.
7. User can view past orders.

## 💳 Stripe Payment Integration

- Stripe Checkout is used for a secure and seamless payment experience.
- After clicking "Checkout", user is redirected to Stripe.
- Once payment is complete, the server verifies it and marks the order as "Paid".
- Webhooks can optionally be used for real-time payment updates.

## 👨‍🍳 Admin Panel

- Admin can log in via a separate route.
- Features:
  - Add new food items (with image, price, category).
  - Delete or update existing items.
  - View and process customer orders.
  - Update delivery status (Pending → Out for Delivery → Delivered).

## 📱 Responsiveness

- Mobile-first responsive layout.
- Adapts seamlessly to all screen sizes (desktop, tablet, mobile).
- Optimized using Flexbox and/or Tailwind CSS/Grid Layout.





