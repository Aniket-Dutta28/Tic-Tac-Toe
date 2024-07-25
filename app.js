let currentplayer = "X";
let arr = Array(9).fill(null);
console.log(arr);

function winner (){
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
      ) {
        let winnerstatment = document.getElementById("winnerline") ;
        winnerstatment.style.display ="flex";
        let statment = `${currentplayer} is the winner`;
        winnerstatment.innerText=statment;
        return;
      }
    }
   
    

function handleclick(element){
    let position = Number(element.id);
    console.log(position);

    if (arr[position] !== null) {
        return; // If the position is already filled, do nothing
    }

    arr[position] = currentplayer;
    element.textContent = currentplayer;
    winner();

    // Toggle the current player
    if(currentplayer == "X"){
        currentplayer = "O";
    } else {
        currentplayer = "X";
    }

  
}
