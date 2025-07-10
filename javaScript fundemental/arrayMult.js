// let matrix = [
//     [5,20,3],
//     [4,5,6],
//     [6,7,8],
// ];
// matrix.push([20,40,50]);
// function barinda(value){
//     return value.map(([a,b,c]) => a > 4 && b > 10 ? "good":"west");
// }
// console.log(matrix);
// console.log(barinda(matrix));

let rows = 10;
let cols = 10;
let minRows = 10;
let grid = [];
for( let i = 0; i < rows; i++){
      grid[i] = []
    for(let j = 0; j < cols; j++){
        grid[i][j] = i + 1;
        for( var s = 0 ; s < minRows; s++){
            grid[i][j][s] = i + j + s;
        }
    }

}
console.table(grid);