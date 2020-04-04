//Assert - Async p2

QUnit.module("Async Parte 2");

QUnit.test("Async ajax", function(assert){
    var hasjQuery = window.jQuery ? true : false;
    assert.ok(hasjQuery, "Tem LIB jQuery");

    if(hasjQuery){
        var done = assert.async(1);
        var cepExperado = {"status":200,"ok":true,"code":"06233-030","state":"SP","city":"Osasco","district":"Piratininga","address":"Rua Paula Rodrigues","statusText":"ok"};
    
        $.ajax({
            url : "https://apps.widenet.com.br/busca-cep/api/cep.json?code=06233-030",
            type: "GET",
            dataType: "json",
            success: function(data){
                assert.deepEqual(data, cepExperado, "CEP Igual");
            },
            error: function(err){
                assert.throws(function (){
                    throw "Erro";
                }, cepExperado, JSON.stringify(err));
            },
            complete: function(){
                done();
            }
        })
    }
})