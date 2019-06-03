import React from 'react';
import './App.css';

import dummyData from './dummy-data'

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => {
          return <PostContainer post={post}/>
        })}
      </div>
    );
  }
}

export default App;
