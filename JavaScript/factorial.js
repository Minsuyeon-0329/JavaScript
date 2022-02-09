var n = prompt("숫자를 입력하세요.");
var msg="";

if (n!==null){
    var nFact =1;
    var i =1;

    while(i<=n){
        nFact *=i;
        i++;
    }
    msg = n+"! ="+nFact;
}else{
    msg="값을 입력하지 않았습니다.";
}
document.write(msg);