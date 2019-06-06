import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './components/authentication/withAuthenticate'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hello: "hello"
    }
  }

  render() {
    return(
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}


export default App;
