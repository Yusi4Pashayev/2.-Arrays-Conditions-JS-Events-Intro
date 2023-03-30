// calculation

document.getElementById("btn").addEventListener("click", function () {
    group();
});

function group() {
    var input_element = document.getElementById("group").value;
    var group_name = input_element.slice(0.2);
    console.log(group_name);


    if (group_name.slice(0, 1) >= 'a' && group_name.slice(0, 1) <= 'z') {
        switch (group_name.slice(1, 2)) {
            case "1":
                document.getElementById("result").innerHTML = "Bu qrup seher qrupudur"
                document.getElementById("result").style.backgroundColor = "#fff";
                document.getElementById("bg").style.backgroundImage = "url('/assets/Images/a.jpg')";
                break;
            case "2":
                document.getElementById("result").innerHTML = "Bu qrup gunorta qrupudur"
                document.getElementById("result").style.backgroundColor = "#fff";
                document.getElementById("bg").style.backgroundImage = "url('/assets/Images/b.jpg')";
                break;
            case "3":
                document.getElementById("result").innerHTML = "Bu qrup axsam qrupudur"
                document.getElementById("result").style.backgroundColor = "#fff";
                document.getElementById("bg").style.backgroundImage = "url('/assets/Images/c.jpg')";
                break;
            default:
                document.getElementById("result").innerHTML = "qrup nomresini dogru daxil edin!!"

        }
    }
    else {
        document.getElementById("result").innerHTML = "qrup nomresini dogru daxil edin!!"
    }

}
