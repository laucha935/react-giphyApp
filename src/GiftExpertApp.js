import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GiftGrid } from './Components/GiftGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
   
    /*const handleAdd = () => {

        //setCategories([...categories, 'HunterXHunter']);
        setCategories( cats => [...cats, 'HunterXHunter']);//En esta parte recibe el cats que es el estado anterior del arreglo, y luego le agrega el nuevo elemento al final
    }
    */

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr></hr>

            
            <ol>
                {
                    categories.map(category => 
                            <GiftGrid 
                                    key = {category}
                                    category={ category} />
                        )
                }
            </ol>
        </div>
    )
}


