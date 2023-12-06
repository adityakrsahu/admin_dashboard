async function show(){
    let data = await fetch('http://localhost:3000/student');
    let response = await data.json();
    let len = response.length
    document.getElementById('student').innerHTML = len;

    let data1 = await fetch('http://localhost:3000/teachers');
    let response1 = await data1.json();
    let len1 = response1.length
    document.getElementById('teachers').innerHTML = len1;

    document.getElementById('totaluser').innerHTML = len+len1
}