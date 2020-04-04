//Only - somente o teste especifico

QUnit.module("Modulo A");
QUnit.test("teste A-1", function(assert){
    assert.ok(true, "Resultado teste A-1")
})

QUnit.only("teste A-2", function(assert){
    assert.notOk(false, "Resultado teste A-2")
})

QUnit.module("Modulo B");
QUnit.test("teste B-1", function(assert){
    assert.ok(true, "Resultado teste B-1")
})

QUnit.test("teste B-2", function(assert){
    assert.notOk(false, "Resultado teste B-2")
})