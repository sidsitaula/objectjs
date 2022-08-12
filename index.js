let product = {
    name:"Cheese",
    price:20,
    amount:10,
    madeIn:"USA",
    display(){
        console.log(`Name: ${this.name}`)
    },
    totalBill(){
        return this.price*this.amount;
    }
}

product.display()

function set(){
    for(key in product){
        if(key==='name'){
            product.name="Bottle";
        }
        else if(key=='madeIn'){
            product.madeIn="China"
        }
    }
}

set();
product.display()
console.log(product.totalBill());
