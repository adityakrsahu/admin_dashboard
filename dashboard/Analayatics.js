
function show(){
    let naam = document.getElementById('naam').value;
    let ema = document.getElementById('email').value;
    let num = document.getElementById('num').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    let  add = document.getElementById('add').value;
    let  ch = document.getElementById('ch').value;

    let insert = {
        name:naam,
        email:ema,
        mobile:num,
        password:pass,
        cpassword:cpass,
        address:add,
        role:ch
    }

    switch(ch){
        case "student":
            fetch('http://localhost:3000/student',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(insert)
            }).then(alert("registered student"))
            break;
        case "teachers":
            fetch('http://localhost:3000/teachers',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(insert)
            }).then(alert("registered teachers"))
            break;
        case "choose your role":
            alert("please select role");
            break;
    }
}

async function show1(){
    let data = await fetch('http://localhost:3000/student');
    let output = await data.json();
    let foutput =document.getElementById('show');
    foutput.innerHTML=output.map(a=>`
    <table border="1px" cellpadding="20px" align="center">
    <tr>
        <td width="30px">${a.id}</td>
        <td  width="200px">${a.name}</td>
        <td  width="200px">${a.email}</td>
        <td  width="150px">${a.mobile}</td>
        <td  width="150px">${a.address}</td>
        <td  width="150px">${a.password}</td>
        <td  width="150px">${a.role}</td>
        <td  width="65px" onclick="del(${a.id})" bgcolor="red">DELETE</td>
        <td  width="65px" onclick="upd(${a.id})" bgcolor="blue">UPDATE</td>
    </tr>
</table><hr>`).join(" ")
}
function del(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method:"delete"
    }).then(alert("delete"));
}

let storeid = 0
function upd(id){
    storeid = id; 
    document.getElementById('show2').style.display="block";
}
function update(){
    let naam = document.getElementById('naam1').value;
    let ema = document.getElementById('email1').value;
    let num = document.getElementById('num1').value;
    let pass = document.getElementById('pass1').value;
    let cpass = document.getElementById('cpass1').value;
    let  add = document.getElementById('add1').value;
    let  ch = document.getElementById('ch1').value;

    let insert = {
        name:naam,
        email:ema,
        mobile:num,
        password:pass,
        cpassword:cpass,
        address:add,
        role:ch
    }
    fetch(`http://localhost:3000/student/${storeid}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(insert)
    }).then(alert("update"))   
}
