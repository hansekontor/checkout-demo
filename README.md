# Checkout Demo

An express server template calling the Cashtab Checkout for Self-Mint SLP Tokens.

## Installation

### Requirements

* [Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Getting Started

In the root directory of this project (the directory containing this README file) run

```bash
yarn install
```

This will install the required modules. Then create a new .env file by running

```bash
cp sample_env .env
```
Change the values in the .env file to reflect your settings.

To start the application (in developer mode) using nodemon run

```bash
sudo npm start
```

To start the application as a standalone daemon, run 

```bash
sudo node ./bin/www
```

## Checkout Documentation

To use the Checkout, include 

```html
<script type="text/javascript" src="https://dev.cert.cash:8000/checkout-v0.1.js"></script>
```
in your html file. That enables you to call the Checkout component and render it based on a paymentUrl. In the following example this paymentUrl is requested before rendering the Checkout popup with this paymentUrl as a parameter. It can be found [here](https://github.com/hansekontor/checkout-demo/blob/main/html/checkout.html).

```js
document.querySelector('#checkout-url').addEventListener('click', function () {
    const params = {
    merchant_name: "Zoid Checkout Merchant",
    merchant_addr: "ecash:qq20ufx3rr00ej96xa2egwggrj7247stxq0awklt2w",
    amount: 4,   
    //offer_name: "OfferName",
    //offer_description: "OfferDescription",
    return_json: true       
    };
    
    fetch("https://relay1.cmpct.org/v2?" + new URLSearchParams(params))
    .then(res => res.json())
    .then(function(data) {
        document.getElementById("paymentUrl").innerText = data.paymentUrl;

        // Render the component
        Checkout({ 
        paymentUrl: data.paymentUrl,
        onSuccess: function(link) {
            console.log("Success, link:", link);
            document.getElementById("result").innerHTML = `Payment successful, <a href="${link}" target="_blank">click here to see transaction</a>`;
        },
        onCancel: function() {
            console.log("payment canceled");
            document.getElementById("result").innerHTML = "Payment has been canceled";
        }
        }).render('');

    });
    });```