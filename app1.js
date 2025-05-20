//index.html1ファイルのjs
function ButtonClick(){
    function changeImage() {
        const imgElement = document.getElementById("myImage");
        imgElement.src = "画像フォルダ/ダウンロード.png";
        imgElement.style.display = "block";
    }
    const a = document.getElementById("Text");
    const text = a.value;
    switch (text) {
        case "1":
            changeImage()
            break;
        case "2":
            alert(2)
            break;
        case "3":
            alert(3)
            break;
        case "4": 
            alert(4)
            break;
        case "5":
            alert(5)
            break;
        default:
            alert("1~5の数字を入力してください");
            break;
    }
}