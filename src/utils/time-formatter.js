function formatDateTime(dateString, format = 'YYYY-MM-DD') {
    const date = new Date(dateString);
    switch (format) {
        case 'MM-DD HH:mm':
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${month}-${day} ${hours}:${minutes}`;

        case 'YYYY-MM-DD HH:mm:ss':
            const year = date.getFullYear();
            const month2 = String(date.getMonth() + 1).padStart(2, '0');
            const day2 = String(date.getDate()).padStart(2, '0');
            const hours2 = String(date.getHours()).padStart(2, '0');
            const minutes2 = String(date.getMinutes()).padStart(2, '0');
            const seconds2 = String(date.getSeconds()).padStart(2, '0');
            return `${year}-${month2}-${day2} ${hours2}:${minutes2}:${seconds2}`;

        case 'YYYY-MM-DD':
            const year2 = date.getFullYear();
            const month3 = String(date.getMonth() + 1).padStart(2, '0');
            const day3 = String(date.getDate()).padStart(2, '0');

            return `${year2}-${month3}-${day3}`;

        case 'HH:mm:ss':
            const hours4 = String(date.getHours()).padStart(2, '0');
            const minutes4 = String(date.getMinutes()).padStart(2, '0');
            const seconds4 = String(date.getSeconds()).padStart(2, '0');
            console.log('`${hours4}:${minutes4}:${seconds4}`: ', `${hours4}:${minutes4}:${seconds4}`);
            return `${hours4}:${minutes4}:${seconds4}`;

        case 'YYYY-MM-DD HH:mm':
            const year5 = date.getFullYear();
            const month5 = String(date.getMonth() + 1).padStart(2, '0');
            const day5 = String(date.getDate()).padStart(2, '0');
            const hours5 = String(date.getHours()).padStart(2, '0');
            const minutes5 = String(date.getMinutes()).padStart(2, '0');
            return `${year5}-${month5}-${day5} ${hours5}:${minutes5}`;
        default:
            break;
    }
}

export default formatDateTime;
