import React from 'react';
import './PostContainer.css'

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="post">
            <div className="user-container">
                <h1 className="username"><strong>{props.post.username}</strong></h1>
                <img className="img-pfp" src={props.post.thumbnailUrl} alt="thumb" />
            </div>

            <div className="post-container">
                <img className="img-post" src={props.post.imageUrl} alt="thumb" />
                <div className="likes-comments">
                    <p className="likes"><strong>{props.post.likes} likes</strong></p>
                    <CommentSection />
                </div>
            </div>
        </div>
    )
}

export default PostContainer;