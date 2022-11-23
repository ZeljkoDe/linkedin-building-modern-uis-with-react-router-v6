import { NavLink, Outlet } from 'react-router-dom';
import { getCategories } from '../api';

export default function Categories() {
	const categories = getCategories();
	const setClass = ({ isActive }) => (isActive ? 'category-active' : null);

	return (
		<div className='container'>
			<h1>Session Categories</h1>

			<ul className='categories'>
				{categories.map((cat) => (
					<li key={cat.id}>
						<NavLink className={setClass} to={cat.id}>
							{cat.name}
						</NavLink>
					</li>
				))}
			</ul>

			<Outlet />
		</div>
	);
}
