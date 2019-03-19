import React from 'react';
//import axios from 'axios';

import { Typography } from 'antd';
import SelectRegion from './SelectRegion.jsx';
import SelectDate from './SelectDate.jsx'
import Table from './ReserveTable.jsx';


export default class ScoreComponent extends React.Component{
 
 
    render() {
        return (
                <div style={{marginTop:100 , width:100}}>
                <SelectRegion/>
                <SelectDate/>
                <Table/>
                </div>
            )
    }
}