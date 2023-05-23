function sendEmail() {
    var paras = {
      name : document.getElementById("FirstName").value,
      email : document.getElementById("email").value,
      message : document.getElementById("textContent").value,
      phoneNumber : document.getElementById("phoneNumber").value,
    };

    const serviceId = "service_dxmd8ks";
    const templateId = "template_wffbdbt";
  emailjs.send(serviceId,templateId,paras)
  .then(
  res =>{
    document.getElementById("FirstName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("textContent").value = "";
    document.getElementById("phoneNumber").value = "",
    console.log(res);
    alert("Your email has been send successfully!")
  }
  )
  .catch((err) => console.log(err));
  name.value="";
}