import React from 'react';
import './CommentSection.css'

const CommentSection = props => {
    return (
        <div className="comment">
            <p className="username-text"><strong>{props.comment.username}</strong> {props.comment.text}</p>
        </div>
    )
}

export default CommentSection;