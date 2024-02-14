import { useState } from "react";
import ListItems from "./ListItems.jsx";

function List() {

    const [list, setList] = useState(["item 1", "item 2", "item 3"]);

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