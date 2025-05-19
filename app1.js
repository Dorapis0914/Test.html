//index.html1ファイルのjs
function ButtonClick(){
    const a = document.getElementById("Text");
    const text = a.value;
    switch (text) {
        case "1":
            location.replace("https://www.google.com/imgres?q=1%E5%9B%9E%E3%81%BF%E3%81%9F%E3%82%89%E6%AD%BB%E3%81%AC%E7%B5%B5&imgurl=https%3A%2F%2Fi0.wp.com%2Ftoshidensetsu-ikki.com%2Fwp-content%2Fuploads%2Fdageefee.jpg%3Fresize%3D474%252C640&imgrefurl=https%3A%2F%2Ftoshidensetsu-ikki.com%2Fhorror%2Fcurse-picture&docid=34IA2iIQnehhoM&tbnid=zp34Z2fSh2rXQM&vet=12ahUKEwj1w6P54K-NAxV2ka8BHU_PJlEQM3oECF0QAA..i&w=474&h=640&hcb=2&ved=2ahUKEwj1w6P54K-NAxV2ka8BHU_PJlEQM3oECF0QAA")
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