import Header from './Header';
import more from '../icons/more_icon.png';
import like from '../icons/heart.png';
import share from '../icons/share.png';
import {useState} from 'react';

const SinglePost = ({image, author, location, desc, likes, date}) =>{
    return(
        <div className="post-container">
            <header className="post__header">
                <p>
                    <span>{author}</span>
                    <span>{location}</span>
                </p>
                <div>
                    <img src={more} alt='3 dots' />
                </div>
            </header>
            <main className="post__img">
                <img src={image} alt="nature" />
            </main>
            <footer className="post__footer">
                <div>
                    <div className="like-and-share">
                        <div>
                            <img src={like} alt="likes" />
                            <img src={share} alt="share" />
                        </div>
                        <p>{likes} likes</p>
                    </div>
                    <p className="date">{date}</p>
                </div>
                <p className="description">{desc}</p>
            </footer>
        </div>
    )
}

const PostView = () =>{
    const [data, setData] = useState([]);
    const getData = async () =>{
        const res = await fetch('http://instaclone-api.onrender.com/user', {method: 'GET'});
        const temp = await res.json();
        setData(temp.reverse());
    }
    getData();
    return(
        <div className="post">
            <Header />
            {data.map(p => <SinglePost {...p} />)}
        </div>
    )
}

export default PostView;