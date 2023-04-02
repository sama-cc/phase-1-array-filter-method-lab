// Code your solution here
const findMatching = (collection, name) => {
    let nameMatch = collection.filter(search => search.toLowerCase() === name.toLowerCase());
    return nameMatch;
}

const fuzzyMatch = (collection, twoLetters) => {
    let fuzzyNameMatch = collection.filter(search => (search.split("")[0] && search.split("")[1]) === (twoLetters.split("")[0] && twoLetters.split("")[1]));
    return fuzzyNameMatch;
}

const matchName = (collection, driver) => {
    let driverHomeMatch = collection.filter(search => search.name === driver);
    return driverHomeMatch;
}