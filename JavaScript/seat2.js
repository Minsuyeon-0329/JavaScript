var memNum = prompt("입장객은 몇 명인가요?");
var colNum = prompt("한 줄에 몇 명씩 앉습니까?");

if(memNum % colNum == 0){
    rowNum = parseInt(memNum/colNum);
}else{
    rowNum = parseInt(memNum/colNum)+1;
}

// document.write("모두" + rowNum + "개의 줄이 필요합니다.");
var i,j;
document.write("<table>");
for (i=0; i<rowNum;i++){
    document.write("<tr>")
    for(j=1; j<=colNum; j++){
        seatNo = i*colNum + j;
        if(seatNo>memNum) break;
        document.write("<td>좌석"+seatNo+" </td>");
    }
    document.write("</tr>");
}
document.write("</table>")