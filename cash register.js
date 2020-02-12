//JavaScript Algorithms and Data Structures Projects: Cash Register

var denominations = [
{name: 'ONE HUNDRED', value:100.00},
{name: 'TWENTY', value:20.00},
{name: 'TEN', value:10.00},
{name: 'FIVE', value:5.00},
{name: 'DOLLAR', value:1.00},
{name: 'QUARTER', value:0.25},
{name: 'DIME', value:0.10},
{name: 'NICKEL', value:0.05},
{name: 'PENNY', value:0.01}
];


function checkCashRegister(price, cash, cid) {
  var output = {status:null, change:[]};
  var change = cash - price; // what we owe to the customer
  cid = cid.reverse();  //Because they ask to deliver change in order. The denominations object starts from the Bigger to the smaller but the change must be the opposite way

// var cashInDrawer = cid.reduce(function(acc, next){
//     var coin_name = next[0];
//     var coin_amount = next[1];
//
//     acc.total += coin_amount;
//     acc[coin_name] = coin_amount;
//     return acc;
// }, {total:0});
var cashInDrawer = {total:0}; //Joao Carlos way, por cada elemento do cid, ele faz uma iteração.
cid.map(function(next){
    var coin_name = next[0];
    var coin_amount = next[1];
    cashInDrawer.total += coin_amount;
    cashInDrawer[coin_name] = coin_amount;
});

  //No change?
  if(cashInDrawer.total === change){
output.status = 'CLOSED';
output.change = cid;
return output;
  }

  if(cashInDrawer.total < change){
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }


if(cashInDrawer.total > change){
var results = denominations.reduce(function(acc, next, index){ //needs to reduce the money that exists in the drawer while you give the change
var currentValue = 0;
while(cid[index][1] > 0 && change >= next.value){
  change -= next.value;
  cid[index][1]-= next.value;
  currentValue += next.value;
  change = Math.round(change *100) / 100; //This is done because JS is tricky with decimal numbers
}



if(currentValue > 0){
  acc.push([next.name, currentValue]);
}

return acc;

}, []);

if(results.length < 1 || change > 0){ //This is to avoid having the enough money to give change but not the correct coins/bills, so the cashier won't be able to give the change.
  output.status = 'INSUFFICIENT_FUNDS';
  return output
}
output.status = 'OPEN';
output.change = results;
return output
}

}





console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
