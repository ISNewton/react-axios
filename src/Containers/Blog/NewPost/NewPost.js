import "./NewPost.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default ({ addPost, postToEdit, editMode, updatePost }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    author: "",
  });
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(response => setPost(response.data))
    }

  }, [editMode])

  function addPost(post) {

    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => {
        navigate('/')
      })
  }

  function updatePost() {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post)
      .then(response => {
        navigate('/')
      })
      
  }

  return (
    <div className="NewPost">
      <h1>{params.id ? 'Update post' : 'Add post'}</h1>
      <label>Title</label>
      <input
        type="text"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <label>Content</label>
      <textarea
        rows="4"
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}

      />
      <label>Author</label>
      <select
        value={post.author}
        onChange={(event) => setPost({ ...post, author: event.target.value })}
      >
        <option value="Max">Max</option>
        <option value="Manu">Manu</option>
      </select>
      <button onClick={() => params.id ? updatePost(post) : addPost(post)}>{params.id ? 'Update post' : 'Add post'}</button>
    </div>
  );
};
