function convertUpwards(numCoins)
{
  if(numCoins % 100 === 0)
    let greaterDenom = numCoins / 100;
  else
    let tempNum1 = numCoins % 100;
    let tempNum2 = Math.floor(numCoins / 100);
    let greaterDenom = tempNum2 / 100;
}

function convertDownwards(numCoins)
{
  if(numCoins % 100 === 0)
    let lesserDenom = numCoins * 100;
}
