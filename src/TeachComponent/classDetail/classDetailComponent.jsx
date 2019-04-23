import React from 'react';
import Name from './className'
import Test from './classTest'



export default class classDetailComponent extends React.Component{
    
    render() {
        return (
                <div style={{marginTop:120,marginLeft:80,width:870}}>
                <div><Name/></div>
                <div><Test/></div>
                </div>
            )
    }
}