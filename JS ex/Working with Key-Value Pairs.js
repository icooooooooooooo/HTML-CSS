function KVP(arr) {
    let key = arr.pop();
    let dict = {};

    for (let element of arr) {
        let split = element.split(' ');
        let key = element[0];
        let value = element[1];
        
        dict[key]=value;
    }
    console.log(dict[key].value);
}
KVP([
    "3 test" ,
    "3 test1" ,
    "4 test2" ,
    "4 test3" ,
    "4 test5" ,
    "4"
])