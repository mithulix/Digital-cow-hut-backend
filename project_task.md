<<<<<<< HEAD
# Cow Hut Admin With Auth
### Create Private Repo with this [link](https://classroom.github.com/a/7zzbPsy8)
[https://classroom.github.com/a/7zzbPsy8](https://classroom.github.com/a/7zzbPsy8)

<hr>

## Main Part
### Create an Admin Model 

### How to start:
You need to reuse your previous assignment 3 for starting the assignment.

#### Option 1: Copy your assignment-3 from your local computer, delete the .git folder, and start from there. You can delete it manually from the file manager or you can delete it by using git bash. Add your new link. To check you can use `git remote -v`.
Command:  rm -rf .git

#### Option 2: You can clone assignment-3 from your private GitHub repository. After cloning you have to remove the existing .git file by pressing the command "rm -rf .git" using the git bash terminal. Add your new link. To check you can use `git remote -v`.
Command:  rm -rf .git

#### Option 3: Clone assignment-3 from GitHub private repo by going to the assignment-3 link and then clone that repo. use the command line to change the existing url `git remote set-url origin [your private repo link]`. To check you can use `git remote -v`.

#### Option 3: Clone assignment-3 from GitHub private repo by going to the assignment-3 link and then clone that repo. use the command line to remove the existing url using git bash terminal " rm -rf .git"`. To check you can use `git remote -v`.

#### Admin Model Sample :
- _id
- phoneNumber
- role   → enum  → ['admin']    
=======
<<<<<<< HEAD
# Digital Cow Hut Backend Assignment

### Create Private Repo with this [link](https://classroom.github.com/a/le5T8iGk)
[https://classroom.github.com/a/le5T8iGk](https://classroom.github.com/a/le5T8iGk)

<hr>
### Assignment No: 03

### Assignment Name: Online Cow Selling Backend for Eid Ul Adha
You have been assigned the task of building the backend for an Online Cow Selling platform in preparation for Eid Ul Adha. The main focus of this assignment is to implement error handling, CRUD operations, pagination and filtering, transactions (including a simple transaction without a payment gateway), and additional routes as necessary. 

### Technology Stack:

- Use TypeScript as the programming language.
- Use Express.js as the web framework.
- Use Mongoose as the Object Data Modeling (ODM) and validation library for MongoDB.


## Main Part : ( 50 Marks )

### Error Handling:

Implement proper error handling throughout the application.
Use global error handling `middleware` to catch and handle errors, providing appropriate error responses with status codes and error messages.

Error Response Object Should include the following properties:
- success  →  false
- message → Error Type → Validation Error, Cast Error, Duplicate Entry
- errorMessages 
- stack

### Sample Error Response

```json
   {
    "success": false,
    "message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \"user2@gmail.com\" }",
    "errorMessages": [
        {
            "path": "",
            "message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \"user2@gmail.com\" }"
        }
    ],
    "stack": "MongoServerError: E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \"user2@gmail.com\" }\n    at H:\\next-level-development\\university-management-auth-service\\node_modules\\mongodb\\src\\operations\\insert.ts:85:25\n    at H:\\next-level-development\\university-management-auth-service\\node_modules\\mongodb\\src\\cmap\\connection_pool.ts:574:11\n    at H:\\next-level-development\\university-writeOrBuffer (node:internal/streams/writable:391:12)"
}
```
                  

### Model:

### User Model:
- _id
- phoneNumber
- role   → enums → [‘seller’,’ buyer’]
- password 
- name	
   - firstName
   - lastName
- address
- budget → Savings for buying the cow
- income → money from selling the cow
- createdAt
- updatedAt


### Sample Data: (User as Buyer)
```json
{
  "_id":"ObjectId(“6473c6a50c56d0d40b9bb6a3)",  
  "password":"abrakadabra",
  "role": "buyer",
   "name":{
      "firstName": "Mr. Babull"
      "lastName": "Bro"
    },
  "phoneNumber":"01711111111",
  "address": "Chattogram",
  "budget":70000,
  "income":0,
  "createdAt":"",
  "updatedAt":"",
}
```

### Sample Data: (User as Seller)
```json
{
  "_id":"ObjectId(“6473c6a50c56d0d40b9bb6a3)",  
  "password":"abrakadabra",
  "role": "seller",
   "name":{
      "firstName": "Mr. Babull"
      "lastName": "Bro"
    },
  "phoneNumber":"01711111111",
  "address": "Chattogram",
  "budget":0,
  "income":0,
  "createdAt":"",
  "updatedAt":"",
}
```

### Cow Model:

- name: The name of the cow.
- age: The age of the cow in years.
- price: The price of the cow.
- location: Enums of location
  - Dhaka
  - Chattogram
  - Barishal
  - Rajshahi
  - Sylhet
  - Comilla
  - Rangpur
  - Mymensingh

- breed: The breed of the cow
  - Brahman 
  - Nellore 
  - Sahiwal 
  - Gir 
  - Indigenous 
  - Tharparkar 
  - Kankrej 

- weight: The weight of the cow in kilograms.
- label: The enums of the label.
  - for sale → Default value
  - sold out

- category: An enum representing the category of the cow.
  - Dairy = "Dairy",  // Represents cows bred primarily for milk production.
  - Beef = "Beef", // Represents cows bred primarily for meat production.
  - DualPurpose = "Dual Purpose", // Represents cows bred for both milk and meat production.

- seller: A reference ID that identifies the seller of the cow, allowing for tracking and association with the seller's information.

### Sample Data: (Cow)

```json
{
  "name": "Bella",
  "age": 4,
  "price": 5000,
  "location": "Dhaka",
  "breed": "Brahman",
  "weight": 400,
  "label": "for sale",
  "category": "Beef",
  "seller": "ObjectId(609c17fc1281bb001f523456)"
}

```


## Implement Create, Read, Update, and Delete Operations for Users Listing

### Create a new User 

 Route:  /api/v1/auth/signup (POST)
 
 Request body:
 
 ```json
 {
  "password":"abrakadabra",
  "role": "buyer",
   "name": {
     "firstName": "Kopa",
      "lastName": "Samsu"
   },
  "phoneNumber":"01711111111",
  "address": "Chattogram",
  "budget":30000  // money to buy the cow
  "income":0 // By Default 0
}
```
 
 Response: The newly created user object.
 
 Response Sample Pattern:

```json
 {
      "success": true, 
      "statusCode":200,
      "message": "Users created successfully",
      "data": {}, 
  }
```

           
### Get All Users

 Route:  /api/v1/users (GET)
 
 Request body:
 
 Response: The user's array of objects.
 
 Response Sample Pattern:
 
```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Users retrieved successfully",
      "data": [{},{}], 
  }
```


### Get a Single User

Route:  /api/v1/users/:id (GET)

Request Param: :id

Response: The specified user object.

Response Sample Pattern:

```json
  {
      "success": true, 
      "statusCode":200,
      "message": "User retrieved successfully",
      "data": {}, 
  }
  ```

### Update a Single User

 Route:  /api/v1/users/:id (PATCH)
 
 Request Param: :id
 
 Response: The updated user object.
 
 Response Sample Pattern:
 
```json
  {
      "success": true, 
      "statusCode":200,
      "message": "User updated successfully",
      "data": {}, 
  }
  ```
  
  ### Delete a User

 Route:  /api/v1/users/:id ( DELETE)
 
 Request Param: :id
 
 Response:  The deleted user object.
 
 Response Sample Pattern:
 
```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Uers deleted successfully",
      "data": {}, 
  }
```

## Implement Create, Read, Update, and Delete Operations for COW listings.

### Create a New Cow

 Route:  /api/v1/cows (POST)

Request body:

```json
 {
  "name": "Bella",
  "age": 4,
  "price": 5000,
  "location": "Dhaka",
  "breed": "Brahman",
  "weight": 400,
  "label": "for sale",
  "category": "Beef",
  "seller": "609c17fc1281bb001f523456"
}

```
 
 Response: The newly created cow object.

 Response Sample Pattern:

```json
 {
      "success": true, 
      "statusCode":200,
      "message": "Cow created successfully",
      "data": {}, 
  }
```
           
### Get All Cows

 Route:  /api/v1/cows (GET)

 Request body:

 Response: The cows array of objects.

 Response Sample Pattern:

```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Cows retrieved successfully",
      "meta": {
        "page": 3,
        "limit": 10,
        "count":1050
        }
      "data": [{},{}] , 
  }
  ```


### Retrieve paginated and filtered cow listings: ( You do not need to implement pagination as we implemented, you can do as you want )

Route:  /api/v1/cows?

Query parameters:  (Case Insensitive)
- page: The page number for pagination (e.g., ?page=1).
- limit: The number of cow listings per page (e.g., ?limit=10).
- sortBy: The field to sort the cow listings (e.g., ?sortBy=price).
- sortOrder : The order of sorting, either 'asc' or 'desc' (e.g., ?sortOrder=asc).
- minPrice: The minimum price for filtering (e.g., ?minPrice=1000).
- maxPrice: The maximum price for filtering (e.g., ?maxPrice=5000).
- location: The location for filtering (e.g., ?location=chattogram).
- searchTerm: The search query string for searching cows (e.g., ?query=Dhaka). (Search Fields should be location, breed, and category) 

Response: An array of cow listing objects that match the provided filters, limited to the specified page and limit.

Response Sample Pattern:
```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Cows retrieved successfully",
      "meta": {
        "page": 3,
        "limit": 10,
        }
      "data": [{},{}], 
  }
```


### Get a Single Cow

Route:  /api/v1/cows/:id (GET)

Request Param: :id

Response: The specified cow object.

Response Sample Pattern:

```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Cow retrieved successfully",
      "data": {}, 
  }
```


### Update a Single Cow

 Route:  /api/v1/cows/:id (PATCH)
 
 Request Param: :id
 
 Response: The updated cow object.

 Response Sample Pattern:

```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Cow updated successfully",
      "data": {}, 
  }

```  
### Delete a Cow

 Route:  /api/v1/cows/:id ( DELETE)
 
 Request Param: :id
 
 Response: The deleted cow object
 
 Response Sample Pattern:

```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Cow deleted successfully",
      "data": {}, 
  }
```

#3 Bonus Part : ( 10 Marks )
     
### Implement Create, Read Operations for Order History Listings.

Route:  /api/v1/orders  (POST)

Request body:

```json
{

  "cow":"ObjectId(“6473c6a50c56d0d40b9bb6a3)", // cow reference _id
  "buyer":"ObjectId(“6473c6a50c56d0d40b9bb6a3)", // user reference  _id
}
```

Response: The  newly created order object.

Implement a transactional operation for buying a cow.  When a user requests to buy a cow, simulate a `transaction` process without involving an actual payment gateway. Upon successful transaction simulation, update the cow's status as sold, transfer money from buyer to seller account, and provide appropriate response messages.

Steps:

- The user initiates a purchase order using the "api/v1/orders" POST API.
- Check that the user has enough money in their account to buy the cow.
- If the user needs more money, show them an error message.
- If the user has enough money, begin the buying process (start a transaction). This involves a few steps:
- Change the cow's label from 'for sale' to 'sold out'.
- Deduct the cost of the cow from the buyer's budget
- Put the same amount of  cost into the seller's income
- Make an entry in the orders collection
- Commit transaction
- End transaction session
- If any error happens abort the transaction 



Route:  /api/v1/orders  (GET)

Request body:

Response: The ordered array of objects.

Response Sample Pattern:

```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Orders retrieved successfully",
      "data": {}, 
  }
```

### Deadline:
- 60 Marks 3 Days (Till  Sunday 11.59 AM)
- 50 Marks 1 Day (Till Monday 11.59 AM)

 `** In order for your assignment to be evaluated, it is essential to have a minimum of 20 meaningful commits. Please note that unnecessary commits will not be considered as part of the evaluation process.**`

### What to submit
1. Your Github Private Repository Link
2. Deployed Live Link (Vercel / Railway / Heroku or any other platform)
   - `** Do not use a logger. It will not work on the free hosting platforms **`
4. Must include all the routes into Readme.md file.
   - `** You must follow provided API Endpoints  for creating routes. Otherwise, you will lose your marks **`
You can follow the pattern given below to enlist your application routes in the readme.md file:


  ### Live Link: https://example.com
  ### Application Routes:

   #### User
   - api/v1/auth/signup (POST)
   - api/v1/users (GET)
   - api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
   - api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
   - api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database


   #### Cows
   - api/v1/cows (POST)
   - api/v1/cows (GET)
   - api/v1/cows/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
   - api/v1/cows/6177a5b87d32123f08d2f5d4 (PATCH)
   - api/v1/cows/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

   ### Pagination and Filtering routes of Cows

   - api/v1/cows?pag=1&limit=10
   - api/v1/cows?sortBy=price&sortOrder=asc
   - api/v1/cows?minPrice=20000&maxPrice=70000
   - api/v1/cows?location=Chattogram
   - api/v1/cows?searchTerm=Cha
     
  
   #### Orders
   - api/v1/orders (POST)
=======
# Digital Cow Hut Backend Assignment

### Create Private Repo with this [link](https://classroom.github.com/a/le5T8iGk)
[https://classroom.github.com/a/le5T8iGk](https://classroom.github.com/a/le5T8iGk)

<hr>
### Assignment No: 03

### Assignment Name: Online Cow Selling Backend for Eid Ul Adha
You have been assigned the task of building the backend for an Online Cow Selling platform in preparation for Eid Ul Adha. The main focus of this assignment is to implement error handling, CRUD operations, pagination and filtering, transactions (including a simple transaction without a payment gateway), and additional routes as necessary. 

### Technology Stack:

- Use TypeScript as the programming language.
- Use Express.js as the web framework.
- Use Mongoose as the Object Data Modeling (ODM) and validation library for MongoDB.


## Main Part : ( 50 Marks )

### Error Handling:

Implement proper error handling throughout the application.
Use global error handling `middleware` to catch and handle errors, providing appropriate error responses with status codes and error messages.

Error Response Object Should include the following properties:
- success  →  false
- message → Error Type → Validation Error, Cast Error, Duplicate Entry
- errorMessages 
- stack

### Sample Error Response

```json
   {
    "success": false,
    "message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \"user2@gmail.com\" }",
    "errorMessages": [
        {
            "path": "",
            "message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \"user2@gmail.com\" }"
        }
    ],
    "stack": "MongoServerError: E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \"user2@gmail.com\" }\n    at H:\\next-level-development\\university-management-auth-service\\node_modules\\mongodb\\src\\operations\\insert.ts:85:25\n    at H:\\next-level-development\\university-management-auth-service\\node_modules\\mongodb\\src\\cmap\\connection_pool.ts:574:11\n    at H:\\next-level-development\\university-writeOrBuffer (node:internal/streams/writable:391:12)"
}
```
                  

### Model:

### User Model:
- _id
- phoneNumber
- role   → enums → [‘seller’,’ buyer’]
>>>>>>> 1a8a52d3d25833d683fa5f3fe9c32c4b50f13e4b
- password 
- name	
   - firstName
   - lastName
- address
<<<<<<< HEAD
- createdAt
- updatedAt

#### Admin Routes :

Route: /api/v1/admins/create-admin (POST)

Request body: 
 ```json
 {
  "password":"amiadminbujheshunekothakoiyo",
  "role": "admin",
   "name":{
      "firstName": "Mr. Admin"
      "lastName": "Bhai"
    },
  "phoneNumber":"01711111111",
  "address": "Uganda",
}
```
Response: The newly created admin object. ( Do not send the password in response )
Response Sample Pattern:

```json
{
    "success": true, 
    "statusCode":200,
    "message": "Admin created successfully",
    "data":  {
        "_id":"ObjectId(“6473c6a50c56d0d40b9bb6a3)",  
        "role": "admin",
        "name":{
           "firstName": "Mr. Admin"
           "lastName": "Bhai"
         },
          "phoneNumber":"01711111111",
          "address": "Uganda",
         }
     }

```

Route: /api/v1/admins/login (POST)

To log in, admins must provide their phone number and password. The phone number must be unique in the database. If the login is successful, an access token will be sent in the response and a refresh token will be set in the browser cookie. The admin's _id and role will both be included in the tokens.

##### Here is a more detailed explanation of each step:

- The admins enter their phone number and password into the login form.
- The server validates the phone number and password.
- If the login is successful, the server generates an access token and a refresh token.
- The access token is sent in the response to the user.
- The refresh token is set in the browser cookie.
- The admin's _id and role are included in both the access token and the refresh token.
- The access token is used to authenticate the user for subsequent requests.
- The refresh token can be used to generate a new access token if the old one expires.
- The _id and role are used to identify the admin and their permissions.


Request body: 
 ```json
 {
   "phoneNumber":"01711111111",
   "password": "amiadmin",
}
```
Response: The created access token for the admin.
 
 Response Sample Pattern:
```json

{
    "success": true, 
    "statusCode":200,
    "message": "User logged in successfully",
    "data": {
       "accessToken":  "eyJhbGciOiJIUzI1NiICJ9.eyJ1c2V4NzIzMTcxNCwiZXhwIjoxNjg3MzE4MTE0fQ.Q7j8vtY9r1JeDK_zR6bYInlY", 
       }
  }
```


## Implement Custom Authentication using bcrypt and JWT

### Create a new User 

All passwords for users (including admins, buyers, and sellers) must be hashed using bcrypt.


### Login User

To log in, users must provide their phone number and password. The phone number must be unique in the database. If the login is successful, an access token will be sent in the response and a refresh token will be set in the browser cookie. The user's _id and role will both be included in the tokens.

##### Here is a more detailed explanation of each step:

- The user enters their phone number and password into the login form.
- The server validates the phone number and password.
- If the login is successful, the server generates an access token and a refresh token.
- The access token is sent in the response to the user.
- The refresh token is set in the browser cookie.
- The user's _id and role are included in both the access token and the refresh token.
- The access token is used to authenticate the user for subsequent requests.
- The refresh token can be used to generate a new access token if the old one expires.
- The _id and role are used to identify the user and their permissions.

Route:  /api/v1/auth/login (POST)
Request body:
 ```json
 {
  "phoneNumber":"01711111111",
  "password":"amiuserasbuyerasseller",
}
```
 
 Response: The created access token for the user.
 
 Response Sample Pattern:
```json

{
    "success": true, 
    "statusCode":200,
    "message": "User logged in successfully",
    "data": {
       "accessToken":  "eyJhbGciOiJIUzI1NiICJ9.eyJ1c2V4NzIzMTcxNCwiZXhwIjoxNjg3MzE4MTE0fQ.Q7j8vtY9r1JeDK_zR6bYInlY", 
       }
  }
```

###  Get Refresh Token

To get a new access token, the user will send their refresh token to the authorization server. The authorization server will verify the refresh token and, if it is valid, generate a new access token and return it to the user. The authorization server will also set the refresh token in the user's browser cookie. The new access token will include the user's _id and role.

##### Here is a more detailed explanation of each step:
- The user sends a request to the authorization server with the refresh token as a parameter.
- The authorization server validates the refresh token. This involves checking if the token is still valid and if it belongs to the user who is requesting the new - access token.
- If the refresh token is valid, the authorization server generates a new access token and returns it to the user. The new access token will have a new expiration date, so the user will be able to use it to access protected resources for a longer period of time.
- The authorization server also sets the refresh token in the user's browser cookie.
-  The _id and role are used to identify the user and their permissions.

Route:  /api/v1/auth/refresh-token (POST)

Response: The created access token for the user.
 
 Response Sample Pattern:
```json

{
    "success": true, 
    "statusCode":200,
    "message": "New access token generated successfully !",
    "data": {
       "accessToken":  "eyJhbGciOiJIUzI1NiICJ9.eyJ1c2V4NzIzMTcxNCwiZXhwIjoxNjg3MzE4MTE0fQ.Q7j8vtY9r1JeDK_zR6bYInlY", 
       }
=======
- budget → Savings for buying the cow
- income → money from selling the cow
- createdAt
- updatedAt


### Sample Data: (User as Buyer)
```json
{
  "_id":"ObjectId(“6473c6a50c56d0d40b9bb6a3)",  
  "password":"abrakadabra",
  "role": "buyer",
   "name":{
      "firstName": "Mr. Babull"
      "lastName": "Bro"
    },
  "phoneNumber":"01711111111",
  "address": "Chattogram",
  "budget":70000,
  "income":0,
  "createdAt":"",
  "updatedAt":"",
}
```

### Sample Data: (User as Seller)
```json
{
  "_id":"ObjectId(“6473c6a50c56d0d40b9bb6a3)",  
  "password":"abrakadabra",
  "role": "seller",
   "name":{
      "firstName": "Mr. Babull"
      "lastName": "Bro"
    },
  "phoneNumber":"01711111111",
  "address": "Chattogram",
  "budget":0,
  "income":0,
  "createdAt":"",
  "updatedAt":"",
}
```

### Cow Model:

- name: The name of the cow.
- age: The age of the cow in years.
- price: The price of the cow.
- location: Enums of location
  - Dhaka
  - Chattogram
  - Barishal
  - Rajshahi
  - Sylhet
  - Comilla
  - Rangpur
  - Mymensingh

- breed: The breed of the cow
  - Brahman 
  - Nellore 
  - Sahiwal 
  - Gir 
  - Indigenous 
  - Tharparkar 
  - Kankrej 

- weight: The weight of the cow in kilograms.
- label: The enums of the label.
  - for sale → Default value
  - sold out

- category: An enum representing the category of the cow.
  - Dairy = "Dairy",  // Represents cows bred primarily for milk production.
  - Beef = "Beef", // Represents cows bred primarily for meat production.
  - DualPurpose = "Dual Purpose", // Represents cows bred for both milk and meat production.

- seller: A reference ID that identifies the seller of the cow, allowing for tracking and association with the seller's information.

### Sample Data: (Cow)

```json
{
  "name": "Bella",
  "age": 4,
  "price": 5000,
  "location": "Dhaka",
  "breed": "Brahman",
  "weight": 400,
  "label": "for sale",
  "category": "Beef",
  "seller": "ObjectId(609c17fc1281bb001f523456)"
}

```


## Implement Create, Read, Update, and Delete Operations for Users Listing

### Create a new User 

 Route:  /api/v1/auth/signup (POST)
 
 Request body:
 
 ```json
 {
  "password":"abrakadabra",
  "role": "buyer",
   "name": {
     "firstName": "Kopa",
      "lastName": "Samsu"
   },
  "phoneNumber":"01711111111",
  "address": "Chattogram",
  "budget":30000  // money to buy the cow
  "income":0 // By Default 0
}
```
 
 Response: The newly created user object.
 
 Response Sample Pattern:

```json
 {
      "success": true, 
      "statusCode":200,
      "message": "Users created successfully",
      "data": {}, 
  }
```

           
### Get All Users

 Route:  /api/v1/users (GET)
 
 Request body:
 
 Response: The user's array of objects.
 
 Response Sample Pattern:
 
```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Users retrieved successfully",
      "data": [{},{}], 
>>>>>>> 1a8a52d3d25833d683fa5f3fe9c32c4b50f13e4b
  }
```


<<<<<<< HEAD



### You need to implement an authentication middleware to verify the user's token and role before granting access to the following routes.

The authentication middleware will check the user's token and role against the database. If the token is valid and the user has the correct role, the middleware will allow the request to proceed. Otherwise, the middleware will deny the request and return an error.

  #### User
  
   - api/v1/users (GET) → Can only be accessed by admin
   - api/v1/users/:id (Single GET) → Can only be accessed by admin
   - api/v1/users/:id (PATCH) → Can only be accessed by admin
   - api/v1/users/:id (DELETE) → Can only be accessed  by admin
     
   #### Cows
   
   - api/v1/cows (POST) → Can only be accessed by seller
   - api/v1/cows (GET) → Can only be accessed by buyer,seller & admin
   - api/v1/cows/:id (Single GET) → Can only be accessed by buyer,seller & admin


   - api/v1/cows/:id (PATCH) → Can only be accessed by the seller of the cow
   - api/v1/cows/:id (DELETE) → Can only be accessed by the seller of the cow

    `** Hints: You can use the findOne() method & add both seller's _id and the cow's _id to get specific documents. **`


   #### Orders
   - https://example.com/v1/orders (POST) →  Can only  be accessed  by the buyer
     
   - https://example.com/v1/orders (GET) →  Can be accessed only by the admin, by the **` specific buyer `** of this order
      & by the **` specific seller `** of this order
     
    **` Hints: 
      You have to retrieve the user's id and role from the access token. After that, you have to check using the user role if it's buyer or seller. 
     if it is a buyer, you can use the order's _id and buyer's _id to get the orders
     if it is a seller, you can use the order's _id and seller's _id to get the single orders.

     Admin can get all the orders.
     `**




## Bonus Part :

### Create Profile 

You have to create my profile routes to get the user's information & update the information such as name, address, phoneNumber, and password. If the user gives a password in the request payload you have to hash the password before updating. 

#### Get Profile Information

Route:  /api/v1/users/my-profile (GET)

Request Headers: "authorization": "Your access token"

**` Hints: Retrieve the user's _id & role from your access token to get the specific profile information. `**

Response: The specified user's profile information
=======
### Get a Single User

Route:  /api/v1/users/:id (GET)

Request Param: :id

Response: The specified user object.

>>>>>>> 1a8a52d3d25833d683fa5f3fe9c32c4b50f13e4b
Response Sample Pattern:

```json
  {
<<<<<<< HEAD
    "success": true, 
    "statusCode":200,
    "message": "User's information retrieved successfully",
    "data": {
      "name": {
         "firstName": "Mr. Admin"
         "lastName": "Bhai"
      },
     "phoneNumber":"01711111111",
     "address": "Uganda",
    }, 
=======
      "success": true, 
      "statusCode":200,
      "message": "User retrieved successfully",
      "data": {}, 
  }
  ```

### Update a Single User

 Route:  /api/v1/users/:id (PATCH)
 
 Request Param: :id
 
 Response: The updated user object.
 
 Response Sample Pattern:
 
```json
  {
      "success": true, 
      "statusCode":200,
      "message": "User updated successfully",
      "data": {}, 
  }
  ```
  
  ### Delete a User

 Route:  /api/v1/users/:id ( DELETE)
 
 Request Param: :id
 
 Response:  The deleted user object.
 
 Response Sample Pattern:
 
```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Uers deleted successfully",
      "data": {}, 
  }
```

## Implement Create, Read, Update, and Delete Operations for COW listings.

### Create a New Cow

 Route:  /api/v1/cows (POST)

Request body:

```json
 {
  "name": "Bella",
  "age": 4,
  "price": 5000,
  "location": "Dhaka",
  "breed": "Brahman",
  "weight": 400,
  "label": "for sale",
  "category": "Beef",
  "seller": "609c17fc1281bb001f523456"
}

```
 
 Response: The newly created cow object.

 Response Sample Pattern:

```json
 {
      "success": true, 
      "statusCode":200,
      "message": "Cow created successfully",
      "data": {}, 
  }
```
           
### Get All Cows

 Route:  /api/v1/cows (GET)

 Request body:

 Response: The cows array of objects.

 Response Sample Pattern:

```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Cows retrieved successfully",
      "meta": {
        "page": 3,
        "limit": 10,
        "count":1050
        }
      "data": [{},{}] , 
  }
  ```


### Retrieve paginated and filtered cow listings: ( You do not need to implement pagination as we implemented, you can do as you want )

Route:  /api/v1/cows?

Query parameters:  (Case Insensitive)
- page: The page number for pagination (e.g., ?page=1).
- limit: The number of cow listings per page (e.g., ?limit=10).
- sortBy: The field to sort the cow listings (e.g., ?sortBy=price).
- sortOrder : The order of sorting, either 'asc' or 'desc' (e.g., ?sortOrder=asc).
- minPrice: The minimum price for filtering (e.g., ?minPrice=1000).
- maxPrice: The maximum price for filtering (e.g., ?maxPrice=5000).
- location: The location for filtering (e.g., ?location=chattogram).
- searchTerm: The search query string for searching cows (e.g., ?query=Dhaka). (Search Fields should be location, breed, and category) 

Response: An array of cow listing objects that match the provided filters, limited to the specified page and limit.

Response Sample Pattern:
```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Cows retrieved successfully",
      "meta": {
        "page": 3,
        "limit": 10,
        }
      "data": [{},{}], 
>>>>>>> 1a8a52d3d25833d683fa5f3fe9c32c4b50f13e4b
  }
```


<<<<<<< HEAD
#### Update Profile Information (Must be dynamic update)

Route:  /api/v1/users/my-profile (PATCH)

Request Headers: authorization: "Your access token"
Request body:
 ```json
 {
  "password":"mydreamwife",
   "name":{
      "firstName": "Mr. Update Password"
      "lastName": "Bhai"
    },
  "phoneNumber":"01711111111",
  "address": "Namibia",
}
```

**` Hints: Retrieve the user's _id & role from your access token to update the specific profile information. `**

Response: The specified user's updated profile information
=======
### Get a Single Cow

Route:  /api/v1/cows/:id (GET)

Request Param: :id

Response: The specified cow object.

>>>>>>> 1a8a52d3d25833d683fa5f3fe9c32c4b50f13e4b
Response Sample Pattern:

```json
  {
<<<<<<< HEAD
    "success": true, 
    "statusCode":200,
    "message": "User's information retrieved successfully",
    "data": {
      "name": {
         "firstName": "Mr. Admin"
         "lastName": "Bhai"
      },
     "phoneNumber":"01711111111",
     "address": "Uganda",
    }, 
  }
```

## Get a Specific Order Route
 
Route:   api/v1/orders/:id (GET)
Request Param: order's _id

**`Implement validation to check the user's _id from the token to check if it's the correct buyer of that specified order **`

Response: The specified order
Response Sample Pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Order information retrieved successfully",
  "data": {
    "cow": {
      "_id": "60cd9f2e1e1d8e001f165d23",
      "id": "60cd9f2e1e1d8e001f165d23",
      "name": "Bella",
      "age": 4,
      "price": 5000,
      "location": "Dhaka",
      "breed": "Brahman",
      "weight": 400,
      "label": "for sale",
      "category": "Beef",
           "seller": {
           "_id": "60cd9f2e1e1d8e001f165d21",
           "id": "60cd9f2e1e1d8e001f165d21",
           "role": "buyer",
           "name": {
          "firstName": "Kopa",
          "lastName": "Samsu"
           },
         "phoneNumber": "01711111111",
         "address": "Chattogram",
         "budget": 30000,
         "income": 0
       }
   }
    },
    "buyer": {
      "_id": "60cd9f2e1e1d8e001f165d24",
      "id": "60cd9f2e1e1d8e001f165d24",
      "role": "buyer",
      "name": {
        "firstName": "Kopa",
        "lastName": "Samsu"
      },
      "phoneNumber": "01711111111",
      "address": "Chattogram",
      "budget": 30000,
      "income": 0
    },
}
 ``` 

### You have to implement an auth middleware  to verify the user's token and user role to give access to the following routes.

  #### Orders
   -  api/v1/orders/:id (GET) →  Can be accessed only by the admin, by the **` specific buyer `** of this order
      & by the **` specific seller) `** of this order
   
     **` Hints: 
     
     You have to retrieve the user's id and role from the access token. After that, you have to check using the user role if it's buyer or seller. 
     if it is a buyer, you can use the order's _id and buyer's _id to get the single order
     if it is a seller, you can use the order's _id and seller's _id to get the single order

      Admin can get all the orders.
     `**
  
   #### My Profile 
   - api/v1/users/my-profile (GET)  → Can be accessed only by the **` specific user (buyer, seller) `** of the profile
   - api/v1/users/my-profile (PATCH) → Can be accessed only by the **` specific user (buyer, seller) `** of the profile
   - api/v1/admins/my-profile (GET)  → Can be accessed only by the admin of the profile   (Optional Task)
   - api/v1/admins/my-profile (PATCH) → Can be accessed only by the admin of the profile (Optional Task)
 

### Deadline:
- 60 Marks 11 Days ( Till 3rd July, Monday 11.59 PM  ) 
- 50 Marks  1 Day     (   4th July, Tuesday 11.59 PM )

 `** In order for your assignment to be evaluated, it is essential to have a minimum of 20 meaningful commits. Please note that unnecessary commits will not be considered as part of the evaluation process.**`


## What to submit


1. Submit only your Github Private Repository Link to our website.
   
3. Add Deployed Live Link into Readme.md file (Vercel / Railway / Heroku or any other platform)
   - `** Do not use a logger. It will not work on the free hosting platforms **`
4. Must include all the routes into Readme.Md file.
   - `** You must follow provided API Endpoints  for creating routes. Otherwise, you will lose your marks **`

### To continue to the next module, please submit only the link to your GitHub repository in the submission box. You can update your repository and  live link up until the deadline. As long as you include the live link in your README.md file, we will be able to easily evaluate your assignment.



## You must follow the pattern given below to enlist your application routes in the Readme. Md file:

  ### Live Link: https://example.com
  ### Application Routes:
  
  ## Main part
  
   ### Auth (User)
   - Route: https://example.com/api/v1/auth/login (POST)
   - Route: https://example.com/api/v1/auth/signup (POST)
   - Route:  https://example.com/api/v1/auth/refresh-token (POST)

   ### Auth (Admin)
   - Route: https://example.com/api/v1/admins/create-admin (POST)
   - Route: https://example.com/api/v1/admins/login (POST)
   
   ### User
   - Route: https://example.com/api/v1/users (GET)  Include an id that is saved in your database
   - Route: https://example.com/api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
   - Route: https://example.com/api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH) Include an id that is saved in your database
   - Route: https://example.com/api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

   #### Cows
   - Route: https://example.com/api/v1/cows (POST)
   - Route: https://example.com/api/v1/cows (GET)
   - Route: https://example.com/api/v1/cows/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
   - Route: https://example.com/api/v1/cows/6177a5b87d32123f08d2f5d4 (PATCH) Include an id that is saved in your database
   - Route: https://example.com/api/v1/cows/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

   #### Orders
   - Route: https://example.com/api/v1/orders (POST)
   - Route: https://example.com/api/v1/orders (GET)

 ## Bonus Part

#### Admin
   -Route: https://example.com/api/v1/admins/create-admin (POST)

#### My Profile
- Route: https://example.com/api/v1/users/my-profile (GET)
- Route: https://example.com/api/v1/users/my-profile (PATCH)

#### Order:
 - Route: https://example.com/api/v1/orders/6177a5b87d32123f08d2f5d4 (GET)
=======
      "success": true, 
      "statusCode":200,
      "message": "Cow retrieved successfully",
      "data": {}, 
  }
```


