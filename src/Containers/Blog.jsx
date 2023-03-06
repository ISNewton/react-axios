import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Post/Post'
import NewPost from '../components/NewPost/NewPost'
import FullPost from '../components/FullPost/FullPost'
import './Blog.css'
export default () => {
    const [posts , setPosts] = useState([])
    const [activePost , setActivePost] = useState()

    useEffect(() => {
        console.log(34)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            
            const posts = response.data.slice(0,4)
            setPosts(posts)

            setActivePost(posts[0])
        })
    },[])
  return (
    <div>
        <section className="Posts">
            {posts.map(post => <Post key={post.id} title={post.title} />)}
        </section>
        <section>
            {posts.length > 0 && (
            <FullPost post={activePost} />

            )}
        </section>
        <section>
            <NewPost />
        </section>
    </div>
);
}