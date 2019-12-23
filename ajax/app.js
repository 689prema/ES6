// document.getElementById("button").addEventListener("click", loadData);

// function loadData() {
//   //Create an XHR Object
//   const xhr = new XMLHttpRequest();

//   //OPEN
//   xhr.open("GET", "data.txt", true);

//   xhr.onload = function() {
//     console.log("READYSTATE", xhr.readyState);
//     if (this.status === 200) {
//       // console.log(this.responseText);
//       document.getElementById(
//         "output"
//       ).innerHTML = `<h1>${this.responseText}</h1>`;
//     }
//   };

//   xhr.send();
// }

document.getElementById("button1").addEventListener("click", loadCustomer);

function loadCustomer(e) {
  //Create an XHR Object
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    console.log("READYSTATE", xhr.readyState);
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);

      const output = `
         <ul>
            <li>ID:${customer.id}</li>
            <li>ID:${customer.name}</li>
            <li>ID:${customer.company}</li>
            <li>ID:${customer.phone}</li>

         </ul>
      `;

      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

document.getElementById("button2").addEventListener("click", loadCustomers);

function loadCustomers(e) {
  //Create an XHR Object
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open("GET", "customers.json", true);

  xhr.onload = function() {
    console.log("READYSTATE", xhr.readyState);
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);

      let output = "";

      customers.forEach(function(customer) {
        output += `
         <ul>
            <li>ID:${customer.id}</li>
            <li>ID:${customer.name}</li>
            <li>ID:${customer.company}</li>
            <li>ID:${customer.phone}</li>

         </ul>
      `;
      });
      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
