import React, {Component} from 'react';
import Post from '../../components/Post/Post';
import classes from './Posts.module.css';
import Button from '../../components/UI/Button/Button';
import axios from '../../axios-instance';

class Posts extends Component{

    state={
      posts:null,
      error:null
    }
    newPostActionHandler=()=>{
      this.props.history.push({
        pathname:'/createpost'});
    }

    componentDidMount(){
      axios.get('/posts.json')
      .then((response)=>{

        const fetchedPosts = [];
        for (let fetchedPost in response.data){
          fetchedPosts.push({...response.data[fetchedPost], key:fetchedPost});
        }
        this.setState({posts:fetchedPosts});
      })
      .catch((error)=>{
        this.setState({error:error});
      });
    }
  render(){
    let posts = this.state.error ? <p className={classes.Loading}>Posts cannot be loaded</p> : <p className={classes.Loading}>Posts are loading...</p>;
    if (this.state.posts){
      posts = (this.state.posts.map(post=>(
        <Post title={post.title} content={post.content} key={post.content}/>)
      ));
    }
    return(
      <div>
        {posts}
      <div className={classes.Posts}>
        <Button action={this.newPostActionHandler}>New Post</Button>
      </div>

      </div>


    );
  }
}

export default Posts;
