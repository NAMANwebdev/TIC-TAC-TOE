let nodelist = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newgame = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("p")



let boxes = Array.from(nodelist)

let turn0 = true;

const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
];


let resetgame = () => {

        turn0 = true;
        enableboxes();
        msgcontainer.classList.add("hide")


}


boxes.forEach((everybox) => {
        everybox.addEventListener("click", () => {
                console.log("box clicked")

                if (turn0 === true) {
                        everybox.textContent = "O"
                        turn0 = false;

                }
                else if (turn0 === false) {
                        everybox.textContent = "X"
                        turn0 = true;

                }
                everybox.disabled = true;
                winner();
        })
})

let displaywinner = (winner) => {

        msg.textContent = `Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
}



let disablebtn = () => {

        boxes.forEach((box) => {
                box.disabled = true;
        })
}

let winner = () => {

        winPatterns.forEach((pattern) => {

                val1 = boxes[pattern[0]].textContent
                val2 = boxes[pattern[1]].textContent
                val3 = boxes[pattern[2]].textContent

                if (val1 != "" && val2 != "" && val3 != "") {

                        if (val1 === val2 && val2 === val3) {

                                console.log("winner")
                                disablebtn();
                                displaywinner(val1);
                        }

                }

        })

}

let enableboxes = () => {
        boxes.forEach((box) => {
                box.disabled = false;
                box.textContent = "";
        })

}

newgame.addEventListener("click", resetgame)
resetbtn.addEventListener("click", resetgame)