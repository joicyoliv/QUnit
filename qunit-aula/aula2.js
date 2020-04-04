/**
 * Teste de veracidade do resultado boolean
 */
QUnit.test("OK e NotOK", function(assert){
    var hasjQuery = window.jQuery ? true : false;

    assert.ok(hasjQuery, "Teste OK");
    assert.notOk(hasjQuery, "Teste NoOK");

})
