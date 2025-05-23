//index.html1ファイルのjs
function ButtonClick(){
    const a = document.getElementById("Text");
    const text = a.value;
    function changeImage() {
        const imgElement = document.getElementById("myImage");
        switch (text) {
            case "1":
                imgElement.src = "画像フォルダ/1回見たら死ぬ絵.webp";
                break;
            case "2":
                imgElement.src = "画像フォルダ/doraemon.jpg"
                break;
            case "3":
                imgElement.src = "画像フォルダ/3回みたら死ぬ絵.jpg";
                break;
            case "4":
                alert("No image");
                break;
            case "5":
                imgElement.src = "画像フォルダ/5回みたら死ぬ絵.webp";
                break;
            default:
                break;
        }
    }
changeImage();
    }