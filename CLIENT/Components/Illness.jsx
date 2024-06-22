import React from "react";
import { Link } from "react-router-dom";

export default function Illness() {
	const [isOpen, setIsOpen] = React.useState(false);
	function toggleOpen() {
		setIsOpen(!isOpen);
	}
	const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;
	return (
		<div className="dropdown" onMouseEnter={toggleOpen} onMouseLeave={toggleOpen}>
			<a
				className="nav-link dropdown-toggle navbar-text"
				href="#"
				id="navbarDropdownMenuLink"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Services
			</a>

			<div className={menuClass} aria-labelledby="dropdownMenuButton">
				<Link to="/IndTherapy">
					<a className="dropdown-item" href="/IndTherapy">
						Individual Therapy
					</a>
				</Link>
				<Link to="/RelTherapy">
					<a className="dropdown-item" href="/RelTherapy">
						Relationship Therapy
					</a>
				</Link>
			</div>
		</div>
	);
}
