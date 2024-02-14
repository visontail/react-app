import { useState } from "react";
import ListItems from "./ListItems.jsx";

function List() {

    const [list, setList] = useState([
        'item',
        6,
        new Date(),
        <span key="react-element">React Element Item</span>,
    ]);

    return(
        <div className="list-container">
            <ul>
                {list.map((item, index) => {
                    return <ListItems key={index} item={item} />
                })}
            </ul>
        </div>
    )
}

export default List;