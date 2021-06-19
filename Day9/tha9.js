var person = {  
    name: "James Smith",
    hello: function(thing) {
      console.log(`${this.name}says hello${thing}` );
    }
  }
  
  person.hello("world");  // output: "James Smith says hello world"
  var helloFunc = person.hello.bind({ name: "Jim Smith" });
  

 
 
  function personContainer() {
    var person = {  
       name: "James Smith",
       hello: function() {
         console.log(`${this.name} says hello `);
       }
    }
    person.hello.apply(person);
    person.hello.call(person);
  }
  personContainer("world", "mars");



  
  