### Update a Single Cow

 Route:  /api/v1/cows/:id (PATCH)
 
 Request Param: :id
 
 Response: The updated cow object.

 Response Sample Pattern:

```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Cow updated successfully",
      "data": {}, 
  }

```  
### Delete a Cow

 Route:  /api/v1/cows/:id ( DELETE)
 
 Request Param: :id
 
 Response: The deleted cow object
 
 Response Sample Pattern:

```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Cow deleted successfully",
      "data": {}, 
  }
```

#3 Bonus Part : ( 10 Marks )
     
### Implement Create, Read Operations for Order History Listings.

Route:  /api/v1/orders  (POST)

Request body:

```json
{

  "cow":"ObjectId(“6473c6a50c56d0d40b9bb6a3)", // cow reference _id
  "buyer":"ObjectId(“6473c6a50c56d0d40b9bb6a3)", // user reference  _id
}
```

Response: The  newly created order object.

Implement a transactional operation for buying a cow.  When a user requests to buy a cow, simulate a `transaction` process without involving an actual payment gateway. Upon successful transaction simulation, update the cow's status as sold, transfer money from buyer to seller account, and provide appropriate response messages.

Steps:

- The user initiates a purchase order using the "api/v1/orders" POST API.
- Check that the user has enough money in their account to buy the cow.
- If the user needs more money, show them an error message.
- If the user has enough money, begin the buying process (start a transaction). This involves a few steps:
- Change the cow's label from 'for sale' to 'sold out'.
- Deduct the cost of the cow from the buyer's budget
- Put the same amount of  cost into the seller's income
- Make an entry in the orders collection
- Commit transaction
- End transaction session
- If any error happens abort the transaction 



