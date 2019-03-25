import React from 'react';
//import axios from 'axios';

import { Typography } from 'antd';
import Title from './title.jsx'
import Detail from './ReserveDetail.jsx';

export default class ReserveComponent extends React.Component{
 
 
    render() {
        return (
                <div style={{marginTop:100 , width:100}}>
                <Title/>
                <Detail/>
                </div>
            )
    }
}