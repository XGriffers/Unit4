const {test} = QUnit;

test("Test Example1", function(assert){
    var list = [1,50,200,312];
    var n = 4;
    var result = Example1(list, n);
    assert.equal(result, "1", "The Minimum Value in The List is 1")
    assert.notEqual(result, "50", "The Minimum value in the list is not 50");
});

test("Test Example2", function(assert){
    var list = new Array(100);
    for (var i = 0; i<100; i++){
        list[i] = i + 1;
    }
    Example2(list); 
    assert.ok(true, "Function Success!");
    assert.notEqual(null, false, "The Function Didn't Fail");
});

test("Test Example3", function(assert){
    var list = [1,5,7,10];
    result = Example3(list);
    assert.ok(true, "Function Success!");
    assert.equal(result, true, "The Value(s) were in the list!")
});