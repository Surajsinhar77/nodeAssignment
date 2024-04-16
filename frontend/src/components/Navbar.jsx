export default function Navbar() {
    return(
        <>
            <div className="navBar">
                <div className="navBarContainer flex">
                    <div className="navBarLeft">
                        <h1>Logo</h1>
                    </div>
                    <div className="navBarRight">
                        <ul className="flex">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}