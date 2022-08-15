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

// function SquareSum(num1, num2, num3){
//     this.num1 = num1;
//     this.num2 = num2;
//     this.num3 = num3;

//     this.squaresum = () =>{
//         return this.num1**2 + this.num2**2 + this.num3**2
//     }
// }

// const sample = new SquareSum(2,3,4);
// console.log(sample.squaresum())

// function Calculator(num1, num2){
//     this.num1 = num1;
//     this.num2 = num2;

//     this.add = () => {
//         return this.num1+this.num2;
//     }
//     this.subtract = () => {
//         return this.num1-this.num2;
//     }
//     this.multiply = () => {
//         return this.num1*this.num2;
//     }
//     this.divide = () => {
//         return this.num1/this.num2;
//     }

// }
// var obj = new Calculator(5,10)
// console.log(obj.add())
// console.log(obj.subtract())
// console.log(obj.multiply())
// console.log(obj.divide())


// function Student(marks1, marks2) {
//     let _marks1 = marks1;
//     let _marks2 = marks2;

//     this.getMarks = function(num){
//         if(num==1){
//             return _marks1;
//         } 
//         else if(num==2){
//             return _marks2;
//         }
//     }
//     this.getTotal = function(){
//         return _marks1+_marks2;
//     }
// }

// let Sid = new Student(90,95);
// console.log(Sid.getMarks(1))
// console.log(Sid.getTotal())

// class Product {
//     constructor(name, price, amount, madeIn){
//         var _name=name;
//         var _price=price;
//         var _amount = amount;
//         var _madeIn=madeIn;

//         this.getName=()=>{
//             console.log(_name);
//         }
//         this.getPrice=()=>{
//             console.log(_price);
//         }
//         this.getAmount=()=>{
//             console.log(_amount);
//         }
//         this.getMadeIn=()=>{
//             console.log(_madeIn);
//         }
//         this.setAmount=(num)=>{
//             _amount=num;
//         }
//         this.canSell=(num)=>{
//             _amount<num?console.log('Cannot Sell'):console.log('Can Sell');
//         }
//         this.sell=(num)=>{
//             if(_amount<num){
//                 _amount+=num*2;

//             }
//             else{
//                 _amount-=num;
//             }
//             console.log(_amount)
//         }

//     }
// }
// var product = new Product('Butter',50,10,'USA')
// product.getName()       
// product.getPrice()  
// product.getAmount() 
// product.getMadeIn() 
// product.canSell(9)  
// product.sell(15)    
// product.sell(8)

// class Product {
//     constructor(name, price, amount, madeIn, expiryDate, brand){
//         this.name=name;
//         this.price=price;
//         this.amount=amount;
//         this.madeIn=madeIn;
//         this.expiryDate=expiryDate;
//         this.brand=brand;
//     }
//     static checkExpiry(product1, product2){
//         let today = new Date()
//         let d1 = today - product1.expiryDate;
//         let d2 = today - product2.expiryDate;
//         let b1=d1>0;
//         let b2=d2>0;
//         if(b1 && !b2){
//             console.log(product1.brand)
//         }
//         else if(!b1 && b2){
//             console.log(product2.brand)

//         }
//         else if(!b1 && b2){
//             console.log(product2.brand)
//         }
//         else if(b1 && b2){
//             if(d1>d2){
//                 console.log(product1.brand)

//             }
//             else if(d1<d2){
//                 console.log(product2.brand)

//             }
//             else if(d1==d2){
//                 console.log(product1.brand, product2.brand)

//             }
//         }
//         else{
//             console.log('neither')
//         }
//     }
// }

// const p1 = newProduct()


// const Person = {
//     name:"Amy",
//     age:28
// }

// const Teacher = {
//     subject:"Maths",
//     grade:8,
// }


// Person.__proto__ = Teacher
// console.log(Person.subject);
// console.log(Person.grade)


function Shape(name, sides){
    this.name=name;
    this.sides=sides;

    this.displayName=function(){
        console.log(this.name)
    }
}

function Triangle(a,b,c, name, sides){
    this.a=a;
    this.b=b;
    this.c=c;
    Shape.call(this, name, sides)
    this.triangleType = ()=>{
        if(this.a===this.b && this.a===this.c && this.b===this.c){
            console.log('Equilateral')
        }
        else if(this.a!==this.b && this.a!==this.c && this.b!==this.c){
            console.log('Scalene')
        }else{
            console.log('Iso')
        }
    }
}

Triangle.prototype=Object.create(Shape.prototype)
Triangle.prototype.constructor = Triangle;
const t1= new Triangle(1,1,1,'T1',3);
const t2= new Triangle(1,2,3,'T2',3);
const t3= new Triangle(1,2,1,'T3',3);

t1.displayName()
t1.triangleType();
t2.triangleType();
t3.triangleType();
