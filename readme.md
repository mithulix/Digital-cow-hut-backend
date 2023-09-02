<<<<<<< HEAD
### WELCOME TO DIGITAL-COW-HUT-WITH-AUTH PROJECT.

### LIVE PREVIEW -> https://digital-cow-hut-backend-jade.vercel.app/

### Application Routes:

### Sample Login User [POST] :
```json
{
  "phoneNumber": "01792878278",
  "password": "@mithu123"
}
```

### sample json for creating a new seller :
```json
{
  "phoneNumber": "01792878278",
  "password": "@mithu123",
  "seller": {
    "name": {
      "firstName": "Mohaiminul",
      "lastName": "Islam"
    },
    "phoneNumber": "+6555345",
    "address": "singapore",
    "income": 1600000
  }
}
```

### get a seller:
```json
{
  "phoneNumber": "01055698544",
  "password": "rakib435"
}
```

### sample json for creating a new Buyer : 
```json
{
  "phoneNumber": "01055698544",
  "password": "rakib435",
  "buyer": {
    "name": {
      "firstName": "Rakib",
      "lastName": "Islam"
    },
    "address": "Gulshan",
    "budget": 150000
  }
}
```

### Sample create Admin [POST]
```json
{
  "password": "Jim445",
  "role": "admin",
  "name": {
    "firstName": "Jannatul ",
    "lastName": "Ferdous"
  },
  "phoneNumber": "0178999454",
  "address": "Nilphamari, Domar"
}
```

### Sample Login ADMIN [POST]
```json
{
  "phoneNumber": "0178999454",
  "password": "Jim445"
}
```


### Sample Cow Data for create a cow : [POST]
```json
{
  "name": "kalachan",
  "age": 3,
  "price": 162000,
  "location": "khulna",
  "breed": "Sahiwal",
  "weight": 300,
  "label": "for sale",
  "category": "Beef",
  "seller": "64f300f37c4212f756b3d261"
}
```


=======
### WELCOME TO DIGITAL-COW-HUT PROJECT.

### LIVE PREVIEW -> https://digital-cow-hut-backend-jade.vercel.app/

### TABLE OF CONTENTS :

1. [User](#user)
2. [Buyer](#buyer)
3. [Seller](#seller)
4. [Cows](#cows)
5. [Orders](#orders)
6. [Pagination](#pagination)

### User : 

- `POST /users/signup-buyer`: create a new buyer.
- `POST /users/signup-seller`: create a new seller.
- `GET /users`: Retrieve a list of users.
- `GET /users/{id}`: Retrieve details of a specific user.
- `PATCH /users/{id}`: Update an existing user.
- `DELETE /users/{id}`: Delete a user.

### Buyer : 

- `GET /buyers/`: Retrieve a list of buyer.
- `GET /buyers/{id}`: Retrieve details of a specific buyer.
- `PATCH /buyers/{id}`: Update an existing buyer.
- `DELETE /buyers/{id}`: Delete a buyer.

### Seller : 
- `GET /sellers`: Retrieve a list of seller.
- `GET /sellers/{id}`: Retrieve details of a specific seller.
- `PATCH /sellers/{id}`: Update an existing seller.
- `DELETE /sellers/{id}`: Delete a seller.

### Cows : 

- `GET /cows/create-cow`: Create a new cow.
- `GET /cows/{id}`: Retrieve details of a specific cow.
- `GET /cows/`: Retrieve a list of cows.
- `PATCH /cows/{id}`: Update an existing cow.
- `DELETE /cows/{id}`: Delete a cow.

### Orders : 

- `POST /orders/order-cow`: Create a new order.
- `GET /orders/`: Retrieve a list of orders.
- `GET /orders/{id}`: Retrieve details of a specific order.

### Pagination

- api/v1/users?page=1&limit=10
- api/v1/orders?sortBy=price&sortOrder=asc
- api/v1/cows?page=1&limit=10
- api/v1/cows?sortBy=price&sortOrder=asc
- api/v1/cows?minPrice=20000&maxPrice=70000
- api/v1/cows?location=Chattogram
- api/v1/cows?searchTerm=Cha
>>>>>>> 1a8a52d3d25833d683fa5f3fe9c32c4b50f13e4b
