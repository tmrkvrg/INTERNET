
//function DrawImage(index, el)
//{
//    var img = document.createElement("img");
//    img.src = "Images/" + index + ".jpg";
//    img.width = 100;
//    img.height = 100;
//    el.appendChild(img);
//}
//function DrawTable(arr) {
//    var container = document.getElementById("1");
//    container.innerHTML = "";
//    for (var i = 0; i < arr.length; i++)
//    {
//        var rowDiv = document.createElement("div");
//        var cellDiv = document.createElement("div");
//        DrawImage(arr[i], cellDiv);
//        rowDiv.appendChild(cellDiv);
//        container.appendChild(rowDiv);
//    }
//}
//DrawTable([3, 2, 2, 3, 1]);


function DrawTable7(arr) {
    var el = document.getElementById("2");
    el.innerHTML = ""; 
    var rowText = document.createElement("div");
    rowText.setAttribute("style", "display: flex;");
    var rowImages = document.createElement("div");
    rowImages.setAttribute("style", "display: flex;");
    for (var i = 0; i < arr.length; i += 3)
    {
        var textDiv = document.createElement("div");
        textDiv.innerHTML = arr[i]; 
        textDiv.setAttribute("style", "border: 1px solid black; flex: 1; text-align: center; background-color: darkblue; color: white; padding: 10px;");
        rowText.appendChild(textDiv);
        var imgDiv = document.createElement("div");
        imgDiv.setAttribute("style", "border: 1px solid black; flex: 1; text-align: center; padding: 10px;");
        var img = document.createElement("img");
        img.setAttribute("src", "Images/" + arr[i + 1]);
        img.setAttribute("width", arr[i + 2]);
        img.setAttribute("height", arr[i + 2]);
        imgDiv.appendChild(img);
        rowImages.appendChild(imgDiv);
    }
    el.appendChild(rowText);
    el.appendChild(rowImages);
}
var data7 = [
    "dolphin", "1.jpg", "100",
    "elephant", "2.jpg", "200",
    "rabbit", "3.jpg", "100",
    "giraffe", "4.jpg", "200"   ];

DrawTable7(data7);
