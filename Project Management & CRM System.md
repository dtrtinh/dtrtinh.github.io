# HISDC Web - Project Management & CRM System

## 📋 System Overview

HISDC Web is an enterprise-grade **Project Management & CRM System** designed for Vietnamese organizations to manage projects, tasks, teams, and customer relationships with comprehensive role-based access control, real-time tracking, and resource optimization.

**Language**: Vietnamese (vi)  
**Timezone**: Asia/Ho_Chi_Minh  
**Framework**: Laravel + Vue.js  
**Architecture**: API-driven (Frontend + Separate REST Backend API)

---

## 🎯 Business Problems Solved

1. **Project Visibility** - Centralized project tracking with status workflow
2. **Resource Optimization** - Man-days calculation and user utilization tracking
3. **Team Collaboration** - Comments, task assignment, progress updates
4. **Competency Matching** - Assign users based on required abilities/skills
5. **Accountability** - User ratings, task ownership, activity audit trail
6. **Compliance** - Role-based access control with 2FA support
7. **Customer Management** - Integrated account/contact database
8. **Financial Tracking** - Task compensation and billable hours calculation

---

## 🏗️ System Architecture

This is a **Frontend-only Laravel Application** that communicates with a **Backend REST API**:

```
┌─────────────────────┐
│  Frontend (Laravel) │ ◄─────► API Gateway (sugar.net/api/v1)
│   HISDC Web         │
└─────────────────────┘
     ↓
  Database
```

- **Frontend**: Web interface for user interaction (this application)
- **Backend API**: Handles business logic and data persistence
- **API Authentication**: Token-based via `Api-Token` header

---

## 📦 Core Features & Modules

### 1️⃣ **Project Management**

**Controller**: `ProjectsController`

- ✅ Create, edit, and manage project details
- ✅ Project status workflow with color-coded states
- ✅ Assign team members to projects with different roles
- ✅ Track project milestones and targets
- ✅ Link customers and contacts to projects
- ✅ Project documentation management
- ✅ Rating and comment system for collaboration
- ✅ Project rejection workflow with history tracking
- ✅ Transfer projects to managers or directors
- ✅ Man-days calculation for resource tracking
- ✅ Export project reports

**Key Data**:
- Project name, email, description
- Assigned users with roles
- Project type (customizable)
- Project status (customizable with colors)
- Milestones with completion percentage
- Contacts and accounts linked
- Comments and ratings

---

### 2️⃣ **Task Management**

**Controller**: `TaskController`, Models: `Tasks`, `TaskUser`, `TaskChecklist`

- ✅ Create tasks within projects with hierarchical structure (parent/child tasks)
- ✅ Task types with salary rates for billing
- ✅ Assign multiple users to tasks with duration tracking
- ✅ Task status management and progress percentage
- ✅ Task checklists/subtasks for detailed breakdown
- ✅ Salary and rate calculation for task completion
- ✅ Start and finish date scheduling
- ✅ User task ratings
- ✅ Task completion percentage tracking

**Key Fields**:
- Task name, description
- Start/finish dates
- Completion percentage
- Assigned users with duration (man-days)
- Task type (determines hourly rate)
- Salary and salary_rate for compensation
- Checklists for subtask management

---

### 3️⃣ **Team Management**

**Controller**: `TeamController`

- ✅ Team CRUD operations
- ✅ Team member assignment
- ✅ Team-level todo/checklist management
- ✅ Schedule management (assigned and overall team schedule)
- ✅ Automatic check-in scheduling
- ✅ Team communication and notifications
- ✅ Real-time notification system

---

### 4️⃣ **User Management**

**Controller**: `UsersController`, Model: `Users`

- ✅ User CRUD with complete profile management
- ✅ Role and permission assignment
- ✅ User titles: Manager, Sales, Tech, Customer
- ✅ Competency assignment:
  - **Abilities** (job functions)
  - **Skills** (technical expertise)
  - **Knowledge** (domain expertise)
- ✅ User ratings and performance tracking
- ✅ Avatar and photo management
- ✅ Department assignment
- ✅ 2FA Support (Google Authenticator with encrypted secret keys)
- ✅ Password management
- ✅ Admin impersonation ("login-with" feature)
- ✅ User activity tracking

