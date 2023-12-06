async function fil(){
    let fillselect = document.getElementById('fillselect').value;
    let fillname = document.getElementById('fillname').value;

    let data = await fetch('http://localhost:3000/student');
    let response = await data.json();

    if(fillselect === "name"){
        let st = response.filter((a) => a.name === fillname);
        let st1 = st.map((a) => `<table border="1px" cellpadding="20px" align="center">
            <tr>
                <td width="30px">${a.id}</td>
                <td  width="200px">${a.name}</td>
                <td  width="200px">${a.email}</td>
                <td  width="150px">${a.mobile}</td>
                <td  width="150px">${a.address}</td>
                <td  width="150px">${a.password}</td>
                <td  width="150px">${a.role}</td>
            </tr>
        </table><hr>`)
            .join(" ")
        document.getElementById("filtering").innerHTML = st1;
    }
    else if(fillselect === "email"){
        let st = response.filter((a) => a.email === fillname);
        let st1 = st 
            .map((a) => `<table border="1px" cellpadding="20px" align="center">
                <tr>
                    <td width="30px">${a.id}</td>
                    <td  width="200px">${a.name}</td>
                    <td  width="200px">${a.email}</td>
                    <td  width="150px">${a.mobile}</td>
                    <td  width="150px">${a.address}</td>
                    <td  width="150px">${a.password}</td>
                    <td  width="150px">${a.role}</td>
                </tr>
            </table><hr>`)
            .join(" ")
        document.getElementById("filtering").innerHTML = st1;
    }
    else if(fillselect === "mobile"){
        let st = response.filter((a) => a.mobile === fillname);
        let st1 = st 
            .map((a) => `<table border="1px" cellpadding="20px" align="center">
                <tr>
                    <td width="30px">${a.id}</td>
                    <td  width="200px">${a.name}</td>
                    <td  width="200px">${a.email}</td>
                    <td  width="150px">${a.mobile}</td>
                    <td  width="150px">${a.address}</td>
                    <td  width="150px">${a.password}</td>
                    <td  width="150px">${a.role}</td>
                </tr>
            </table><hr>`)
            .join(" ")
        document.getElementById("filtering").innerHTML = st1;
    }
    else if(fillselect === "address"){
        let st = response.filter((a) => a.address === fillname);
        let st1 = st 
            .map((a) => `<table border="1px" cellpadding="20px" align="center">
                <tr>
                    <td width="30px">${a.id}</td>
                    <td  width="200px">${a.name}</td>
                    <td  width="200px">${a.email}</td>
                    <td  width="150px">${a.mobile}</td>
                    <td  width="150px">${a.address}</td>
                    <td  width="150px">${a.password}</td>
                    <td  width="150px">${a.role}</td>
                </tr>
            </table><hr>`)
            .join(" ")
        document.getElementById("filtering").innerHTML = st1;
    }
    else if(fillselect === "password"){
        let st = response.filter((a) => a.password === fillname);
        let st1 = st 
            .map((a) => `<table border="1px" cellpadding="20px" align="center">
                <tr>
                    <td width="30px">${a.id}</td>
                    <td  width="200px">${a.name}</td>
                    <td  width="200px">${a.email}</td>
                    <td  width="150px">${a.mobile}</td>
                    <td  width="150px">${a.address}</td>
                    <td  width="150px">${a.password}</td>
                    <td  width="150px">${a.role}</td>
                </tr>
            </table><hr>`)
            .join(" ")
        document.getElementById("filtering").innerHTML = st1;
    }
}
