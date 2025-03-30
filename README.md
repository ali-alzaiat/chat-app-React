# chat-app-React

## Overview
This project is a real-time chat application developed using Node.js and React. The server is deployed on Render, and the client is hosted on Firebase. MongoDB is utilized for data storage, and Socket.io is used for real-time communication, ensuring instant messaging capabilities. The application adheres to responsive design principles, providing an optimal user experience across various devices and screen sizes.

## Deployment
[demo](https://chat-ecb31.web.app/) (It takes 5 minutes to load as I'm using a free service with limited hardware)

## Features
* Real-time Messaging: Instant communication between users using Socket.io.
* User Authentication: Secure user login and registration.
* Responsive Design: Ensures compatibility and optimal viewing on desktops, tablets, and mobile devices.
* Message Storage: Messages are stored in MongoDB for persistence.
* Deployment: Server deployed on Render and client hosted on Firebase.

## Technologies Used
* Front-End: React, HTML, CSS
* Back-End: Node.js, Express.js
* Database: MongoDB
* Real-Time Communication: Socket.io
* Deployment: Render

## Prerequisites
To run this project locally, ensure you have the following installed:
* Node.js
* MongoDB
* npm (Node Package Manager)

## Getting Started
1. Clone the Repository
```
git clone https://github.com/ali-alzaiat/chat-app-React.git
```

2. Install Dependencies
```
cd ../chat-app-React
npm install
```

3. Run the Application
```
npm start
```

## Usage
1. Register: Create a new account.
2. Login: Access your account using your credentials.
3. Chat: Start a conversation in real-time with other users.

## Project Structure

.

├── public

│   └── index.html

├── src

│   ├── components

│   │   ├── Chat.jsx

│   │   ├── Gaurd.jsx

│   │   ├── Messages.jsx

│   │   ├── Rooms.jsx

│   │   ├── Search.jsx

│   │   ├── Sidebar.jsx

│   │   ├── Top.jsx

│   ├── shared

│   │   └── Context.jsx

│   │   └── Socket.jsx

│   ├── sites

│   │   └── main.jsx

│   │   └── login.jsx

│   │   └── register.jsx

│   ├── App.js

│   ├── index.js


## Screenshots
### Login
![image](https://github.com/user-attachments/assets/f0682532-6b84-4641-878c-42f6cc9d0d76)
### Sign up
![image](https://github.com/user-attachments/assets/25e01ec4-78d5-497f-a4e8-3f7782e738d4)
### Chats
![image](https://github.com/user-attachments/assets/22aafe94-3480-42fd-9549-dc06085e8ff8)
![image](https://github.com/user-attachments/assets/51c2842d-aae2-4d23-8b68-bb25e1d0ae7d)




