//Problem statement: Need to build a graph from provided edges list. And check if the path from src to dst is present.
// Note. We need to consider cycles in graph or else we will get into infinite traversal.

const edges=[
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
]

const undirectedPath=(edges,nodeA,nodeB)=>{
    const graph=buildGraph(edges);
    console.log(graph);
    return hasPath(graph,nodeA,nodeB,new Set());

}
const hasPath=(graph,src,dst,visited)=>{
    if(src===dst)return true;
    if(visited.has(src))return false;
    visited.add(src);
    for(let neighbour of graph[src]){
        if(hasPath(graph,neighbour,dst,visited)===true)return true;
    }
    return false;
}
//Graph builder helper funtion.
const buildGraph=(edges)=>{
    const graph={};
    for(let edge of edges){
        const[a,b]=edge;
        if(!(a in graph))graph[a]=[];
        if(!(b in graph))graph[b]=[];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

console.log(undirectedPath(edges,'i','o'));