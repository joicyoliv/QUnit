//CallBacks

QUnit.begin(function(details){
    console.log("Begin:",details);
});

QUnit.done(function(details){
    console.log("Done:",details);
});

QUnit.moduleStart(function(details){
    console.log(details.name, details);
});

QUnit.moduleDone(function(details){
    console.log(details.name, details);
});


QUnit.testStart(function(details){
    console.log(details);
});

QUnit.testDone(function(details){
    console.log(details);
});

QUnit.module("Modulo A",{
    beforeEach: function(assert){
        assert.ok(true, "Antes test case");
    }, afterEach: function(assert){
        assert.ok(true, "Depois test case");
    }
});

QUnit.test("test case 1", function(assert){
    assert.ok(true, "Modulo A: test case 1");
});

QUnit.test("test case 2", function(assert){
    assert.ok(true, "Modulo A: test case 2");
});

QUnit.module("Modulo B");
QUnit.test("test case 1", function(assert){
    assert.ok(true, "Modulo B: test case 1");
});

QUnit.test("test case 2", function(assert){
    assert.ok(true, "Modulo b: test case 2");
});