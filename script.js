document.addEventListener("DOMContentLoaded", function() {
    const aboutBtn = document.getElementById("aboutBtn");
    const datascienceBtn = document.getElementById("datascienceBtn");
    const reachBtn = document.getElementById("reachBtn");
    const computerBtn = document.getElementById("computerBtn");
    const feedbackBtn = document.getElementById("feedbackBtn");

    const aboutCard = document.getElementById("aboutCard");
    const datascienceCard = document.getElementById("datascienceCard");
    const reachCard = document.getElementById("reachCard");
    const computerCard = document.getElementById("computerCard");
    const feedbackCard = document.getElementById("feedbackCard");

    const container = document.querySelector(".container");
    const buttons = document.querySelectorAll(".button"); 

    aboutBtn.addEventListener("click", function() {
        toggleCard(aboutCard);
    });

    datascienceBtn.addEventListener("click", function() {
        toggleCard(datascienceCard);
    });

    computerBtn.addEventListener("click", function() {
        toggleCard(computerCard);
    });

    reachBtn.addEventListener("click", function() {
        toggleCard(reachCard);
    });

    feedbackBtn.addEventListener("click", function() {
        toggleCard(feedbackCard);
    });

    function toggleCard(Card) {
        Card.classList.toggle("hidden");
        container.classList.toggle("blur");
        toggleButtonsDisable();
    } ;   

    // Function to enable/disable buttons
    function toggleButtonsDisable() {
        buttons.forEach(button => {
            button.disabled = !button.disabled; // toggle button disable state
        });
    };

    // Event listener to handle clicks outside the about me card
    document.addEventListener("click", function(event) {
        if (!aboutCard.contains(event.target) && !aboutBtn.contains(event.target) &&
            !reachCard.contains(event.target) && !reachBtn.contains(event.target) &&
            !datascienceCard.contains(event.target) && !datascienceBtn.contains(event.target) &&
            !feedbackCard.contains(event.target) && !feedbackBtn.contains(event.target) &&
            !computerCard.contains(event.target) && !computerBtn.contains(event.target)) {
            aboutCard.classList.add("hidden");
            datascienceCard.classList.add("hidden");
            computerCard.classList.add("hidden");
            reachCard.classList.add("hidden");
            feedbackCard.classList.add("hidden");
            container.classList.remove("blur");
            toggleButtonsDisable(); 
        }
    });
});