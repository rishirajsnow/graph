//Find if there is a possible path to a particular node.
//Acyclic graph Example.
const graph={
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]
};

const hasPath=(graph,src,dst)=>{
    if(src===dst)return true;
    for(let neighbour of graph[src]){
        if(hasPath(graph,neighbour,dst)===true)return true;
    }
    return false;
}


console.log(hasPath(graph,'f','j'));
