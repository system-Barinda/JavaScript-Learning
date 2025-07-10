let savingBack = {
    acountBack : 1000,
    deposit: function addMoney(amount){
        if(amount > 0 ){
            this.acountBack += amount;
        }
    },
    withdrow: function removeMoney(amount){
        let checkBalance = this.acountBack - amount;
        if(amount > 0  && checkBalance > 0){
            this.acountBack -= amount
        }
    },

}
savingBack.deposit(2000);
savingBack.withdrow(500);
console.log(savingBack.acountBack);
