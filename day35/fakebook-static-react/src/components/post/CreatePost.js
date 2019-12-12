import React, { Component } from 'react'
import { Col, Row, Card, Avatar, Divider, Upload ,Button,Icon} from 'antd'
import TextArea from 'antd/lib/input/TextArea'

export default class CreatePost extends Component {
  render() {
    return (
      <Col>
        <Row>
          <Card title="Create Post">
            <Row type = 'flex'>
              <Col span={2}>
                <Avatar size ='large' src ={this.props.avatarSrc}/>
              </Col>
              <Col span={22}>
                <TextArea 
                  placeholder ="เขียนอะเไรบางอย่างในนี้สิ"
                  autoSize = {{minRows:2,maxRows:6}}/>
              </Col>
            </Row>
            <Divider style ={{marginBottom:'15px'}}/>
            <Row>
              <Upload>
                <Button>
                  <Icon type="picture" /> Upload
                </Button>
              </Upload>
            </Row>
          </Card>
        </Row>
      </Col>
    )
  }
}
