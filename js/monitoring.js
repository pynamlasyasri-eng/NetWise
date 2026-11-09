// NETWISE - NETWORK MONITORING

document.addEventListener("DOMContentLoaded", function () {

    const devices = document.getElementById("devices");
    const uptime = document.getElementById("uptime");
    const routerStatus = document.getElementById("routerStatus");
    const serverStatus = document.getElementById("serverStatus");

    const healthBar = document.getElementById("healthBar");
    const deviceTable = document.getElementById("deviceTable");

    // Sample connected devices
    const deviceList = [
        { name: "Desktop PC", ip: "192.168.1.10", status: "Online" },
        { name: "Laptop", ip: "192.168.1.11", status: "Online" },
        { name: "Mobile Phone", ip: "192.168.1.12", status: "Online" },
        { name: "Network Printer", ip: "192.168.1.13", status: "Offline" },
        { name: "Server", ip: "192.168.1.14", status: "Online" }
    ];

    function updateMonitoring() {

        const onlineDevices = deviceList.filter(
            device => device.status === "Online"
        ).length;

        if (devices) {
            devices.textContent = onlineDevices;
        }

        if (uptime) {
            uptime.textContent = "99.9%";
        }

        if (routerStatus) {
            routerStatus.textContent = "Online";
        }

        if (serverStatus) {
            serverStatus.textContent = "Online";
        }

        if (healthBar) {
            healthBar.style.width = "90%";
        }

        // Display device information
        if (deviceTable) {

            const tableBody = deviceTable.tagName === "TBODY"
                ? deviceTable
                : deviceTable.querySelector("tbody");

            if (tableBody) {

                tableBody.innerHTML = "";

                deviceList.forEach(device => {

                    const row = document.createElement("tr");

                    const values = [
                        device.name,
                        device.ip,
                        device.status
                    ];

                    values.forEach(value => {

                        const cell = document.createElement("td");
                        cell.textContent = value;

                        row.appendChild(cell);
                    });

                    tableBody.appendChild(row);
                });
            }
        }

        console.log("Network monitoring updated!");
    }

    // Refresh monitoring button
    const refreshButton = document.querySelector(
        'button[onclick="updateMonitoring()"]'
    );

    if (refreshButton) {
        refreshButton.addEventListener("click", updateMonitoring);
    }

    window.updateMonitoring = updateMonitoring;

    // Initial update
    updateMonitoring();

});