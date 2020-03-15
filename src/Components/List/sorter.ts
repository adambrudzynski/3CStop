
export const sorter = (a: Object | any, b: Object | any) => {
    const stopNameA = a.stopDesc.toUpperCase();
    const stopNameB = b.stopDesc.toUpperCase();
    let comparison = 0;
    if (stopNameA > stopNameB) {
        comparison = 1;
    } else if (stopNameA < stopNameB) {
        comparison = -1;
    }
    return comparison;
}

