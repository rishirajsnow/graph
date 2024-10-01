//Graph=node+edges
//       a--->c
//       |    |
//       b    e
//       |
//       d---->f

//Adjacency list

const graph={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

//Recursive method depth first traversal  -> use Stack data structure.

const depthFirstPrint=(graph,source)=>{
    console.log(source);
    for(let neighbours of graph[source]){
        depthFirstPrint(graph,neighbours);
    }
}


depthFirstPrint(graph,'a');

// Output:
// a
// b
// d
// f
// c
// e