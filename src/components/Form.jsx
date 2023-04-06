import {useState} from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';
const Form = () =>{
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [formData, setFormData] = useState({
        author: '',
        location: '',
        description: '',
        likes: parseInt(Math.random() * 101),
        date: new Date().toLocaleDateString()
    });
    const handleOnSubmit = async event =>{
        event.preventDefault();
        const {author, location, description, likes, date} = formData;
        await fetch('http://instaclone-api.onrender.com/user', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: imageUrl, author, location, description, likes, date
            })
        })
        setFormData({author: '', location: '', description: ''});
        setSelectedFile(null);
    }

    const handleBrowsingImage = event =>{
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
            const file = event.target.files[0];
            console.log(file.name);
            if (file && file.type.startsWith('image/')) {
                setSelectedFile(file);
                setImageUrl(URL.createObjectURL(file));
            } else {
                setSelectedFile(null);
                setImageUrl(null);
            }
        };
        input.click();
    }
    
    const handleOnChange = event =>{
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const enableBtnStyle = {
        color: '#fff',
        backgroundColor: 'blue',
        cursor: 'pointer'
    }

    return(
        <div>
            <Header />
            <form action="/user" method="post" className="form" enctype="multipart/form-data">
                <div className="upload-image">
                    <input 
                        type="text" 
                        name="postImage"
                        value={selectedFile ? `${selectedFile.name}` : 'No file chosen'} 
                        readOnly 
                    />
                    <button onClick={handleBrowsingImage} type="button">Browse</button>
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Author" 
                        value={formData.author} 
                        name="author"
                        onChange={handleOnChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Location" 
                        value={formData.location} 
                        name="location"
                        onChange={handleOnChange} 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        value={formData.description} 
                        name="description"
                        onChange={handleOnChange} 
                    />
                </div>
                <div>
                    {
                        (selectedFile && formData.author && formData.location && formData.description) ?
                        <button style={enableBtnStyle} onClick={handleOnSubmit} type="submit"><Link style={{textDecoration: 'none', color: 'white'}} to="/all-post">Post</Link></button> :
                        <button disabled type="submit">Post</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default Form;