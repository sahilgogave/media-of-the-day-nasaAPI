import {Link} from 'react-router-dom';

const NavBar=()=>{
    return(
        <div className='navbar'>
            <ul>
                <Link className='link' to="/">HOME</Link>
            </ul>
        </div>
    );
}

export default NavBar;