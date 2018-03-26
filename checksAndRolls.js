function d3Roll()
{
  let result = Math.floor(Math.random() * 3) +1;
  return result;
}

function d4Roll()
{
  let result = Math.floor(Math.random() * 4) +1;
  return result;
}

function d6Roll()
{
  let result = Math.floor(Math.random() * 6) +1;
  return result;
}

function d8Roll()
{
  let result = Math.floor(Math.random() * 8) +1;
  return result;
}

function d10Roll()
{
  let result = Math.floor(Math.random() * 10) + 1;
  return result;
}

function d12Roll()
{
  let result = Math.floor(Math.random() * 12) + 1;
  return result;
}

function d20Roll()
{
  let result = Math.floor(Math.random() * 20) + 1;
  return result;
}

function d100Roll()
{
  let result = Math.floor(Math.random() * 100) +1;
  return result;
}

//Function to roll a non-standard die type. Needs to be passed (max+1)? For whatever reason...
function dXRoll(high)
{
  let result = Math.floor(Math.random() * high) + 1;
  return result;
}

//Function that returns 99 on a roll of natural 20, or the difference between the dc and the roll (including bonuses and penalties)
function checkRoll(dc, roll, rollAdjustment)
{
  if((roll + rollAdjustment) === dc)
    return 0;
  else if(roll === 20)
    return 99;
  else
    return (dc - (roll + rollAdjustment));
}


