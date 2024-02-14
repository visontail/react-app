import { useState } from "react";
import ListItems from "./ListItems.jsx";
import './List.css';

function List() {

    const [list, setList] = useState([
        'item',
        6,
        new Date(),
        <span key="react-element">React Element Item</span>,
    ]);

    return(
        <div className="list-container">
            <h2>List of items:</h2>
            <div className="list">
                {list.map((item, index) => {
                    return <ListItems key={index} item={item} />
                })}
            </div>
        </div>
    )
}

export default List;