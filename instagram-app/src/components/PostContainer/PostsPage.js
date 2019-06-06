import React from 'react';

import dummyData from '../../dummy-data'

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filtered: [],
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  filter = event => {
    const filteredPosts = this.state.data.filter(post => post.username.includes(event.target.value))
      
    this.setState({ filtered: filteredPosts })
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderData = () => {
    return this.state.data.map(post => 
      <PostContainer key={post.id} post={post}/>
    )
  }

  renderFilteredData = () => {
    return this.state.filtered.map(post => 
      <PostContainer key={post.id} post={post}/>
    )
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleChanges={this.handleChanges} filter={this.filter}/>
        {
          this.state.filtered.length > 0 ? this.renderFilteredData() : this.renderData()
        }
      </div>
    );
  }
}

export default PostsPage;