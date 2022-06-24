class Graph {
    constructor(QVertices) {
        this.noOfVertices = QVertices;
        this.AdjList = {};
    }

    newVertice(v) {
        this.AdjList[v] = []
    }

    newEdge(v, w, d) {
        this.AdjList[v].push(w);
        this.AdjList[w].push(v)
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

// Criando a classe de filas 
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {    
        this.items.push(element);   
    }

    dequeue() {
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    front() {
    if(this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

}

// Adicionando arestas e vértices no Grafo (Executado sempre)
var G = new Graph(20);
var vertices = ["Paris", "Lyon", "Marselha", "Montpellier", "Nice", "Bordeaux","Rennes", "Milan", "Bologna","Florence", "Rome", "Naples","Bari", "Catania", "Venice", "Munich", "Frankfurt", "Cologne", "Hamburg","Berlim" ];

for (var i = 0; i < vertices.length; i++) {
    G.newVertice(vertices[i]);
}

G.newEdge('Paris', 'Rennes', 5);
G.newEdge('Paris', 'Bordeaux', 6);
G.newEdge('Paris', 'Lyon', 8);
G.newEdge('Paris', 'Frankfurt', 8);
G.newEdge('Bordeaux', 'Lyon', 8);
G.newEdge('Lyon', 'Marselha', 8);
G.newEdge('Marselha', 'Montpellier', 8);
G.newEdge('Marselha', 'Nice', 8);
G.newEdge('Nice', 'Milan', 8);
G.newEdge('Milan', 'Venice', 8);
G.newEdge('Milan', 'Bologna', 8);
G.newEdge('Milan', 'Munich', 8);
G.newEdge('Bologna', 'Florence', 8);
G.newEdge('Florence', 'Venice', 8);
G.newEdge('Florence', 'Rome', 8);
G.newEdge('Rome', 'Bari', 8);
G.newEdge('Rome', 'Naples', 8);
G.newEdge('Naples', 'Catania', 8);
G.newEdge('Munich', 'Frankfurt', 8);
G.newEdge('Munich', 'Berlim', 8);
G.newEdge('Munich', 'Hamburg', 8);
G.newEdge('Frankfurt', 'Cologne', 8);
G.newEdge('Frankfurt', 'Hamburg', 8);
G.newEdge('Cologne', 'Berlim', 8);
G.newEdge('Berlim', 'Hamburg', 8);

// Usando as Funções
//G.printGraph()
//export default G
