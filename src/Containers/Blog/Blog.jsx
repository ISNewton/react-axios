import { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";
import Post from "../../components/Post/Post";
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

  function updatePost(updatedPost) {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, updatedPost)
      .then(response => {

        const postsState = posts.map(post => post.id === updatedPost.id ? response.data : post)


        setPosts(postsState)


        setActivePost(response.data)

        setEditMode(false)

        setPostToEdit(null)

      })
      .finally(() => setFormIsVisible(true))
  }

  function editPost(id) {
    const post = posts.find(post => post.id === id)

    setPostToEdit(post)

    setEditMode(true)
  }
  return (
    <div>


      {isLoading && <h1>Loading...</h1>}
      {!isLoading && posts.length > 0 && (
        <>
          <section className="Posts">
            {posts.map((post) => (
              <Post activePostId={activePost.id} clicked={changeActivePost} key={post.id} post={post} />
            ))}
          </section>
          {/* <section>
            {activePost && (
              <FullPost deleteFunction={deletePost} post={activePost} editPost={editPost} />
            )}
          </section> */}
            {/* {!formIsVisible && <h3>Loading...</h3>} */}
            {/* {formIsVisible && <NewPost editMode={editMode} updatePost={updatePost} postToEdit={postToEdit} addPost={addPost} />} */}
        </>
      )}
    </div>
  );
};
