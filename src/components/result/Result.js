import React, { Component } from 'react'
import InterStateResult from './interstate-result/InterStateResult'
import IntraStateResult from './intrastate-result/IntraStateResult'
import NoResult from './no-result/NoResult'
import './Result.css'

export default class Result extends Component {
    render() {
        let page = null;
        if(this.props.data == undefined) {
            page = <NoResult />
        }
        else {
            page = this.props.data.isIntraState?
            <IntraStateResult data={this.props.data} />:
            <InterStateResult data={this.props.data} />
        }
        console.log(this.props)
        return (
            <div className='result'>
                <div className='result-wrapper'>
                    {page}
                </div>
            </div>
        )
    }
}
