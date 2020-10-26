export const sortData = (data) => {
    // *copying the array
    const newArray = [...data];
    newArray.sort((a, b) => {
        if (a.cases > b.cases) {
            return -1;
        } else if (a.cases === b.cases) {
            return 0;
        } else {
            return 1;
        }
    });
    return newArray;
};