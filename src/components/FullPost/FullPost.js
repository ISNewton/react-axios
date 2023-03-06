
import { useEffect } from 'react';
import './FullPost.css';
 
export default ({post}) => {
    useEffect(() => console.log(post),[])
    return (
        <div className="FullPost">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>
    )
}
