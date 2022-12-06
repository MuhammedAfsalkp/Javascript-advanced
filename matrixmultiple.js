let a=[
    [1,2,3],
    [4,5,6]
]
let b=[
    [7,8],
    [9,10],
    [11,12]
]
console.log(a[0])

let ar=a.length;
let br=b.length;
let ac=a[0].length;
let bc=b[0].length;
let c=new Array(ar);

if(ac != br){
    console.log("Not possible");
    return;
}

for(let i=0; i<ar; i++){
    c[i]=new Array(bc);
    for(let j=0; j<bc; j++){
        c[i][j]=0;
        for(let k=0;  k<ac; k++){
            c[i][j] += a[i][k] * b[k][j]
        }

    }

}
console.log(c)

