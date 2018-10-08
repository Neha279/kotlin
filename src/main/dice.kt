package game

import org.w3c.dom.HTMLButtonElement
import kotlin.browser.*
import kotlin.js.Math
import kotlin.js.Math.floor
import game.Circle;

class Dice {
    var sides = 12 // we need set the dynamic
    var circle = Circle();
    fun init(value : String, circle: Circle){

        sides = value.toInt()
        this.circle = circle;
        var button = document.getElementById("button") as HTMLButtonElement

        button.addEventListener("click", {
            if (this.sides > 1 ) {
                var result = this.roll()
                println("button clicked= " + result)
                this.showNumber(result)
                this.sides = circle.updateFields(result)
            }
            this.updateCommentary();
        })
    }

    fun roll():Int {
        var randomNumber = floor(Math.random() * this.sides) + 1
        return randomNumber
    }

    fun showNumber(number : Int) {
        var placeholder = document.getElementById("placeholder") ?: throw NullPointerException()
        println("showNumber clicked= " + number)
        placeholder.innerHTML = number.toString();


    }

    fun updateCommentary() {

        var commentary = document.getElementById("commentary") ?:throw NullPointerException()
        commentary.innerHTML = this.circle.getCurrentFeilds();
        if(this.sides <=1 ){
            commentary.innerHTML = "Game Over !! </br> " + this.circle.getWinner()  + " is Winner !! ";
        }
    }


}