import React from 'react';
import { Input,Button,Icon,Row,Col } from 'antd'

// function App2() {
//     return (
//         <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
//             <div style={{margin:'5px'}}>
//                 <Icon type='facebook' style={{ fontSize: '150px', color :'#1890ff'}} theme="filled"/>
//             </div>
//             <div style={{display:'flex',flexDirection:'column' ,margin:'5px'}}>
//                     <Input style={{margin:'5px'}} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
//                     <Input style={{margin:'5px'}} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
//                     <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around' , alignItems:'center' }}>
//                         <a className="login-form-forgot" href="">Signup</a>
//                         <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
//                     </div>
//             </div>
//         </div>
//     );
// }

// export default App2;

function App2() {
    return (
        <Row style={{height:'100vh'}}type="flex" justify="center">
            <Col span = {8} style={{margin:'15px'}}> 
                <Row style={{height:'100vh'}}type="flex" justify="end" align="middle">
                    <Icon type='facebook' style={{ fontSize: '150px', color :'#1890ff'}} theme="filled"/>
                </Row>
            </Col>
            <Col span = {8}>
                <Row style={{height:'100%'}}type="flex" justify="start" align="middle">
                    <Col>
                        <Row>
                            <Input style={{margin:'5px'}} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
                        </Row>
                        <Row>
                            <Input style={{margin:'5px'}} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
                        </Row>
                        <Row style={{height:'100%' , margin:'5px'}}type="flex" justify="space-around" align="middle">
                            <Col>
                                <Button className="login-form-forgot">Signup</Button>
                            </Col>
                            <Col>
                                <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default App2;