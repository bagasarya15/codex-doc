const sayHello = (message='Halo')=> {
    console.log(message);
}
sayHello();

const sayHello2 = (message='Halo')=> {
    message=message!=undefined?message:"Hi Javascript"
    console.log(message);
}
sayHello2("Hi");

let price = 100
function applyDiscount(price, discount = 0.05){
    return price * (1 - discount);
}