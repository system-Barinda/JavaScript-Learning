function hero(bullets,dragons){
   return  bullets >= dragons * 2 ? true : false;
}
console.log(hero(10, 5));