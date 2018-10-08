package game

import org.w3c.dom.get
import kotlin.browser.*

public class Circle {

    var start = 0
    var last = ""
    fun init(data: Int) {
        this.createFields(data)
        this.distributeFields()
    }

    fun createFields(number: Int) {

        var fields = document.getElementsByClassName("field")
        for (i in 0 until fields.length) { //remove them before create
            fields.get(i)?.remove()
        }
        var container = document.getElementById("container")
        for (i in 1..number) {
            println(i)
            var html = "<div class= 'field' id='f$i'> " + i + "</div>"
            container?.innerHTML = container?.innerHTML + html
        }
    }

    fun updateFields(number: Int): Int {

        var fields = document.getElementsByClassName("field");
        var len = fields.length;
        console.log("this.start+number= ", this.start + number, " > " + len)
        if (this.start + number > len) {
            var i = (start + number - len) - 1
            this.last = fields.get(i)?.innerHTML as String
            console.log("IF " + i + " e.id", this.last)
            fields.get(i)?.remove()
            this.start = if (i + 1 >= len)
                0
            else
                i;
        } else {
            var i = this.start + number - 1
            this.last = fields.get(i)?.innerHTML as String
            console.log("Else " + i + " e.id", this.last)
            fields.get(i)?.remove()
            this.start = if (i + 1 >= len) {
                0
            }
            else
                i
        }
        return len - 1
    }

    fun getCurrentFeilds(): String {
        var fields = document.getElementsByClassName("field")
        return " !! " + this.last + " is out and " + fields.get(this.start)?.innerHTML + " is start now  !!"
    }

    fun getWinner(): String {
        var fields = document.getElementsByClassName("field")
        return "Id= " + fields.get(0)?.id + " with value = "+ fields.get(0)?.innerHTML as String
    }

    fun distributeFields() {
        var radius = 200;
        var fields = document.getElementsByClassName("field");
        var container = document.getElementById("container");
        var width = container?.clientWidth;
        var height = container?.clientHeight;
        var angle: Double = 0.0;
        var step = (2 * kotlin.math.PI) / fields.length;
        for (i in 0 until fields.length) {
            console.log(fields.get(i)?.id) //second console output
            val w: Int? = fields.get(i)?.clientWidth?.div(2);
            var h: Int? = fields.get(i)?.clientHeight?.div(2);
            var x = kotlin.math.round(width?.div(2)?.plus(radius * kotlin.math.cos(angle) - w as Int)!!);
            var y = kotlin.math.round(height?.div(2)?.plus(radius * kotlin.math.sin(angle) - h as Int)!!);
            var css: String = "left:" + x + "px;top:" + y + "px";
            fields.get(i)?.setAttribute("style", css);
            angle += step;
        }

    }
}
