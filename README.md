# BorrowBuddy

Need to have Node.js installed
Project uses react

cd borrow-buddy
npm start

EXTENSIONS FOR DEVS:
ES7+
Prettier
Postman

## Install MySQL Workbench:

- download MySql from website
- Typical install
- run configurator
- "password": "xiachen123", (password from your local sql workbench)
- "database": "borrowbuddy" (change windows service name)
- all other options stay the same, execute
- download workbench
- connect to the server using the name borrowbuddy and the password above
- create a new schema called "borrowbuddy"
- see below for the rest

### Server/backend(Express.js):

I have create two simple tables "products" and "users" in backend. The goal is to create a system that can be connected to MySQL Workbench for managing user and product data.

## Usage

- install MySQL Workbench `https://www.youtube.com/watch?v=u96rVINbAUI`
- cd `../BorrowBuddy/server`
- npm init
- npm install express cors mysql2
- npm install nodemon
- running `npm start`.

Once the server is running, you can interact with the API endpoints to manage users and products.(because frontend doesn't create, we can use `insomnia` or `postman` to test whether they can be connected to the frontend in the future)

## API Endpoints

- `GET /api/users`: Retrieve a list of all users.
- `GET /api/products`: Retrieve a list of all products.
- `GET /api/product_rentals`: Retrieve a list of all product rentals.
- `GET /api/comments`: Retrieve a list of all comments.
- `GET /api/ratings`: Retrieve a list of all ratings.
- `GET /api/product_saves`: Retrieve a saved list of all products.
- `GET /api/product_images`: Retrieve a list of all product images.
- `GET /api/ratings/avg/:ratedId`: Retrieve the average rating for a user.
- `GET /api/ratings/:ratedId/:raterId`: Retrieve ratings from one user to another.
- `GET /api/ratings/reviews/:ratedId`: Retrieve all reviews for a user.

###

- `POST /api/users`: Add a new user to the database.
- `POST /api/products`: Add a new product to the database.
- `POST /api/product_rentals`: Add a new product rental to the database.
- `POST /api/comments`: Add a new comment to the database.
- `POST /api/ratings`: Add a new rating to the database.
- `POST /api/product_saves`: Add a new saved list of all products to the database.
- `POST /api/product_images`: Add a new product images to the database.

###

- `PUT /api/product_rentals/:rentalId` Update product_rentals by rentalId to the database.
- `PUT /api/product_saves/:saveId` Update product_saves by saveId to the database.
- `PUT /api/products/:productId` Update products by productId to the database.
- `PUT /api/users/:userId` Update users by userId to the database.
- `PUT /api/Messages/:messageID` Update Messages by messageID to the database.
- `PUT /api/Conversations/:conversationId` Update Conversations by conversationID to the database.

###

- `DELETE /api/product_rentals/:rentalId` Delete product_rentals by rentalId to the database.
- `DELETE /api/product_images/:imageId` Delete product_images by imageId to the database.
- `DELETE /api/product_saves/:saveId` Delete product_saves by saveId to the database.
- `DELETE /api/products/:productId` Delete products by productId to the database.
- `DELETE /api/Messages/:messageID` Delete Messages by messageID to the database.
- `DELETE /api/Conversations/:conversationId` Delete Conversations by conversationID to the database.

### Client/frontend (React.js)

- cd ../BorrowBuddy/client
- npm install react
- npm install bcryptjs
- npm start

# Material UI:

- cd ../BorrowBuddy/client
- npm install @mui/material @emotion/react @emotion/styled @mui/x-date-pickers
- npm install dayjs
- npm install @mui/joy

# Swiper

- cd ../BorrowBuddy/client
- npm install swiper

# Semantic UI:

- cd ../BorrowBuddy/client
- npm install semantic-ui-react
- npm install

# Cloud Support

- cd ../BorrowBuddy/server
- npm install mssql
- cd ../BorrowBuddy/client
- npm install firebase
- npm install uuid

## Usage

- cd `../BorrowBuddy/client`
- npm install react-scripts
- npm install react-router-dom formik yup axios
- npm install react-router-dom

We will use `cors` middleware to handle cross-domain(port 3000 from frontend and port3001 from backend) requests. you may need `cd ../BorrowBuddy/server` then `npm install cors` (if you did it before or no any error, ignore it)

- make sure you `npm start` in client
- make sure you `npm start` in server
- Both need to be run together, see `...BorrowBuddy\client\src\image\terminal.PNG`

When Both of them successfull run,
you can go these four page in frontend

- `http://localhost:3000/UsersList` (This page is for testing, you can see the data directly and may be deleted in the future)
- `http://localhost:3000/login`
- `http://localhost:3000/register`
- `http://localhost:3000/home`

please add more page in `../BorrowBuddy/client/src/components/...`
