import "./NewPost.css";
import { useEffect, useState } from "react";
export default ({ addPost, postToEdit, editMode }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    author: "",
  });

  useEffect(() => {
    console.log(postToEdit);
    if (editMode) {
      setPost(postToEdit)
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
      <button onClick={() => addPost(post)}>Add Post</button>
    </div>
  );
};
