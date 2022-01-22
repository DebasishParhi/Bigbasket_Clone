let totalA=JSON.parse(localStorage.getItem("checkoutTotal"))
console.log(totalA)
document.getElementById("Rs3").textContent=`${(totalA.total + 20).toFixed(2)}`


document.getElementById("Rs1").textContent=`${totalA.total}`


let payableAmt=totalA.total+20;
 
//  var totalA=document.getElementById("Rs3").innerText;
document.getElementById("apl_btn").addEventListener("click", apply)
function apply(){
    
    if(document.getElementById("code").value=="flat50"){
        document.getElementById("Rs3").textContent=`${(totalA.total + 20).toFixed(2)/2}`
       // document.getElementById("Rs3").innerText= "Rs "+Math.floor(payableAmt/2) 
       document.getElementById("Rs4").textContent=`${(totalA.total + 20).toFixed(2)/2}`
    }
}

document.getElementById("pay_btn").addEventListener("click", payment)
function payment(){
    window.location.href="payment.html"

}