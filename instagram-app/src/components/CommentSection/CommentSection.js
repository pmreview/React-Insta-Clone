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
        }
    }

    addtext = e => {
        e.preventDefault();

        const newtext = {
            username: this.state.username,
            text: this.state.text,
        }

        console.log("newtext", newtext)

        this.setState({
            comments: [...this.state.comments, newtext],
            username: "Jay",
            text: "",
        })

        console.log(this.state.comments)
    }

    handleChanges = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    render(){
        return (
            <div>
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