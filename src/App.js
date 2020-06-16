import React, { Component } from 'react';
import './App.css';
import Toolbar from './Components/Navigation/Toolbar/Toolbar'
import Blog from './Components/Blog/Blog'
import NewBlogAdder from './Components/NewBlogAdder/NewBlogAdder'
import BlogModal from './Components/BlogModal/BlogModal'

class App extends Component {
  state = {
    addNewBlog : false,
    Blogs : [
      
    ]
  }
  openModal = () => {
    this.setState({addNewBlog:true})
  }
  closeModal = () => {
    this.setState({addNewBlog:false})
  }
  BlogHandler = (blog) => {
    const Blogs = [...this.state.Blogs]
    Blogs.push(blog)
    this.setState({Blogs : Blogs})
  }
  removeBlog = (i) => {
    const oldBlog = [...this.state.Blogs]
    const newBlog = oldBlog.splice(i,1)
    this.setState({Blogs:newBlog})
  }
render(){
  return (
    <>
    
    <div>
      <div>
      <Toolbar></Toolbar>
      </div>
      if (this.state.Blogs.length() !== 0 ){
        this.state.Blogs.map((blog,i) =>{
           console.log(i)
           return <Blog key={i} index={i} title={blog.title} content={blog.content} remove={this.removeBlog}></Blog> 
        })
      }
      
      <BlogModal openModal={this.state.addNewBlog} closeModal={this.closeModal} blog={this.BlogHandler}></BlogModal>
      <NewBlogAdder openModal={this.openModal}>Add</NewBlogAdder>
    </div>
    </>
  )};
}

export default App;
