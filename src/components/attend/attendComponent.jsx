import React from 'react';
//import axios from 'axios';

import { Typography } from 'antd';
import SelectMonth from './SelectMonth.jsx';
import Table from './AttendTable.jsx';

export default class ScoreComponent extends React.Component{
 
 
    render() {
        return (
                <div style={{marginTop:100 , width:100}}>
                <SelectMonth/>
                <Table/>
                </div>
            )
    }
}