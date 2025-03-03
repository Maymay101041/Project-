function selectCourse(courseName) 
{
    const fullname = document.getElementById("fullname").value;
    const section = document.getElementById("section").value;
    const result = "ชื่อ-สกุล: " + fullname + " หน่วยงาน: " + section + " หลักสูตรที่เลือก: " + courseName;
   
    document.getElementById('result').innerText = result;
}