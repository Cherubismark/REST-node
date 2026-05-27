# T-Shirt API

A simple REST API built using Node.js and Express.js for handling T-shirt requests and custom logo submissions.

## Features

- Retrieve T-shirt details
- Submit custom T-shirt logo requests
- Route parameters handling
- JSON request handling
- Basic validation and error handling

## Technologies Used

- Node.js
- Express.js
- JavaScript

## Project Setup

### 1. Clone the repository

```bash id="4d3fwl"
git clone https://github.com/your-username/tshirt-api.git
```

### 2. Navigate into the project folder

```bash id="1c6g0g"
cd tshirt-api
```

### 3. Install dependencies

```bash id="3f2eul"
npm install
```

### 4. Start the server

```bash id="0r4nqa"
node index.js
```

Server runs on:

```bash id="ktbzv2"
http://localhost:8080
```

## API Endpoints

### GET /tshirt

Returns T-shirt information.

#### Request

```http id="n3b1os"
GET /tshirt
```

#### Response

```json id="0r8pjz"
{
  "tshirt": "👕",
  "size": "large"
}
```

---

### POST /tshirt/:id

Creates a custom T-shirt request using a logo.

#### Request

```http id="3x2dko"
POST /tshirt/12
```

#### Request Body

```json id="vw0v64"
{
  "logo": "Nike"
}
```

#### Response

```json id="f9a2xa"
{
  "tshirt": "👕 with your Nike and ID of 12"
}
```

---

### Validation

If no logo is provided:

#### Response

```json id="0z4m9k"
{
  "message": "We need a logo!"
}
```

## Concepts Practiced

- Express server setup
- Middleware usage
- Route parameters
- JSON handling
- HTTP status codes
- API request validation
