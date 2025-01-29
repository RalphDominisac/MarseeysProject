# Restaurant Management System for Marseey's

## 📌 Project Overview
The **Restaurant Management System (RMS) for Marseey's** is a comprehensive software solution designed to streamline the restaurant's daily operations. It addresses inefficiencies in inventory tracking, order processing, payroll management, and overall restaurant administration.

## 🎯 Purpose & Objectives
This system was developed to:
- Improve **order management** by integrating a structured POS system.
- Enhance **inventory tracking** to prevent stock shortages and overstocking.
- Automate **payroll processing** to minimize errors and reduce manual calculations.
- Provide **real-time sales tracking** and reports for better decision-making.
- Optimize **staff attendance monitoring** through a more reliable system.

## 🏗️ System Architecture
The system follows a **three-tier architecture**:
- **Frontend:** Built with HTML, CSS, and JavaScript for an intuitive user experience.
- **Backend:** Powered by Heroku and MySQL to handle data processing and storage.
- **Database:** MySQL relational database to store restaurant data securely.

## ⚙️ Features & Functionalities
### 🔹 Order Management
- POS integration for easy order processing
- Ticket printing for kitchen staff
- Order tracking for dine-in, take-out, and delivery

### 🔹 Inventory Management
- Real-time stock monitoring
- Automated low-stock alerts
- Supplier and restocking management

### 🔹 Payroll System
- Automated salary calculations
- Employee attendance tracking
- Payslip generation

### 🔹 Sales & Reporting
- Daily, weekly, and monthly sales reports
- Expense tracking
- Profit and loss calculation

### 🔹 User Management
- Role-based access control (Owner, Manager, Cashier, Kitchen Staff, Waiter)
- Secure login and authentication

## 📌 System Diagrams
The system includes several key UML diagrams:
- **Use Case Diagram** – Illustrates the interactions between users and the system.
- **Domain Class Diagram** – Defines the system's core entities and relationships.
- **Design Class Diagram** – Represents the software structure and data flow.

## 💾 Technology Stack
- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Heroku
- **Database:** MySQL
- **Version Control:** Git/GitHub

## 🚀 Installation & Setup
### Prerequisites:
- XAMPP (for local server setup)
- PHP 7.4+
- MySQL Database
- Apache Server

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/marseeys-rms.git
   ```
2. Move the project folder to `htdocs` (for XAMPP users).
3. Import the database:
   - Open **phpMyAdmin**.
   - Create a new database named `marseeys_rms`.
   - Import the provided `database.sql` file.
4. Configure database settings in `config.php`:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_USER', 'root');
   define('DB_PASS', '');
   define('DB_NAME', 'marseeys_rms');
   ```
5. Start Apache and MySQL in XAMPP.
6. Open the project in a browser:
   ```
   http://localhost/marseeys-rms/
   ```

## 🔐 Security Measures
- User authentication with password hashing
- Restricted access to administrative features
- Data validation and SQL injection prevention

## 🛠️ Future Enhancements
- Mobile app integration for remote management
- AI-powered demand forecasting for inventory optimization
- Multi-branch support for future expansion

## 📄 License
This project is licensed under the **MIT License**.

## 🤝 Contributors
- **Ralph Henry L. Dominisac**
- **Alexandra Marie C. Lanorias**
- **Shaun Brannon C. Leonar**

For inquiries or contributions, feel free to contact us!

---
**© 2022 Marseey's Restaurant Management System**
