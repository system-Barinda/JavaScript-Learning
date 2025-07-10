let stock = {
    data : [
        {
            product_name:"maize",
            product_quantity:10,
            product_price:1000,
            product_total:function(){
                return this.product_price * this.product_quantity;
            },

        },
    ],
};

function addNewProduct(name,quant,price){
    stock.data.push({
       product_name:name,
       product_quantity:quant,
       product_price:price,
       product_total:function(){
        return this.product_price * this.product_quantity;
       }
    });
}
addNewProduct("banana",5,2000);
addNewProduct("rice",10,1500);


function desplayAllData(){
    stock.data.forEach((items,index) => {
        console.log(`\n the product ${index + 1}`);
        console.log(`...................................`);
        console.log(`name   : ${items.product_name}`);
        console.log(`quantity   : ${items.product_quantity}`);
        console.log(`price   : ${items.product_price}`);
        console.log(`total   : ${items.product_total()}`);
    })
}


desplayAllData();