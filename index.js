user1 = true;
urser2 = false;
finalUser = false;
let winningPattern = [
    [1, 4, 7],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [2, 5, 8]
];
let modal = new bootstrap.Modal(document.querySelector('.modal'));
modal.show();
boxes = document.querySelectorAll('.btn');
console.log("boxes", boxes);

    console.log("finalUser",finalUser);
    boxes.forEach((btn) => {
      
        btn.addEventListener('click', (eve) => {
            if (!finalUser) {
            chance(eve.target.id);
            }
        });
    })


let setButtonValue = (value, id) => {
    let setButton = document.getElementById(id)
    setButton.innerHTML = value;
    setButton.disabled = true;
}

let chance = (id) => {
    if (user1) {
        console.log("User1 chance");
        user1 = false;
        user2 = true;
        setButtonValue("X", id);
        checkWinningPattern("X");

    } else {
        console.log("User2 chance");
        user1 = true;
        user2 = false;
        setButtonValue("O", id);
        checkWinningPattern("O");
    }


}

let checkWinningPattern = (userName) => {
    winningPattern.forEach((pattern) => {
        boxNo1Value = boxes[pattern[0] - 1].innerText
        boxNo2Value = boxes[pattern[1] - 1].innerText
        boxNo3Value = boxes[pattern[2] - 1].innerText
        console.log(boxNo1Value, boxNo2Value, boxNo3Value);
        if ((boxNo1Value != '' && boxNo2Value != '' && boxNo3Value != '') && boxNo1Value == boxNo2Value && boxNo2Value == boxNo3Value) {
            if (userName == "X") {
                console.log("USER1 WON")
            }
            else {
                console.log("User2 WON ");

            }
            finalUser = true;
        }
        /* let val1=document.getElementById(boxes[pattern[0]]).innerHTML;
        let val2=document.getElementById(boxes[pattern[1]]).innerHTML;
        let val3=document.getElementById(boxes[pattern[2]]).innerHTML;
        if(val1==val2 && val2==val3 && val1!="" && val2!="" && val3!=""){
            console.log("Winner is "+val1);
            alert("Winner is "+val1);
        } */
    });
}
