function dateFormat(dateInput) {
    const date = new Date(dateInput)
    let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let formattedDate = `${months[date.getMonth()]}/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
}

export const timeAgo = (dateParam) => {
    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const today = new Date();
    const thisYear = today.getFullYear()
    const diffYear = date.getFullYear();
    const yearsDiff = thisYear - diffYear;
    const isMoreThanAYear = diffYear < thisYear;  
    
    if (isMoreThanAYear) {
        return `${yearsDiff} years ago`
    }
}


export default dateFormat
