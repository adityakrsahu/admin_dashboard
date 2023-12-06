async function show(){
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

    </tr>
</table><hr>`).join(" ")
}