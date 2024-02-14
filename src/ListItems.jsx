import React from 'react';

function ListItems({item}) {

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

    function formatDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // starts from 0
        const day = date.getDate();

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return `${year}-${month}-${day} ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }

    // Add a leading zero to single digit numbers
    // write this comment as javascript documentation
    /**
     * Add a leading zero to single digit numbers
     * @param {number} number - The number to pad
     * @returns {string} The padded number
     */
    function padZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    return(
        <li>{renderItem(item)}</li>
    )
}

export default ListItems;