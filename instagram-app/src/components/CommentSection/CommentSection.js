import React from 'react';
import './CommentSection.css'

import PropTypes from 'prop-types';

import Comment from './Comment'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            username: "Jay",
            text: "",
            likes: props.likes,
        }
    }

    addtext = e => {
        e.preventDefault();

        const newtext = {
            username: this.state.username,
            text: this.state.text,
        }

        this.setState({
            comments: [...this.state.comments, newtext],
            username: "Jay",
            text: "",
        })
    }

    handleChanges = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    likeButton = event => {
        const currentLikes = this.state.likes
        const addlike = currentLikes + 1;

        this.setState({
            likes: addlike
        })
        console.log(addlike)
    }

    render(){
        return (
            <div>
                <button onClick={this.likeButton}>
                    <i id="heart-icon" className="far fa-heart"></i>
                </button>

                <p className="likes"><strong>{this.state.likes} likes</strong></p>

                {this.state.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })}

                <form onSubmit={this.addtext}>
                    <input
                        className="input-comment"
                        placeholder="Add a comment..."
                        onChange={this.handleChanges}
                        value={this.state.text}
                        name="text"
                    />
                </form>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })
}

export default CommentSection;