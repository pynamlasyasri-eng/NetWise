// NETWISE - NETWORK PERFORMANCE ANALYSIS

document.addEventListener("DOMContentLoaded", function () {

    const latency = document.getElementById("latency");
    const packetLoss = document.getElementById("packetLoss");
    const response = document.getElementById("response");
    const jitter = document.getElementById("jitter");

    const latencyChart = document.getElementById("latencyChart");

    function runTest() {

        // Generate simulated performance values
        const latencyValue = Math.floor(Math.random() * 100 + 10);
        const lossValue = (Math.random() * 3).toFixed(2);
        const responseValue = Math.floor(Math.random() * 200 + 20);
        const jitterValue = Math.floor(Math.random() * 20 + 1);

        if (latency) {
            latency.textContent = latencyValue + " ms";
        }

        if (packetLoss) {
            packetLoss.textContent = lossValue + "%";
        }

        if (response) {
            response.textContent = responseValue + " ms";
        }

        if (jitter) {
            jitter.textContent = jitterValue + " ms";
        }

        // Update latency graph
        if (latencyChart) {

            latencyChart.innerHTML = "";

            for (let i = 0; i < 10; i++) {

                const value = Math.floor(Math.random() * 80 + 20);

                const bar = document.createElement("div");

                bar.style.height = value + "%";
                bar.style.width = "7%";
                bar.style.background =
                    "linear-gradient(to top, #a855f7, #00f5ff)";
                bar.style.borderRadius = "5px 5px 0 0";
                bar.style.boxShadow = "0 0 10px #00f5ff";

                latencyChart.appendChild(bar);
            }
        }

        // Update connection quality
        const quality = document.getElementById("quality");

        if (quality) {
            if (latencyValue < 50 && Number(lossValue) < 1) {
                quality.textContent = "Excellent";
            } else if (latencyValue < 100) {
                quality.textContent = "Good";
            } else {
                quality.textContent = "Average";
            }
        }

        console.log("Performance test completed!");
    }

    // Make function available to HTML
    window.runTest = runTest;

    // Connect test button
    const testButton = document.querySelector(
        'button[onclick="runTest()"]'
    );

    if (testButton) {
        testButton.addEventListener("click", runTest);
    }

    // Run once when page loads
    runTest();

});