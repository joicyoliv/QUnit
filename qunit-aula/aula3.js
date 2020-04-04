//Assert equal e notEqual

QUnit.test("Equal e NotEqual", function(assert){

    var a = 1;
    var b = "1";

    assert.equal(a, b, "Teste =");
    assert.notEqual(a, b, "Teste !=");
    
    assert.strictEqual(a, b, "Teste identico");
    assert.notStrictEqual(a, b, "Teste não identico");
})