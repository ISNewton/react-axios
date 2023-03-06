
import { useEffect } from 'react';
import './FullPost.css';
 
export default ({title , content}) => {
    useEffect(() => console.log(title),[])
    return (
        <div className="FullPost">
                <h1>{title}</h1>
                <p>{content}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>
    )
}
