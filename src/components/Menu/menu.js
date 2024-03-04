import './menu.css';

function Menu() {
    return (
        <nav>
            <a href="" className='link_to_home'>
                <div>
                    <img src="images/weblogo.png"/>
                </div>
            </a>
            
            <div class="nav-links-menu">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/blogs">BLOG</a></li>
                    <li><a href="/manageAnnouncement">MANAGE MY ANOUNCEMENT</a></li>
                    <li><a href="/addRoom">ADD ROOM</a></li>
                    <li><a href="/login">LOG IN</a></li>

                </ul>
            </div>
        </nav>
    )
}

export default Menu;