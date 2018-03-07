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

//Function to roll a non-standard die type. Needs to be passed (max+1)?
function dXRoll(high)
{
  let result = Math.floor(Math.random() * high) + 1;
  return result;
}

//Function to check whether or not a given roll(skill check, caster check, etc.) and bonuses(passed in) beat the dc.
function checkRoll(dc, bonuses)
{
  let baseRoll = d20Roll();
  if(baseRoll + bonuses >= dc)
    return true;
  else if(baseRoll === 20)
    return true;
  else
    return false;
}

