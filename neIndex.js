var a= new Array();

function savejob(){
    if(document.getElementById("mycheck").checked ==false){
    var task= document.getElementById("txttask").value;
    a.push(task);
     document.getElementById("listtask").innerHTML=buildArrToText(a);}
   else if(document.getElementById("mycheck").checked ==true)
    markdone();
}

  
function buildArrToText(mangCv){
    var str="";
    for(var i=0; i<mangCv.length;i++){
        str+= (i+1) + ")"+" "+ mangCv[i] + " " +"</br>";
        console.log(str);
    }
    return str;
}
    

function markdone(){
    //document.getElementById("mycheck").checked =true;
    //alert("bạn có muốn đánh dấu công việc đã hoàn thành trong danh sách nhập?");
  // var i=prompt("nhập vào công việc mà bạn muốn đánh dấu là Done:");
   var task= document.getElementById("txttask").value;
  task+=" "+"<b style='color:red'>Done</b>";
  a.push(task);
   document.getElementById("listtask").innerHTML=buildArrToText(a);
}
   
   
function editmark(){
//document.getElementById("mycheck").checked =true;
    alert("bạn có muốn đánh dấu công việc đã hoàn thành trong danh sách ?");
   var i=prompt("nhập vào công việc mà bạn muốn đánh dấu là Done:");
   a[(i-1)]+=" "+"<b style='color:red'>Done</b>" ;
   document.getElementById("listtask").innerHTML=buildArrToText(a);
}

function deltask(){
     if(a[0]==null)
    alert("danh sách rỗng. Bạn phải nhập vào để xóa");
    else{
    alert("bạn có muốn xóa công việc trong danh sách ? ");
    var vitri=prompt("nhập vào công việc mà bạn muốn xóa:");
   a.splice((vitri-1),1);
     
    console.log(a);
    document.getElementById("listtask").innerHTML=buildArrToText(a);
   
}
}

function totaltask(){
    var t=0;
    
    for(var i=0;i<a.length;i++)
    {
        if(a[i]==null)
           break;
    else
    t=t+1;
    }
document.writeln("tổng số công việc trong danh sách là: "+t);
    document.getElementById("myjob").innerHTML= t;
         //?/////////////
}



