var Exposer = (function () {
    var privateVariable = 10;

    var privateMethod = function (takeargs) {
        console.log('Inside a private method!');
        console.log(takeargs);
        privateVariable++;
    }

    var methodToExpose = function (takeargs, random) {
        console.log('This is a method I want to expose!');
        console.log(takeargs);
        console.log(random);
    }

    var otherMethodIWantToExpose = function () {
        privateMethod();
    }

    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
})();

Exposer.first('giveargs', 'something');        // Output: This is a method I want to expose!
// Exposer.second();       // Output: Inside a private method!
// Exposer.methodToExpose; // undefined

