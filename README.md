# **CHEVAL**

## **Purpose**
Cheval is a horse management system is designed to simplify stable management for horse owners.
The term **cheval** originates from the French language where it means horse. 

---

## **Installation Steps**

### **Prerequisites**
- **Backend**:
  - PHP 8.2+
  - Composer
  - MySQL
- **Frontend**:
  - Node.js & npm
  - Angular CLI
- **General**:
  - Git

### **Backend Setup (Laravel)**
   git clone <https://github.com/Anamari-ctrl/Cheval>
   cd horse-management-system
   cd backend
   composer install
   cp .env.example .env
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=horse_management
     DB_USERNAME=your_username
     DB_PASSWORD=your_password
   php artisan migrate
   php artisan serve

### **Frontend Setup (Angular)**
   cd ../frontend
   npm install 
   ng serve





