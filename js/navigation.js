/**
 * Navigation Toggle + Cookie Banner
 * TAB Luft- und Klimatechnik GmbH
 */

(function () {
    "use strict";

    // --- Mobile Navigation Toggle ---
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("main-nav");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var isOpen = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", isOpen);
            toggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");

            // Icon wechseln (Hamburger <-> X)
            var icon = toggle.querySelector(".nav-toggle__icon");
            if (icon) {
                icon.innerHTML = isOpen
                    ? '<line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>'
                    : '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
            }
        });

        // Bei Klick auf einen Nav-Link: Menü schließen
        var links = nav.querySelectorAll(".nav__link");
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function () {
                nav.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.setAttribute("aria-label", "Menü öffnen");

                var icon = toggle.querySelector(".nav-toggle__icon");
                if (icon) {
                    icon.innerHTML = '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
                }
            });
        }

        // Escape-Taste schließt das Menü
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && nav.classList.contains("is-open")) {
                nav.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.setAttribute("aria-label", "Menü öffnen");
                toggle.focus();
            }
        });
    }

    // --- Cookie Banner ---
    var banner = document.getElementById("cookie-banner");
    var acceptBtn = document.getElementById("cookie-accept");

    if (banner && acceptBtn) {
        // Banner ausblenden, wenn bereits akzeptiert
        if (sessionStorage.getItem("cookie-accepted")) {
            banner.classList.add("is-hidden");
        }

        acceptBtn.addEventListener("click", function () {
            banner.classList.add("is-hidden");
            sessionStorage.setItem("cookie-accepted", "true");
        });
    }
})();
