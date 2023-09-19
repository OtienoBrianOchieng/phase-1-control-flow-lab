function scuberGreetingForFeet(feetPrice){
  if (feetPrice < 400){
    return "This one is on me!";
  }
  else if (feetPrice > 2500){
    return "No can do.";
  }
  else if (feetPrice > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good.": "No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous" : 
        return "Thank you so much.";
    case "not as generous" :
        return "Thank you.";
    default:
      return "Bye." ;
    }
}