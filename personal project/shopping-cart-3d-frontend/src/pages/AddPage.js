import React, { Component } from 'react'
import { Row, Col, Input, Form, Dropdown, Icon, Button, Select } from 'antd'
import Axios from "axios";

class AddPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      subCategoryList: [],
      productList: [],
      selectedCategoriesId: null,
    };
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  submitForm = (e) =>{
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err,value)=>{
      if(!err){
        Axios.post("http://localhost:8080/product",{
          name : value.Name,
          sub_category_id : 3,
          price : value.Price,
          description : value.Description,
          image : value.Image,
          published_date : '2008-11-11'
        })
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


  render() {
    const { Option } = Select;
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
    const formProductLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    return (
      <>
        <Row type='flex' justify="center">
          <Col span={12}>
            <div style={{ backgroundColor: '#23272c', color: '#fff', padding: '20px 30px', fontSize: '25px' }}>
              Information
              </div>
            <div style={{ backgroundColor: '#e9ebed', padding: '30px' }}>
              <Form onSubmit={this.submitForm}>
                <Row type='flex' align='middle'>
                  <Col span={10} style={{ marginRight: 20 }}>
                    <Form.Item label="Name" {...formProductLayout}>
                      {getFieldDecorator("Name", {
                        rules: [
                          {
                            required: true,
                            message: "Please input product name"
                          }
                        ]
                      })( <Input placeholder="Product name" />)}
                    </Form.Item>
                  </Col>
                  <Col style={{ marginRight: 20 }}>
                    <Form.Item>
                      {getFieldDecorator('Categories', {
                        rules: [
                          {
                            required: true,
                            message: 'Please select categories!'
                          }
                        ]
                      })(
                        <Select
                          placeholder="Categories"
                          onChange={this.handleChange}
                          style={{ width: 130 }}>
                          <Option value="Architectures">Architectures</Option>
                          <Option value="Characters">Characters</Option>
                          <Option value="Vehicles">Vehicles</Option>
                          <Option value="Animals">Animals</Option>
                          <Option value="Weapons">Weapons</Option>
                          <Option value="Furnitures">Furnitures</Option>
                          <Option value="Foods">Foods</Option>
                          <Option value="Plants">Plants</Option>
                          <Option value="Electronics">Electronics</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item>
                      {getFieldDecorator('subCategories', {
                        rules: [{ required: true, message: 'Please select categories!' }],
                      })(
                        <Select
                          placeholder="Sub Categories"
                          onChange={this.handleChange}
                          style={{ width: 150 }}>
                          <Option value="Architectures">Architectures</Option>
                          <Option value="Characters">Characters</Option>
                          <Option value="Vehicles">Vehicles</Option>
                          <Option value="Animals">Animals</Option>
                          <Option value="Weapons">Weapons</Option>
                          <Option value="Furnitures">Furnitures</Option>
                          <Option value="Foods">Foods</Option>
                          <Option value="Plants">Plants</Option>
                          <Option value="Electronics">Electronics</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Row type='flex' align='middle'>
                  <Col span={24}>
                    <Form.Item label="Description">
                      {getFieldDecorator("Description", {
                        rules: [
                          {
                            required: true,
                            message: "กรุณาใส่ Description ด้วยนะครับ"
                          }
                        ]
                      })(<TextArea rows={4} />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row type='flex' align='middle'>
                  <Col span={10} style={{ marginRight: 20 }}>
                    <Form.Item label="Price" {...formProductLayout}>
                      {getFieldDecorator("Price", {
                        rules: [
                          {
                            required: true,
                            message: "Please input price"
                          }
                        ]
                      })(<Input placeholder="Price" />)}
                    </Form.Item>
                  </Col>
                  <Col span={10} style={{ marginRight: 20 }}>
                    <Form.Item label="Image" {...formProductLayout}>
                      {getFieldDecorator("Image", {
                        rules: [
                          {
                            required: true,
                            message: "Please input Image URL"
                          }
                        ]
                      })(<Input placeholder="Image URL" />)}
                    </Form.Item>
                  </Col>
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
            </div>
          </Col>
        </Row>
      </>
    )
  }
}

export default Form.create()(AddPage);