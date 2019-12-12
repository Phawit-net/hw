import React, { Component } from 'react'
import { Input, Col } from 'antd';
export class SearchBox extends Component {

    render() {
        const { Search } = Input;
        return (
          <Col span={12}>
          {/* <div style={{width:'100vw',height:'100vh'}}> */}
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200,height:60,fontSize:30}}/>
          </Col>
        )
      }
    }
    
    export default SearchBox