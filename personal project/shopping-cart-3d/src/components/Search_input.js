import React, { Component } from 'react'
import { Input } from 'antd';

export class SearchBox extends Component {

    render() {
        const { Search } = Input;
        return (
          <div>
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200,height:60,fontSize:30}}/>
          </div>
        )
      }
    }
    
    export default SearchBox