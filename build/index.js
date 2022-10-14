//all the dimensions have been defined

let boxesUsed,
    priceComp,
    priceOfTile,
    priceDelivery,
    orderCost,
    orderNumber,
    orderConfirm,
    cumulativePrice = 0,
    priceTotal,
    w,
    l;

let userForm,
  userData = [];
  var length=parseInt
  var width=parseInt
  var area =(length*width)
  
// Function to find number of boxes based on area
button.onClick = function noOfBoxes() {
  if (document.getElementById("floor").value == "30 by 30") {
    boxesUsed= Math.floor(area()/1.53);
  } else if (document.getElementById("floor").value == "40 by 40") {
    boxesUsed = Math.floor(area()/1.92);}
    else if (document.getElementById("floor").value == "50 by 50") {
        boxesUsed = Math.floor(area()/1.75);}

    else if (document.getElementById("floor").value == "60 by 60") {
        boxesUsed = Math.floor(area()/1.44);
  } 
  else if (document.getElementById("floor").value == "60 by 30") {
    boxesUsed = Math.floor(area()/1.44);}
    else if (document.getElementById("wall").value == "25 by 40") {
        boxesUsed = Math.floor(area()/1.5);}

  else {
    boxesUsed=Math.floor(area()/1.5)
  return boxesUsed;
}}

// Function to find  Price of complementaries
function compPrice () {
  if (document.getElementById("comp").value == "grout") {
    priceComp = 100;
  } else if (document.getElementById("comp").value == "tileadh") {
    priceComp = 650;
  } else if (document.getElementById("comp").value == "Cornerstrips") {
    priceComp = 100;
  }  else {
    priceComp= 200;
  }
  return priceComp;
}

// Function for the price ofbtilemultripied by the number of boxes
function tilePrice() {
    noOfBoxes()
  if (document.getElementById("floor").value == "30by30") {
    priceOfTile = 820*boxesUsed;
  } else if (document.getElementById("floor").value == "40 by 40") {
    priceOfTile = 1200*boxesUsed;
  } 
  else if (document.getElementById("floor").value == "50 by 50") {
    priceOfTile = 1800*boxesUsed;
  }
  else if (document.getElementById("floor").value == "60 by 60") {
    priceOfTile = 2000*boxesUsed;
  }
  else if (document.getElementById("floor").value == "60 by 30") {
    priceOfTile = 1200*boxesUsed;
  }
  else if (document.getElementById("wall").value == "40 by 25") {
    priceOfTile = 800*boxesUsed;
  }
  else {
    priceOfTile= 810*boxesUsed
  }
  return priceOfTile
  
}

// Fuction for Delivery Price
function deliveryPrice() {
  if (document.getElementById("del").value == "kajiado") {
    priceDelivery = 0;
  } else if (document.getElementById("del").value == "bluesky") {
    priceDelivery = 1000;
  } else if (document.getElementById("del").value == "Shapashina") {
    priceDelivery = 1000;
  } else if (document.getElementById("del").value == "Ilbissil") {
    priceDelivery = 3000;
  } else if (document.getElementById("del").value == "Namanga") {
    priceDelivery = 7000;
  } else if ((document.getElementById("del").value = "Isinya")) {
    priceDelivery = 2000;
  } else if (document.getElementById("del").value == "Mashuru") {
    priceDelivery = 3000;
  } else {
    priceDelivery = 1500;
  }
  return priceDelivery;
}

//  Function to calculate the order price
function orderPrice() {
  noOfBoxes();
  compPrice();
  tilePrice();
  orderCost = compPrice + tilePrice
  userForm = {
    floor: document.getElementById("floor").value,
    comp: document.getElementById("comp").value,
    wall: document.getElementById("wall").value
  };
  userData = Object.values(userForm);
  alert(
    "You have picked a " +
      userForm.floor +
      " " +
      userForm.comp +
      " " +
      userForm.wall +
      " Hi, The total charge for your tiles is " +
      orderCost
  );
  cumulativePrice += orderCost;
  alert("The total cost for your tile(s) order is Kshs. " + cumulativePrice);
  console.log(cumulativePrice);
  let priceConfirm = confirm("Do you want to make another order?");
  document.getElementById("form").reset();
  if (priceConfirm == true) {
    document.getElementById("form").reset();
  } else {
    orderConfirm = confirm("Do you want your Order Delivered?");
    if (orderConfirm == true) {
      // jQuery to display Delivery option
      $(document).ready(function () {
        $("#form-s").hide(function () {
          $("#form1-h").show();
        });
      });
    } else {
      document.getElementById("form").reset();
      history.go();
      alert("Your order is ready for pick up from our location");
    }
  }
}

// Function to calculate the total price
function totalOrderPrice() {
  deliveryPrice();

  priceTotal = cumulativePrice + priceDelivery; //Calculate order cost plus delivery
  let finalOrder = " ";
  userData.forEach(orderDetails);
  function orderDetails(value, index, array){
    finalOrder += value + " "
    console.log(finalOrder)
  }
  alert(
    "The total charge for your ordered tiles  " +
      finalOrder +
      " and its delivery cost is " +
      priceTotal
  );

  document.getElementsByTagName("form").reset();
  history.go();
  alert("Your order will be delivered at your location");
}
function myFuction(){
  var element = document.getElementById('form-s');
  element.classList.toggle('')
}
