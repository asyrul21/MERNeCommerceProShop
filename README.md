# Getting Started Root Level

1. Npm init

   ```bash
   npm init
   ```

   This will create a `package.json` at the root level

2. Install Express at root level

   ```bash
   npm install express
   ```

## Third Party Libraries

1. Nodemon and Concurrently

   ```bash
   npm install nodemon concurrently -D
   ```

   Setup `package.json` of Root Directory. In `"scripts"` add:

   ```json
   "server": "nodemon backend/server",
   "client": "npm start --prefix frontend",
   "dev": "concurrently \"npm run server\" \"npm run client\""
   ```

   Run server and client:

   ```bash
   npm run dev
   ```

2. Dot env [Link](https://www.npmjs.com/package/dotenv)

   ```bash
   npm install dotenv
   ```

   - Create `.env` file

   ```env
   NODE_ENV = development
   PORT = 5000
   ```

   MAKE SURE TO INCLUDE CONTENTS of `.env` in `.gitignore`

3. Colors.js (Optional): [Link](https://www.npmjs.com/package/colors)

   ```bash
   npm install colors
   ```

4. JSON Web Token [Link](https://www.npmjs.com/package/jsonwebtoken)

   ```bash
   npm install jsonwebtoken
   ```

## Database Tools

1. Mongo Compass

2. Mongoose [Link](https://mongoosejs.com/)

   ```bash
   npm install mongoose
   ```

3. Bcryptjs for Authentication

   ```bash
   npm install bcryptjs
   ```

4. Express Async Handler Middleware [Link](https://www.npmjs.com/package/express-async-handler)

   ```bash
   npm install express-async-handler
   ```

## Handling Image File Uploads

Using [Multer JS](https://www.npmjs.com/package/multer)

```bash
npm install multer --save
```

<br />

# Developement Flow

## Backend

1. Create Controller

2. Use controller in Routes

To create middleware,

1. Create middleware

2. Apply in controller

3. use in Routes

## Front End (Redux)

1. Create Constant

2. Use in Reducer

3. Update Store

4. Create Action (apply dispatch)

5. Use action in Component

   - use UseSelector to get state from global store
   - use useDispatch to trigger Action methods