Route:  /api/v1/orders  (GET)

Request body:

Response: The ordered array of objects.

Response Sample Pattern:

```json
  {
      "success": true, 
      "statusCode":200,
      "message": "Orders retrieved successfully",
      "data": {}, 
  }
```

### Deadline:
- 60 Marks 3 Days (Till  Sunday 11.59 AM)
- 50 Marks 1 Day (Till Monday 11.59 AM)

 `** In order for your assignment to be evaluated, it is essential to have a minimum of 20 meaningful commits. Please note that unnecessary commits will not be considered as part of the evaluation process.**`

### What to submit
1. Your Github Private Repository Link
2. Deployed Live Link (Vercel / Railway / Heroku or any other platform)
   - `** Do not use a logger. It will not work on the free hosting platforms **`
4. Must include all the routes into Readme.md file.
   - `** You must follow provided API Endpoints  for creating routes. Otherwise, you will lose your marks **`
You can follow the pattern given below to enlist your application routes in the readme.md file:


  ### Live Link: https://example.com
  ### Application Routes:

   #### User
   - api/v1/auth/signup (POST)
   - api/v1/users (GET)
   - api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
   - api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
   - api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database


   #### Cows
   - api/v1/cows (POST)
   - api/v1/cows (GET)
   - api/v1/cows/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
   - api/v1/cows/6177a5b87d32123f08d2f5d4 (PATCH)
   - api/v1/cows/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

   ### Pagination and Filtering routes of Cows

   - api/v1/cows?pag=1&limit=10
   - api/v1/cows?sortBy=price&sortOrder=asc
   - api/v1/cows?minPrice=20000&maxPrice=70000
   - api/v1/cows?location=Chattogram
   - api/v1/cows?searchTerm=Cha
     
  
   #### Orders
   - api/v1/orders (POST)
>>>>>>> master
   - api/v1/orders (GET)
>>>>>>> 1a8a52d3d25833d683fa5f3fe9c32c4b50f13e4b
