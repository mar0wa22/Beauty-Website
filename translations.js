/* =========================================
   FEMORA BEAUTY - LANGUAGE SYSTEM
   English / Arabic
========================================= */

const translations = {

    en: {

        // Navbar
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact Us",
        favorites: "Favorites",
        cart: "Cart",
        shopNow: "Shop Now",

        // Common
        exploreProducts: "Explore Products",
        exploreMore: "Explore More",
        learnMore: "Learn More",
        readMore: "Read More",
        viewAll: "View All",

        // Buttons
        addToCart: "Add to Cart",
        remove: "Remove",
        continueShopping: "Continue Shopping",
        proceedCheckout: "Proceed To Checkout",
        sendMessage: "Send Message",

        // Language
        language: "AR"
    },


    ar: {

        // Navbar
        home: "الرئيسية",
        about: "من نحن",
        products: "المنتجات",
        contact: "تواصل معنا",
        favorites: "المفضلة",
        cart: "السلة",
        shopNow: "تسوقي الآن",

        // Common
        exploreProducts: "استكشفي المنتجات",
        exploreMore: "اكتشفي المزيد",
        learnMore: "اعرفي المزيد",
        readMore: "اقرئي المزيد",
        viewAll: "عرض الكل",

        // Buttons
        addToCart: "أضيفي إلى السلة",
        remove: "إزالة",
        continueShopping: "متابعة التسوق",
        proceedCheckout: "إتمام الطلب",
        sendMessage: "إرسال الرسالة",

        // Language
        language: "EN"
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