import React from 'react';

function ListItems({item}) {

    /**
     * Render an item based on its type
     * @param {string|number|Date|ReactElement}
     * @returns {string|number|ReactElement} The rendered item
     * @throws {Error} If the item is not a string, number, date, or React element
    */
    function renderItem(item) {
        if (typeof item === 'string' || typeof item === 'number') {
            return item;
        } else if (item instanceof Date) {
            return formatDate(item);
        } else if (React.isValidElement(item)) {
            return item;
        } else {
            return 'Invalid item';
        }
    }

    /**
     * Format a date as a string
     * @param {Date} date - The date to format
     * @returns {string} The formatted date
     */
    function formatDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // starts from 0
        const day = date.getDate();

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return `${year}-${month}-${day} ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }

    /**
     * Add a leading zero to single digit numbers
     * @param {number} number - The number to pad
     * @returns {string|number} The padded number
     */
    function padZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    return(
        <li>{renderItem(item)}</li>
    )
}

export default ListItems;