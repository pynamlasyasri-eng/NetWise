import matplotlib.pyplot as plt
import networkx as nx

G = nx.Graph()

nodes = [
    "Internet", "Router", "Switch",
    "PC 1", "PC 2", "Printer", "Server"
]

edges = [
    ("Internet", "Router"),
    ("Router", "Switch"),
    ("Switch", "PC 1"),
    ("Switch", "PC 2"),
    ("Switch", "Printer"),
    ("Switch", "Server")
]

G.add_nodes_from(nodes)
G.add_edges_from(edges)

positions = {
    "Internet": (0, 3),
    "Router": (0, 2),
    "Switch": (0, 1),
    "PC 1": (-2, 0),
    "PC 2": (-0.7, 0),
    "Printer": (0.7, 0),
    "Server": (2, 0)
}

plt.figure(figsize=(11, 7))
plt.gcf().patch.set_facecolor("#070914")

nx.draw(
    G,
    positions,
    with_labels=True,
    node_color="#101426",
    edge_color="#00f5ff",
    node_size=3500,
    font_color="white",
    font_size=11,
    font_weight="bold",
    width=2
)

plt.title(
    "STAR NETWORK TOPOLOGY",
    color="#00f5ff",
    fontsize=20,
    fontweight="bold"
)

plt.savefig(
    "images/topology.png",
    facecolor="#070914",
    bbox_inches="tight",
    dpi=200
)

plt.show()