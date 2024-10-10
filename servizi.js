// JavaScript to Handle Toggle and Price Update
document.addEventListener("DOMContentLoaded", function () {
    // Get buttons and price elements
    const autoPiccolaBtn = document.getElementById('auto-piccola');
    const autoGrandeBtn = document.getElementById('auto-grande');
    const prices = [
        document.getElementById('price1'),
        document.getElementById('price2'),
        document.getElementById('price3')
    ];

    const old_prices = document.getElementsByClassName("strikethrough")
    // Prices for different car types
    const piccolaPrices = ['€59.99', '€64.99', '€74.99', '€80'];
    const grandePrices = ['€69.99', '€74.99', '€84.99', '€90'];

    // Set initial active state and pricing
    let currentSelection = 'piccola';
    autoPiccolaBtn.classList.add('active');
    updatePrices(piccolaPrices);

    // Add event listeners to toggle buttons
    autoPiccolaBtn.addEventListener('click', function () {
        if (currentSelection !== 'piccola') {
            currentSelection = 'piccola';
            toggleActiveButton(autoPiccolaBtn, autoGrandeBtn);
            updatePrices(piccolaPrices, "#097EB0");
        }
    });

    autoGrandeBtn.addEventListener('click', function () {
        if (currentSelection !== 'grande') {
            currentSelection = 'grande';
            toggleActiveButton(autoGrandeBtn, autoPiccolaBtn);
            updatePrices(grandePrices, "#687EB5");
        }
    });

    // Function to update the prices based on the selection
    function updatePrices(newPrices, color) {
        let i = 0
        for (i = 0; i < prices.length; i++) {
            prices[i].textContent = newPrices[i];
            prices[i].style.color = color;
        }
        for (old_price of old_prices) 
            old_price.textContent = newPrices[i]
    }

    // Function to toggle the active button styles
    function toggleActiveButton(activeBtn, inactiveBtn) {
        activeBtn.classList.add('active');
        inactiveBtn.classList.remove('active');
    }
});