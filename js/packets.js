// NETWISE - PACKET ANALYSIS

document.addEventListener("DOMContentLoaded", function () {

    const totalPackets = document.getElementById("totalPackets");
    const tcpPackets = document.getElementById("tcpPackets");
    const udpPackets = document.getElementById("udpPackets");
    const totalData = document.getElementById("totalData");

    const packetTable = document.getElementById("packetTable");
    const protocolFilter = document.getElementById("protocolFilter");

    // Sample packet information
    const packets = [
        {
            id: "PKT001",
            source: "192.168.1.10",
            destination: "192.168.1.20",
            protocol: "TCP",
            size: 1200,
            status: "Delivered",
            port: 443
        },
        {
            id: "PKT002",
            source: "192.168.1.15",
            destination: "8.8.8.8",
            protocol: "UDP",
            size: 800,
            status: "Delivered",
            port: 53
        },
        {
            id: "PKT003",
            source: "192.168.1.12",
            destination: "192.168.1.30",
            protocol: "TCP",
            size: 1500,
            status: "Delivered",
            port: 80
        },
        {
            id: "PKT004",
            source: "192.168.1.18",
            destination: "192.168.1.25",
            protocol: "UDP",
            size: 600,
            status: "Pending",
            port: 5000
        },
        {
            id: "PKT005",
            source: "192.168.1.22",
            destination: "192.168.1.40",
            protocol: "TCP",
            size: 1000,
            status: "Delivered",
            port: 443
        },
        {
            id: "PKT006",
            source: "192.168.1.14",
            destination: "1.1.1.1",
            protocol: "UDP",
            size: 750,
            status: "Delivered",
            port: 53
        }
    ];

    // Display packet statistics
    function updateStatistics() {

        const tcpCount = packets.filter(p => p.protocol === "TCP").length;
        const udpCount = packets.filter(p => p.protocol === "UDP").length;

        if (totalPackets) totalPackets.textContent = packets.length;
        if (tcpPackets) tcpPackets.textContent = tcpCount;
        if (udpPackets) udpPackets.textContent = udpCount;

        if (totalData) {
            const total = packets.reduce((sum, p) => sum + p.size, 0);
            totalData.textContent = (total / 1024).toFixed(2) + " KB";
        }
    }

    // Display packet table
    function displayPackets(filter = "all") {

        if (!packetTable) return;

        const tableBody = packetTable.tagName === "TBODY"
            ? packetTable
            : packetTable.querySelector("tbody");

        if (!tableBody) return;

        tableBody.innerHTML = "";

        const filteredPackets = filter === "all"
            ? packets
            : packets.filter(p => p.protocol === filter);

        filteredPackets.forEach(packet => {

            const row = document.createElement("tr");

            const values = [
                packet.id,
                packet.source,
                packet.destination,
                packet.protocol,
                packet.size + " bytes",
                packet.status
            ];

            values.forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

            row.style.cursor = "pointer";

            row.addEventListener("click", function () {
                showPacketDetails(packet);
            });

            tableBody.appendChild(row);
        });
    }

    // Show selected packet details
    function showPacketDetails(packet) {

        const details = document.getElementById("packetDetails");

        if (!details) return;

        details.innerHTML = "";

        const heading = document.createElement("h3");
        heading.textContent = "Packet Details";

        const information = [
            ["Packet ID", packet.id],
            ["Protocol", packet.protocol],
            ["Source IP", packet.source],
            ["Destination IP", packet.destination],
            ["Packet Size", packet.size + " bytes"],
            ["Port", packet.port],
            ["Status", packet.status]
        ];

        details.appendChild(heading);

        information.forEach(item => {
            const paragraph = document.createElement("p");
            paragraph.textContent = item[0] + ": " + item[1];
            details.appendChild(paragraph);
        });
    }

    // Protocol filter
    if (protocolFilter) {
        protocolFilter.addEventListener("change", function () {
            displayPackets(this.value);
        });
    }

    // Reset filter
    const resetButton = document.getElementById("resetFilter");

    if (resetButton) {
        resetButton.addEventListener("click", function () {
            if (protocolFilter) protocolFilter.value = "all";
            displayPackets();
        });
    }

    updateStatistics();
    displayPackets();

});