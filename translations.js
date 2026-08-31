/* =========================================
   FEMORA BEAUTY
   LANGUAGE SYSTEM
   English / Arabic
========================================= */


const translations = {

    /* =====================================
       ENGLISH
    ===================================== */

    en: {

        /* NAVBAR */

        home: "Home",

        about: "About",

        products: "Products",

        contact: "Contact Us",

        shopNow: "Shop Now",

        language: "AR",


        /* HOME */

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
            "3th, March 2024",


        /* ABOUT */

        aboutTitle:
            "About",

        aboutBrand:
            "Femora Beauty",

        aboutDescription1:
            "✨ Welcome to Femora Beauty, where luxury meets everyday elegance. We bring together a handpicked selection of top-tier makeup and radiant skincare from world-class brands designed to care for your skin and highlight your personal flair.",

        aboutDescription2:
            "✨ Femora Beauty offers a collection of premium makeup and skincare products carefully selected from trusted brands around the world.",

        exploreMore:
            "Explore More",


        /* WHY FEMORA */

        whyChooseUs:
            "WHY CHOOSE US",

        beautyMadeForYou:
            "Beauty Made For You",

        whyDescription:
            "At Femora Beauty, we believe that beauty is unique to everyone. We bring you carefully selected products to help you express your style with confidence.",


        /* FEATURES */

        premiumQuality:
            "Premium Quality",

        premiumQualityDescription:
            "Carefully selected beauty products.",


        latestTrends:
            "Latest Trends",

        latestTrendsDescription:
            "Discover the newest beauty trends.",


        madeWithLove:
            "Made With Love",

        madeWithLoveDescription:
            "Everything you need in one place.",


        /* BACK */

        backToAbout:
            "Back to About"

    },


    /* =====================================
       ARABIC
    ===================================== */

    ar: {

        /* NAVBAR */

        home:
            "الرئيسية",

        about:
            "من نحن",

        products:
            "المنتجات",

        contact:
            "تواصل معنا",

        shopNow:
            "تسوقي الآن",

        language:
            "EN",


        /* HOME */

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
            "3 مارس 2024",


        /* ABOUT */

        aboutTitle:
            "عن",

        aboutBrand:
            "فيمورا بيوتي",

        aboutDescription1:
            "✨ مرحبًا بكِ في فيمورا بيوتي، حيث تلتقي الفخامة بالأناقة اليومية. نقدم لكِ مجموعة مختارة بعناية من أفضل منتجات المكياج والعناية بالبشرة المشرقة من علامات تجارية عالمية، صُممت للعناية ببشرتك وإبراز جمالك وأسلوبك الخاص.",

        aboutDescription2:
            "✨ تقدم فيمورا بيوتي مجموعة من منتجات المكياج والعناية بالبشرة الفاخرة، تم اختيارها بعناية من علامات تجارية موثوقة حول العالم.",

        exploreMore:
            "اكتشفي المزيد",


        /* WHY FEMORA */

        whyChooseUs:
            "لماذا تختاريننا؟",

        beautyMadeForYou:
            "جمال صُمم من أجلكِ",

        whyDescription:
            "في فيمورا بيوتي، نؤمن بأن الجمال يختلف من شخص لآخر. لذلك نقدم لكِ منتجات مختارة بعناية تساعدكِ على التعبير عن أسلوبكِ بثقة.",


        /* FEATURES */

        premiumQuality:
            "جودة فاخرة",

        premiumQualityDescription:
            "منتجات تجميل مختارة بعناية.",


        latestTrends:
            "أحدث صيحات الجمال",

        latestTrendsDescription:
            "اكتشفي أحدث اتجاهات الجمال.",


        madeWithLove:
            "صُنع بحب",

        madeWithLoveDescription:
            "كل ما تحتاجينه في مكان واحد.",


        /* BACK */

        backToAbout:
            "العودة إلى من نحن"

    }

};


/* =========================================
   GET SAVED LANGUAGE
========================================= */

let currentLanguage =
    localStorage.getItem("femoraLanguage") || "en";


/* =========================================
   TRANSLATE PAGE
========================================= */

function translatePage() {

    /* ==============================
       NORMAL TEXT
    ============================== */

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
       HTML LANGUAGE
    ============================== */

    document.documentElement.lang =
        currentLanguage;


    /* ==============================
       RTL / LTR
    ============================== */

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


    /* Save language */

    localStorage.setItem(
        "femoraLanguage",
        currentLanguage
    );


    /* Translate current page */

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