import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const ColorSwitcher = ({ children }) => {
    const { register, errors, watch, handleSubmit, getValues } = useForm()

    watch("color-picker")

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label for="colorPicker" className="text-dark" >Choose a color</label>
            <input name="colorPicker" type="color" ref={register} id="colorPicker" required={true} />
            {errors.colorPicker && <span>Please enter a valid color</span>}
        </form>
    )
}