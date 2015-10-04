describe("Application", function() {
  var world;
  var fibonacci;

  beforeEach(function() {
    world = new World();
    esult = fibonacci(20);
  });

    it("should return the String 'Hello World'", function() {

    	expect(world.giveWorld()).toEqual("Hello World");
  	});

    it("should return the 20th element of the fibonacci", function(){

    	expect(fibonacci).toEqual(6765);
    });

    it("should return the 13th element of the fibonacci", function(){
    	expect(fibonacci.getElement(12)).toEqual(233);
    });
});

