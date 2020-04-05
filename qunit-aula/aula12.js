// Nested Modules

QUnit.module("Modulo Pai 1", function(hooks){
    hooks.beforeEach(function(assert){
        assert.ok(true, "beforeEach Pai 1")
    })

    hooks.afterEach(function(assert){
        assert.ok(true, "afterEach Pai 1")
    })

    QUnit.test("teste pai 1", function(assert){
        assert.ok(true, "teste pai 1")
    })

    QUnit.module("Modulo Filho 1", function(hooks){
        hooks.beforeEach(function(assert){
            assert.ok(true, "beforeEach Filho 1")
        })
    
        hooks.afterEach(function(assert){
            assert.ok(true, "afterEach Filho 1")
        })
    
        QUnit.test("teste Filho 1", function(assert){
            assert.ok(true, "teste Filho 1")
        })
    })

    QUnit.module("Modulo Filho 2", function(hooks){
        hooks.beforeEach(function(assert){
            assert.ok(true, "beforeEach Filho 2")
        })
    
        hooks.afterEach(function(assert){
            assert.ok(true, "afterEach Filho 2")
        })
    
        QUnit.test("teste Filho 2", function(assert){
            assert.ok(true, "teste Filho 2")
        })
    })
})

QUnit.module("Modulo Pai 2", function(hooks){
    hooks.beforeEach(function(assert){
        assert.ok(true, "beforeEach Pai 2")
    })

    hooks.afterEach(function(assert){
        assert.ok(true, "afterEach Pai 2")
    })

    QUnit.test("teste pai 2", function(assert){
        assert.ok(true, "teste pai 2")
    })

    QUnit.module("Modulo Filho 1", function(hooks){
        hooks.beforeEach(function(assert){
            assert.ok(true, "beforeEach Filho 1")
        })
    
        hooks.afterEach(function(assert){
            assert.ok(true, "afterEach Filho 1")
        })
    
        QUnit.test("teste Filho 1", function(assert){
            assert.ok(true, "teste Filho 1")
        })
    })

    QUnit.module("Modulo Filho 2", function(hooks){
        hooks.beforeEach(function(assert){
            assert.ok(true, "beforeEach Filho 2")
        })
    
        hooks.afterEach(function(assert){
            assert.ok(true, "afterEach Filho 2")
        })
    
        QUnit.test("teste Filho 2", function(assert){
            assert.ok(true, "teste Filho 2")
        })
    })
})