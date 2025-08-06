// function likes(names) {
//     const len = names.length;
//     if(len == 4){
       
//           console.log(`${names[0]} , ${names[1]} and ${len / 2} others likes this`)
//     }
//     else if( len == 3){
//        console.log(`${names[0]} , ${names[1]} and ${names[2]}  likes this`) 
//     }
//     else if( len == 2){
//         console.log(`${names[0]} and  ${names[1]}  likes this`) 
//     }
//     else if(len == 1){
//         console.log(`${names[0]}  likes this`) 
//     }
//     else{
//         console.log(`no one likes this`) 
//     }
// }
// let b = ['Alex', 'Jacob', 'Mark','Max'];
// likes(b);

function likes(names) {
  const count = names.length;

  switch (count) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
  }
}
let b = ['Alex', 'Jacob', 'Mark','Max','barinda'];
console.log(likes(b))
