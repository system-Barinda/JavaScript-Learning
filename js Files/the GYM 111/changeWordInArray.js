function changeWord(arr, oldword, newWord)
{
    let barinda = arr.map(word => word === oldword ? newWord : word);
    return barinda;
}
let words = ["banana","barinda","system","great","port","togather"];
let updateWord = changeWord(words,"barinda","jeneraly de grand");
console.log(updateWord);