**User Titles**:
- Manager (ID: 1)
- Sales (ID: 2)
- Tech (ID: 3)
- Customer (ID: 4)

---

### 5️⃣ **Customer & Contact Management**

**Controllers**: `AccountsController`, `ContactsController`

- ✅ Customer account management
- ✅ Geographical hierarchy (Province → District → Ward)
- ✅ Contact management linked to accounts
- ✅ Modal interface for contact entry
- ✅ Account-project linkage
- ✅ Contact assignment to projects

---

### 6️⃣ **Competency Management**

**Models**: `Ability`, `Skill`, `Knowledge`, `UsersAbilities`, `UsersSkills`, `UsersKnowledge`

- ✅ Hierarchical competency definitions (main categories → subcategories)
- ✅ Soft taxonomy for job functions, technical skills, and expertise areas
- ✅ Assign multiple competencies to users
- ✅ Used for resource matching and capacity planning
- ✅ User competency filtering for task assignment

**Structure**:
```
Ability/Skill/Knowledge
├─ Parent category (parent_id = null)
├─ Subcategory 1 (parent_id = parent)
├─ Subcategory 2 (parent_id = parent)
└─ Ordering for UI display
```

---

### 7️⃣ **Role-Based Access Control (RBAC)**

**Models**: `Roles`, `Permissions`, `RoleHasPermission`, `UserHasRole`

- ✅ Comprehensive permission system tied to routes
- ✅ Customizable roles with permission assignment
- ✅ User-role associations
- ✅ Controller-level permission checking via middleware
- ✅ Admin role with unrestricted access

**Permission Checking**:
```php
// Format: controller@action
// Middleware validates before allowing route access
// Admin users bypass permission checks
```

---

### 8️⃣ **Administration & Configuration**

**Controllers**: `DepartmentController`, `RolesController`, `PermissionsController`

- ✅ **Department Management**: Organizational unit creation and hierarchy
- ✅ **Project Types**: Customizable project categorization with colors
- ✅ **Project Status**: Customizable status definitions with color-coding
- ✅ **Task Types**: Task classification with salary rates
- ✅ **Email Groups**: Group email management with user assignment
- ✅ **Backpack CRUD Interface**: Admin interface for master data management
- ✅ Complete audit trail of configurations

---

### 9️⃣ **Collaboration & Communication**

**Controllers**: `TodoController`, Models: `ProjectComments`, `ProjectRating`

- ✅ Team todo/checklist system
- ✅ Project comments for team discussion
- ✅ Project rating system
- ✅ Comments on todos with user tracking
- ✅ Real-time notifications
- ✅ Document sharing and attachment management
- ✅ Telegram logging integration for critical events

---

### 🔟 **Dashboard & Reporting**

**Controller**: `HomeController`

- ✅ Dashboard with date range filtering (current month default)
- ✅ Project manager (PM) dashboard
- ✅ Manager dashboard
- ✅ AJAX endpoint for task user data
- ✅ Export functionality for reports (Excel/CSV)
- ✅ 2FA authentication status on dashboard
- ✅ Visual metrics and KPIs

---

## 👥 User Roles & Workflow

### **Project Lifecycle**

```
1. Creation
   └─► New project with basic details, account, contact

2. Assignment
   └─► Sales/PM/Tech team members assigned with roles

3. Task Breakdown
   └─► Tasks created with milestones and checklists

4. Resource Allocation
   └─► Users assigned to tasks with duration & compensation

5. Progress Tracking
   └─► Completion percentage, man-days calculation

6. Review & Rating
   └─► Team members rate project performance

7. Approval Flow
   └─► Transfer to managers → directors

8. Closure/Rejection
   └─► Project completion or rejection with history
```

### **Typical User Scenarios**

| User Role | Main Tasks |
|-----------|-----------|
| **Manager** | Oversee all projects, assign resources, approve projects, view dashboards |
| **Sales** | Create projects, assign contacts, manage customer relationships |
| **Tech** | Execute tasks, update progress, provide time estimates |
| **Customer** | Track project progress, provide feedback, view project status |
| **Admin** | Manage users, roles, permissions, configurations |

