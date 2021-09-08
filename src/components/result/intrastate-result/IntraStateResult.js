import React from 'react'

function IntraStateResult(props) {

    const {
        goodsPurchasePricePerUnit,
        numberOfGoodsPurchased,
        rateOfGST,
        profitPerUnit,
        numberOfGoodsSold
    } = props.data

    const cp = goodsPurchasePricePerUnit*numberOfGoodsPurchased
    const sp = (goodsPurchasePricePerUnit+profitPerUnit)*numberOfGoodsSold

    const inputCGST = Math.ceil(cp*(rateOfGST/200))
    const inputSGST = inputCGST

    const outputCGST = Math.ceil(sp*(rateOfGST/200))
    const outputSGST = outputCGST

    const gstPayable = Math.ceil((outputCGST-inputCGST)*2)

    return (
        <div className='result-page'>
            <span className='gst-payable'>
                GST Payable: ₹{gstPayable < 0? 0 : gstPayable }
            </span>
            <p>Input CGST: ₹{inputCGST}</p>
            <p>Input SGST: ₹{inputSGST}</p>
            <p>Output CGST: ₹{outputCGST}</p>
            <p>Output SGST: ₹{outputSGST}</p>
        </div>
    )
}

export default IntraStateResult
