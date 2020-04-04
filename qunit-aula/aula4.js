// Assert deepEqual e notDeepEqual

QUnit.test("Equal e NotEqual", function(assert){

    var v1 = ['um', 'dois', 'tres'];
    var v2 = ['um', 'dois', 'tres'];
    var o1 = { k1: 1, k2: 2 };
    var o2 = { k1: 1, k2: 2 };

    assert.deepEqual(v1, v2, "Teste igualdade de vetores");
    assert.notDeepEqual(v1, v2, "Teste diferença de valores");

    assert.deepEqual(o1, o2, "Teste igualdade de objetos");
    assert.notDeepEqual(o1, o2, "Teste diferença de objetos");
})