
import { NavLink } from 'react-router-dom';

import './style.css';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

const Navbar = () => {

	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to='/' className='logo'>
						<strong>Freelancer</strong> portfolio
					</NavLink>
					{/* <a href="./index.html" className="logo">
						<strong>Freelancer</strong> portfolio
					</a> */}



					<BtnDarkMode />



					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
								Home
							</NavLink>
							{/* <a href="./index.html" className="nav-list__link nav-list__link--active">Home</a> */}
						</li>
						<li className="nav-list__item">
							<NavLink to='/projects' className={({ isActive }) => isActive ? activeLink : normalLink}>
								Projects
							</NavLink>
							{/* <a href="./projects.html" className="nav-list__link">Projects</a> */}
						</li>
						<li className="nav-list__item">
							<NavLink to='/contacts' className={({ isActive }) => isActive ? activeLink : normalLink}>
								Contacts
							</NavLink>
							{/* <a href="./contacts.html" className="nav-list__link">Contacts</a> */}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;