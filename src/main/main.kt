package game;


import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

fun main (args: Array<String>){
    println("Hello Kotlin!");
    var dice = Dice();
    var circle = Circle();

    document.addEventListener("DOMContentLoaded", callback = {

        val child = document.getElementById("child") as HTMLButtonElement
        println("DOM fully loaded and parsed");

        child.addEventListener("click", {
            val input = document.getElementById("indata") as HTMLInputElement
            val data = input.value;
            println("input changed=" + data)
            circle.init(data.toInt());
            dice.init(data, circle);

        })
    });

}



