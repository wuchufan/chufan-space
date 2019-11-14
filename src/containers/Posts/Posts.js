import React, {Component} from 'react';
import Post from '../../components/Post/Post';
import classes from './Posts.module.css';
import Button from '../../components/UI/Button/Button';
import axios from '../../axios-instance';

class Posts extends Component{

    state={
      posts:[]
    }

    componentDidMount(){
      console.log(this.props);
      axios.get('/posts.json')
      .then((response)=>{

        const fetchedPosts = [];
        for (let fetchedPost in response.data){
          fetchedPosts.push({...response.data[fetchedPost], key:fetchedPost});
        }
        this.setState({posts:fetchedPosts});
      });
    }
  render(){
    return(
      <div>
        {this.state.posts.map(post=>(
          <Post title={post.title} content={post.content} key={post.content}/>)
        )}
      <div className={classes.Posts}>
        <Button>New Post</Button>
      </div>

      </div>


    );
  }
}

export default Posts;
