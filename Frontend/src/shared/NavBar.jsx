

const NavBar = (props) => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Events</li>
                <li>{props.logIn_out}</li>
            </ul>
        </div>
    )
}

export default NavBar
