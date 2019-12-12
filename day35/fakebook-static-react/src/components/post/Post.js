import React, { Component } from 'react'
import { Card, Row, Col ,Avatar, Button,Typography,Comment,Input} from 'antd'
import CommentList from './CommentList';
const { Text } = Typography;
const {TextArea} = Input;
export default class Post extends Component {
    render() {
        const post = this.props
        return (
            <Card style= {{marginTop:'10px'}}>
                <Row type='flex'>
                    <Col style={{width:'min-content',paddingRight:'10px'}}>
                        <Row type ="flex" justify="center" align="middle" style={{height:'100%'}}>
                        <Avatar size ='large' src={post.author.profilePic}/>
                        </Row>
                    </Col>
                    <Col style={{width:'min-content'}}>
                        <Row>
                        <Button type="link"style={{padding:'0px'}} strong>{post.author.name}</Button>
                        </Row>
                        <Row>
                        <Text  type="secondary">{post.date}</Text>
                        </Row>
                    </Col>
                </Row>
                <Row style= {{margin:'6px 0px 6px'}}>
                    {post.message}
                </Row>
                <Row>
                    <img src={post.imgSrc} style={{width:'100%'}}/>
                </Row>
                <Row>
                    <CommentList commentList = {post.commentList}/>
                    {/* {post.commentList.map(comment =>
                        <Comment
                        author={comment.author}
                        avatar={comment.avatar}
                        content={comment.content}
                        datetime={comment.datetime}
                        />
                        )} */}
                </Row>
            </Card>
        )
    }
}
