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

//Breadth first traversal  -> use Queue data structure.

const breadthFirstPrint=(graph,source)=>{
    const queue=[source]
    while(queue.length>0){
        let current=queue.shift();
        console.log(current);
        for(let neighbours of graph[current]){
            queue.push(neighbours);
        }
    }
}

breadthFirstPrint(graph,'a');

// Output:
// a
// b
// c
// d
// e
// f