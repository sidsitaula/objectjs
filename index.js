// let product = {
//     name:"Cheese",
//     price:20,
//     amount:10,
//     madeIn:"USA",
//     display(){
//         console.log(`Name: ${this.name}`)
//     },
//     totalBill(){
//         return this.price*this.amount;
//     },
//     set pprice(p){
//         this.price=0.9*p;
//     }
// }

// product.display()

// function set(){
//     for(key in product){
//         if(key==='name'){
//             product.name="Bottle";
//         }
//         else if(key=='madeIn'){
//             product.madeIn="China"
//         }
//     }
// }

// set();
// product.display()
// console.log(product.totalBill());

// product.pprice = 10;
// console.log(product.totalBill());

function SquareSum(num1, num2, num3){
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;

    this.squaresum = () =>{
        return this.num1**2 + this.num2**2 + this.num3**2
    }
}

const sample = new SquareSum(2,3,4);
console.log(sample.squaresum())