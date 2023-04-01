
// Tab login

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
   document.getElementById("myForm").style.display = "none";
}


// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}


// Quantity
function plusItem() {
    let quantity = parseInt(document.getElementById("amount").value);
    if (quantity < 10) {
      document.getElementById("amount").value = quantity + 1;
    } else {
      alert("Số lượng vượt quá giới hạn cho phép.");
    }
}
  
  function minusItem() {
    let quantity = parseInt(document.getElementById("amount").value);
    if (quantity > 1) {
      document.getElementById("amount").value = quantity - 1;
    } else {
      alert("Số lượng không được nhỏ hơn 1.");
    }
}

// checkinput tab-reviews

function checkInput() {
    var authorInput = document.getElementById("author").value.trim();
    var emailInput = document.getElementById("email").value.trim();
    var commentInput = document.getElementById("comment").value.trim();
  
    if (authorInput === "" || emailInput === "" || commentInput === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      return false;
    }
  
    if (emailInput.indexOf("@") === -1) {
      alert("Email không hợp lệ");
      return false;
    }
    alert("Gửi thành công!");
    return true;
    
  }
  
  