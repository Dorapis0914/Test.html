//index.html1ファイルのjs
function ButtonClick(){
    const a = document.getElementById("Text");
    const text = a.value;
    function changeImage() {
        const imgElement = document.getElementById("myImage");
        switch (text) {
            case "1":
                imgElement.src = "画像フォルダ/1回見たら死ぬ絵.webp";
                imgElement.style.display = "block";
                break;
            case "2":
                imgElement.src = "画像フォルダ/doraemon.jpg"
                imgElement.style.display = "block";
                break;
            case "3":
                imgElement.src = "画像フォルダ/3回みたら死ぬ絵.jpg";
                imgElement.style.display = "block";
                break;
            case "4":
                alert("No image");
                break;
            case "5":
                imgElement.src = "画像フォルダ/5回みたら死ぬ絵.webp";
                imgElement.style.display = "blcok";
                break;
            default:
                break;
        }
    }
changeImage();
    }

