function addOrRemoveElement(arr) {
    let newArr = [];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            newArr.push(i + 1);
        } else if (arr[i] === "remove") {
            newArr.pop();
        } else if (arr[i] !== "add" && arr[i] !== "remove") {
            console.log(`Тhere is a wrong entry in an element  ${[i + 1]}!`);
        }

    }
    if (newArr.length === 0) {
        console.log(`Field, array has no characters!`);
    } else {
        console.log(newArr.join(` `));
    }
}
addOrRemoveElement(['add', 'add', 'add', 'add', "lallal"]);
addOrRemoveElement(['add', 'add', 'remove', 'add', 'add', `remove`]);
addOrRemoveElement(['remove', 'remove', 'remove']);