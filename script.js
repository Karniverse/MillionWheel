document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    const spinner = document.getElementById("spinner");
    const spinButton = document.getElementById("spin-button");
    const resultDiv = document.getElementById("result");

    // Function to handle spinning the wheel
    function spinWheel() {
        // Generate a random angle for spinning the wheel
        const randomAngle = Math.floor(Math.random() * 360) + 3600;

        // Apply CSS transform to rotate the spinner
        spinner.style.transition = "transform 5s ease-out";
        spinner.style.transform = `rotate(${randomAngle}deg)`;

        // After spinning animation ends, display the result
        setTimeout(() => {
            displayResult();
        }, 5000); // Adjust the time based on the spinning animation duration
    }

    // Function to display the result after spinning
    function displayResult() {
        // Array of possible results
        const results = ["Prize 1", "Prize 2", "Prize 3", "Prize 4", "Prize 5"];

        // Choose a random result from the array
        const randomResult = results[Math.floor(Math.random() * results.length)];

        // Display the result in the resultDiv
        resultDiv.textContent = `Congratulations! You've won: ${randomResult}`;
    }

    // Event listener for the spinButton click event
    spinButton.addEventListener("click", function() {
        // Disable the spin button to prevent multiple spins
        spinButton.disabled = true;

        // Spin the wheel
        spinWheel();
    });
});
