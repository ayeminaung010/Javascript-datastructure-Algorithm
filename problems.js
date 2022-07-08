
// sameFrequency(1234,3214);//true

function getFrequency(n){
    let str=n.toString();
    let obj={};
    for(let char of str){
        obj[char]=obj[char] ? obj[char]+1 : 1;
    }
    return obj;
}


function sameFrequency(n1,n2){
    if(n1.toString().length !== n2.toString().length){
        return false;
    }
    let f1=getFrequency(n1);
    let f2=getFrequency(n2);

    for(let key in f1){
        if(!(key in f2)){
            return false;
        }
        if(f1[key]!==f2[key]){
            return false;
        }
    }
    return true;
}


console.log(sameFrequency(12443,36144));