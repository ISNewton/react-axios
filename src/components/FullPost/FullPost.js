
import { useEffect } from 'react';
import './FullPost.css';
 
export default ({post , deleteFunction}) => {
   
    
    return (
        <div className="FullPost">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <div className="Edit">
                    <button onClick={() => deleteFunction(post.id)} className="Delete">Delete</button>
                </div>
            </div>
    )
}
