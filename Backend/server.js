import express from "express";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5001;


const users = [
    {
        id: 1,
        email: "dkt@gmail.com",
        password: "123456",
        name: "Dharmender"
    }
];

const events = [
    {
        id: 1,
        eventName: "LinkedIn workshop",
        category: "Technology",
        location: "Computer Lab",
        date: "2026-09-10",
        description: "Learn optimization of your linkedIn profile and build network on linkedIn"
    },
    {
        id: 2,
        eventName: "Cooking Contest",
        category: "Food",
        location: "Ground",
        date: "2026-10-15",
        description: "The winner will get 100000₹"
    },
    {
        id: 3,
        eventName: "AI / ML workshop",
        category: "Education",
        location: "Auditorium",
        date: "2026-09-20",
        description: "Learn about the working AI/Ml"
    }
];



function authMiddleware(req, res, next) {
    console.log("Please login first")
    next();
}


app.get("/", (req, res) => {
    console.log("hello the server is running");
    res.send("Hello! The server is running");
});

app.listen(PORT, () => {
    console.log(`The server is running on port http://localhost:${PORT}`);
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Enter correct password"
        });
    }

    res.json({
        message: "Login successful",
        user: {
            id: user.id,
            email: user.email
        }
    });
})

app.get('/events',authMiddleware, (req, res) => {
    res.json(events);
})

app.get("/events/:id",authMiddleware, (req, res) => {
    const id = Number(req.params.id);

    const event = events.find((event) => event.id === id);

    if (!event) {
        return res.status(404).json({
            message: "there is no event"
        });
    }

    res.json(event);
})


app.post('/events', (req, res) => {
    const {
        eventName,
        category,
        location,
        date,
        description
    } = req.body;

    if (!eventName || !category || !location || !date || !description) {
        return res.status(400).json({
            message: "Fill everything"
        });
    }

    const newEvent = {
        id: events.length + 1,
        eventName,
        category,
        location,
        date,
        description
    };

    events.push(newEvent);

    res.status(201).json({
        message: "Event added successfully",
        event: newEvent
    });

})
