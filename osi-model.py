import matplotlib.pyplot as plt

layers = [
    ("7. Application", "HTTP, HTTPS, FTP, DNS"),
    ("6. Presentation", "Encryption, Compression"),
    ("5. Session", "Session Management"),
    ("4. Transport", "TCP, UDP"),
    ("3. Network", "IP, Routing"),
    ("2. Data Link", "MAC, Ethernet"),
    ("1. Physical", "Cables, Signals, Bits")
]

fig, ax = plt.subplots(figsize=(10, 8))

fig.patch.set_facecolor("#070914")
ax.set_facecolor("#070914")

colors = [
    "#a855f7",
    "#9333ea",
    "#7c3aed",
    "#00c8ff",
    "#0099ff",
    "#00bcd4",
    "#00f5ff"
]

for i, (name, details) in enumerate(layers):

    y = 6 - i

    ax.barh(
        y,
        6,
        left=2,
        height=0.7,
        color=colors[i],
        edgecolor="white",
        linewidth=1.5
    )

    ax.text(
        5,
        y + 0.1,
        name,
        ha="center",
        va="center",
        color="white",
        fontsize=14,
        weight="bold"
    )

    ax.text(
        5,
        y - 0.18,
        details,
        ha="center",
        va="center",
        color="white",
        fontsize=10
    )

ax.set_xlim(0, 10)
ax.set_ylim(-1, 7)
ax.axis("off")

plt.title(
    "OSI 7-LAYER MODEL",
    color="#00f5ff",
    fontsize=22,
    weight="bold",
    pad=25
)

plt.savefig(
    "images/osi-model.png",
    facecolor=fig.get_facecolor(),
    bbox_inches="tight",
    dpi=200
)

plt.show()
