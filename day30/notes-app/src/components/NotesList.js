import React, { Component } from 'react'
import { Input,Row,Col,Button } from 'antd'
import {connect} from 'react-redux'
import { removeNote } from '../redux/actions/actions'
import NotesCard from './NotesCard';
import store from '../redux/store/store'
import './style.css'

const { Search } = Input;

class NotesList extends Component {

    render() {
        return (
            <>
                <Col span={18}>
                    <Row type='flex' justify ='center' style={{backgroundColor:'#ffff' }}>
                        <Search 
                            placeholder="input search text"
                            style={{ width: '100%',paddingTop:'5px',paddingBottom:'13px'}}
                            size='large'/>
                    </Row>
                    <Row style={{backgroundColor:'#f9f9f9',padding:'10px 25px'}} gutter={[0, 16]}>
                        <Col span ={24}>
                            <Button>Project</Button>
                        </Col>
                        <NotesCard/> 
                    </Row>   
                </Col>
            </>                               
        )
    }
}
// const mapStateToProps = function(state){
//     return {
//       notes :state.notes,
//     }
//   }

// const mapDispatchToProps ={
//     removeNewNote : removeNote 
// }
export default (NotesList)
// export default connect(mapStateToProps,mapDispatchToProps)(NotesList)