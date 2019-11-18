import React from 'react';

class Todoitem extends React.Component {
    render(){
        let {text} = this.props
        return(
            <div>
                {text}
            </div>
        )
    }

}

export default Todoitem;
