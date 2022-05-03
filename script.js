var isModalOpen = false;

function openPlaylists() {
    document.getElementById("play").className = "sidebar-link playlists is-active";
    document.getElementById("liby").className = "sidebar-link library";
}

function openLibrary() {
    document.getElementById("play").className = "sidebar-link playlists";
    document.getElementById("liby").className = "sidebar-link library is-active";
}

function openModal() {
    document.getElementById("modal-container").className = "four";
    document.getElementById("body").className = "modal-active";
    document.getElementById("cont").className = "container modal-active";
    setTimeout(function() {
        isModalOpen = true;
    }, 100);
}

function closeModal() {
    document.getElementById("modal-container").className = "four out";
    document.getElementById("body").className = "";
    document.getElementById("cont").className = "container";
    isModalOpen = false;
}

document.addEventListener('click', function(e) {
    var container = document.getElementById('modal');
    if (!container.contains(e.target)) {
        if (isModalOpen == true) {
            closeModal();
        }
    }
});

function setTheme(theme) {
    document.documentElement.className = theme;

    setTimeout(function() {
        if (theme == "wintergreen") {
            document.getElementById("wg-btn").className = "wg-btn active";
            document.getElementById("og-btn").className = "og-btn";
            document.getElementById("fw-btn").className = "fw-btn";
        }
        else if (theme == "ocean-green") {
            document.getElementById("wg-btn").className = "wg-btn";
            document.getElementById("og-btn").className = "og-btn active";
            document.getElementById("fw-btn").className = "fw-btn";
        }
        else if (theme == "fuzzy-wuzzy") {
            document.getElementById("wg-btn").className = "wg-btn";
            document.getElementById("og-btn").className = "og-btn";
            document.getElementById("fw-btn").className = "fw-btn active";
        }
    }, 100);
    
}