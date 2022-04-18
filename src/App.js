import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import EditPost from './Components/EditPost';


class App extends Component {
  state = {
    posts :[],
    show_success_msg : false
  };

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        this.setState({
            posts : data
        })
    })
  }

  deletePost = (target_post_id) => {
    let filtered_posts = this.state.posts.filter(post => post.id !== target_post_id);
    this.setState({
        posts : filtered_posts
    })
  }

  createNewPost = (post) => {
    this.setState({
      show_success_msg : true,
      posts : [post, ...this.state.posts]
    });

    setTimeout(() => {
      this.setState({
        show_success_msg : false
      });
    }, 1500);
  }

  updatePost  = (targted_post) => {
    
    let new_updated_post_list = this.state.posts.map(post => {
      if (targted_post.id == post.id) {
        return targted_post
      } else {
        return post;
      }
    })

    this.setState({
      posts: new_updated_post_list
    })
  }

  findTargetPost = (post_id) => {
    let [ target_post ] = this.state.posts.filter(post => post.id == post_id) 

    return target_post;
  }
 

  render () {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar />

          <Route path="/" exact>
            <Home posts={this.state.posts} deletePost={this.deletePost} show_success_msg={this.state.show_success_msg} />
          </Route> 
          

          <Route path="/create_post"render={(props) => <CreatePost {...props} createNewPost={ this.createNewPost } /> } />

          <Route path="/edit_post/:id" render={(props) => <EditPost {...props} updatePost={this.updatePost} findTargetPost={this.findTargetPost} />} />


         
        </div>
        
      </BrowserRouter>
      
    );
  }

}

export default App;
