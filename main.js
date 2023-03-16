


function add() {
    var item = document.getElementById("item").value
    var quantity = document.getElementById("quantity").value
    var list = document.getElementById("Grocery_List")

    if (item === " ", quantity === " ") {
        alert("Please enter item and quantity")

    } else {
        var li = document.createElement("li")
        li.innerHTML = item + "--" + quantity
        list.appendChild(li)
        document.getElementById("item").value = " "
        document.getElementById("quantity").value = " "
        
    }

}

