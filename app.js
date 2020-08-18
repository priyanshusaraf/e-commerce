let billingInput = [];
let paymentInput = [];
const addInput = function (ev)  {
    ev.preventDefault();
    // billing object
    const billing = {
        name = document.getElementById('fname').value,
        email = document.getElementById('email').value,
        adress = document.getElementById('adr').value,
        name = document.getElementById('city').value        
    };
    // payment object
    const payment = {
        cardHolderName = document.getElementById('cname').value,
        creditNumber = document.getElementById('ccnum').value,
        creditExpYear= document.getElementById('expyear').value,
        cardExpMonth = document.getElementById('expmonth').value,
        cardCVV = document.getElementById('cvv').value   
    };
    // saving the value of the billing object in the list "billingInput"
    billingInput.push(billing); 
    // saving the value of the payment object in the list "paymentInput"  
    paymentInput.push(payment);
}
// logging the value of the lists in the console
console.log(billingInput);
console.log(paymentInput);
// telling the computer to perform a specific task on the click of the button using the addEventListener function
document.addEventListener('DOMcontentloaded', function(){
    document.getElementById('button').addEventListener('click', addInput);
})