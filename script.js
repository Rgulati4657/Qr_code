let imgBox = document.querySelector(".imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("input");
let button = document.querySelector("button");
function generateQR(){
    if(qrText.value.length>0){
qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
imgBox.classList.add("show-img");
    }else{

        qrText.classList.add("error");
        qrText.style.borderColor="hsla(0, 100%, 56%, 0.76)";
        setTimeout(()=>{
            qrText.style.borderColor="#494eea";
            qrText.classList.remove("error");
        },1000);
    }
}
button.addEventListener("click",generateQR);