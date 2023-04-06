import PostView from './PostView';
import introImg from '../images/into-img.png';
import {Link} from 'react-router-dom';
const LandingPage = () =>{
    return(
        <>
            <div className="landing-page">
                <div className="landing-page__img-container">
                    <img className="landing-page__img" src={introImg} alt='Landing' width="64" height="96" />
                </div>
                <div className="landing-page__intro-container">
                    <h1>
                        <span>10x Team 04</span>
                        <button type="button">
                            <Link className="link" to="/all-post">Enter</Link>
                        </button>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default LandingPage;