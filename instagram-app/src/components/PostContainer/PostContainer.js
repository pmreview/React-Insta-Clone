import React from 'react';
import './PostContainer.css'

import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="center-page">
            <div className="post">
                <div className="user-container">
                    <h1 className="username"><strong>{props.post.username}</strong></h1>
                    <img className="img-pfp" src={props.post.thumbnailUrl} alt="thumb" />
                </div>

                <div className="post-container">
                    <img className="img-post" src={props.post.imageUrl} alt="thumb" />
                    <div className="likes-comments">
                            <CommentSection
                                id={props.post.id}
                                comments={props.post.comments}
                                post={props.post}
                                likes={props.post.likes}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
    }).isRequired
}

export default PostContainer;