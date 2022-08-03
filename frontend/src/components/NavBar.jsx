import { Link } from 'react-router-dom';

function NavBar() {
    return (
    <nav>
        <Link to='/' className='link-btn-user'>Home</Link>
      </nav>
    )
}

export default NavBar;