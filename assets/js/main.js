
// Tab login

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
   document.getElementById("myForm").style.display = "none";
}

// Open Nav mobile
// Đóng/mở menu
const nav = document.getElementById('nav');
const navMobiMenu = document.querySelector('.nav-mobi-menu');

navMobiMenu.addEventListener('click', function() {
  nav.classList.toggle('nav-open');
});

// // Tự động đóng menu
// var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
// for (var i=0; i<menuItems.length; i++) {
//     var menuItem = menuItems[i];
    
//     menuItem.onclick =function(Event) {
//         var isParenMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('nav-menu');
//         if (isParenMenu) {
//             event.preventDefault();
//         }else {
//             nav.style.height = null;
//         }
//     }
// }

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
  
 
  // On Top
  const scrollToTopButton = document.getElementById('scroll-to-top-button');

  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }
  };
  
  scrollToTopButton.onclick = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  };  




// Tìm kiếm và lọc sản phẩm
const categoryItems = document.querySelectorAll('.aside-item');
const productItems = document.querySelectorAll('.item');
const titleItems = document.querySelectorAll('.title-items');

categoryItems.forEach((categoryItem) => {
    categoryItem.addEventListener('click', () => {
        const category = categoryItem.getAttribute('data-category');
        filterProducts(category);
    });
});

function filterProducts(category) {
    productItems.forEach((productItem) => {
        const productCategory = productItem.getAttribute('data-category');
        if (category === productCategory || category === 'all') {
            productItem.style.display = 'block';
            productItem.style.width = '225px';
        } else {
            productItem.style.display = 'none';
        }
    });
}


const searchInput = document.querySelector('.search-in');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    productItems.forEach((productItem) => {
        const productTitle = productItem.querySelector('.item-heading').textContent.toLowerCase();
        if (productTitle.includes(searchTerm)) {
            productItem.style.display = 'block';
            productItem.style.width = '250px';
            titleItems.forEach((titleItem) => {
              titleItem.style.display = 'none';
            });
            const relatedProducts= document.querySelector('.related-products');
            relatedProducts.style.display = 'block';
        } else {
            productItem.style.display = 'none';
            titleItems.forEach((titleItem) => {
              titleItem.style.display = 'none';
            });
        }
    });
});



// CHATBOT
const chatboxButton = document.querySelector('#chatbox-button');
const chatbox = document.querySelector('#chatbox');
const chatboxClose = document.querySelector('.close');
const chatboxMessages = document.querySelector('#chatbox-messages');
const chatboxForm = document.querySelector('#chatbox-form');
const chatboxInput = document.querySelector('#chatbox-input');

// Hiển thị chatbox khi nhấp vào nút chatbox-button
chatboxButton.addEventListener('click', () => {
  chatbox.style.display = 'block';
});

// Đóng chatbox khi nhấp vào nút close
chatboxClose.addEventListener('click', () => {
  chatbox.style.display = 'none';
});

// Tự động trả lời tin nhắn
chatboxForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Ngăn chặn sự kiện mặc định của form

  const message = chatboxInput.value;
  const reply = 'Tôi đang không trực tuyến, tôi sẽ trả lời bạn ngay khi tôi trở lại.';

  // Thêm tin nhắn của người dùng vào khung chat
  chatboxMessages.innerHTML += `<p><strong>Bạn:</strong> ${message}</p>`;

  // Xóa nội dung của input và đặt trỏ lại vào input
  chatboxInput.value = '';
  chatboxInput.focus();

  // Thêm phản hồi của chatbot vào khung chat
  setTimeout(() => {
    chatboxMessages.innerHTML += `<p><strong></strong> ${reply}</p>`;
  }, 2000); // Chờ 2 giây để phản hồi của chatbot xuất hiện
});
