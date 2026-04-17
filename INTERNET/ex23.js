var grades = [90, 80, 70, 60, 50]
function average(grades)
{
    var sum = 0;
    for (var i = 0; i < grades.length; i++)
    {
        sum += grades[i];
    }
    alert(sum / grades.length)
}
 function createbutton() 
{
    var button = document.createElement("input");
     button.setAttribute("type", "button");
     button.setAttribute("value", "click me");
     button.setAttribute("onclick", "average(grades)");
     var div = document.getElementById("button");
     div.appendChild(button);
}
createbutton();
var imgindex = []