import React from 'react';
//import axios from 'axios';

import { Typography } from 'antd';
import SelectRegion from './SelectRegion.jsx';
import Table from './ReserveTable.jsx';


export default class ReserveComponent extends React.Component{
 
 
    render() {
        return (
                <div style={{marginTop:100 , width:100}}>
                <SelectRegion/>
                <Table/>
                </div>
            )
    }
}