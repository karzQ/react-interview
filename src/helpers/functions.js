export const removeDuplicatedData = (arr) => {
    const newArr = [];
    let currentItem = undefined;
    let id = 0;

    arr.forEach((item) => {
        if (!newArr.find((el) => el.title === item.title)) {
            newArr.push({ ...item, id: id.toString() });
        } else {
            currentItem = newArr[newArr.indexOf(newArr.find((el) => el.title === item.title))]
            currentItem.likes += item.likes
            currentItem.dislikes += item.dislikes
        }
        id++;
    })

    return newArr;
}