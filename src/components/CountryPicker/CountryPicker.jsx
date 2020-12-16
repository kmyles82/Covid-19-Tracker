import React from 'react'
import {FormControl, NativeSelect } from '@material-ui/core'

const CountryPicker = () => {
    return (
        <div>
            <FormControl>
        <NativeSelect >
            <option value="global">Global</option>
            <option value="usa">USA</option>
        </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
