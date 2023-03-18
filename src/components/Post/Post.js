import React from 'react';

import './Post.css';

const post = ({post , clicked , activePostId }) => (
    <article onClick={() => clicked(post)} className={`Post ${activePostId == post.id && 'active'}`}>
        <h1>{ post.title }</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;