---

## 🗄️ Core Data Entities

### **Project Module**
- `projects` - Project records
- `project_types` - Project classification
- `project_status` - Status definitions
- `project_users_assigned` - Project team members
- `project_contacts` - Linked contacts
- `project_comments` - Discussion threads
- `project_rating` - Performance ratings

### **Task Module**
- `project_tasks` - Task details
- `project_task_users` - User assignments with compensation
- `task_types` - Task classification with rates
- `task_checklists` - Subtasks

### **Team Module**
- `teams` - Team records
- `todos` - Team-level checklists

### **User Module**
- `users` - User profiles with 2FA support
- `user_titles` - User role types
- `user_titles_translations` - Multilingual titles

### **Competency Module**
- `abilities` - Job function hierarchy
- `skills` - Technical skills hierarchy
- `knowledge` - Expertise knowledge hierarchy
- `users_abilities` - User-ability mappings
- `users_skills` - User-skill mappings
- `users_knowledge` - User-knowledge mappings

### **Organization Module**
- `departments` - Organizational units
- `accounts` - Customer accounts
- `contacts` - Contact information
- `locations` - Province/District/Ward hierarchy

### **Security & Configuration**
- `roles` - Role definitions
- `permissions` - Permission definitions
- `role_has_permissions` - Role-permission mappings
- `user_has_roles` - User-role mappings
- `settings` - System configuration

### **Milestones & Documents**
- `milestones` - Project phases
- `documents` - Project files and attachments

---

## 🔐 Security Features

### **Authentication & Authorization**
- ✅ Token-based API authentication
- ✅ 2FA (Two-Factor Authentication) via Google Authenticator
- ✅ QR code generation for 2FA setup
- ✅ Encrypted secret keys for 2FA
- ✅ 4-minute token blacklist cache for 2FA

### **Permission System**
```php
// Middleware-level permission checking
Check Permission Middleware (CheckPermissions)
├─ Allow if user is admin
├─ Check user-role-permission mapping
└─ Return 403 Forbidden if unauthorized
```

### **Data Protection**
- ✅ Soft deletes using `is_deleted` flag
- ✅ User tracking (`user_created`, `user_modified`)
- ✅ Timestamps tracking (`created_at`, `updated_at`)
- ✅ Audit trail for project rejection history

---

## 🛠️ Tech Stack

### **Backend**
- **Framework**: Laravel 5.x+
- **PHP**: 7.x+
- **Database**: MySQL/MariaDB (assumed)
- **Admin Interface**: Backpack for Laravel
- **2FA**: Laravel Google2FA

### **Frontend**
- **Template Engine**: Blade
- **UI Components**: Bootstrap (Backpack theme)
- **Interactive UI**: Select2 (AJAX dropdowns)
- **File Management**: ElFinder
- **Export**: Excel/CSV generation

### **External Services**
- **API Backend**: REST API at `sugar.net/api/v1`
- **Logging**: Telegram bot integration
- **Authentication**: Google Authenticator

### **Database Migrations**
- All models use standard Laravel migrations
- Soft deletes pattern throughout
- Foreign key relationships

---

## 📊 Key Metrics & Tracking

### **Resource Metrics**
- **Man-days**: Total hours/days allocated to tasks
- **User Utilization**: Percentage of assigned work
- **Project Capacity**: Based on team availability

### **Project Metrics**
- **Completion Percentage**: Overall project progress
- **Milestone Tracking**: Phase-by-phase progress
- **Task Ratings**: Team feedback on task execution
- **Project Ratings**: Overall project performance

### **Financial Metrics**
- **Salary Calculation**: Per-task compensation based on task type
- **Billable Hours**: Duration × hourly rate
- **Cost Tracking**: Total compensation per project

---

## 🚀 Getting Started

### **Prerequisites**
- PHP 7.x or higher
- Composer
- MySQL/MariaDB database
- Backend API running at `sugar.net/api/v1`

### **Installation**
```bash
# Clone repository
git clone [repository-url]

# Install dependencies
composer install

# Create environment file
cp .env.example .env

# Configure API endpoint
# Edit .env: API_URL=http://api.sugar.net/api/v1

# Generate application key
php artisan key:generate

# Run migrations (if needed)
php artisan migrate

# Start development server
php artisan serve
```

