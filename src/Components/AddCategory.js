import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => { //Recibe el evento, que el evento contiene el valor del input actual para poder camnbiarlo

        setInputValue(e.target.value); //Se cambia el estado del input actual
    }

    const handleSubmit = (e) => {

        e.preventDefault(); //Evitamos que se refresque el navegador

        if (inputValue.trim().length > 2) {

            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');

        }

    }

    return ( <
        form onSubmit = { handleSubmit } >

        <
        input type = "text"
        value = { inputValue } //Este es el valor inicial
        onChange = { handleInputChange } //Con la funcion se modifica el valor inicial
        />

        <
        /form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}