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

## Sales Ordering System UI

- Login Page <br />
![Login Page Sales](https://github.com/user-attachments/assets/920329ff-f42d-4b6c-b95a-8580804a5298)

- Ordering Page <br />
![Ordering Page Sales](https://github.com/user-attachments/assets/58200174-a96b-4f25-a70e-198a97869b0f)

- Payment Page <br />
![Payment Page Sales](https://github.com/user-attachments/assets/a1cb8753-de47-4789-bf42-c2f3715e8f7c)

- Order Summary Page <br />
![Order Summary Page Sales](https://github.com/user-attachments/assets/6d667215-accb-47b6-99e0-31ee01949674)

- Customer List Page <br />
![Customer List Page Sales](https://github.com/user-attachments/assets/63f4714d-9dbc-48d1-a31b-c48a59298648)

## HR System UI

- Login Page <br />
![Login Page HR](https://github.com/user-attachments/assets/72288f67-c514-4aa2-8f8f-0db76c70e934)

- Home Page <br />
![Home Page HR](https://github.com/user-attachments/assets/d5a44bb6-3683-4c0a-89d4-e64bddc62d5b)

- View Profile Page <br />
![View Profile Page HR](https://github.com/user-attachments/assets/7045a9d8-81ce-4203-ba54-a159b88da97a)

- Edit Profile Page <br />
![Edit Profile Page HR](https://github.com/user-attachments/assets/ced6c94e-cebe-4dfc-8eb6-ffb15054859e)

- Attendances Page <br />
![Attendances Page HR](https://github.com/user-attachments/assets/17135ed4-45c1-41b7-890a-bafe1caf786a)

- Edit Attendances Page <br />
![Edit Attendances Page HR](https://github.com/user-attachments/assets/672b5b05-8e58-457e-a525-88baf5981933)

- Departments Page <br />
 ![Departments Page HR](https://github.com/user-attachments/assets/49b17df0-ce8c-4adc-a4ed-895feabc4177)

- Service Page <br />
![Service Page HR](https://github.com/user-attachments/assets/dc7af7ca-1754-4834-b918-bd7006b5ac9b)

- Attach Payroll Page <br />
![Attach Payroll Page HR](https://github.com/user-attachments/assets/78af3776-178e-4e4e-b21a-c27b2051a01b)

- Payslip Page <br />
![Payslip Page HR](https://github.com/user-attachments/assets/c96842c5-940a-432d-b4a0-f75cdfb25828)

- Create User Page <br />
![Create User Page HR](https://github.com/user-attachments/assets/bb3fa31d-2acc-4960-bbd3-53677ee41e66)

## Inventory System UI

- Inventory Main Page <br />
![Inventory Main Page UI](https://github.com/user-attachments/assets/ecaa93f3-fdcb-4c78-a369-4e5a8ed94898)

- Add Item Page <br />
![Add Item Page Inventory](https://github.com/user-attachments/assets/a2eb9d4d-397d-40c1-a722-a8a5cdc2ae43)

- Main Edit Item Page <br />
![Main Edit Item Page Inventory](https://github.com/user-attachments/assets/f8623c9a-6746-4c2f-9c4e-ff175551cc8d)

- Main Delete Item Page <br />
![Main Delete Item Page Inventory](https://github.com/user-attachments/assets/3dda400c-7600-4dd2-8f91-1bb611ad991a)

- Edit Item Page <br />
![Edit Item Page Inventory](https://github.com/user-attachments/assets/c2651cdd-7ef6-41c9-ba18-a6b0622f7c76)

- Delete Item Page <br />
![Delete Item Page Inventory](https://github.com/user-attachments/assets/867f401b-6412-4137-8e2d-a01714409409)

## 📄 License
This project is licensed under the **MIT License**.

## 🤝 Contributors
- **Ralph Henry L. Dominisac**
- **Alexandra Marie C. Lanorias**
- **Shaun Brannon C. Leonar**

For inquiries or contributions, feel free to contact us!

---
**© 2022 Marseey's Restaurant Management System**
