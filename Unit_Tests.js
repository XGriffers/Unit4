function Example1(y,z){

    var currmin = 100;

    for (var i = 0; i < z; i++){
        if(y[i] < currmin){
            currmin = y[i];
        }
    }
    return currmin;
}
function Example2(a){

    var num;

    for(var i=0; i<100; i++){
        console.log(a[i]);
    }
}

function Example3(foo){

    var a = 10;
    var b = 5;
    var found = false;

    for(i = 0; i < foo.length; i++){
        if(a == foo[i]){
            console.log("The value of a was found in the int Array");
            found = true;
        }
        else if (b == foo[i]){
            console.log("The Value of b was found in the int Array");
            found = true;
        }
    }
    if (found == false){
        console.log("None of the values were found!");
    }
    return found;
}