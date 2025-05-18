function Namebutton() {
    const text = document.getElementById("sample");
    const text2 = document.getElementById("sample2");
    const s = text.value;//.取得した要素に.valueの拡張子をつける
    const b = text2.value;//"
    alert(Number(s)+Number(b)); //Numberで数値型にする
}