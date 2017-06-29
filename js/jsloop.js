var n=Number(prompt ('n='));
document.write('"for" n=' + fib(n));

function fib(n){
    var a=0, b=1;
    for ( var i=1; i<n; i++){
     var c=a+b;
     a=b;
     b=c;
    }
    return b;
}