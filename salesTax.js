var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var totalSales = [];
  var taxPaid = [];
  var final = { };



  for (var n in companySalesData) {
    if (totalSales[n] === undefined) {
      totalSales[n] = 0;
    }
    if (taxPaid[n] === undefined) {
      taxPaid[n] = 0;
    }
    for (var i = 0; i < companySalesData[n].sales.length; i++) {
      totalSales[n] += companySalesData[n].sales[i];

    }

    var currentCompany = companySalesData[n].name;
    var companyObj = {
      totalSales: 0,
      totalTaxes: 0,
    };

    for (var x = 0; x < taxPaid.length; x++ ) {
      taxPaid[x] = salesTaxRates[companySalesData[x].province] * totalSales[x];
    }


    if (final[currentCompany] !== undefined) {
      final[currentCompany]['totalSales'] += totalSales[n];
      final[currentCompany]['totalTaxes'] += taxPaid[n];
    } else {
        final[currentCompany] = companyObj;
        final[currentCompany]['totalSales'] = totalSales[n];
        final[currentCompany]['totalTaxes'] = taxPaid[n];
    }
  }


  console.log(totalSales);
  console.log(taxPaid);
  console.log(final);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);



// Add all the sales of a company+province together
//    Add all Sales together for each of companySalesData[1,2,3]
//    loop through companySalesData[i].sales and add all numbers of array together in new variable
//
//    return that value to a new object called Telus and Bombardier with key "totalSales"
// multiply those answers by the appropriate tax rates
// return that value to a Telus and Bombardier with key "totalTaxes"