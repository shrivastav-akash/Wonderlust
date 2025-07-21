# Wonderlust

This is a replica project of AirBnB in which I have tried to develop a travel website to practice my skills in Web development.

## Features

- Create, view, edit, and delete travel listings
- Server-side validation with Joi
- EJS templating and Bootstrap styling
- MongoDB for data storage

## Getting Started

Follow these steps to set up and run the project on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on default port 27017)

### Installation

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

   - Make sure MongoDB is running locally (`mongodb://127.0.0.1:27017/wonderlust` is the default connection string).
   - To seed the database with sample listings, run:
     ```bash
     node init/index.js
     ```
   - You should see `data was initialized` in your terminal.

4. **Start the application:**

   ```bash
   node app.js
   ```

   The server will start on [http://localhost:3000](http://localhost:3000).

5. **Open in your browser:**
   Go to [http://localhost:3000/listings](http://localhost:3000/listings) to view the app.

## Project Structure

- `app.js` - Main Express application
- `models/` - Mongoose models
- `views/` - EJS templates
- `public/` - Static assets (CSS, JS)
- `init/` - Database seeding scripts

## Notes

- The app uses Bootstrap 5 for styling.
- All data is stored in a local MongoDB database.
- To reset the listings, re-run the seed script (`node init/index.js`).

## License

ISC
