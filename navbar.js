document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginPopup = document.getElementById('login-popup');
    const registerPopup = document.getElementById('register-popup');
    const closeLoginBtn = document.getElementById('closePopup');
    const closeRegisterBtn = document.getElementById('closeRegisterPopup');
    const overlay = document.getElementById('overlay');

    // Show login popup
    loginBtn.addEventListener('click', function () {
        loginPopup.style.display = 'block';
        overlay.style.display = 'block';
        registerPopup.style.display='none';
    });
    function showModal(type) {
        // Dodaj rozmycie do elementu tła
        document.getElementById('content').classList.add('blur');
    
        // Wyświetl tło pod modalem
        document.getElementById('modal-overlay').classList.add('active');
    
        // Wyświetl odpowiednie okno modalne
        if (type === 'login') {
            document.getElementById('login-modal').classList.add('active');
        } else if (type === 'register') {
            document.getElementById('register-modal').classList.add('active');
        }
    }
    
    function closeModal() {
        // Usuń rozmycie
        document.getElementById('content').classList.remove('blur');
    
        // Ukryj tło modala
        document.getElementById('modal-overlay').classList.remove('active');
    
        // Ukryj oba modale
        document.getElementById('login-modal').classList.remove('active');
        document.getElementById('register-modal').classList.remove('active');
    }
    
    // Show register popup
    registerBtn.addEventListener('click', function () {
        loginPopup.style.display = 'none';
        registerPopup.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Close login popup
    closeLoginBtn.addEventListener('click', function () {
        loginPopup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Close register popup
    closeRegisterBtn.addEventListener('click', function () {
        registerPopup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Close popups when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === overlay) {
            loginPopup.style.display = 'none';
            registerPopup.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
});
