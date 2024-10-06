// let graph={
//     1:[1,2],
//     2:[3,4]
//     }
//     /* 
//     for(let node in graph){
//     console.log(node);
//     } */
    
//     Object.keys(graph).forEach((node)=>console.log(node))
const graph={
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}
const connectedComponentCount=(graph)=>{
    const visited=new Set();
    let count=0;
    for(let node in graph){
        console.log(visited);//to check visited nodes
        if(explore(graph,node,visited)===true){
            count+=1;
        }
    }
    return count;
}

const explore=(graph,current,visited)=>{
    if(visited.has(String(current)))return false;
    visited.add(String(current));

    for(let neighbour of graph[current]){
        explore(graph,neighbour,visited);
    }
    return true;
}

console.log(connectedComponentCount(graph));