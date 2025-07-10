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
function desplay(){
    let items = this.data[0];
    console.log(` the product names :${items.product_name} \n` +
        ` the product quantity:${items.product_quantity} \n`+
        `the product price : ${items.product_price} \n`+
        `the product total:${items.product_total()}`
    );
}
desplay.call(stock);