import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategories = ( { setCategories } ) => {

    //const [inputValue, setInputValue] = useState('Hola Mundo');
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        //console.log(e.target.value);
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        //console.log('Submit hecho');

        if( inputValue.trim().length > 2 ){
            //setCategories( cat => [ ...cat, inputValue ] );
            setCategories( cat => [ inputValue, ...cat ] );
            setInputValue( '' );
        }    
        
    }

    return (
        <form onSubmit = { handleSubmit }>
           <input 
              type="text" 
              value = { inputValue } 
              //onChange = { ( e ) =>  console.log( e ) }/>
              onChange = { handleInputChange } 
           />
        </form>
    )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}