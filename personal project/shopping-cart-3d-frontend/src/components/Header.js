import React, { Component } from 'react'
import { Menu, Row, Col, Popover, Button, Modal } from 'antd';
import LoginCard from './LoginCard';

export default class Header extends Component {
    state = {
        loading: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };
    render() {
        const { visible, loading } = this.state;
        return (
            <Row >
                <Col span={12} style={{ backgroundColor: '#23272c' }}>
                    <div style={{ display: 'flex', padding: 14, color: "#fff", fontSize: 20 }}>
                        LOGO
                    </div>
                </Col>
                <Col span={12} style={{ backgroundColor: '#23272c' }}>
                    <div style={{ display: 'flex', padding: 14, color: "#fff", justifyContent: 'flex-end', fontSize: 20 }}>
                        <Popover placement="bottom" title={<LoginCard />} 
                            content={
                                <a href={'#'}>
                                    <span style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                                        Forgot Password?
                                    </span>
                                </a>} 
                            trigger="click">
                            <span style={{ cursor: 'pointer' }}>Login</span>
                        </Popover>
                        &nbsp;&nbsp;&nbsp;
                        <span style={{ cursor: 'default' }}> or </span>
                        &nbsp;&nbsp;&nbsp;
                        <div>
                            <span style={{ cursor: 'pointer' }} onClick={this.showModal}>Create Account</span>
                            <Modal
                                visible={visible}
                                title="Title"
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                footer={[
                                    <Button key="back" onClick={this.handleCancel}>
                                        Return
                                    </Button>,
                                    <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                        Submit
                                    </Button>,
                                ]}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}