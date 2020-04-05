// Assert - Expect

QUnit.module("Assert Expect");

QUnit.test("Async Assert Expect", function(assert){
    assert.expect(3); // verifica a quantidade de testes feitos

    var done = assert.async(2);

    setTimeout(function (){
        assert.ok(true, "teste 1 ok");
        done();
    })

    setTimeout(function (){
        assert.ok(true, "teste 2 ok");
        done();
    })
})