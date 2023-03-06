import React from 'react';

import './Post.css';

const post = ({post , clicked }) => (
    <article onClick={() => clicked(post)} className="Post">
        <h1>{ post.title }</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;