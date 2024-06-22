import React from "react";
import { Link } from "react-router-dom";

export default function Foot() {
	return (
		<div>
			<div>
				<footer className="border-top footer">
					<div className="brand-foot">
						<a
							href=""
							className="d-flex align-items-center link-body-emphasis text-decoration-none">
							<img className="bi me-2" width="100" src="/src//Circle_Logo.PNG" />
						</a>
						<p className="footer-text">© 2024</p>
					</div>

					<div className="footer-text">
						<h5>Section</h5>
						<ul className="nav flex-column footer-text">
							<Link to="/">
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0">
										Home
									</a>
								</li>
							</Link>
							<Link to="/IndTherapy">
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0">
										Individual Therapy
									</a>
								</li>
							</Link>
							<Link to="/RelTherapy">
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0">
										Relationship Therapy
									</a>
								</li>
							</Link>
							<Link to="/workshop">
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0">
										Workshop
									</a>
								</li>
							</Link>
							<Link to="/Contact">
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0">
										Contact
									</a>
								</li>
							</Link>
						</ul>
					</div>
				</footer>
			</div>
		</div>
	);
}
