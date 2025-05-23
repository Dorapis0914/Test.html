//index.html1ファイルのjs
function ButtonClick(){
    function changeImage() {
        const imgElement = document.getElementById("myImage");
        switch (text) {
            case "1":
                imgElement.src = "https://lh3.googleusercontent.com/Kthiw2B3IDE-8Ef7VSmdEnbkVEFXzoTOw7o4fXqxNk1L9TcYD68pRLxzWTFbKS2Q3ogNS0Pks5Q2UM3HAG1e=s1200-rw";
                imgElement.style.display = "blcok";
                break;
            case "2":
                alert("No image")
                break;
            case "3":
                imgElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_jZlioOC4uGOWQyHfZ_ESWAD7YRfJEklng&s";
                imgElement.style.display = "blcok";
                break;
            case "4":
                alert("No image");
                break;
            case "5":
                imgElement.src = "https://i0.wp.com/toshidensetsu-ikki.com/wp-content/uploads/dabareefee.jpg?resize=620%2C500";
                imgElement.style.display = "blcok";
                break;
            default:
                break;
        }
    }
        const a = document.getElementById("Text");
        const text = a.value;
changeImage();
    }

