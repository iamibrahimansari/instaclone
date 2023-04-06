import logo from '../icons/icon.png';
import camera from '../icons/camera.png';
import {Link} from 'react-router-dom';
const Header = () =>{
    return(
        <menu>
            <nav>
                <ul>
                    <li>
                        <Link className="logo" to="/" style={{textDecoration: 'none'}}>
                            <img src={logo} alt='site logo' width="64" height="64" />
                            <span>Instaclone</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/form"><img src={camera} alt="camera" width="48" height="48" /></Link>
                    </li>
                </ul>
            </nav>
        </menu>
    )
}

export default Header;