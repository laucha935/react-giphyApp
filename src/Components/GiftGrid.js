import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';
//import { getGifs } from '../helpers/getGifts';

export const GiftGrid = ( {category}) => {

   

    const {data, loading} = useFetchGifs( category );


    

    return (

        <>
        <h3>{category}</h3>
        
        {loading ? <p>Loading</p>: null}
            
        <div className="card-grid">
            
            {  
                data.map(img=>(
                       
                      <GiftGridItem 
                            key = {img.id}
                            {...img}
                      
                      />
                    
                 ) )

                
                }
            
        </div>
    
    
        
        </>
    )
}
