import React from 'react';
import './App.css';

import dummyData from './dummy-data'

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => {
          return <PostContainer key={post.id} post={post}/>
        })}
      </div>
    );
  }
}

export default App;
