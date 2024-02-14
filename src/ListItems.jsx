import { useState, useEffect } from 'react';
import './ListItems.css';

function ListItems({item}) {

    const [isSelected, setIsSelected] = useState(false);

    function handleSelected() {
        setIsSelected(!isSelected);
        setTimeout(() => {
            setIsSelected(false);
        }, 1000);
    }

    return(
        <p className={isSelected ? 'list-item-selected' : 'list-item'}
            onClick={handleSelected}>
            {item}
        </p>
    )
}

export default ListItems;