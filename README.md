# Task 3: Full-Stack Feedback Form (Expert)

## Prerequisites

Before you begin, ensure you have the following installed:
- PHP >= 8.1
- Composer
- Node.js and NPM
- MySQL or another Laravel-supported database
- Git

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/farkmu45/imago-laravel-test-2.git
   cd imago-laravel-test-2
   ```

2. **Install PHP Dependencies**
   ```bash
   composer install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Configure Database**
   
   Edit the `.env` file and update the database configuration:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

5. **Run Migrations**
   ```bash
   php artisan migrate
   ```

6. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

7. **Compile Assets**
   ```bash
   npm run dev
   ```

## Running the Application

1. **Start the Laravel Development Server**
   ```bash
   php artisan serve
   ```

2. **Access the Application**
   
   Open your browser and visit:
   ```
   http://localhost:8000
   ```

## API Endpoints

The application exposes the following API endpoints:

- `GET /api/feedback` - Retrieve all feedback entries
- `POST /api/feedback` - Submit new feedback

### API Request Format

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "comment": "Your product is amazing!"
}
```

## Validation Rules

### Client-side Validation
- Name: Required
- Email: Required, valid email format
- Comment: Required, minimum 10 characters

### Server-side Validation
- Name: Required, maximum 255 characters
- Email: Required, valid email format, maximum 255 characters
- Comment: Required, minimum 10 characters

## Troubleshooting

1. If you encounter database issues:
```bash
php artisan config:clear
php artisan cache:clear
```

2. If the styles are not loading:
```bash
npm run dev
```
or for production:
```bash
npm run build
```

3. To reset the database and migrations:
```bash
php artisan migrate:fresh
```
