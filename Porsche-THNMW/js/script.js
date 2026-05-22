// ======================================
// TRENDING CAROUSEL
// ======================================

const trendingContainer =
    document.getElementById("trendingContainer");

const scrollLeftBtn =
    document.getElementById("scrollLeft");

const scrollRightBtn =
    document.getElementById("scrollRight");

if (
    trendingContainer &&
    scrollLeftBtn &&
    scrollRightBtn
) {

    scrollLeftBtn.addEventListener("click", () => {

        trendingContainer.scrollBy({

            left: -400,
            behavior: "smooth"

        });

    });

    scrollRightBtn.addEventListener("click", () => {

        trendingContainer.scrollBy({

            left: 400,
            behavior: "smooth"

        });

    });

}

// ======================================
// HERO SCROLL INDICATOR
// ======================================

const scrollIndicator =
    document.querySelector(".scroll-indicator");

if (scrollIndicator) {

    scrollIndicator.addEventListener("click", () => {

        window.scrollBy({

            top: window.innerHeight,
            behavior: "smooth"

        });

    });

}

// ======================================
// CONTACT FORM VALIDATION
// ======================================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name =
            document.getElementById("name").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let message =
            document.getElementById("message").value.trim();

        let nameError =
            document.getElementById("nameError");

        let emailError =
            document.getElementById("emailError");

        let messageError =
            document.getElementById("messageError");

        // RESET

        nameError.innerText = "";
        emailError.innerText = "";
        messageError.innerText = "";

        let isValid = true;

        // NAME

        if (name === "") {

            nameError.innerText =
                "Vui lòng nhập họ tên";

            isValid = false;
        }

        else if (/\d/.test(name)) {

            nameError.innerText =
                "Họ tên không được chứa số";

            isValid = false;
        }

        // EMAIL

        const emailPattern =
            /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (email === "") {

            emailError.innerText =
                "Vui lòng nhập email";

            isValid = false;
        }

        else if (!email.match(emailPattern)) {

            emailError.innerText =
                "Email không hợp lệ";

            isValid = false;
        }

        // MESSAGE

        if (message.length < 20) {

            messageError.innerText =
                "Nội dung tối thiểu 20 ký tự";

            isValid = false;
        }

        // SUCCESS

        if (isValid) {

            alert("Gửi liên hệ thành công!");

            contactForm.reset();

        }

    });

}

// ======================================
// MODAL
// ======================================

const modal =
    document.getElementById("serviceModal");

const openModalBtns =
    document.querySelectorAll(".openModal");

const closeModal =
    document.getElementById("closeModal");

const serviceCheckboxes =
    document.querySelectorAll(".serviceCheckbox");

// ======================================
// SERVICE PRICE
// ======================================

const servicePrices = {

    Standard: 5000000,

    Premium: 12000000,

    VIP: 25000000
};

const servicePrice =
    document.getElementById(
        "servicePrice"
    );

const cartTotal =
    document.getElementById(
        "cartTotal"
    );

// ======================================
// UPDATE TOTAL
// ======================================

function updateTotal() {

    let total = 0;

    serviceCheckboxes.forEach(checkbox => {

        if (checkbox.checked) {

            total +=
                servicePrices[
                checkbox.value
                ];

        }

    });

    // MODAL TOTAL

    if (servicePrice) {

        servicePrice.innerText =

            total.toLocaleString("vi-VN")

            + "đ";
    }

    // CART TOTAL

    if (cartTotal) {

        cartTotal.innerText =

            total.toLocaleString("vi-VN")

            + "đ";
    }

}

// ======================================
// OPEN MODAL
// ======================================

if (modal) {

    openModalBtns.forEach(button => {

        button.addEventListener("click", () => {

            modal.style.display = "flex";

            let selectedService =
                button.dataset.service;

            // AUTO CHECK

            serviceCheckboxes.forEach(checkbox => {

                if (
                    checkbox.value ===
                    selectedService
                ) {

                    checkbox.checked = true;

                }

            });

            updateTotal();

        });

    });

}

// ======================================
// CHECKBOX EVENT
// ======================================

serviceCheckboxes.forEach(checkbox => {

    checkbox.addEventListener(

        "change",

        updateTotal

    );

});

// CLOSE MODAL

if (closeModal) {

    closeModal.addEventListener("click", () => {

        modal.style.display = "none";

    });

}

// CLICK OUTSIDE MODAL

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

// ======================================
// MODAL FORM VALIDATION
// ======================================

const modalForm =
    document.getElementById("modalForm");

if (modalForm) {

    modalForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name =
            document.getElementById("modalName").value.trim();

        let phone =
            document.getElementById("modalPhone").value.trim();

        let email =
            document.getElementById("modalEmail").value.trim();

        let checked =
            document.querySelectorAll(
                ".serviceCheckbox:checked"
            );

        let valid = true;

        // RESET

        document.getElementById(
            "modalNameError"
        ).innerText = "";

        document.getElementById(
            "modalPhoneError"
        ).innerText = "";

        document.getElementById(
            "modalEmailError"
        ).innerText = "";

        document.getElementById(
            "checkboxError"
        ).innerText = "";

        // NAME

        if (name === "") {

            document.getElementById(
                "modalNameError"
            ).innerText =
                "Vui lòng nhập họ tên";

            valid = false;
        }

        // PHONE

        if (phone === "") {

            document.getElementById(
                "modalPhoneError"
            ).innerText =
                "Vui lòng nhập số điện thoại";

            valid = false;
        }

        // EMAIL

        const emailPattern =
            /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.match(emailPattern)) {

            document.getElementById(
                "modalEmailError"
            ).innerText =
                "Email không hợp lệ";

            valid = false;
        }

        // CHECKBOX

        if (checked.length === 0) {

            document.getElementById(
                "checkboxError"
            ).innerText =
                "Chọn ít nhất 1 dịch vụ";

            valid = false;
        }

        // SUCCESS

        if (valid) {

            alert(
                "Đăng ký dịch vụ thành công!"
            );

            modalForm.reset();

            modal.style.display = "none";

        }

    });

}

// ======================================
// ACTIVE MENU
// ======================================

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    if (
        link.href === window.location.href
    ) {

        link.classList.add("active-link");

    }

});
// ======================================
// PROFILE POPUP
// ======================================

const profileBtn =
    document.getElementById(
        "profileBtn"
    );

const profilePopup =
    document.getElementById(
        "profilePopup"
    );

if (profileBtn) {

    profileBtn.addEventListener(

        "click",

        () => {

            if (
                profilePopup.style.display
                === "block"
            ) {

                profilePopup.style.display
                    = "none";

            }

            else {

                profilePopup.style.display
                    = "block";
            }

        }

    );

}
// ======================================
// MOBILE MENU
// ======================================

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener(

        "click",

        () => {

            mobileMenu.classList.toggle("active");

        }

    );

    // AUTO CLOSE MENU

    document.querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener(

                "click",

                () => {

                    mobileMenu.classList.remove(
                        "active"
                    );

                }

            );

        });

}