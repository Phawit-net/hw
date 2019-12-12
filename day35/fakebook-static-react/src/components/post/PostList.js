import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Post from './Post'


export default class PostList extends Component {

  renderPostList(){
    return this.props.postList.map(post =>
      <Post key = {post.id}
        author ={post.author}
        message = {post.message}
        imgSrc= {post.imgSrc}
        date = {post.date}
        owner = {post.owner}
        commentList = {post.commentList}/>
    )
  }

  render() {
    return (
      <Col>
        {this.renderPostList()}
      </Col>
    )
  }
}
