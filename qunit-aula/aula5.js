//Modulos
QUnit.module("Modulo 1", {
    before: function(assert){
        assert.ok(true, "Antes de executar Modulo 1 - before")
    },
    beforeEach: function(assert){
        assert.ok(true, "Antes de executar Modulo 1 - beforeEach")
    },
    after: function(assert){
        assert.ok(true, "Depois do Modulo 1 - after")
    },
    afterEach: function(assert){
        assert.ok(true, "Depois do Modulo 1 - afterEach")
    }
});

QUnit.test("teste 1-1", function(assert){
    assert.ok(true, "Resultado teste 1-1");
})

QUnit.test("teste 1-2", function(assert){
    assert.notOk(false, "Resultado teste 1-2");
})

QUnit.module("Modulo 2");

QUnit.test("teste 2-1", function(assert){
    assert.ok(true, "Resultado teste 2-1");
})

QUnit.test("teste 2-2", function(assert){
    assert.notOk(false, "Resultado teste 2-2");
})
