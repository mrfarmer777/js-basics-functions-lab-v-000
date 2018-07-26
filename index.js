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
  const dist=distanceTravelledInFeet(str,dest);
  let fare;
  switch(dist){
    case (dist>2500):
      fare="cannot travel that far";
      break;
      case (dist<400):
        fare=0;
        break;
      default:
        fare=0.02*(dist-400);
        break;
  }
  if(distFt<2500){
    if (distFt<2000){
      fare=0.02*(distFt-400);
    } else {
      fare=2000*0.02;
    }
  } else {
    fare="cannot travel that far";
  }
  return fare;
}