// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // Language Data (Translations)
    const translations = {
        en: {
            companyName: "BusnTaxi.com",
            heroTitle: "Seamless Journeys, Unforgettable Destinations.",
            heroSubtitle: "Your trusted partner for bus and taxi services in Uttarakhand & Delhi NCR.",
            bookNow: "Book Now",
            featuresTitle: "Why Choose BusnTaxi.com?",
            feature1Title: "Reliability & Trust",
            feature1Point1: "Experienced Drivers",
            feature1Point2: "Transparent Pricing",
            feature1Point3: "24/7 Customer Support",
            feature1Point4: "Safe & Secure Travel",
            feature2Title: "Our Services",
            feature2Point1: "Outstation Taxi Service",
            feature2Point2: "Local City Rides",
            feature2Point3: "Airport Transfers",
            feature2Point4: "Bus Bookings & Rentals",
            feature3Title: "Modern & Safe Fleet",
            feature3Point1: "Wide Range: Sedans, SUVs, Buses",
            feature3Point2: "Clean & Well-Maintained Vehicles",
            feature3Point3: "GPS-Enabled for Your Safety",
            feature3Point4: "Comfortable & Hygienic",
            servicesUKTitle: "Bus and Taxi services In Uttarakhand",
            htdLink: "Haridwar to Delhi", rtdLink: "Roorkee to Delhi", rstdLink: "Rishikesh to Delhi",
            dtdLink: "Dehradun to Delhi", mtdLink: "Mussoorie to Delhi",
            servicesDelhiTitle: "Bus and Taxi services In Delhi (NCR)",
            dthLink: "Delhi to Haridwar", dtrLink: "Delhi to Roorkee", dtrstdLink: "Delhi to Rishikesh",
            dtdhrLink: "Delhi to Dehradun", dtmLink: "Delhi to Mussoorie",
            popularPlacesTitle: "Popular Places To Visit In Uttarakhand",
            destHaridwarName: "Haridwar", destHaridwarDesc: "Spiritual hub, Ganga aarti.",
            destRishikeshName: "Rishikesh", destRishikeshDesc: "Yoga capital, adventure sports.",
            destDehradunName: "Dehradun", destDehradunDesc: "Gateway to Garhwal, pleasant climate.",
            destMussoorieName: "Mussoorie", destMussoorieDesc: "Queen of Hills, panoramic views.",
            destNainitalName: "Nainital", destNainitalDesc: "Serene lake, scenic beauty.",
            destAuliName: "Auli", destAuliDesc: "Skiing paradise, Himalayan views.",
            destJimCorbettName: "Jim Corbett", destJimCorbettDesc: "Wildlife safaris, tiger reserve.",
            chardhamYatraTitle: "Chardham Yatra In Uttarakhand",
            chardhamLink: "Chardham Overview", badrinathLink: "Badrinath", kedarnathLink: "Kedarnath",
            gangotriLink: "Gangotri", yamunotriLink: "Yamunotri",
            religiousPlacesUKTitle: "Religious Places In Uttarakhand",
            hemkundLink: "Hemkund Sahib", tungnathLink: "Tungnath", devprayagLink: "Devprayag",
            jageshwarLink: "Jageshwar", gaumukhLink: "Gaumukh",
            ctaTitle: "Ready to Start Your Journey?",
            ctaSubtitle: "Or want to partner with us? We've got you covered.",
            ctaSwitchLang: "Switch to Hindi",
            registerDriver: "Register as a Driver",
            footerText: "&copy; 2024 BusnTaxi.com. All rights reserved. Your trusted travel partner."
        },
        hi: {
            companyName: "बसएनटैक्सी.कॉम",
            heroTitle: "सुगम यात्राएँ, अविस्मरणीय गंतव्य।",
            heroSubtitle: "उत्तराखंड और दिल्ली एनसीआर में बस और टैक्सी सेवाओं के लिए आपका विश्वसनीय साथी।",
            bookNow: "अभी बुक करें",
            featuresTitle: "बसएनटैक्सी.कॉम क्यों चुनें?",
            feature1Title: "विश्वसनीयता और भरोसा",
            feature1Point1: "अनुभवी ड्राइवर",
            feature1Point2: "पारदर्शी मूल्य निर्धारण",
            feature1Point3: "24/7 ग्राहक सहायता",
            feature1Point4: "सुरक्षित यात्रा",
            feature2Title: "हमारी सेवाएँ",
            feature2Point1: "आउटस्टेशन टैक्सी सेवा",
            feature2Point2: "स्थानीय शहर की सवारी",
            feature2Point3: "एयरपोर्ट ट्रांसफर",
            feature2Point4: "बस बुकिंग और किराया",
            feature3Title: "आधुनिक और सुरक्षित बेड़ा",
            feature3Point1: "विस्तृत रेंज: सेडान, एसयूवी, बसें",
            feature3Point2: "स्वच्छ और सुव्यवस्थित वाहन",
            feature3Point3: "आपकी सुरक्षा के लिए जीपीएस-सक्षम",
            feature3Point4: "आरामदायक और स्वच्छ",
            servicesUKTitle: "उत्तराखंड में बस और टैक्सी सेवाएं",
            htdLink: "हरिद्वार से दिल्ली", rtdLink: "रुड़की से दिल्ली", rstdLink: "ऋषिकेश से दिल्ली",
            dtdLink: "देहरादून से दिल्ली", mtdLink: "मसूरी से दिल्ली",
            servicesDelhiTitle: "दिल्ली (एनसीआर) में बस और टैक्सी सेवाएं",
            dthLink: "दिल्ली से हरिद्वार", dtrLink: "दिल्ली से रुड़की", dtrstdLink: "दिल्ली से ऋषिकेश",
            dtdhrLink: "दिल्ली से देहरादून", dtmLink: "दिल्ली से मसूरी",
            popularPlacesTitle: "उत्तराखंड में घूमने लायक लोकप्रिय स्थान",
            destHaridwarName: "हरिद्वार", destHaridwarDesc: "आध्यात्मिक केंद्र, गंगा आरती।",
            destRishikeshName: "ऋषिकेश", destRishikeshDesc: "योग राजधानी, साहसिक खेल।",
            destDehradunName: "देहरादून", destDehradunDesc: "गढ़वाल का प्रवेश द्वार, सुखद जलवायु।",
            destMussoorieName: "मसूरी", destMussoorieDesc: "पहाड़ों की रानी, मनोरम दृश्य।",
            destNainitalName: "नैनीताल", destNainitalDesc: "शांत झील, प्राकृतिक सुंदरता।",
            destAuliName: "औली", destAuliDesc: "स्कीइंग स्वर्ग, हिमालयी दृश्य।",
            destJimCorbettName: "जिम कॉर्बेट", destJimCorbettDesc: "वन्यजीव सफारी, बाघ अभयारण्य।",
            chardhamYatraTitle: "उत्तराखंड में चारधाम यात्रा",
            chardhamLink: "चारधाम अवलोकन", badrinathLink: "बद्रीनाथ", kedarnathLink: "केदारनाथ",
            gangotriLink: "गंगोत्री", yamunotriLink: "यमुनोत्री",
            religiousPlacesUKTitle: "उत्तराखंड में धार्मिक स्थान",
            hemkundLink: "हेमकुंड साहिब", tungnathLink: "तुंगनाथ", devprayagLink: "देवप्रयाग",
            jageshwarLink: "जागेश्वर", gaumukhLink: "गौमुख",
            ctaTitle: "अपनी यात्रा शुरू करने के लिए तैयार हैं?",
            ctaSubtitle: "या हमारे साथ साझेदारी करना चाहते हैं? हमने आपको कवर किया है।",
            ctaSwitchLang: "अंग्रेजी में बदलें",
            registerDriver: "ड्राइवर के रूप में पंजीकरण करें",
            footerText: "&copy; 2024 बसएनटैक्सी.कॉम। सर्वाधिकार सुरक्षित। आपका विश्वसनीय यात्रा साथी।"
        }
    };

    // State and Selectors
    let currentLang = 'en';
    const mainPageWrapper = document.getElementById('mainPageContentWrapper');
    const detailPageDivs = document.querySelectorAll('.detail-page');
    const langEnBtn = document.getElementById('langEn');
    const langHiBtn = document.getElementById('langHi');
    const ctaLangSwitchBtn = document.getElementById('ctaLangSwitch');
    const homeBrandLink = document.getElementById('homeBrandLink');
    const heroBookNowButton = document.getElementById('heroBookNowButton');
    const headerBookNowButton = document.getElementById('headerBookNowButton');
    const notificationModal = document.getElementById('notificationModal');
    const closeNotificationBtn = document.getElementById('closeNotificationBtn');


    // Navigation Functions
    function showMainPage() {
        if (mainPageWrapper) mainPageWrapper.style.display = 'block';
        detailPageDivs.forEach(div => div.style.display = 'none');
        if (notificationModal) notificationModal.classList.add('hidden'); // Ensure notification is hidden when going to main page
        window.scrollTo(0, 0);
        if (mainPageWrapper) {
            const animatedItemsOnMain = mainPageWrapper.querySelectorAll('.animated-item');
            animatedItemsOnMain.forEach(item => {
                item.classList.remove('visible'); 
                if (observer) observer.observe(item);
            });
        }
    }

    function showDetailPage(pageId) {
        if (mainPageWrapper) mainPageWrapper.style.display = 'none';
        let pageFound = false;
        detailPageDivs.forEach(div => {
            if (div.id === pageId) {
                div.style.display = 'block';
                pageFound = true;
            } else {
                div.style.display = 'none';
            }
        });
        if (!pageFound) {
            console.error("Page not found: " + pageId + ". Defaulting to main page.");
            showMainPage();
        }
        if (notificationModal) notificationModal.classList.add('hidden'); // Ensure notification is hidden when changing pages
        window.scrollTo(0, 0);
    }

    // Language Switching Functions
    function updateTexts() {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[currentLang] && translations[currentLang][key]) {
                element.innerHTML = translations[currentLang][key];
            }
        });
        if (langEnBtn && langHiBtn) {
            if (currentLang === 'en') {
                langEnBtn.classList.add('active');
                langHiBtn.classList.remove('active');
                if (ctaLangSwitchBtn) ctaLangSwitchBtn.innerHTML = translations.en.ctaSwitchLang;
            } else {
                langHiBtn.classList.add('active');
                langEnBtn.classList.remove('active');
                if (ctaLangSwitchBtn) ctaLangSwitchBtn.innerHTML = translations.hi.ctaSwitchLang;
            }
        }
        document.documentElement.lang = currentLang;
    }

    function setLanguage(lang) {
        currentLang = lang;
        updateTexts();
    }

    // Event Listeners for Language Switching
    if (langEnBtn) langEnBtn.addEventListener('click', () => setLanguage('en'));
    if (langHiBtn) langHiBtn.addEventListener('click', () => setLanguage('hi'));
    if (ctaLangSwitchBtn) {
        ctaLangSwitchBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'hi' : 'en');
        });
    }

    // Event Listeners for Navigation
    if (homeBrandLink) homeBrandLink.addEventListener('click', showMainPage);

    document.querySelectorAll('.service-link-item, .popular-place-card').forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                showDetailPage(pageId);
            } else {
                console.warn("No data-page attribute found for clicked item:", this);
            }
        });
    });

    document.querySelectorAll('.back-button').forEach(button => {
        button.addEventListener('click', showMainPage);
    });

    // "Book Now" buttons listener
    if (heroBookNowButton) {
        heroBookNowButton.addEventListener('click', () => showDetailPage('bookingPage'));
    }
    if (headerBookNowButton) {
        headerBookNowButton.addEventListener('click', () => showDetailPage('bookingPage'));
    }

    // Scroll Animation Observer
    let observer;
    if (typeof IntersectionObserver !== 'undefined') {
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        if (mainPageWrapper) {
            const animatedItems = mainPageWrapper.querySelectorAll('.animated-item');
            animatedItems.forEach(item => {
                observer.observe(item);
            });
        }
    } else {
        if (mainPageWrapper) {
            const animatedItems = mainPageWrapper.querySelectorAll('.animated-item');
            animatedItems.forEach(item => item.classList.add('visible'));
        }
    }
    
    // Booking Page Logic
    const oneWayTab = document.getElementById('oneWayTab');
    const roundTripTab = document.getElementById('roundTripTab');
    const returnDateWrapper = document.getElementById('returnDateWrapper');
    const bookingForm = document.getElementById('bookingForm');
    const pickupCitySelect = document.getElementById('pickupCity');
    const destinationCitySelect = document.getElementById('destinationCity');

    const cities = [
        "Haridwar", "Delhi", "Rishikesh", "Dehradun", "Roorkee", 
        "Mussoorie", "Nainital", "Badrinath", "Kedarnath", "Gangotri", "Yamunotri"
    ];

    // Helper to populate city dropdowns for any form
    function populateCityDropdownsForForm(pickupId, destinationId) {
        const pickupCitySelect = document.getElementById(pickupId);
        const destinationCitySelect = document.getElementById(destinationId);
        if (pickupCitySelect && destinationCitySelect) {
            pickupCitySelect.innerHTML = '';
            destinationCitySelect.innerHTML = '';
            cities.forEach(city => {
                const option1 = document.createElement('option');
                option1.value = city.toLowerCase().replace(/\s+/g, '-');
                option1.textContent = city;
                pickupCitySelect.appendChild(option1);
                const option2 = document.createElement('option');
                option2.value = city.toLowerCase().replace(/\s+/g, '-');
                option2.textContent = city;
                destinationCitySelect.appendChild(option2);
            });
            if (cities.length > 1) {
                pickupCitySelect.value = cities[0].toLowerCase().replace(/\s+/g, '-');
                destinationCitySelect.value = cities[1].toLowerCase().replace(/\s+/g, '-');
            }
        }
    }
    
    // Populate both forms on load
    populateCityDropdownsForForm('pickupCity', 'destinationCity');
    populateCityDropdownsForForm('heroPickupCity', 'heroDestinationCity');

    // Tab logic for both forms
    function setupTabSwitching(oneWayId, roundTripId, returnWrapperId) {
        const oneWayTab = document.getElementById(oneWayId);
        const roundTripTab = document.getElementById(roundTripId);
        const returnDateWrapper = document.getElementById(returnWrapperId);
        if (oneWayTab && roundTripTab && returnDateWrapper) {
        oneWayTab.addEventListener('click', () => {
            oneWayTab.classList.add('active-booking-tab');
                roundTripTab.classList.remove('active-booking-tab');
                returnDateWrapper.classList.add('hidden');
            });
            roundTripTab.addEventListener('click', () => {
                roundTripTab.classList.add('active-booking-tab');
                oneWayTab.classList.remove('active-booking-tab');
                returnDateWrapper.classList.remove('hidden');
            });
        }
    }

    setupTabSwitching('oneWayTab', 'roundTripTab', 'returnDateWrapper');
    setupTabSwitching('heroOneWayTab', 'heroRoundTripTab', 'heroReturnDateWrapper');

    // Submission logic for both forms
    function setupBookingForm(formId, oneWayTabId, roundTripTabId, pickupId, destinationId) {
        const form = document.getElementById(formId);
        const oneWayTab = document.getElementById(oneWayTabId);
        const roundTripTab = document.getElementById(roundTripTabId);
        const pickupCitySelect = document.getElementById(pickupId);
        const destinationCitySelect = document.getElementById(destinationId);
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const data = {};
                formData.forEach((value, key) => data[key] = value);
                if (oneWayTab && oneWayTab.classList.contains('active-booking-tab')) {
                    data.tripType = 'One Way';
                } else if (roundTripTab && roundTripTab.classList.contains('active-booking-tab')) {
                    data.tripType = 'Round Trip';
                }
                console.log("Booking Submitted (no email sent):", data);
                // Show custom notification modal
                if (notificationModal) {
                    notificationModal.classList.remove('hidden');
                }
                form.reset();
                if (pickupCitySelect && destinationCitySelect && cities.length > 1) {
                    pickupCitySelect.value = cities[0].toLowerCase().replace(/\s+/g, '-');
                    destinationCitySelect.value = cities[1].toLowerCase().replace(/\s+/g, '-');
                }
                if (oneWayTab) oneWayTab.click();
            });
        }
    }

    setupBookingForm('bookingForm', 'oneWayTab', 'roundTripTab', 'pickupCity', 'destinationCity');
    setupBookingForm('heroBookingForm', 'heroOneWayTab', 'heroRoundTripTab', 'heroPickupCity', 'heroDestinationCity');

    // Notification Modal Logic
    if (closeNotificationBtn && notificationModal) {
        closeNotificationBtn.addEventListener('click', () => {
            notificationModal.classList.add('hidden');
        });
    }

    // Initial Setup Calls
    updateTexts(); 
    showMainPage(); 

    // Preloader logic
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 600);
        }
    });

    // Scroll-triggered animations
    function revealOnScroll() {
        const animatedItems = document.querySelectorAll('.animated-item');
        const triggerBottom = window.innerHeight * 0.92;
        animatedItems.forEach(item => {
            const boxTop = item.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                item.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('DOMContentLoaded', revealOnScroll);

    // Back-to-top button logic
    const backToTopBtn = document.getElementById('backToTopBtn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.classList.remove('visible');
            backToTopBtn.style.display = 'none';
        }
    });
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Pointer cursor for all interactive elements
    ['a','button','.card-hover','.service-link-item','.popular-place-card','.lang-switcher-btn'].forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.style.cursor = 'pointer';
        });
    });

}); // End of DOMContentLoaded
