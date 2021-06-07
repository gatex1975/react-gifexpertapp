import React, { useState } from 'react';
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    /*
    const handleAdd = () => {
            //Agregar al final
            //setCategories([...categories, 'HunterXHunter']); 

            //Agregar al inicio
            //setCategories(['HunterXHunter',...categories]); 

            //Otra manera de modificar el state
            setCategories( cat => [...cat, 'HunterXHunter'] );
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories = { setCategories } />
            <hr />

            { 
            //<button onClick={ handleAdd }>Agregar</button> 
            }

            <ol>
                { 
                    categories.map( ( category ) =>                                     
                                    /*<li key={ category }>{ category }</li>*/    
                                    <GifGrid 
                                        key = { category } 
                                        category = { category }
                                    />
                                  )
                }
            </ol>

        </>
    );
}