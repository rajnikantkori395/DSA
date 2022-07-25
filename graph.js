class Graph {
    // implemnting vertex array and adjacent list
    constructor(vertices) {
        this.vertices = vertices;
        this.AdjList = new Map();
    }
    addVertex(v) {
        // adding vertex to graph,intialize adjacent list to empty array
          this.AdjList.set(v, []);
    }
    addEdge(v, w) {
        // graph is unidirected adding edge between u to v and v to w
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);

    }
    printGraph() {
        // pirnting the vertices 
        // iterate over the vertices
        var get_keys = this.AdjList.keys();

        for (var i of get_keys) {
            //get the adjacent list  for the vertex
            var get_values = this.AdjList.get(i);
            console.log(get_values);
            var str = "";
            // iterate over the adjacent list
            for (var j of get_values)
                str += j + " ";
            //document.write(i + "-->" + str + "<br>");
            document.getElementById("display").innerHTML +=i + "-->" + str +"<br>";
            
        }
    }
}

var g = new Graph();
let add = () => {
    let txt1 = document.getElementById("text-box").value;
    if (txt1 == "") {
        alert("first enter value");
    }
    else {
        g.addVertex(txt1);
        txt1="";
        alert("vertex added");
    }
}

let edge = () => {
    // let txt1 = document.getElementById("text-box").value;
    // if (txt1 == "") {
    //     alert("first enter value");
    // }
    // else {
        let vertex1 = prompt("Enter Vertex 1");
        let vertex2= prompt("Enter vertex 2");
        if (vertex1 != null && vertex2 != null) {
            g.addEdge(vertex1,vertex2);
        //}
        
    }
}

let display = () =>{
    g.printGraph();
    
}