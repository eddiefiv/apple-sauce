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

function changeSettingsPanel(panel) {
    if (panel == "general") {
        document.getElementById("general-btn").className = "sidebar-link general is-active";
        document.getElementById("profiles-btn").className = "sidebar-link color-profile";

        document.getElementById("general-container").className = "main-container-modal general modal-cont active-panel";
        document.getElementById("profiles-container").className = "main-container-modal color-profiles modal-cont";
    }
    else if (panel == "color-profiles") {
        document.getElementById("general-btn").className = "sidebar-link general";
        document.getElementById("profiles-btn").className = "sidebar-link color-profile is-active";

        document.getElementById("general-container").className = "main-container-modal general modal-cont";
        document.getElementById("profiles-container").className = "main-container-modal color-profiles modal-cont active-panel";
    }
}

function setTheme(theme) {
    document.documentElement.className = theme;

    setTimeout(function() {
        if (theme == "wintergreen") {
            document.getElementById("wg-btn").className = "wintergreen is-active";
            document.getElementById("og-btn").className = "ocean-green";
            document.getElementById("fw-btn").className = "fuzzy-wuzzy";
        }
        else if (theme == "ocean-green") {
            document.getElementById("wg-btn").className = "wintergreen";
            document.getElementById("og-btn").className = "ocean-green is-active";
            document.getElementById("fw-btn").className = "fuzzy-wuzzy";
        }
        else if (theme == "fuzzy-wuzzy") {
            document.getElementById("wg-btn").className = "wintergreen";
            document.getElementById("og-btn").className = "ocean-green";
            document.getElementById("fw-btn").className = "fuzzy-wuzzy is-active";
        }
    }, 100);
    
}