import React from 'react';
import './CommentSection.css'

import PropTypes from 'prop-types';

import Comment from './Comment'

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => {
                return <Comment key={comment.id} comment={comment} />
            })}
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