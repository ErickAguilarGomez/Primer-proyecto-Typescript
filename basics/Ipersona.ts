export function revertirArray(valor:any[]):string[]{
    let newArr:any[]=valor.map((item)=>item.toString())
    return newArr.sort()
}