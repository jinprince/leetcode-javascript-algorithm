function re(str){
    str+='';
    return str.split('').reverse().join('');
}
function toRMB(num){
    var temp="";
    var str=re(num);
    for(var i=1;i<str.length;i++){
        temp+=str[i-1];
        if(i%3==0&&i!=str.length){
            temp+=',';
        }
    }
    return re(temp);
}
console.log(toRMB(12345678));


// var name = 10; var obj = {} ;
// console.log(name + 10 + obj )