import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../shared/Button";

const Event = () => {
    const [event, setEvent] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);

    const getEvent = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5001/events"
            );
            setEvent(response.data);
        } catch (error) {
            console.log("the Error is ", error)
        }
    };

    useEffect(() => {
        getEvent();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {

            const result = event.filter((e) =>
                e.eventName.toLowerCase().includes(search.toLowerCase()) ||
                e.category.toLowerCase().includes(search.toLowerCase()) ||
                e.location.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredEvents(result);

        }, 500);

        return () => clearTimeout(timer);

    }, [search, event]);



    return (
        <div detail={event}>
            <h1>Event</h1>
            <input
                type="text"
                placeholder="Search here for event"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <Button btnTitle="Search" />
            {event.map((e) => (
                <div key={e.id}>
                    <h2>{e.eventName}</h2>
                    <p>
                        <strong>Category:</strong> {e.category}
                    </p>
                    <p>
                        <strong>Location:</strong> {e.location}
                    </p>
                    <p>
                        <strong>Date:</strong> {e.date}
                    </p>
                    <p>
                        <strong>Description:</strong> {e.description}
                    </p>
                    <hr />
                </div>
            ))}
            {filteredEvents.length === 0 && (
                <p>No events found</p>
            )}
        </div>
    );
};

export default Event;
