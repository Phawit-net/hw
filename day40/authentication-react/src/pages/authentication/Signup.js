import React from "react";
import { Row, Form, Icon, Input, Col, Button } from "antd";
import Axios from '../../config/axios.setup'

class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      isDirty: false,
    }
  }

  handleDirtyBlur = (e) =>{
    const { value } = e.target;
    this.setState({ isDirty: this.state.isDirty || !!value });
  }

  submitForm = (e) =>{
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err,value)=>{
      if(!err){
        Axios.post('/registerUser',{
          username : value.username,
          password : value.password,
          name : value.name})
        .then(result => {
          console.log(result)
        })
        .catch(err =>{
          console.error(err)
        })
        this.props.form.resetFields()
      }
    })
  }

  compareToFirstPassword = (rule,value,callback) =>{
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Password และ Confirm Password ไม่ตรงกัน');
      } else {
        callback();
      }
    };

  compareToSecondPassword = (rule,value,callback) =>{
    const { form } = this.props;
    if (value && this.state.isDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row type="flex" style={{ height: "100vh" }} align="middle">
        <Col span={24}>
          <Row type="flex" justify="center" align="middle">
            <Col
              md={8}
              sm={12}
              xs={24}
              type="flex"
              justify="center"
              align="middle"
            >
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'
                alt="Logo Fakebook"
                style={{ height: "100%", maxHeight: "300px" }}
              ></img>
            </Col>
          </Row>
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ marginTop: "40px" }}
          >
            <Col
              md={8}
              sm={12}
              xs={24}
              type="flex"
              justify="center"
              align="middle"
            >
              <Form
                onSubmit={this.submitForm}
                // className="login-form"
                style={{ maxWidth: "400px", width: "100%" }}
              >
                <Row>
                  <Form.Item label="username">
                    {getFieldDecorator("username", {
                      rules: [
                        {
                          required: true,
                          message: "กรุณาใส่ Username ด้วยนะครับ"
                        }
                      ]
                    })(<Input placeholder="username" />)}
                  </Form.Item>
                  <Form.Item label="password">
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "กรุณาใส่ Password ด้วยนะครับ"
                        },
                        {
                          validator: this.compareToSecondPassword
                        }
                      ]
                    })(<Input.Password placeholder="password" />)}
                  </Form.Item>
                  <Form.Item label= 'Confirm password'>
                    {getFieldDecorator("confirm", {
                      rules: [
                        {
                          required: true,
                          message: "กรุณาใส่ Confirm password ด้วยนะครับ"
                        },
                        {
                          validator: this.compareToFirstPassword
                        }
                      ]
                    })(<Input.Password placeholder="Confirm password" onBlur={this.handleDirtyBlur}/>)}
                  </Form.Item>
                  <Form.Item label ="Name">
                    {getFieldDecorator("name", {
                      rules: [
                        {
                          required: true,
                          message: "กรุณาใส่ Name ด้วยนะครับ",
                          whitespace: true
                        }
                      ]
                    })(<Input placeholder="Name" />)}
                  </Form.Item>
                </Row>
                <Row type="flex" justify="center">
                  <Col md={8} sm={12} xs={24}>
                    <Form.Item>
                      <Button
                        block
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Log in
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Form.create()(Signup);
