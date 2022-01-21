
// adding nav bar in cart page
import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
document.getElementById("navBar").innerHTML=navbar();
// adding footer page 
document.getElementById("footer").innerHTML=footer();

  let checkoutButton=document.querySelector("#checkoutButtonDiv>button");
   checkoutButton.addEventListener("click",()=>{
       window.location.href="./checkout.html";
   })
   let continueBtn=document.getElementById("continueShopBtn");
   continueBtn.addEventListener("click",()=>{
       window.location.href="./index.html";
   })

    var storeData= JSON.parse(localStorage.getItem("bigbasket"))
    let parent= document.getElementById("cartItems");
    let total=0;
    function showData(data){
        parent.innerHTML="";
        data.map((elem,index)=>{
        let childDiv= document.createElement("div");
        childDiv.setAttribute("class","childDiv");
        let leftCDiv= document.createElement("div");
         leftCDiv.setAttribute("class","leftC");

         let leftItemDiv= document.createElement("div");
         leftItemDiv.setAttribute("class","leftItem");
         let brandName=document.createElement("h5");
         brandName.textContent="FRESHO";
         let title=document.createElement("p");
          title.textContent=elem.name;
          leftItemDiv.append(brandName,title);
        //  right item div
        let rightItemDiv= document.createElement("div");
         rightItemDiv.setAttribute("class","rightItem");
         let unitPrice= document.createElement("p");
        unitPrice.setAttribute("class","unitPrice");
         unitPrice.textContent="Rs"+elem.price;
         // button div
         let buttonDiv=document.createElement("div");
         buttonDiv.setAttribute("class","quantityBtnDiv");
         let plusButton=document.createElement("button");
         plusButton.setAttribute("class","increase");
         plusButton.textContent="+";
         let valueButton=document.createElement("button");
         valueButton.setAttribute("class","showQuantity");
         valueButton.textContent=1;
         let minusButton=document.createElement("button");
         minusButton.setAttribute("class","decrease");
         minusButton.textContent="-";
         buttonDiv.append(plusButton,valueButton,minusButton);

         let priceDeleteDiv=document.createElement("div");
         priceDeleteDiv.setAttribute("class","priceAndDeleteDiv");
         let subTotalPrice= document.createElement("p");
          subTotalPrice.setAttribute("class","subTotalPrice");
         subTotalPrice.textContent="Rs "+elem.price;
        //    delete icon div
         let deleteIconDiv=document.createElement("div");
          deleteIconDiv.setAttribute("class","deleteIcon");
          let icon=document.createElement("i");
          icon.setAttribute("class","fas fa-times");
          icon.addEventListener("click",()=>{
              deleteItem(index);
          })
          deleteIconDiv.append(icon);
          priceDeleteDiv.append(subTotalPrice,deleteIconDiv);
          rightItemDiv.append(unitPrice,buttonDiv,priceDeleteDiv)
          leftCDiv.append(leftItemDiv,rightItemDiv);
           
           let rightCDiv=document.createElement("div");
            rightCDiv.setAttribute("class","rightC");
            let savedPrice=document.createElement("p");
            savedPrice.textContent="Rs 00.00";
            rightCDiv.append(savedPrice);
            childDiv.append(leftCDiv,rightCDiv);
                total+=elem.price;
                parent.append(childDiv)
    })
    }
    showData(storeData);
    
    if(storeData.length>0){
        document.getElementById("topTotal").textContent=`Your Basket (${storeData.length} items)`;
        document.getElementById("itemAmount").textContent=`Rs ${total.toFixed(2)}`;
        // setting the total amount in local storage
        let totalCost={
             total:total
        }
        localStorage.setItem("checkoutTotal",JSON.stringify(totalCost));
        document.getElementById("totalDivPrice").textContent=`Rs ${total.toFixed(2)}`;
        document.getElementById("subTotalPrice").textContent=`Rs ${total.toFixed(2)}`;
        document.getElementById("cuponTotal").textContent=`* For this order: Accepted food coupon is Rs.${total}`;
        document.getElementById("itemCount").textContent=`${storeData.length} items`;
        document.getElementById("itemCountNav").textContent=`${storeData.length} items`;
    }
    else{
        document.getElementById("topTotal").textContent=`There are no items in your basket.`;
        document.getElementById("itemCount").textContent=` 0 items`;
    }

    

    function  deleteItem(index){
        let newPrice=0;
        storeData.splice(index,1);
        localStorage.setItem("bigbasket",JSON.stringify(storeData));
         storeData.map((elem)=>{
             newPrice+=elem.price;
         })
         // setting the total amount in local storage
        let totalCost={
             total:newPrice
        }
         // setting total updated amount in localStorage
         localStorage.setItem("checkoutTotal",JSON.stringify(totalCost));
        document.getElementById("topTotal").textContent=`Your Basket (${storeData.length} items)`;
        document.getElementById("itemAmount").textContent=`Rs ${newPrice.toFixed(2)}`;
        document.getElementById("totalDivPrice").textContent=`Rs ${newPrice.toFixed(2)}`;
        document.getElementById("subTotalPrice").textContent=`Rs ${newPrice.toFixed(2)}`;
        document.getElementById("cuponTotal").textContent=`* For this order: Accepted food coupon is Rs.${newPrice.toFixed(2)}`;
        document.getElementById("itemCount").textContent=`${storeData.length} items`;
        document.getElementById("itemCountNav").textContent=`${storeData.length} items`;
        showData(storeData);
    
    }


    let emptyButton=document.getElementById("emptyButton");
    emptyButton.addEventListener("click",emptyCart);

    function emptyCart(){
    
       if(confirm("Are you sure you want to remove all items from your basket?")){
        storeData.splice(0);
        localStorage.setItem("bigbasket",JSON.stringify(storeData));
        // setting the total amount in local storage
        let totalCost={
            total:0
        }
         // setting total updated amount in localStorage
         localStorage.setItem("checkoutTotal",JSON.stringify(totalCost));
        document.getElementById("topTotal").textContent=`There are no items in your basket.`;
        document.getElementById("itemCount").textContent=` 0 items`;
        document.getElementById("itemCountNav").textContent=`0 items`;
        document.getElementById("itemAmount").textContent=`Rs 00.00`;
        document.getElementById("totalDivPrice").textContent=`Rs 00.00`;
        document.getElementById("subTotalPrice").textContent=`Rs 00.00`;
        document.getElementById("cuponTotal").textContent=`* For this order: Accepted food coupon is Rs 00.00`;
        showData(storeData);
       }
    }
    console.log(total)