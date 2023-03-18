import { BrowserRouter, Link, NavLink, Route, Router, Routes } from "react-router-dom";
import Blog from "./Containers/Blog/Blog";
import NewPost from "./Containers/Blog/NewPost/NewPost";
import './App.css'
import FullPost from "./Containers/Blog/FullPost/FullPost";
import NotFound from "./Containers/Blog/NotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <div style={{
          width: '100%',
          textAlign: 'center'

        }}>

          <NavLink to='/' style={{ margin: '10px' }}>Home</NavLink>
          <NavLink to='/create' style={{ margin: '10px' }}>Add post</NavLink>
        </div>

        <Routes>


          <Route exact path='/' element={<Blog />} />
          <Route exact path='/create'  element={<NewPost />} />
          <Route exact path='/posts/:id' element={<FullPost />} />
          <Route exact path='/posts/:id/edit' element={<NewPost />} />
          <Route exact path='*' element={<NotFound/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
