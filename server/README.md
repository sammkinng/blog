# BLOG BACKEND ( Node+Express+Postgres)

## BEFORE RUNNING
Add following details to config/config.js before running:
your postgres username, passowrd, database name

Install node modules by running `npm i`


Run:- `node src/app`

## API DOCUMENTATION


To test the RESTful APIs I created using Postman, you can create requests for each of the API endpoints. Below, I'll provide examples for testing all the APIs:

1. **Create a New Blog Post (POST)**:

   - **Request Type**: POST
   - **URL**: `http://localhost:3000/blog` (or your server's URL)
   - **Headers**: 
     - `Content-Type: application/json`
     - `Authorization: Bearer <your_jwt_token>` (You need to replace `<your_jwt_token>` with a valid JWT token obtained after user authentication)

   - **Body** (as JSON):
     ```json
     {
       "title": "Sample Blog Post",
       "content": "This is the content of the blog post."
     }
     ```

2. **Update a Blog Post (PUT)**:

   - **Request Type**: PUT
   - **URL**: `http://localhost:3000/blog/<post_id>` (Replace `<post_id>` with the ID of the post you want to update)
   - **Headers**: 
     - `Content-Type: application/json`
     - `Authorization: Bearer <your_jwt_token>`

   - **Body** (as JSON):
     ```json
     {
       "title": "Updated Blog Post",
       "content": "This is the updated content of the blog post."
     }
     ```

3. **Delete a Blog Post (DELETE)**:

   - **Request Type**: DELETE
   - **URL**: `http://localhost:3000/blog/<post_id>` (Replace `<post_id>` with the ID of the post you want to delete)
   - **Headers**: 
     - `Authorization: Bearer <your_jwt_token>`

4. **Get a List of All Blog Posts (GET)**:

   - **Request Type**: GET
   - **URL**: `http://localhost:3000/blog`
   - **Headers**: 
     - `Authorization: Bearer <your_jwt_token>` (Optional, depending on your authentication strategy)

5. **Get a Single Blog Post by ID (GET)**:

   - **Request Type**: GET
   - **URL**: `http://localhost:3000/blog/<post_id>` (Replace `<post_id>` with the ID of the post you want to retrieve)
   - **Headers**: 
     - `Authorization: Bearer <your_jwt_token>` (Optional, depending on your authentication strategy)

For the authentication-related routes:

6. **User Registration (POST)**:

   - **Request Type**: POST
   - **URL**: `http://localhost:3000/auth/register` (or your registration route)
   - **Headers**: `Content-Type: application/json`
   - **Body** (as JSON):
     ```json
     {
       "username": "your_username",
       "password": "your_password"
     }
     ```

7. **User Login (POST)**:

   - **Request Type**: POST
   - **URL**: `http://localhost:3000/auth/login` (or your login route)
   - **Headers**: `Content-Type: application/json`
   - **Body** (as JSON):
     ```json
     {
       "username": "your_username",
       "password": "your_password"
     }
     ```

These examples should allow you to test your RESTful APIs using Postman. Please make sure to replace placeholders like `<your_jwt_token>`, `<post_id>`, `<your_username>`, and `<your_password>` with actual values. Additionally, ensure that your server is running on the specified URL and port, and you have proper authentication mechanisms in place.