import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post/Post";
import NewPost from "../components/NewPost/NewPost";
import FullPost from "../components/FullPost/FullPost";
import "./Blog.css";
export default () => {
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [formIsVisible, setFormIsVisible] = useState(true);
  const [postToEdit, setPostToEdit] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const posts = response.data.slice(0, 4);
      setPosts(posts);

      setActivePost(posts[0]);

      setIsLoading(false);
    });
  }, []);

  function changeActivePost(post) {
    setEditMode(false)
    setPostToEdit(null)
    setActivePost(post);
  }

  function deletePost(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
      });

    const newPosts = posts.filter((post) => post.id !== id);

    setPosts(newPosts);

    setActivePost(newPosts[0]);
  }

  function addPost(post) {
    setFormIsVisible(false);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => {
        console.log(response);

        const newPosts = [...posts, response.data];

        setPosts(newPosts);
      })
      .finally(() => setFormIsVisible(true))
  }

  function updatePost(post) {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,post)
    .then(response => {
      let oldPostIndex = posts.findIndex(post => post.id === post.id)
      const postsState = posts
      postsState[oldPostIndex] = post

      setPosts(postsState)

      setActivePost(post)

      setEditMode(false)

      setPostToEdit(null)

      // console.log(posts);

    })
    .finally(() => setFormIsVisible(true))
  }

  function editPost(id) {
    const post = posts.find(post => post.id === id)

    setPostToEdit(post)

    setEditMode(true)

    // console.log(post);

  }
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && posts.length > 0 && (
        <>
          <section className="Posts">
            {posts.map((post) => (
              <Post activePost={activePost} clicked={changeActivePost} key={post.id} post={post} />
            ))}
          </section>
          <section>
            {activePost && (
              <FullPost deleteFunction={deletePost} post={activePost} editPost={editPost} />
            )}
          </section>
          <section>
            {!formIsVisible && <h3>Loading...</h3> }
            {formIsVisible && <NewPost editMode={editMode} updatePost={updatePost} postToEdit={postToEdit} addPost={addPost} />}
          </section>
        </>
      )}
    </div>
  );
};
