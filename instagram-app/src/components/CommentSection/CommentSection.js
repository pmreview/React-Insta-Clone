import React from 'react';
import './CommentSection.css'

import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div className="comment">
            <p className="username-text"><strong>{props.comment.username}</strong> {props.comment.text}</p>
        </div>
    )
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })
}

export default CommentSection;