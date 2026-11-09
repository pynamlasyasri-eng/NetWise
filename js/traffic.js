// NETWISE - NETWORK TRAFFIC ANALYSIS

document.addEventListener("DOMContentLoaded", function () {

    const incoming = document.getElementById("incoming");
    const outgoing = document.getElementById("outgoing");
    const totalData = document.getElementById("totalData");
    const connections = document.getElementById("connections");

    const trafficChart = document.getElementById("trafficChart");
    const trafficTable = document.getElementById("trafficTable");

    // Demo traffic values
    const protocols = ["TCP", "UDP", "HTTP", "DNS"];

    function updateTraffic() {

        const inValue = Math.floor(Math.random() * 500 + 100);
        const outValue = Math.floor(Math.random() * 300 + 50);
        const connectionValue = Math.floor(Math.random() * 50 + 10);

        if (incoming) incoming.textContent = inValue + " MB";
        if (outgoing) outgoing.textContent = outValue + " MB";

        if (totalData) {
            totalData.textContent = (inValue + outValue) + " MB";
        }

        if (connections) {
            connections.textContent = connectionValue;
        }

        // Generate traffic graph
        if (trafficChart) {
            trafficChart.innerHTML = "";

            for (let i = 0; i < 12; i++) {

                const value = Math.floor(Math.random() * 90 + 10);

                const bar = document.createElement("div");
                bar.style.height = value + "%";
                bar.style.width = "5%";
                bar.style.background = "linear-gradient(#00f5ff, #a855f7)";
                bar.style.borderRadius = "5px 5px 0 0";
                bar.style.boxShadow = "0 0 10px #00f5ff";

                trafficChart.appendChild(bar);
            }
        }

        // Generate recent traffic records
        if (trafficTable) {

            const tableBody = trafficTable.tagName === "TBODY"
                ? trafficTable
                : trafficTable.querySelector("tbody");

            if (tableBody) {
                tableBody.innerHTML = "";

                for (let i = 0; i < 5; i++) {

                    const row = document.createElement("tr");

                    const source = "192.168.1." +
                        Math.floor(Math.random() * 200 + 1);

                    const destination = "192.168.1." +
                        Math.floor(Math.random() * 200 + 1);

                    const protocol = protocols[
                        Math.floor(Math.random() * protocols.length)
                    ];

                    const size = Math.floor(Math.random() * 1500 + 100);

                    const values = [
                        "PKT-" + (1001 + i),
                        source,
                        destination,
                        protocol,
                        size + " bytes",
                        "Completed"
                    ];

                    values.forEach(value => {
                        const cell = document.createElement("td");
                        cell.textContent = value;
                        row.appendChild(cell);
                    });

                    tableBody.appendChild(row);
                }
            }
        }
    }

    // Refresh button
    const refreshButton = document.querySelector(
        'button[onclick="updateTraffic()"]'
    );

    if (refreshButton) {
        refreshButton.addEventListener("click", updateTraffic);
    }

    // Make function available to HTML onclick
    window.updateTraffic = updateTraffic;

    // Initial dashboard update
    updateTraffic();

});