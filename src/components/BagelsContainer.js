import React from 'react'
import Delete from './Delete'
import Bagel from './Bagel'

const BagelsContainer = () => {
    return (
        <>
        <h3>This is the Bagels Container</h3>
        <div>
            <Delete/>
            <Bagel/>
        </div>
        </>
    )
}

export default BagelsContainer