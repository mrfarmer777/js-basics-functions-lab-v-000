// Code your solution in this file!
function distanceFromHqInBlocks(pos){
  return Math.abs(42-pos);
}

function distanceFromHqInFeet(pos){
  return distanceFromHqInBlocks(pos)*264;
}

function distanceTravelledInFeet(str,pos){
  return Math.abs(str-pos)*264;
}

function calculatesFarePrice(str,dest){
  const distFt=distanceTravelledInFeet(str,dest);
  let fare;
  if(distFt<2500){
    if distFt<2000)
    fare=2*(distFt-400)
  }
}