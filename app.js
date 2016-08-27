(function () {

    var items = ['Rock', 'Paper', 'Scissors'];
    var compItem;

    document.getElementById("btnRock").onclick = playRock;
    document.getElementById("btnPaper").onclick = playPaper;
    document.getElementById("btnScissors").onclick = playScissors;
    document.getElementById("btnPlayAgain").onclick = reset;

    makeCompChoice();

    function reset() {
        makeCompChoice();
        setCaption("Pick Your Poison!");
        setCompWeapon("Ready...");
        
    }

    function makeCompChoice() {
        var compChoice = Math.floor((Math.random() * 3) + 1);
        compItem = items[compChoice - 1];
        console.log("Computer Item is: " + compItem);
    }

    
    function playRock() {
        play("Rock");
    }
    function playPaper() {
        play("Paper");
    }
    function playScissors() {
        play("Scissors");
    }
    function play(myItem) {
        switch (compItem) {
            case 'Rock':
                if (myItem === 'Rock') {
                    setCaption("It's a tie :/");
                }
                else if (myItem === 'Scissors') {
                    setCaption("You FAIL!");
                }
                else {
                    setCaption("You are VICTORIOUS!");
                }
                break;
            case 'Paper':
                if (myItem === 'Paper') {
                    setCaption("It's a tie :/");
                }
                else if (myItem === 'Scissors') {
                    setCaption("You are VICTORIOUS!");
                }
                else {
                    setCaption("You FAIL!");
                }
                break;
            case 'Scissors':
                if (myItem === 'Rock') {
                    setCaption("You are VICTORIOUS!");
                }
                else if (myItem === 'Scissors') {
                    setCaption("It's a tie :/");
                }
                else {
                    setCaption("You FAIL!");
                }
                break;

        }
        setCompWeapon();
    }
    function setCaption(caption) {
        document.getElementById('caption').innerHTML = caption;
    }
    function setCompWeapon(item) {
        item = item || compItem
        document.getElementById('compWeapon').innerHTML = item;
    }

})();