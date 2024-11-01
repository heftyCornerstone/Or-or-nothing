const descendingSorter = (option, dataToSort) => {
    const sortedData = dataToSort.sort((dataA, dataB) => dataB[option] - dataA[option]);
    return sortedData;
}

export default descendingSorter