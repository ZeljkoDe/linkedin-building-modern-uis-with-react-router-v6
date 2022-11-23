import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/red30-tech-logo.png';

export default function Header() {
	const setClass = ({ isActive }) => (isActive ? 'nav-active' : null);

	return (
		<header className='container'>
			<Link to='/'>
				<img
					className='logo'
					src={logo}
					alt='Red30 Tech logo'
					title='Red30 Tech | Home'
				/>
			</Link>

			<nav>
				<NavLink className={setClass} to='/'>
					Home
				</NavLink>
				<NavLink className={setClass} to='/categories'>
					Categories
				</NavLink>
				<NavLink className={setClass} to='/about'>
					About
				</NavLink>
			</nav>
		</header>
	);
}
