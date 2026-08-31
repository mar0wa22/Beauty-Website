/* =========================================
   FEMORA BEAUTY - LANGUAGE SYSTEM
   English / Arabic
========================================= */

const translations = {

    en: {

        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact Us",
        shopNow: "Shop Now",

        homeTitle:
        "Discover the Beauty within you",

        homeDescription:
        "Femora Beauty offers a wide range of premium makeup and skincare products designed to enhance your beauty. Explore the latest collections and discover the perfect products for your unique style 💄",

        location:
        "Location",

        locationPlaceholder:
        "Haddah, Almadinah",

        openingDate:
        "Opening Date",

        datePlaceholder:
        "3th, March 2024"

    },


    ar: {

        home: "الرئيسية",
        about: "من نحن",
        products: "المنتجات",
        contact: "تواصل معنا",
        shopNow: "تسوقي الآن",

        homeTitle:
        "اكتشفي الجمال بداخلك",

        homeDescription:
        "تقدم فيمورا بيوتي مجموعة واسعة من منتجات المكياج والعناية بالبشرة الفاخرة المصممة لتعزيز جمالك. استكشفي أحدث مجموعاتنا واكتشفي المنتجات المثالية التي تناسب أسلوبك الفريد 💄",

        location:
        "الموقع",

        locationPlaceholder:
        "حدة، المدينة",

        openingDate:
        "تاريخ الافتتاح",

        datePlaceholder:
        "3 مارس 2024"

    }

};

/* =========================================
   GET SAVED LANGUAGE
========================================= */

let currentLanguage =
    localStorage.getItem("femoraLanguage") || "en";


/* =========================================
   TRANSLATE ELEMENTS
========================================= */

function translatePage() {

    const elements =
        document.querySelectorAll("[data-i18n]");


    elements.forEach(element => {

        const key =
            element.getAttribute("data-i18n");


        if (
            translations[currentLanguage] &&
            translations[currentLanguage][key]
        ) {

            element.textContent =
                translations[currentLanguage][key];

        }

    });


    /* ==============================
       PLACEHOLDERS
    ============================== */

    const placeholderElements =
        document.querySelectorAll(
            "[data-i18n-placeholder]"
        );


    placeholderElements.forEach(element => {

        const key =
            element.getAttribute(
                "data-i18n-placeholder"
            );


        if (
            translations[currentLanguage] &&
            translations[currentLanguage][key]
        ) {

            element.placeholder =
                translations[currentLanguage][key];

        }

    });


    /* ==============================
       HTML DIRECTION
    ============================== */

    document.documentElement.lang =
        currentLanguage;


    document.documentElement.dir =
        currentLanguage === "ar"
            ? "rtl"
            : "ltr";


    /* ==============================
       LANGUAGE BUTTON
    ============================== */

    const languageButton =
        document.getElementById(
            "language-toggle"
        );


    if (languageButton) {

        languageButton.textContent =
            translations[currentLanguage].language;

    }

}


/* =========================================
   CHANGE LANGUAGE
========================================= */

function toggleLanguage() {

    currentLanguage =
        currentLanguage === "en"
            ? "ar"
            : "en";


    localStorage.setItem(
        "femoraLanguage",
        currentLanguage
    );


    translatePage();

}


/* =========================================
   START TRANSLATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        translatePage();

    }
);