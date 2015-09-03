/**
 * Created by Hernan Y.Ke on 2015/9/2.
 */
var expect  = require('chai').expect;
var starWars = require('./index');

describe('star',function(){
    describe('all', function(){
        it("all",function(){
            expect(starWars.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array){
                return array.every(function(item){
                    return typeof item === 'string';
                });

            }
        });
        it("should contain string", function(){
            expect(starWars.all).to.include('Watto')
        });
        it("should contain random string", function(){
            var randomstring = starWars.random();
            expect(starWars.all).to.not.include(randomstring);
        });
    });

    it('work', function(){
        expect(true).to.be.true;
    })
})

