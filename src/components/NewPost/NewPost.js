import "./NewPost.css";
import { useEffect, useState } from "react";
export default ({ addPost, postToEdit, editMode , updatePost }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    author: "",
  });

  useEffect(() => {
    if (editMode) {
      setPost(postToEdit)
    } else {
      setPost({
        title: "",
        body: "",
        author: "",
    })
    }

  }, [editMode])

  return (
    <div className="NewPost">
      <h1>Add a Post</h1>
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
      <button onClick={() => editMode ? updatePost(post) : addPost(post)}>{editMode ? 'Edit post' : 'Add post'}</button>
    </div>
  );
};
