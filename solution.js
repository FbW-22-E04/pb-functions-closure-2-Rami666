function test() {
    let a;
    console.log(a);
    console.log(foo());
     
    a = 1;
    function foo() {
       return 2;
    }
  }
  
  test(); // 2



  let a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

const firstResult = someFunction(9);
const result = firstResult(2);

console.log(someFunction)