### **Configuration Files**
- `config/app.php` - API endpoint, timezone, locale
- `config/constants.php` - Pagination, user titles
- `config/params.php` - Application parameters
- `config/database.php` - Database connection

### **2FA Setup for Users**
1. User enables 2FA in profile settings
2. QR code displayed for Google Authenticator app
3. User scans QR code
4. System stores encrypted secret key
5. 2FA required on next login

---

## 📁 Project Structure

```
app/
├── Models/             # Data models with relationships
├── Http/
│   ├── Controllers/    # Business logic controllers
│   ├── Middleware/     # Request middleware (auth, permissions)
│   └── Requests/       # Form validation
├── Helpers/            # Auth, Export, Upload helpers
└── Providers/          # Service providers

routes/
├── web.php            # Web routes
└── api.php            # API routes (mostly unused - backend API)

resources/
├── views/             # Blade templates
├── assets/            # CSS, JS, images
└── lang/              # Translations (Vietnamese)

database/
├── migrations/        # Database schema
├── seeds/             # Database seeders
└── factories/         # Model factories

config/
├── app.php            # Core config
├── auth.php           # Authentication config
├── database.php       # Database config
└── constants.php      # Application constants

storage/
├── app/               # File uploads
├── framework/         # Cache, sessions
└── logs/              # Application logs
```

---

## 🔌 API Integration

### **API Communication Pattern**
```php
// All controllers use Auth::request_api() helper
$response = Auth::request_api(
    'GET|POST|PUT|DELETE',
    '/endpoint',
    $parameters
);
```

### **Common API Endpoints**
- `/project/*` - Project operations
- `/project_task/*` - Task operations
- `/department/*` - Department queries
- `/todo/*` - Todo management
- `/user/*` - User operations

### **Authentication Header**
```
Api-Token: [user-api-token]
```

---

## 🎨 User Interface Features

### **Dashboard Views**
- Main dashboard with date filtering
- PM dashboard for project managers
- Manager dashboard for directors
- Export reports button

### **Interactive Elements**
- Select2 AJAX dropdowns for large datasets
- Modal dialogs for data entry
- Responsive tables with pagination
- ElFinder file browser
- Backpack CRUD admin interface

### **Notifications**
- Real-time system notifications
- Telegram logging for critical events
- Email group management

---

## 💾 Data Audit Trail

### **Tracked Fields**
- `created_at` - Record creation timestamp
- `updated_at` - Last modification timestamp
- `user_created` - User who created record
- `user_modified` - User who modified record
- `is_deleted` - Soft delete flag

### **History Tracking**
- Project rejection history with reasons
- User assignment changes
- Status workflow transitions

---

## 🔧 Maintenance & Operations

### **Key Configuration Points**
- **API URL**: `config/app.php` → `link_api` environment variable
- **Pagination**: `config/constants.php` → PAGINATE constant
- **Timezone**: `config/app.php` → Asia/Ho_Chi_Minh
- **Locale**: `config/app.php` → Vietnamese (vi)

### **Log Locations**
- Application logs: `storage/logs/`
- Telegram logging: Configured in app setup
- Database audit trail: Audit columns in tables

### **Cache Management**
- 2FA token blacklist: 4-minute cache
- User tokens: Cached by username in `token:{username}` key

---

## 📝 Notes

- **API-Driven**: This frontend application requires a functioning backend API for all features to work
- **Vietnamese System**: All UI text and date formats configured for Vietnam region
- **Enterprise Ready**: Comprehensive permission system, 2FA, audit trails
- **Scalable**: Designed to handle large teams and multiple concurrent projects
- **Real-time**: Notifications and dashboard updates
- **Export Capable**: Generate reports in Excel/CSV format

---

## 📞 Support & Documentation

For issues, feature requests, or questions regarding:
- **Project Management Features**: Contact Project Manager
- **Technical Integration**: Contact Development Team
- **User Management & Permissions**: Contact System Administrator
- **API Integration**: Refer to Backend API documentation

---

**Last Updated**: April 2026  
**System Version**: Enterprise Edition  
**Maintained By**: Development Team
