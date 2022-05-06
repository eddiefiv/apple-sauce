var isModalOpen = false;
var isDropdownOpen = false;

const audioPlayer = document.querySelector(".audio-player");

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
    var playback_container = document.getElementById('playback');
    var dropdown_btn = document.getElementById('branch-dropdown-btn');
    const timeline = document.getElementById('timeline');
    const dropdown_items = document.getElementById("branch-dropdown-items");

    if (!container.contains(e.target)) {
        if (isModalOpen == true && isDropdownOpen == false) {
            closeModal();
        }
        else if (isDropdownOpen == true) {
            dropdown_items.classList.remove('active');

            isDropdownOpen = false;

            closeModal();
        }
        else if (playback_container.contains(e.target)) {
            const timelineWidth = window.getComputedStyle(timeline).width;
            const timeToSeek = e.offsetX / parseInt(timelineWidth) * 90;
            const progressBar = document.getElementById("progress");
    
            progressBar.style.width = timeToSeek / 90 * 100 + "%";
        }
    }
    else if (isDropdownOpen == false && dropdown_btn.contains(e.target)) {
        dropdown_items.classList.add('active');

        isDropdownOpen = true;
    }
    else if (isDropdownOpen == true) {
        dropdown_items.classList.remove('active');

        isDropdownOpen = false;
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
            document.getElementById("wg-btn").className = "select is-active";
            document.getElementById("og-btn").className = "select";
            document.getElementById("fw-btn").className = "select";
        }
        else if (theme == "ocean-green") {
            document.getElementById("wg-btn").className = "select";
            document.getElementById("og-btn").className = "select is-active";
            document.getElementById("fw-btn").className = "select";
        }
        else if (theme == "fuzzy-wuzzy") {
            document.getElementById("wg-btn").className = "select";
            document.getElementById("og-btn").className = "select";
            document.getElementById("fw-btn").className = "select is-active";
        }
    }, 100);
}