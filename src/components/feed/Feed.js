import React, { Component } from 'react'
import Train from './train.svg'
import Plane from './plane.svg'
import './Feed.css'

export default class Feed extends Component {
    
    constructor() {
        super()
        this.state = {
            priceOfPurhcasedGoodsPerUnit: 0,
            numberOfGoodsPurchased: 0,
            rateOfGST: 18,
            profitPerUnit: 0,
            numberOfGoodsSold: 0,
            isIntraState: true,
            checkboxImage: Train
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.go = this.go.bind(this)
    }

    handleChange(e) {
        let val = e.target.value
        const name = e.target.name
        if(name === 'rateOfGST' && !val.includes('%')) {
            val = val.slice(0,-1)
        }
        val = val.replaceAll('%','')
        val = val.replaceAll('₹','')
        if(isNaN(val)) {
            return
        }
        if(val === '') {
            this.setState({ [name]: 0 })
            return
        }
        val = parseInt(val)
        this.setState({ [name]: val })
    }

    handleCheckboxChange(e) {
        const name = e.target.name
        let newCheckboxImage = Train
        if(this.state.checkboxImage === Train) {
            newCheckboxImage = Plane
        }
        this.setState(prevState => {
            return {
                [name]: !prevState[name],
                checkboxImage: newCheckboxImage
            }
        })
    }

    go() {
        this.props.setFeedData(this.state)
    }

    render() {
        return (
            <div className='feed'>
                <div className='feed-wrapper'>
                    <label className='feed-label'>
                        Price of Purchased Goods Per Unit:
                        <input 
                            className='feed-input'
                            name='priceOfPurhcasedGoodsPerUnit'
                            type='tel'
                            onChange={this.handleChange}
                            value={this.state.priceOfPurhcasedGoodsPerUnit}
                        />
                    </label>
                    <label className='feed-label'>
                        Number Of Goods Purchased:
                        <input 
                            className='feed-input'
                            name='numberOfGoodsPurchased'
                            type='tel'
                            onChange={this.handleChange}
                            value={this.state.numberOfGoodsPurchased}
                        />
                    </label>
                    <label className='feed-label'>
                        Rate of GST: 
                        <input 
                            className='feed-input'
                            name='rateOfGST'
                            type='tel'
                            onChange={this.handleChange}
                            value={this.state.rateOfGST + '%'}
                        />
                    </label>
                    <label className='feed-label'>
                        Profit Per Unit: 
                        <input 
                            className='feed-input'
                            name='profitPerUnit'
                            type='tel'
                            onChange={this.handleChange}
                            value={'₹'+this.state.profitPerUnit}
                        />
                    </label>
                    <label className='feed-label'>
                        Number Of Goods Sold: 
                        <input 
                            className='feed-input'
                            name='numberOfGoodsSold'
                            type='tel'
                            onChange={this.handleChange}
                            value={this.state.numberOfGoodsSold}
                        />
                    </label>
                    <div className='button-wrapper'>
                        <label 
                            className= {
                                this.state.isIntraState?
                                    'checkbox-label checked':
                                    'checkbox-label unchecked'
                            }
                        >
                            <img 
                                className='checkbox-image'
                                src={this.state.checkboxImage} 
                                alt='' 
                            />
                            <input
                                className = 'checkbox'
                                name='isIntraState'
                                type='checkbox'
                                checked={this.state.isIntraState}
                                onChange={this.handleCheckboxChange}
                            />
                            {this.state.isIntraState?'IntraState':'InterState'}
                            <img 
                                className='checkbox-image'
                                src={this.state.checkboxImage} 
                                alt='' 
                            />
                        </label>
                        <button 
                            className='go'
                            onClick={this.go}
                        >Go</button>
                    </div>
                </div>
            </div>
        )
    }
}
