import { useState } from "react";
import ListItems from "./ListItems.jsx";

function List() {

    const [list, setList] = useState([
        'item',
        6,
        new Date(2000, 0, 1, 12, 0, 0),
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