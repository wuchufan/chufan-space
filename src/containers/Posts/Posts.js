import React, {Component} from 'react';
import Post from '../../components/Post/Post';
import classes from './Posts.module.scss';
import Button from '../../components/UI/Button/Button';
import axios from '../../axios-instance';
import Pages from '../../hoc/Pages/Pages';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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
        console.log(error);
        this.setState({error:true});
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
            <Pages>
              <div>
                {posts}
                <div className={classes['post__button']}>
                  <Button action={this.newPostActionHandler} type='button'>New Post</Button>
                </div>

              </div>
            </Pages>
    );
  }
}

export default withErrorHandler(Posts,axios);
