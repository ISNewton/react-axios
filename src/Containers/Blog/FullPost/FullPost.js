
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Navigate, redirect, useNavigate, useParams } from 'react-router-dom';
import './FullPost.css';

export default (porps) => {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => setPost(response.data))
            .finally(() => setLoading(false))

    }, [])

    function deletePost() {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                navigate('/')
            })
    }

    // function editPost() {
    //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(response => {
    //             navigate('/')
    //         })
    // }

    return (
        <div className="FullPost">
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <div className="Edit">
                        <button  onClick={deletePost} className="Delete">Delete</button>
                        <Link to={`edit`}  className="Edit">Edit</Link>
                    </div>
                </>

            )}

        </div>
    )
}
