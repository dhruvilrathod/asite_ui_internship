class UndirectedGraph {
    constructor() {
        this.graph = {};
    }


    // time complexity: O(1)
    addNode(node) {
        if (!this.graph[node.vertex]) {
            this.graph[node.vertex] = node.edges;
        }
    }

    // time complexity: average case O(1), worstcase: O(n)
    addEdge(node1, node2, weight) {
        if (node1.vertex == node2.vertex) {
            return;
        }

        else if (Object.keys(this.graph[node1.vertex]).length == 0 || Object.keys(this.graph[node2.vertex]).length == 0) {
            this.graph[node1.vertex][node2.vertex] = weight;
            this.graph[node2.vertex][node1.vertex] = weight;
        }

        // to avoid duplication
        else {
            for (var i in this.graph[node1.vertex]) {
                if (this.graph[node1.vertex][i] == node2.vertex) {
                    this.graph[node1.vertex][i] = weight;
                    break;
                }
                else {
                    this.graph[node1.vertex][node2.vertex] = weight;
                    break;
                }
            }
            for (var j in this.graph[node2.vertex]) {
                if (this.graph[node2.vertex][j] == node1.vertex) {
                    this.graph[node2.vertex][j] = weight;
                    break;
                }
                else {
                    this.graph[node2.vertex][node1.vertex] = weight;
                    break;
                }
            }
        }
    }

    // time complexity: O(n^2)
    deleteNode(n) {
        delete this.graph[n];
        for (var i in this.graph) {
            for (var j in this.graph[i]) {
                if (j == n) {
                    delete this.graph[i][n];
                }
            }
        }
    }
}

class Node {
    constructor(vertex, edges) {
        this.vertex = vertex;
        this.edges = {};
    }
}

// time complexity = O (V * E)
function dijkstra(graph, source_node) {
    var shortestDistances = {};
    for (var i in graph[source_node]) {
        shortestDistances[i] = {
            distance: graph[source_node][i],
            path: [i]
        }
    }

    // loop will execute for all vertices: V times
    for (var n in graph) {
        if (n != source_node) {

            // this loop will execute for all edges of a vertex: E times
            for (var j in graph[n]) {
                if (shortestDistances[j] && shortestDistances[n]) {
                    if (shortestDistances[n].distance > shortestDistances[j].distance + graph[n][j])
                        shortestDistances[n] = {
                            distance: shortestDistances[j].distance + graph[n][j],
                            path: shortestDistances[j].path.concat([n])
                        }
                }
                else if (shortestDistances[j]) {
                    shortestDistances[n] = {
                        distance: graph[n][j] + shortestDistances[j].distance,
                        path: shortestDistances[j].path.concat([n])
                    }
                }
            }
        }
    }
    return shortestDistances;
}

let undirectedGraph = new UndirectedGraph();

function generateGraph(n) {
    var createdNodes = [];

    // create 10 Nodes
    for (var i = 0; i < n; i++) {
        let n = new Node(i);
        undirectedGraph.addNode(n);
        createdNodes.push(n)
    }

    // assign edges randomly
    for (var i = 0; i < createdNodes.length - 1; i++) {
        for (var j = i + 1; j < createdNodes.length; j++) {
            if ((i + j) % Math.floor(Math.random() * 3) == 0) undirectedGraph.addEdge(createdNodes[i], createdNodes[j], Math.floor(Math.random() * 20));
        }
    }

    // delete some nodes from graph randomly
    for (var i = 0; i < 3; i++) {
        undirectedGraph.deleteNode(Math.floor(Math.random() * (createdNodes.length - 1)));
    }
    console.log(`Generated Graph`);
    console.log(undirectedGraph.graph);
}

generateGraph(10);

console.log(`Shortest distances from first node of Graph`);
console.log(dijkstra(undirectedGraph.graph, Object.keys(undirectedGraph.graph)[0]));