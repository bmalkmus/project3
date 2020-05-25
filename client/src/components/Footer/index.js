import React from 'react';

function Footer(props) {
	const newDate = new Date();
	const year = newDate.getFullYear();
	return (
		<footer className="footer footer-default">
			<div className="container">
				<nav className="float-left">
					<h1>
						<ul>
							<li>
								<a href="https://www.creative-tim.com/">Creative Tim</a>
							</li>
						</ul>
					</h1>
				</nav>
				<div className="copyright float-right">
					<h1>
						&copy;
						{year}
						, made with <i className="material-icons">favorite</i> by
						<a href="https://www.creative-tim.com/" target="blank">
							Creative Tim
						</a>{' '}
						for a better web.
					</h1>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
