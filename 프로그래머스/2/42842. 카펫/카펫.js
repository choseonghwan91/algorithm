const solution = (brown, yellow) => {
  let brownVertical;
  let brownHorizen;
  let yellowVertical;
  let yellowHorizen;
  for(let i = 1; i <= yellow; i++){
    if(yellow % i === 0){
      yellowVertical = i ;
      yellowHorizen = yellow / i;
      
      if((((yellowVertical + 2) * 2) + (yellowHorizen * 2)) === brown) {
        brownVertical = yellowVertical + 2;
        brownHorizen = yellowHorizen + 2;
        break;
      }
    } 
  }
  
  return [brownHorizen, brownVertical];
}