import { Link, Outlet } from "react-router-dom";
import mainnavcss from './MainNavigation.module.css';

function MainNavigation() {
  return <header className={mainnavcss.header}>
    <div className={mainnavcss.logo}>React Meetups</div>
    <nav>
      <ul>
        <li><Link to='/'>All Meetups</Link></li>
        <li><Link to='/newmeetup'>New Meetup</Link></li>
        <li><Link to='/favorites'>Favorites</Link></li>
      </ul>
    </nav>
    <Outlet />
  </header>
}

export default MainNavigation;