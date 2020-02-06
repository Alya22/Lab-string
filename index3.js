let string = "akakakakka";
let symbol = "a";
let res = 0;
function search(str, symb, r){
    console.log(str);
    console.log(symb);
    for( let i of str){
        for(let j of symb){
            if(i == j){
                r++;
            }
        }
    }
    return r;
}
res = search(string,symbol,res);
console.log(res)
