/* =========================================
   FEMORA BEAUTY - LANGUAGE SYSTEM
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


        /* =================================
           ABOUT
        ================================= */

        aboutTitle:
        "About",

        femoraBeauty:
        "Femora Beauty",

        aboutText1:
        "✨ Welcome to Femora Beauty, where luxury meets everyday elegance. We bring together a handpicked selection of top-tier makeup and radiant skincare from world-class brands designed to care for your skin and highlight your personal flair.",

        aboutText2:
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

        premiumQuality:
        "Premium Quality",

        premiumDescription:
        "Carefully selected beauty products.",

        latestTrends:
        "Latest Trends",

        trendsDescription:
        "Discover the newest beauty trends.",

        madeWithLove:
        "Made With Love",

        loveDescription:
        "Everything you need in one place.",

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


        /* =================================
           ABOUT
        ================================= */

        aboutTitle:
        "عن",

        femoraBeauty:
        "فيمورا بيوتي",

        aboutText1:
        "✨ مرحبًا بكِ في فيمورا بيوتي، حيث تلتقي الفخامة بالأناقة اليومية. نقدم لكِ مجموعة مختارة بعناية من أفضل مستحضرات المكياج ومنتجات العناية بالبشرة المشرقة من علامات تجارية عالمية، صُممت للعناية ببشرتك وإبراز جمالكِ الخاص.",

        aboutText2:
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

        premiumQuality:
        "جودة فائقة",

        premiumDescription:
        "منتجات تجميل مختارة بعناية.",

        latestTrends:
        "أحدث الصيحات",

        trendsDescription:
        "اكتشفي أحدث صيحات الجمال.",

        madeWithLove:
        "صُنع بحب",

        loveDescription:
        "كل ما تحتاجينه في مكان واحد.",

        backToAbout:
        "العودة إلى صفحة من نحن"

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