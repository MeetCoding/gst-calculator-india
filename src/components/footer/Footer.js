import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <span className='footing'>
                    Created by &nbsp;
                    <strong>
                        <a 
                            href='https://twitter.com/MeetCoding'
                            rel='noreferrer'
                            target='_blank'
                        >
                            Meet Shah
                        </a>
                    </strong>
                </span>
            </div>
        )
    }
}
