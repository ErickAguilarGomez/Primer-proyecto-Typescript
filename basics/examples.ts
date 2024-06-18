export function findAverage(array: number[]): number {
    // your code here
    if(array.length<1){return 0}

    let  valor=array.reduce((a,v)=>a+v,0)

    return valor/array.length
  }



console.log(findAverage([88,63,98,42,29,84,8,93,64,65,82,11,30,84,44]))
