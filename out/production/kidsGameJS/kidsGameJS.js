if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kidsGameJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kidsGameJS'.");
}
var kidsGameJS = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toString = Kotlin.toString;
  var throwCCE = Kotlin.throwCCE;
  var math = Kotlin.kotlin.math;
  var ensureNotNull = Kotlin.ensureNotNull;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var NullPointerException_init = Kotlin.kotlin.NullPointerException_init;
  function Circle() {
    this.start = 0;
    this.last = '';
  }
  Circle.prototype.init_za3lpa$ = function (data) {
    this.createFields_za3lpa$(data);
    this.distributeFields();
  };
  Circle.prototype.createFields_za3lpa$ = function (number) {
    var tmp$, tmp$_0;
    var fields = document.getElementsByClassName('field');
    tmp$ = fields.length;
    for (var i = 0; i < tmp$; i++) {
      (tmp$_0 = fields[i]) != null ? (tmp$_0.remove(), Unit) : null;
    }
    var container = document.getElementById('container');
    for (var i_0 = 1; i_0 <= number; i_0++) {
      println(i_0);
      var html = "<div class= 'field' id='f" + i_0 + "'> " + toString(i_0) + '<\/div>';
      container != null ? (container.innerHTML = (container != null ? container.innerHTML : null) + html) : null;
    }
  };
  Circle.prototype.updateFields_za3lpa$ = function (number) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var fields = document.getElementsByClassName('field');
    var len = fields.length;
    console.log('this.start+number= ', this.start + number | 0, ' > ' + toString(len));
    if ((this.start + number | 0) > len) {
      var i = this.start + number - len - 1 | 0;
      this.last = typeof (tmp$_0 = (tmp$ = fields[i]) != null ? tmp$.innerHTML : null) === 'string' ? tmp$_0 : throwCCE();
      console.log('IF ' + toString(i) + ' e.id', this.last);
      (tmp$_1 = fields[i]) != null ? (tmp$_1.remove(), Unit) : null;
      this.start = (i + 1 | 0) >= len ? 0 : i;
    }
     else {
      var i_0 = this.start + number - 1 | 0;
      this.last = typeof (tmp$_3 = (tmp$_2 = fields[i_0]) != null ? tmp$_2.innerHTML : null) === 'string' ? tmp$_3 : throwCCE();
      console.log('Else ' + toString(i_0) + ' e.id', this.last);
      (tmp$_4 = fields[i_0]) != null ? (tmp$_4.remove(), Unit) : null;
      if ((i_0 + 1 | 0) >= len) {
        tmp$_5 = 0;
      }
       else
        tmp$_5 = i_0;
      this.start = tmp$_5;
    }
    return len - 1 | 0;
  };
  Circle.prototype.getCurrentFeilds = function () {
    var tmp$;
    var fields = document.getElementsByClassName('field');
    return ' !! ' + this.last + ' is out and ' + ((tmp$ = fields[this.start]) != null ? tmp$.innerHTML : null) + ' is start now  !!';
  };
  Circle.prototype.getWinner = function () {
    var tmp$, tmp$_0, tmp$_1;
    var fields = document.getElementsByClassName('field');
    return 'Id= ' + ((tmp$ = fields[0]) != null ? tmp$.id : null) + ' with value = ' + (typeof (tmp$_1 = (tmp$_0 = fields[0]) != null ? tmp$_0.innerHTML : null) === 'string' ? tmp$_1 : throwCCE());
  };
  var Math_0 = Math;
  Circle.prototype.distributeFields = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
    var radius = 200;
    var fields = document.getElementsByClassName('field');
    var container = document.getElementById('container');
    var width = container != null ? container.clientWidth : null;
    var height = container != null ? container.clientHeight : null;
    var angle = 0.0;
    var step = 2 * math.PI / fields.length;
    tmp$ = fields.length;
    for (var i = 0; i < tmp$; i++) {
      tmp$_1 = (tmp$_0 = fields[i]) != null ? tmp$_0.id : null;
      console.log(tmp$_1);
      var w = (tmp$_3 = (tmp$_2 = fields[i]) != null ? tmp$_2.clientWidth : null) != null ? tmp$_3 / 2 | 0 : null;
      var h = (tmp$_5 = (tmp$_4 = fields[i]) != null ? tmp$_4.clientHeight : null) != null ? tmp$_5 / 2 | 0 : null;
      tmp$_9 = width != null ? width / 2 | 0 : null;
      tmp$_8 = radius * Math_0.cos(angle);
      tmp$_7 = typeof (tmp$_6 = w) === 'number' ? tmp$_6 : throwCCE();
      var x = round(ensureNotNull(tmp$_9 != null ? tmp$_9 + (tmp$_8 - tmp$_7) : null));
      tmp$_13 = height != null ? height / 2 | 0 : null;
      tmp$_12 = radius * Math_0.sin(angle);
      tmp$_11 = typeof (tmp$_10 = h) === 'number' ? tmp$_10 : throwCCE();
      var y = round(ensureNotNull(tmp$_13 != null ? tmp$_13 + (tmp$_12 - tmp$_11) : null));
      var css = 'left:' + toString(x) + 'px;top:' + toString(y) + 'px';
      (tmp$_14 = fields[i]) != null ? (tmp$_14.setAttribute('style', css), Unit) : null;
      angle += step;
    }
  };
  Circle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Circle',
    interfaces: []
  };
  function Dice() {
    this.sides = 12;
    this.circle = new Circle();
  }
  function Dice$init$lambda(this$Dice, closure$circle) {
    return function (it) {
      if (this$Dice.sides > 1) {
        var result = this$Dice.roll();
        println('button clicked= ' + toString(result));
        this$Dice.showNumber_za3lpa$(result);
        this$Dice.sides = closure$circle.updateFields_za3lpa$(result);
      }
      this$Dice.updateCommentary();
      return Unit;
    };
  }
  Dice.prototype.init_1n6ge6$ = function (value, circle) {
    var tmp$;
    this.sides = toInt(value);
    this.circle = circle;
    var button = Kotlin.isType(tmp$ = document.getElementById('button'), HTMLButtonElement) ? tmp$ : throwCCE();
    button.addEventListener('click', Dice$init$lambda(this, circle));
  };
  Dice.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1 | 0;
    return randomNumber;
  };
  Dice.prototype.showNumber_za3lpa$ = function (number) {
    var tmp$;
    tmp$ = document.getElementById('placeholder');
    if (tmp$ == null) {
      throw NullPointerException_init();
    }
    var placeholder = tmp$;
    println('showNumber clicked= ' + toString(number));
    placeholder.innerHTML = number.toString();
  };
  Dice.prototype.updateCommentary = function () {
    var tmp$;
    tmp$ = document.getElementById('commentary');
    if (tmp$ == null) {
      throw NullPointerException_init();
    }
    var commentary = tmp$;
    commentary.innerHTML = this.circle.getCurrentFeilds();
    if (this.sides <= 1) {
      commentary.innerHTML = 'Game Over !! <\/br> ' + this.circle.getWinner() + ' is Winner !! ';
    }
  };
  Dice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dice',
    interfaces: []
  };
  function main$lambda$lambda(closure$circle, closure$dice) {
    return function (it) {
      var tmp$;
      var input = Kotlin.isType(tmp$ = document.getElementById('indata'), HTMLInputElement) ? tmp$ : throwCCE();
      var data = input.value;
      println('input changed=' + data);
      closure$circle.v.init_za3lpa$(toInt(data));
      closure$dice.v.init_1n6ge6$(data, closure$circle.v);
      return Unit;
    };
  }
  function main$lambda(closure$circle, closure$dice) {
    return function (it) {
      var tmp$;
      var child = Kotlin.isType(tmp$ = document.getElementById('child'), HTMLButtonElement) ? tmp$ : throwCCE();
      println('DOM fully loaded and parsed');
      child.addEventListener('click', main$lambda$lambda(closure$circle, closure$dice));
      return Unit;
    };
  }
  function main(args) {
    println('Hello Kotlin!');
    var dice = {v: new Dice()};
    var circle = {v: new Circle()};
    document.addEventListener('DOMContentLoaded', main$lambda(circle, dice));
  }
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
  package$game.Circle = Circle;
  package$game.Dice = Dice;
  package$game.main_kand9s$ = main;
  package$game.circleTest = circleTest;
  _.diceTest = diceTest;
  main([]);
  Kotlin.defineModule('kidsGameJS', _);
  return _;
}(typeof kidsGameJS === 'undefined' ? {} : kidsGameJS, kotlin);
