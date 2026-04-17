function drawlink()
{
    var link = document.createElement("a");
    link.setAttribute("href", "1.html"); 
    link.setAttribute("style", "color: red");
    var div = document.getElementById("1");
    div.appendChild(link);
    link.innerHTML = " קובץ 1"; 
}
/*drawlink();*/
function DrawImage()
{
    var img = document.createElement("img");
    img.setAttribute("src", "img/tree.jpg");
    img.setAttribute("width", "200")
    img.setAttribute("height", "200");
    var div = document.getElementById("1");
    div.appendChild(img);
}
/*DrawImage();*/

function DrawImage3(imgindex)
{
    var img = document.createElement("img");
    img.setAttribute("src", "img/" + imgindex + ".jpg");
    img.setAttribute("width", "200");
    img.setAttribute("height", "200");
    var div = document.getElementById("1");
    div.appendChild(img);
}
/*DrawImage3(3);*/

function DrawImage4(imgHeight, imgWeith, imgIndex, el)
{
    var img = document.createElement("img");  
    img.setAttribute("src", "img/" + imgIndex + ".jpg");
    img.setAttribute("width", imgWeith);
    img.setAttribute("height", imgHeight);
    el.appendChild(img);
}
var div = document.getElementById("1");
/*DrawImage4("100", "200", 4, div);*/
//DrawImage4("200", "300", 3, div);

function DrawSomeImages(num)
{
    var div = document.getElementById("1");    
    for (var i = 1; i <= num; i++)
    { 
        var br = document.createElement("br");
        DrawImage3(i);
        div.appendChild(br);
    }
}
/*DrawSomeImages(5);*/
function drawlink6(linkindex, el)
{
    var link = document.createElement("a");
    link.setAttribute("href", linkindex + ".html");
    link.setAttribute("style", "color: red");
    link.innerHTML = " go to" + linkindex + ".html";
    el.appendChild(link);  
    el.appendChild(document.createElement("br"));
}

function drawsomelink6 (num)
{
    var div = document.getElementById("1");
    for (var i = 1; i <= num; i++)
    { drawlink6(i, div ) }
    
}
//drawsomelink6(5)

function drawrow(rowindex, imgheight, imgwidth, el)
{
    var tr = document.createElement("tr"); 
    var td1 = document.createElement("td");
    var td2 = document.createElement("td2");
    tr.appendChild(td1);
    tr.appendChild(td2);
    DrawImage4(imgheight, imgwidth, rowindex, td1);
    drawlink6(rowindex, td2);
    el.appendChild(tr);
}
//drawrow(2, "200", "200", div)

function drawtable(row)
{
    var table = document.createElement("table");
    for (var i = 1; i <= row; i++)
    {
        drawrow(i, "100", "300", table);
    }
    div.appendChild(table);
}
drawtable(4);




















