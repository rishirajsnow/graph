//Here L stands for land and 'W' stands for water. Find the count of island in the grid.
const grid=[
    ['W','W','L','W'],
    ['W','W','L','W'],
    ['W','L','W','W'],
    ['W','W','W','L']
]


const islandCount=(grid)=>{
    const visited=new Set();
    let count=0;
//Iterative code to check every node and explore if it is land.
    for(let r=0;r<grid.length;r++ ){
        for(let c=0;c<grid.length;c++){
            if(explore(grid,r,c,visited)){
                count+=1;
            }
        }
    }
    return count;
}

const explore=(grid,r,c,visited)=>{
    const rowInBounds= 0<=r && r<grid.length;
    const colInBounds= 0<=c && c<grid.length;
    if(!rowInBounds || !colInBounds)return false;

    if(grid[r][c]==='W')return false;

    const pos=r+','+c;
    if(visited.has(pos))return false;
    visited.add(pos);

    explore(grid,r-1,c,visited);
    explore(grid,r+1,c,visited);
    explore(grid,r,c-1,visited);
    explore(grid,r,c+1,visited);

    return true;

}

console.log(islandCount(grid));