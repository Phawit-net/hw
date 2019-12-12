import React, { Component } from 'react'
import { Comment, List, Col } from 'antd';

export default class CommentList extends Component {
    renderCommentList(){
        return this.props.commentList.map(comment=>(
            <Comment
                key={comment.id}
                author={comment.author}
                avatar={comment.avatar}
                content={comment.content}
                datetime={comment.datetime}
            />
        ))
    }

    render() {
        return (
            <Col>
                {this.renderCommentList()}
            </Col>
        )
    }
}
