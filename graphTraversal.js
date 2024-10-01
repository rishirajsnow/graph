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

//Iterative method depth first traversal  -> use Stack data structure.

const depthFirstTraversal=(graph,source)=>{
    const stack=[source];
    while(stack.length>0){
        const current=stack.pop();
        console.log(current);
        for(let neighbour of graph[current]){
            stack.push(neighbour);
        }
    }
}


depthFirstTraversal(graph,'a');