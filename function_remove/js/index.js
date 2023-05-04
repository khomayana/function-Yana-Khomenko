removeElement = (array = [1, 2, 3, 4, 5, 6, 7], value = 5) => {
    let index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}
console.log(removeElement())