
import './FullPost.css';
 
export default ({post , deleteFunction , editPost}) => {
   
    
    return (
        <div className="FullPost">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <div className="Edit">
                    <button onClick={() => deleteFunction(post.id)} className="Delete">Delete</button>
                    <button onClick={() => editPost(post.id)} className="Edit">Edit</button>
                </div>
            </div>
    )
}
