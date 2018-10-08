if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kidsGameJS_test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kidsGameJS_test'.");
}
if (typeof kidsGameJS === 'undefined') {
  throw new Error("Error loading module 'kidsGameJS_test'. Its dependency 'kidsGameJS' was not found. Please, check whether 'kidsGameJS' is loaded prior to 'kidsGameJS_test'.");
}
var kidsGameJS_test = function (_, Kotlin, $module$kidsGameJS) {
  'use strict';
  var Circle = $module$kidsGameJS.game.Circle;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Dice = $module$kidsGameJS.game.Dice;
  function circleTest() {
  }
  circleTest.prototype.testCircle = function () {
    var circle = new Circle();
    circle.createFields_za3lpa$(10);
  };
  circleTest.prototype.testCircleUpdate = function () {
    var circle = new Circle();
    circle.updateFields_za3lpa$(6);
  };
  circleTest.prototype.testshowNumber = function () {
    var circle = new Circle();
    circle.getCurrentFeilds();
  };
  circleTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'circleTest',
    interfaces: []
  };
  function diceTest() {
    this.dice = new Dice();
    this.circle = new Circle();
  }
  diceTest.prototype.testDice = function () {
  };
  diceTest.prototype.testRoll = function () {
  };
  diceTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'diceTest',
    interfaces: []
  };
  var package$game = _.game || (_.game = {});
  package$game.circleTest = circleTest;
  _.diceTest = diceTest;
  Kotlin.defineModule('kidsGameJS_test', _);
  return _;
}(typeof kidsGameJS_test === 'undefined' ? {} : kidsGameJS_test, kotlin, kidsGameJS);
