import React, { Component } from 'react'
import Axios from 'axios';
import {Card,Input,Button} from 'antd';

export default class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      postTextValue:'',
      postAuthorValue:'',
      postPictureValue:''
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/posts')
      .then(result => {
        this.setState({
          postList: result.data
        })
      })
  }
  // componentDidMount = async () => {
  //   const result = await Axios.get('http://localhost:8080/posts')
  //   this.setState({
  //     postList: result.data
  //   })
  // }      ASYNC AWAIT

  handleClick(){
    Axios.post('http://localhost:8080/post',{
      text: this.state.postTextValue,
      picture: this.state.postPictureValue,
      author:this.state.postAuthorValue
    }).then(result =>{
      console.log(result)
      // this.setState({
      //   postList : [result.data,...this.state.postList]
      // })
      Axios.get('http://localhost:8080/posts')
      .then(result => {
        this.setState({
          postList: result.data
        })
      })
    })
  }

  render() {
    return (
      <div>
        <Input placeholder="Text" onChange ={(e)=>this.setState({postTextValue: e.target.value})}/>
        <Input placeholder="Picture" onChange ={(e)=>this.setState({postPictureValue: e.target.value})}/>
        <Input placeholder="Author" onChange ={(e)=>this.setState({postAuthorValue: e.target.value})}/>
        <Button onClick = {()=> this.handleClick()}> Post </Button>
        {this.state.postList.map(post => 
          <Card 
            key ={post.id}
            style={{ width: 300 }}>
            <p>{post.author}</p>
            <p>{post.text}</p>
            <img src = {post.picture} />
          </Card>)}
      </div>  
    )
  }
}
