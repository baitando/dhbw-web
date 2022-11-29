function run() {
    const datesAsStrings = [
        "01.11.2022",
        "13.10.2022",
        "20.11.2022"
    ];

    const dates = convertDates(datesAsStrings);
    console.log("Dates:");
    console.log(dates);
    console.log("Newest date: " + getNewestDate(dates));

    const sortedDates = sortDates(dates);
    console.log("Sorted dates:");
    console.log(sortedDates);
}

function convertDates(datesAsStrings) {
    const dates = [];
    for (const dateAsString of datesAsStrings) {
        const parts = dateAsString.split(".");
        const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
        dates.push(date);
    }
    return dates;
}

function getNewestDate(dates) {
    let newestDate;
    for (const date of dates) {
        if (!newestDate || date > newestDate) {
            newestDate = date;
        }
    }
    return newestDate;
}

function sortDates(dates) {
    return dates.sort((date1, date2) => date1 - date2);
}