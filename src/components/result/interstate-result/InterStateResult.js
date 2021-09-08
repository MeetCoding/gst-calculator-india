import React from 'react'

function InterStateResult(props) {
    const {
        goodsPurchasePricePerUnit,
        numberOfGoodsPurchased,
        rateOfGST,
        profitPerUnit,
        numberOfGoodsSold
    } = props.data

    const cp = goodsPurchasePricePerUnit*numberOfGoodsPurchased
    const sp = (goodsPurchasePricePerUnit+profitPerUnit)*numberOfGoodsSold

    const inputIGST = Math.ceil(cp*(rateOfGST/100))

    const outputIGST = Math.ceil(sp*(rateOfGST/100))

    const gstPayable = Math.ceil(outputIGST-inputIGST)

    return (
        <div className='result-page'>
            <span className='gst-payable'>
                GST Payable: ₹{gstPayable < 0? 0 : gstPayable }
            </span>
            <p>Input IGST: ₹{inputIGST}</p>
            <p>Output IGST: ₹{outputIGST}</p>
        </div>
    )
}

export default InterStateResult
