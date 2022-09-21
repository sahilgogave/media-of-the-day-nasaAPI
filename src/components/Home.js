import {Link} from 'react-router-dom';

const Home=()=>{
    return(
        <div className='home'>
            <Link className='home-link' to="/nasaphoto">Media of the day</Link>
        </div>
    );
}

export default Home;