function filterArray(arr, testCallback)
{
    const result = [];
    for(let i =0; i < arr.length; i++)
    {
        if(testCallback(arr[i],i,arr))
        {
            result.push(arr[i]);
        }
    }
  return result
}
function isEven(num) {
    return num % 2 === 0;
  }
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log(filterArray(numbers, isEven));  