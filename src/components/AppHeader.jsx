import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="/">Mirko's Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>   
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}