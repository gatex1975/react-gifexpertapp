//import React, { useState, useEffect } from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) =>{

    const { data:images, loading } = useFetchGifs( category );  // =>> este es un custom hook
        
    return(
        <>
            <h3 className="animate__animated animate__bounceInDown">{ category }</h3>
            
            { 
            
              /* Aquí se esta haciendo un if  es igual a decir 
                 loading ? <p className ="animate__animated animate__flash">Loading...</p> :  null
                 ABAJO
              */ 

            }
            { loading && <p className ="animate__animated animate__flash">Loading...</p> }

            <div className = "card-grid">
                    { 
                        images.map( ( img ) => (
                            <GifGridItem 
                                key = { img.id }
                                { ...img }
                            />
                        ))
                    }
            </div>

        </>
    );
}