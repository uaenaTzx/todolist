 var taskCatalogue = document.getElementById("task-catalogue")
 var taskDetail = document.getElementById("task-detail")
 //绑定按钮对象
 var btnMore = document.getElementById("btnMore");
 var btnLogin = document.getElementById("btnLogin");
 //弹窗内的登录按钮
 var loginIn = document.getElementById("Login");
 var btnSubmit = document.getElementById("btnSubmit");
 //弹窗内的提交按钮
 var SubmitIn = document.getElementById("Submit");

 var title = document.getElementById("input-title")
 // 获取 <span> 元素，用于关闭弹窗 that closes the modal
 var span = document.getElementsByClassName("close");

 var modal;

 //获取任务详细信息
 function getTaskDetail(value) {
     let taskPart = taskDetail.getElementsByClassName("detail-box")
     //获取标题
     console.log(123)
     // taskPart[0].innerText = value.getElementsByTagName("span")[0].innerText
 }

 // 更多弹窗
 btnMore.onclick = function () {
     // 获取弹窗
     modal = document.getElementById('more-Modal');
     modal.style.display = "block";
 }
 //登录弹窗
 btnLogin.onclick = function () {
     // 获取弹窗
     modal = document.getElementById('login-Modal');
     modal.style.display = "block";
 }
 // 提交弹窗
 btnSubmit.onclick = function () {
     // 获取弹窗
     modal = document.getElementById('submit-Modal');
     let submitTitle = modal.getElementsByTagName('span')[0]
     if (!title.value) {
         alert("请先输入任务标题")
         return;
     }
     submitTitle.innerText = title.value
     modal.style.display = "block";
 }

 // 点击 <span> (x), 关闭弹窗
 span[0].onclick = function () {
     modal.style.display = "none";
 }
 span[1].onclick = function () {
     modal.style.display = "none";
 }
 span[2].onclick = function () {
     modal.style.display = "none";
 }


 // 在用户点击其他地方时，关闭弹窗
 window.onclick = function (event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
 //登录
 loginIn.onclick = function () {
     modal.style.display = "none";
 }
 //提交
 SubmitIn.onclick = function () {
     //获取表单数据
     let taskContent = document.getElementById("task-content")
     let timeSelect = document.getElementsByName("timeSelect")
     let typeSelect = document.getElementsByName("typeSelect")

     //创建虚拟dom对象
     let newDiv = document.createElement("div")
     let newTitleSpan = document.createElement("span")
     let newTimeSpan = document.createElement("span")
     let newContentSpan = document.createElement("span")

     //插入title的span标签
     newTitleSpan.innerText = title.value
     newDiv.appendChild(newTitleSpan)

     //插入time的span标签
     newTimeSpan.innerText = timeSelect[0].value + '.' + timeSelect[1].value + ' ' + timeSelect[2].value + ':' + timeSelect[3].value
     newDiv.appendChild(newTimeSpan)

     //插入隐藏的储存content的span标签
     newContentSpan.innerText = taskContent.value
     newContentSpan.style.display = "none"
     newDiv.appendChild(newContentSpan)

     //将新的任务插入任务目录中
     taskCatalogue.appendChild(newDiv)
     //遍历div，绑定点击事件
     //获取任务数组
     let task = [...taskCatalogue.getElementsByTagName("div")]
     task.forEach(function (value) {
         //绑定获取任务详细信息方法
        //  $(task).on('click', value, function () {
        //      value.onclick = getTaskDetail()
        //      console.log("onclick" in value)
        //  })
     })
     console.log("onclick" in task[0])
     //关闭弹窗
     modal.style.display = "none";
 }