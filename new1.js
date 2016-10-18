


// khia bao doi quan ly todo
var taskManager = {
    // danh sach cong viec hien tai
    ListTask: new Array(),

    // method add 1 cong viec vao danh sach cong viec hien tai
    Add: function (name, status) {
        var taskToAdd = {
            name: name,
            id: this.ListTask.length,
            status: status,
        };



        this.ListTask.push(taskToAdd);



    },
    //filter de lay name trong ListTask de so sanh(tim kiem)=>..
    GetIndex: function (id) {
        for (var i = 0; i < this.ListTask.length; i++) {
            if (this.ListTask[i].id == id)
                return i;

        }


        //neu danh sach thu i trung vs ten nhap vao thi lay ten do.





    },
    Edit: function (id) {
        var i = this.GetIndex(id);
        this.ListTask[i].name = document.getElementById("txttask").value;
    },

    // function Del(names)  -> Del('abc')
    Del: function (id) {

        console.log('id:' + id);


        //  console.log('i='+i);
        this.ListTask.splice(this.GetIndex(id), 1);

    },


    // return;
    // đoaạn code này ko có ý nghĩa gì hết
    // khai báo i để làm gì
    //   var i;

    //cái điều kiện trong lệnh if là vô nghĩa, nó ko phải là 1 điều kiện

    // vậy tại sao nó vẫn xóa dc, tại vì lúc đó i = 0;
    // và cái điều kiện trong cái lệnh if nó luôn đúng, tại vì nó chỉ là 1 cái chuỗi, và nó ko dc so sánh với cái j hết
    // => lúc đó mặc định nó sẽ kiểm tra not null (có giá trị -> true, ngược lại false)
    //this.ListTask.splice(i, 1);

    //Nhỏ hiểu ko?

    // OKie, hôm bữa a có chỉ e rồi
    /*
    Giải thuật chung cho bài toán này là gì?
    - Xóa: muốn xóa 1 phần tử thì chỉ cần tìm phẩn từ đó ra trong list -> rồi xóa nó
    Nhỏ hiểu cái này chưa?ok nhung ma e chua hieu cai dieu kien de lay phan tu dang chon
    -> thì e chỉ cần lấy theo tên cv là dc -> dk alf: cv có tên = tên dc chọn. cái này e có lm rồi. ý e là xóa mà k chon ten moi a
    -> đâu, chỉ a cái lấy cv theo tên đâu?> ý a là cho nhập vào một công việc rồi xóa nó đi p k???
    -> a có 1 cái tên -> a muons e lấy nó ra từ ds cv?
     */

    Print: function () {
        document.getElementById("listtask").innerHTML = buildArrToText(this.ListTask);

    }
};





//ham dat dieu kien de lay ten cong viec duoc chon tu danh sach

// them cong viec vao danh sach
function AddJob() {
    /*  //var a = new Array();
      //ListTask: a, b, c
      //textbox: dang
      console.log('start');
      console.log('t=' +taskManager.ListTask);
      console.log('length:'+ taskManager.ListTask.length);
      for (var i = 0; i < taskManager.ListTask.length; i++) {
          console.log('i=' +i);
          
          a = document.getElementById("txttask").value; //
          taskManager.Add(a, i);
  
  
      }
      console.log('end');
  
      //Listask: a, b, c, dang,dang,dang
      */
    var a = document.getElementById('txttask').value;
    var tt = '';
    if (document.getElementById("mycheck").checked === false)
        tt = 'NEW';
    if (document.getElementById("mycheck").checked === true)
        tt = 'DONE';
    taskManager.Add(a, tt);


}


//hien thi danh sach cong viec.


//fomat danh sach
function buildArrToText(mangCv) {
    var str = "";
    for (var i = 0; i < mangCv.length; i++) {

        str += `${mangCv[i].name} - ${mangCv[i].status} <button onclick = "taskManager.Del('${mangCv[i].id}')" > Delete </button>
        <button onclick="taskManager.Edit('${mangCv[i].id}')" > Edit </button> <button onclick="doneTask('${mangCv[i].id}')" > Done </button>
        <button onclick="insert('${mangCv[i].id}')" >Insert </button></br></br>`;
        // cái này dùng string template, nằm trong dấu `` ( là dấu gần số 1 trên bàn phím á)
        // ${mangCv[i].name} -> in ra gí trị cảu biến
        // "delTask('${mangCv[i].name}')" -> in ra: "delTask('congviec 1')"


        //str += "" + mangCv[i].name + " - " +  mangCv[i].status + " " + `<button onclick = ${delTask(mangCv[i].name)} >Delete</button>`+" "+
        //  '<button onclick = "taskManager.Edit()">Edit</button>'+" "+'<button onclick="taskManager.Insert()">Insert</button>'+" "+"Done:"+
        //  '<input type="checkbox" onclick="ConvertStatus">'+" "+"</br>"+"</br>";


    }
    return str;
}
// delete cong viec tu danh sach


// luu lai danh sach sau khi thay doi cong viec
//function Edit() {
//viet lai ham EdieIndex de lay vi tri khi click vao nut Edit=>tu vi tri suy ra ten va trang thai cua dong do.
// neu nhu ten thi show len ham nhap ma khong lam thay doi vi tri roi thay doi ten cong viec roi save lai>>Ok.
// con doi voi trang thai thi chi can sua lai trang thai thanh Done la ok...........>>>>>>nut Done
function doneTask(id) {
    var i = taskManager.GetIndex(id);
    taskManager.ListTask[i].status = 'DONE';


}

/*function insert(id) {
    var tam = taskManager.GetIndex(id);

    for (i = 0; i < taskManager.ListTask.length + 1; i++) {
        taskManager.ListTask[i++] = taskManager.ListTask[i];
        taskManager.ListTask[i++].id = taskManager.ListTask[i].id;

    }
    taskManager.ListTask[tam] = AddJob();


}*/


