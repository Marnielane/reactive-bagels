import React from 'react'
import Delete from './Delete'
import Bagel from './Bagel'

const BagelsContainer = (props) => {

    const bagel = props.bagels.map(bagel => <Bagel newBagel={bagel}/>)

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