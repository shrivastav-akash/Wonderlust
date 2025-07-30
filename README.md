# Wonderlust

A full-featured travel accommodation booking platform inspired by Airbnb, built with Node.js, Express, and MongoDB. This project demonstrates modern web development practices including user authentication, review systems, and responsive design.

## 🚀 Features

### Core Functionality

- **User Authentication & Authorization**

  - User registration and login with Passport.js
  - Session management with express-session
  - Secure password hashing with passport-local-mongoose
  - Flash messages for user feedback

- **Travel Listings Management**

  - Create, view, edit, and delete travel listings
  - Rich listing details including title, description, price, location, and country
  - Image support with default fallback images
  - Responsive grid layout for listing display

- **Review System**

  - Add reviews with ratings (1-5 stars) and comments
  - Delete reviews (with proper authorization)
  - Reviews are linked to listings and users
  - Automatic cleanup when listings are deleted

- **Data Validation & Security**
  - Server-side validation with Joi schemas
  - Input sanitization and error handling
  - MongoDB with Mongoose ODM
  - Express middleware for request logging

### Technical Features

- **Frontend**: EJS templating with Bootstrap 5 for responsive design
- **Backend**: Express.js with RESTful API design
- **Database**: MongoDB with Mongoose for data modeling
- **Authentication**: Passport.js with local strategy
- **Session Management**: Express-session with secure cookies
- **Error Handling**: Custom error middleware with user-friendly messages

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js, passport-local-mongoose
- **Frontend**: EJS templating, Bootstrap 5
- **Validation**: Joi schema validation
- **Session Management**: express-session, connect-flash
- **Development**: method-override for RESTful routes

## 📦 Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on default port 27017)

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd Wonderlust
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**

   - Ensure MongoDB is running locally (`mongodb://127.0.0.1:27017/wonderlust`)
   - Seed the database with sample data:
     ```bash
     node init/index.js
     ```
   - You should see `data was initialized` in your terminal

4. **Start the application:**

   ```bash
   node app.js
   ```

5. **Access the application:**
   - Main application: [http://localhost:3000/listings](http://localhost:3000/listings)
   - User registration: [http://localhost:3000/signup](http://localhost:3000/signup)
   - User login: [http://localhost:3000/login](http://localhost:3000/login)

## 📁 Project Structure

```
Wonderlust/
├── app.js                 # Main Express application
├── package.json           # Dependencies and scripts
├── schema.js             # Joi validation schemas
├── models/               # Mongoose data models
│   ├── listing.js       # Listing model with reviews
│   ├── review.js        # Review model
│   └── user.js          # User model with authentication
├── routes/               # Express route handlers
│   ├── listing.js       # CRUD operations for listings
│   ├── review.js        # Review management
│   └── user.js          # Authentication routes
├── views/                # EJS templates
│   ├── layouts/         # Template layouts
│   ├── listings/        # Listing-related views
│   ├── users/           # Authentication views
│   └── includes/        # Reusable components
├── public/              # Static assets
│   ├── css/            # Stylesheets
│   └── js/             # Client-side JavaScript
├── utils/               # Utility functions
│   ├── ExpressError.js  # Custom error handling
│   └── wrapAsync.js     # Async error wrapper
└── init/                # Database seeding
    ├── data.js          # Sample data
    └── index.js         # Seeding script
```

## 🔧 Key Features Explained

### User Authentication

- Secure user registration with email validation
- Login/logout functionality with session management
- Flash messages for user feedback
- Protected routes and user-specific content

### Listing Management

- Full CRUD operations for travel listings
- Rich data model with title, description, price, location, country
- Image support with Unsplash integration
- Responsive grid layout for listing display

### Review System

- Add reviews with ratings and comments
- Delete reviews with proper authorization
- Reviews are automatically linked to listings
- Cascade deletion when listings are removed

### Data Validation

- Server-side validation using Joi schemas
- Input sanitization and error handling
- User-friendly error messages
- Secure data processing

## 🎨 UI/UX Features

- **Responsive Design**: Bootstrap 5 for mobile-first approach
- **Modern Interface**: Clean, intuitive user interface
- **Flash Messages**: Real-time user feedback
- **Navigation**: Easy-to-use navigation with user authentication status
- **Grid Layout**: Responsive card-based listing display

## 🔒 Security Features

- **Password Hashing**: Secure password storage with passport-local-mongoose
- **Session Security**: HttpOnly cookies with expiration
- **Input Validation**: Server-side validation to prevent malicious input
- **Error Handling**: Graceful error handling without exposing sensitive information

## 🚀 Future Enhancements

- [ ] Image upload functionality
- [ ] Search and filtering capabilities
- [ ] User profiles and preferences
- [ ] Booking system
- [ ] Payment integration
- [ ] Email notifications
- [ ] Advanced search with geolocation
- [ ] Admin dashboard
- [ ] API documentation

## 📝 Notes

- The application uses Bootstrap 5 for styling and responsive design
- All data is stored in a local MongoDB database
- To reset the database, re-run the seed script: `node init/index.js`
- Session data is stored in memory (consider Redis for production)
- Default images are sourced from Unsplash

## 📄 License

ISC

---

**Built with ❤️ for learning and practicing modern web development techniques.**
