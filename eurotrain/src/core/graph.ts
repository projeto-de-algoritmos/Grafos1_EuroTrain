// Criando a classe de grafos 
export class Graph {
    noOfVertices: any;
    AdjList: {};
    constructor(QVertices) {
        this.noOfVertices = QVertices;
        this.AdjList = {};
    }

    newVertice(vertice: string) {
        this.AdjList[vertice] = []
    }

    newEdge(vertice: string, neighboor: string, distance: number) {
        this.AdjList[vertice].push(neighboor);
        this.AdjList[neighboor].push(vertice)
    }

    bfs(start: string, end: string): string[] {
        const queue = [];
        queue.push([start]);
        while (queue.length > 0) {
            const path = queue.shift()
            const node = path[path.length-1]
            if (node === end) {
                return path;
            }
            for (const adjascent of this.AdjList[node]) {
                const new_path = [...path]
                new_path.push(adjascent)
                queue.push(new_path) 
            }
        }
    }

    printGraph() {
        var get_keys = Object.keys(this.AdjList);
        for (var key of get_keys) {
            var get_values = this.AdjList[key];
            var conc = "";
            for (var j of get_values)
                conc += j + " ";
            console.log(key + " -> " + conc);
        }
    }
}

// Adicionando arestas e vértices no Grafo ("Base de dados")
var G = new Graph(20);
const vertices = ["Paris", "Lyon", "Marselha", "Montpellier", "Nice", "Bordeaux","Rennes", "Milan", "Bologna","Florence", "Rome", "Naples","Bari", "Catania", "Venice", "Munich", "Frankfurt", "Cologne", "Hamburg","Berlim" ];

for (var i = 0; i < vertices.length; i++) {
    G.newVertice(vertices[i]);
}

G.newEdge('Paris', 'Rennes', 2.0);
G.newEdge('Paris', 'Bordeaux', 3.0);
G.newEdge('Paris', 'Lyon', 1.92);
G.newEdge('Paris', 'Frankfurt', 3.92);
G.newEdge('Bordeaux', 'Lyon', 6.25);
G.newEdge('Lyon', 'Marselha', 1.67);
G.newEdge('Marselha', 'Montpellier', 2.33);
G.newEdge('Marselha', 'Nice', 2.59);
G.newEdge('Nice', 'Milan', 5.2);
G.newEdge('Milan', 'Venice', 2.59);
G.newEdge('Milan', 'Bologna', 1);
G.newEdge('Milan', 'Munich', 7.75);
G.newEdge('Bologna', 'Florence', 0.37);
G.newEdge('Florence', 'Venice', 2.05);
G.newEdge('Florence', 'Rome', 1.58);
G.newEdge('Rome', 'Bari', 4);
G.newEdge('Rome', 'Naples', 1.17);
G.newEdge('Naples', 'Catania', 7.5);
G.newEdge('Munich', 'Frankfurt', 3.12);
G.newEdge('Munich', 'Berlim', 5.75);
G.newEdge('Munich', 'Hamburg', 5.83);
G.newEdge('Frankfurt', 'Cologne', 1.37);
G.newEdge('Frankfurt', 'Hamburg', 3.67);
G.newEdge('Cologne', 'Berlim', 4.33);
G.newEdge('Berlim', 'Hamburg', 1.58);

export {vertices, G}