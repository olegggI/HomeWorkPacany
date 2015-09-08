
/**
    @param $activeLegs number of legs
    @param $wings object like {count: 2, empty: false}
    @param $tail true/false
    @return new object
 */
function GoD(activeLegs, wings, tail) {
    this.activeLegs = activeLegs;
    this.wings = wings;
    this.tail = tail;
}

GoD.prototype.live = function() {
    console.log('live bitch!');
}

var human = new GoD(2, {}, false);
var dog = new GoD(4, {}, true);
var kurica = new GoD(2, {count: 2, empty: false}, true);

dog.live();
kurica.live();
dog.run(); // error

kurica.live = function() {
    console.log('live for food!');
}