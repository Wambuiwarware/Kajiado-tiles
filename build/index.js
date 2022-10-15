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
    w = parseInt(),
    l = parseInt(),
    area;

let userForm,
  userData = [];
  
  
// Function to find number of boxes based on area
 function noOfBoxes() {
  var w = prompt("what is the length of your room?")
   var l =prompt("What is the width of your room?")
  area = l*w;
  if (document.getElementById("floor").value == "30 by 30") {
    boxesUsed= Math.floor(area/1.53);
  } else if (document.getElementById("floor").value == "40 by 40") {
    boxesUsed = Math.floor(area/1.92);}
    else if (document.getElementById("floor").value == "50 by 50") {
        boxesUsed = Math.floor(area/1.75);}

    else if (document.getElementById("floor").value == "60 by 60") {
        boxesUsed = Math.floor(area/1.44);
  } 
  else if (document.getElementById("floor").value == "60 by 30") {
    boxesUsed = Math.floor(area/1.44);}
    else if (document.getElementById("wall").value == "25 by 40") {
        boxesUsed = Math.floor(area/1.5);}

  else {
    boxesUsed=Math.floor(area/1.5)
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

// Function for the price ofbtilemultiplied by the number of boxes
function tilePrice() {
    noOfBoxes()
  if (document.getElementById("form").value == "30by30") {
    priceOfTile = 820*boxesUsed;
  } else if (document.getElementById("form").value == "40by40") {
    priceOfTile = 1200*boxesUsed;
  } 
  else if (document.getElementById("form").value == "50by50") {
    priceOfTile = 1800*boxesUsed;
  }
  else if (document.getElementById("form").value == "60by60") {
    priceOfTile = 2000*boxesUsed;
  }
  else if (document.getElementById("form").value == "60by30") {
    priceOfTile = 1200*boxesUsed;
  }
  else if (document.getElementById("form").value == "40by25") {
    priceOfTile = 800*boxesUsed;
  }
  else if (document.getElementById("form").value == "30by20") {
    priceOfTile = 800*boxesUsed;
  }
  else {
    priceOfTile= 810*boxesUsed
  }
  return priceOfTile
  
}

// Fuction for Delivery Price
function deliveryPrice() {
  if (document.getElementById("dprice").value == "kajiado") {
    priceDelivery = 0;
  } else if (document.getElementById("dprice").value == "bluesky") {
    priceDelivery = 1000;
  } else if (document.getElementById("dprice").value == "Shapashina") {
    priceDelivery = 1000;
  } else if (document.getElementById("dprice").value == "Ilbissil") {
    priceDelivery = 3000;
  } else if (document.getElementById("dprice").value == "Namanga") {
    priceDelivery = 7000;
  } else if (document.getElementById("dprice").value = "Isinya") {
    priceDelivery = 2000;
  } else if (document.getElementById("dprice").value == "Mashuru") {
    priceDelivery = 3000;
  } else {
    priceDelivery = 1500;
  }
  return priceDelivery;
}

//  Function to calculate the order price
function orderPrice() {
  compPrice();
  tilePrice();
  orderCost = priceComp + priceOfTile
  userForm = {
    floor: document.getElementById("forms").value,
    comp: document.getElementById("comp").value,
  };
  userData = Object.values(userForm);
  alert(
    "You have picked a " +
      userForm.form +
      " " +
      userForm.comp +
      " " +
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

  document.getElementsByid("form").reset();
  history.go();
  alert("Your order will be delivered at your location");
}

var mpesa = require('mpesa-api')
 
mpesa.config({
  environment: 'production', // default is sandbox
    // when using production make sure you have your app credentials handy
  consumerKey: 'your-app-consumer-key',
  consumerSecret: 'your-app-consumer-secret',
  shortCode: 'your-shortcode',
  initiatorName: 'your-initiator-name',
  lipaNaMpesaShortcode: 'your-lipa-na-mpesa-shortcode',
  lipaNaMpesaPasskey: 'your-lipa-na-mpesa-passkey',
  securityCredential: 'your-security-credential'
})
 
// use the library as normal
mpesa. LipaNaMpesaOnline(options, function (error, response) {
  if (error) {
    // handle error here
  } else {
    // handle success
  }
})
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || process.env.APP_PORT;

//app configurations
app.use(express.json());

app.use(express.urlencoded({extended:false}));

//route.
const mpesa = require('./routes/index');

//listening to a specific route
app.use('/mpesa',mpesa);


//listening to a port.

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
});