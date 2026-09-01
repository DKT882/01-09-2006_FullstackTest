# React.js + Node.js Practical Test

## Project: Student Event Portal

Build a simple **Student Event Portal** using:

* React.js
* Node.js
* Express.js
* Axios or Fetch API
* React Router

**Database is not required.** Use a normal JavaScript array to store users and events in the backend.

---

## 1. Login Page

Create a login page with:

* Email
* Password
* Login button

On login:

* Send the entered details to the backend.
* Backend should validate the user.
* On successful login, navigate to the Events Home Page.
* On unsuccessful login, display an error message.

---

## 2. Events Home Page

Create an Events Home Page.

When the page loads:

* Fetch events from the backend.
* Display all available events.

Each event should contain:

* Event Name
* Category
* Location
* Date
* Description

Display the events using a reusable React component such as an Event Card.

---

## 3. Search Events

Add a search bar to the Events Home Page.

The user should be able to search events using:

* Event Name
* Category
* Location

Implement:

### Debouncing

The search should be performed only after the user stops typing for a short period.

### Fuzzy Search

The search should provide relevant results even when the entered text is not an exact match.

Example:

```text
Search: react

React Workshop
React Development Session
Advanced React
```

---

## 4. Add Event Page

Create a separate Add Event page.

Create a form with:

* Event Name
* Category
* Location
* Date
* Description

On form submission:

* Send the event data to the backend.
* Add the new event to the backend event list.
* After successful creation, navigate back to the Events Home Page.

---

## 5. Event Details Page

Create an Event Details page.

When a user clicks on an event, navigate to:

```text
/events/:id
```

Example:

```text
/events/1
/events/2
```

Use the event ID from the URL to fetch and display the details of that event.

---

## 6. Backend Requirements

Create a Node.js + Express.js backend.

Maintain the data using JavaScript arrays.

Create the following APIs:

### Login

```text
POST /login
```

### Get All Events

```text
GET /events
```

### Get Single Event

```text
GET /events/:id
```

### Create Event

```text
POST /events
```

---

## 7. Custom Middleware

Create **one custom authentication middleware** in Express.js.

The middleware must be used for the event-related APIs.

The middleware should check whether the request is authenticated before allowing access to the protected route.

Example flow:

```text
Request
   ↓
Custom Middleware
   ↓
Route
   ↓
Response
```

---

## 8. Application Pages

The application should contain:

```text
Login Page
Events Home Page
Add Event Page
Event Details Page
```

Use **React Router** for navigation between the pages.