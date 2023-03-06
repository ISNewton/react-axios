import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Post/Post'
import NewPost from '../components/NewPost/NewPost'
import FullPost from '../components/FullPost/FullPost'
import './Blog.css'
export default () => {
    const [posts , setPosts] = useState([])
    const [activePost , setActivePost] = useState()
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            
            const posts = response.data.slice(0,4)
            setPosts(posts)

            setActivePost(posts[0])

            setIsLoading(false)
        })
    },[])

    function changeActivePost(id) {
        console.log(id)
    }
  return (
    <div>
        {isLoading && <h1>Loading...</h1>}
        {
            (!isLoading && posts.length > 0) && (
                <>
                <section className="Posts">
                {posts.map(post => <Post clicked={changeActivePost} key={post.id} post={post} />)}
            </section>
            <section>
                { activePost && (
                <FullPost post={activePost} />
    
                )}
            </section>
            <section>
                <NewPost />
            </section>
            </>
            )
        }
      
    </div>
);
}