//Assert - Async p1

QUnit.module("Async Parte 1");

QUnit.test("Async setTimeout", function(assert){
    var done = assert.async(3);
    window.c = 0;

    setTimeout(function(){
        assert.ok(window.c == 0, "Callback 1");
        window.c++;
        done();
        setTimeout(function(){
            assert.ok(window.c === "1", "Callback 2");
            window.c++;
            done();
            setTimeout(function(){
                assert.ok(window.c == 2, "Callback 3");
                done();
            }, 500);
        }, 500);
    }, 500);

    

    
})