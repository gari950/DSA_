/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs=costs.sort((a,b) => a-b)
    let list=[];
    let max=0;
    let sum=0;
    
    for(let i in costs){
        if(costs[i] + sum <= coins) {max += 1; sum += costs[i]}
        if(sum == coins){list.push(max); max=0; sum=0}
    }
    list=list.sort((a,b) => a-b)
    if(list.length < 1) return max;
    else return list.slice(-1)[0];
};