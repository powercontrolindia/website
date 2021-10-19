const lightbox = document.getElementById("lightbox-section");
const productCategory = document.getElementById("lightbox-product-category")
const productName = document.getElementById("lightbox-product-name");
const productImg = document.getElementById("productImg");
const productPrice = document.getElementById("productPrice");
const lightboxTechDesc = document.getElementById("lightboxTechDesc");
const lightboxAddInfo = document.getElementById("lightboxAddInfo");

// This is the products database

const Products = [
    {
        productId: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/PCI-7_cover.jpg?alt=media&token=1ebd6965-bf57-4f58-81a6-17b34dc996a1",
        category: "Brushless AVR",
        title: "PCI-7",
        price: "699 per piece",
        techDesc: 
        "Input Volt: 1 phase AND Neutral 230VAC <br>Output Volt: 0-90V,6AMP<br>Half Wave phase Controlled DC<br>In Built STAB Circuit<br>In Built FRO Circuit<br>In Built PARALLEL Running Facility<br>Voltage Regulation:+/-0.5%<br>Droop Setting:+/-0.5%<br>Voltage Setting:+/-0.5%",
        addInfo: "Packaging Details: BOX PACKING"
    },
    {
        productId: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/PCI-7A%20%20cover.jpg?alt=media&token=7a48c38b-baef-4eec-a043-49791f53727d",
        category: "Brushless AVR",
        title: "PCI-7A",
        price: "850 per piece",
        techDesc: "Input Volt: 1 phase AND Neutral 230VAC<br>Output Volt: 0-90V,6AMP<br>Half Wave phase Controlled DC<br>In Built STAB Circuit<br>In Built FRO Circuit<br>In Built PARALLEL Running Facility<br>Voltage Regulation:+/-0.5%<br>Droop Setting:+/-0.5%<br>Voltage Setting:+/-0.5%",
        addInfo: "Item Code: PCI-7<br>Production Capacity: 500"
    },
    {
        productId: 3,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/PCI-A3M%20cover.jpg?alt=media&token=d4512f36-3992-43d1-a9b5-a58ab45114fa",
        category: "Brushless AVR",
        title: "PCI-A3M",
        price: "1,099 per piece",
        techDesc: "Input Volt: 1 phase AND Neutral 230VAC<br>Output Volt: 0-90V,6AMP<br>Half Wave phase Controlled DC<br>In Built STAB Circuit<br>In Built FRO Circuit<br>In Built PARALLEL Running Facility<br>Voltage Regulation:+/-0.5%<br>Droop Setting:+/-0.5%<br>Voltage Setting:+/-0.5%",
        addInfo: "This is PCI-A3M additional information."
    },
    {
        productId: 4,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/TAVR%2020%20cover%20.jpg?alt=media&token=3f39b843-48fa-4da6-9ac7-76cf4c1ad65f",
        category: "Brushless AVR",
        title: "PCI-TAVR20",
        price: "999 per piece",
        techDesc: "Current Capacity	UPTO 500KVA <br>Model Name/Number	TAVR20 <br>Phase	Three Phase <br>Input Voltage	220AC <br>Output Voltage	95V DC, 6 AMP <br>Mounting Type	Wall Mounting <br>Warranty	1 YEAR",
        addInfo: "Item Code: TAVR20 <br>Delivery Time: DEPENDS ON LOCATION <br>Packaging Details: BOX PACKING"
    },
    {
        productId: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/PCI-CR%20cover.jpg?alt=media&token=e2e067cf-19b8-4e73-9421-1a258753eb47",
        category: "Brushless AVR",
        title: "PCI-CR",
        price: "--- per piece",
        techDesc: "No data available, contact us for equiry.",
        addInfo: "No data available, contact us for equiry."
    },
    {
        productId: 6,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/pci%206m%20(1).jpg?alt=media&token=0435b3f5-e531-4652-8af5-2846fc50941a",
        category: "Slipring AVR",
        title: "PCI-6M (10 AMPERE – 1 PHASE)",
        price: "1599 per piece",
        techDesc: "Input Volt: 1 phase AND NEUTRAL 230VAC <br>50Hz Output Volt: 0-200V <br>10 AMP FULL Wave phase Controlled DC <br>In Built STAB Circuit <br>In Built FRO Circuit <br>Voltage Regulation: +/-0.1% <br>Voltage Setting: +/-10% <br>Model: PCI-6M 200V <br>Single Phase",
        addInfo: "Item Code: PCI-6M"
    },
    {
        productId: 7,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/pci%206m%20(2).jpg?alt=media&token=40836af3-6df7-4c83-9642-ccdf80112ea7",
        category: "Slipring AVR",
        title: "PCI-6M (10 AMPERE – 3 PHASE)",
        price: "1599 per piece",
        techDesc: "Input Volt: 1 phase AND NEUTRAL 230VAC <br>50Hz Output Volt: 0-200V <br>10 AMP FULL Wave phase Controlled DC <br>In Built STAB Circuit <br>In Built FRO Circuit <br>Voltage Regulation: +/-0.1% <br>Voltage Setting: +/-10% <br>Model: PCI-6M 200V <br>Single Phase",
        addInfo: "Item Code: PCI-6M"
    },
    {
        productId: 8,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/pci%206m%20(3).jpg?alt=media&token=7ac24215-a260-47c9-a550-6d1e1094eda7",
        category: "Slipring AVR",
        title: "PCI-6M (40 AMPERE – 1 PHASE)",
        price: "1599 per piece",
        techDesc: "Input Volt: 1 phase AND NEUTRAL 230VAC <br>50Hz Output Volt: 0-200V <br>10 AMP FULL Wave phase Controlled DC <br>In Built STAB Circuit <br>In Built FRO Circuit <br>Voltage Regulation: +/-0.1% <br>Voltage Setting: +/-10% <br>Model: PCI-6M 200V <br>Single Phase",
        addInfo: "Item Code: PCI-6M"
    },
    {
        productId: 9,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/pci%206m%20(4).jpg?alt=media&token=6cc8c41a-be4c-418c-85bd-6d349d5bea2f",
        category: "Slipring AVR",
        title: "PCI-6M (10 AMPERE – 3 PHASE)",
        price: "1599 per piece",
        techDesc: "Input Volt: 1 phase AND NEUTRAL 230VAC <br>50Hz Output Volt: 0-200V <br>10 AMP FULL Wave phase Controlled DC <br>In Built STAB Circuit <br>In Built FRO Circuit <br>Voltage Regulation: +/-0.1% <br>Voltage Setting: +/-10% <br>Model: PCI-6M 200V <br>Single Phase",
        addInfo: "Item Code: PCI-6M"
    },
    {
        productId: 10,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/Sx440%20cover.jpg?alt=media&token=42d29128-d907-4058-bd4f-8b74bd8f6c89",
        category: "Stamford AVR",
        title: "SX440",
        price: "2449 per piece",
        techDesc: "Input Volt: 2 phase 200VAC<br>Output Volt: 0-90V, 6AMP<br>Half Wave phase Controlled DC<br>In Built STAB Circuit<br>In Built FRO Circuit<br>Voltage Regulation: +/-0.5%<br>Voltage Setting: +/-0.5%",
        addInfo: "Item Code: PCI-SX440<br>Production Capacity: 200<br>Delivery Time: Depends on Location<br>Packaging Details: Box"
    },
    {
        productId: 11,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/Sx460%20cover.jpg?alt=media&token=0a08a2ca-000f-4b91-9719-d405b3ceb0f7",
        category: "Stamford AVR",
        title: "SX460",
        price: "1249 per piece",
        techDesc: "Input Volt: 2 phase 200VAC Output Volt: 0-90V, 6AMP Half Wave phase Controlled DC In Built STAB Circuit In Built FRO Circuit Voltage Regulation: +/-0.5% Voltage Setting: +/-0.5%",
        addInfo: "Item Code: SX460"
    },
    {
        productId: 12,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/PCI-BC1210M%20WITH%20NO-NC%20(4).jpg?alt=media&token=c4538653-cb65-4407-a1e6-ec92a99d3404",
        category: "SMPS Battery Charger 12V",
        title: "PCI-BC1210M WITH NO-NC",
        price: "1299 per piece",
        techDesc: "No data available, contact us for enquiry.",
        addInfo: "No data available, contact us for enquiry."
    },
    {
        productId: 13,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/PCI-BC1210P%20WITH%20NO-NC%20(1).jpg?alt=media&token=065e53ae-c76b-4c04-bb32-3b236743c19f",
        category: "SMPS Battery Charger 12V",
        title: "PCI-BC1210P WITH NO-NC",
        price: "---",
        techDesc: "No data available, contact us for enquiry.",
        addInfo: "No data available, contact us for enquiry."
    },
    {
        productId: 14,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/PCI-BC12105M%20WITH%20ALLIGATOR%20CLAMPS%20(1).jpg?alt=media&token=acaab683-a3a1-416e-a35e-1a6972290472",
        category: "SMPS Battery Charger 12V",
        title: "PCI-BC1210/5M WITH ALLIGATOR CLAMPS",
        price: "---",
        techDesc: "No data available, contact us for enquiry.",
        addInfo: "No data available, contact us for enquiry."
    },
    {
        productId: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/PCI-BC2410M.jpg?alt=media&token=5559afe3-2a76-4da9-84f6-010908d7cdbe",
        category: "SMPS Battery Charger 24V",
        title: "PCI-BC2410M",
        price: "---",
        techDesc: "This is PCI-BC2410M's technical description.",
        addInfo: "This is PCI-BC2410M's additional information."
    },
    {
        productId: 16,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/PCI-BC2410_12V%20MULTI%20ampere%20meter%20(1).jpg?alt=media&token=014933c8-1c40-41e5-8c60-63ceea30d4d1",
        category: "SMPS Battery Charger 24V",
        title: "PCI-BC2410/12V MULTI (WITH AMPERE METER)",
        price: "1999 per piece",
        techDesc: "Output Voltage	12V DC<br>Input Voltage	150 - 260 V AC<br>Output Current	10 Ampere<br>Usage/Application	BATTERY CHARGING<br>Brand	POWER CONTROL INDIA<br>Battery Type	LEAD ACID<br>Capacity (Ah)	UPTO 200Ah<br>Warranty	1 YEAR",
        addInfo: "Item Code: PCI-2412-10MA<br>Packaging Details: BOX PACKING"
    },
    {
        productId: 17,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/PCI-BC2410_12V%20MULTI%20ampere%20meter%20(3).jpg?alt=media&token=32e1832b-a803-430b-93ea-b3fcc1e7cb2e",
        category: "SMPS Battery Charger 24V",
        title: "PCI-BC2410/12V MULTI (WITH DIGITAL DISPLAY)",
        price: "2299 per piece",
        techDesc: "Output Voltage	24V & 12V DC<br>Input Voltage	230 V AC<br>Output Current	10 Ampere<br>Usage/Application	BATTERY CHARGING<br>Brand	POWER CONTROL INDIA<br>Capacity (Ah)	UPTO 300 Ah<br>Warranty	1 YEAR",
        addInfo: "Item Code: PCI-241210D<br>Production Capacity: 200<br>Delivery Time: Depends on Location<br>Packaging Details: Box Packing with Foam Protection"
    },
    {
        productId: 18,
        img: "assets/agssc.jpg",
        category: "Auto Genset Controller",
        title: "AGSSC FOR KIRLOSKAR GENERATOR",
        price: "2999 per piece",
        techDesc: "We have designed this controller for all types of Gensets.",
        addInfo: "Item Code: MCBASSC <br>Packaging Details: Box Packing"
    },
    {
        productId: 19,
        img: "assets/agssc.jpg",
        category: "Auto Genset Controller",
        title: "AGSSC FOR KOEL GREEN GENERATOR",
        price: "2999 per piece",
        techDesc: "We have designed this controller for all types of Gensets.",
        addInfo: "Item Code: MCBASSC <br>Packaging Details: Box Packing"
    },
    {
        productId: 20,
        img: "assets/agssc.jpg",
        category: "Auto Genset Controller",
        title: "AGSSC FOR CUMMINS GENERATOR",
        price: "2999 per piece",
        techDesc: "We have designed this controller for all types of Gensets.",
        addInfo: "Item Code: MCBASSC <br>Packaging Details: Box Packing"
    },
    {
        productId: 21,
        img: "assets/agssc.jpg",
        category: "Auto Genset Controller",
        title: "AGSSC FOR ESCORT GENERATOR",
        price: "2999 per piece",
        techDesc: "We have designed this controller for all types of Gensets.",
        addInfo: "Item Code: MCBASSC <br>Packaging Details: Box Packing"
    },
    {
        productId: 22,
        img: "assets/agssc.jpg",
        category: "Auto Genset Controller",
        title: "AGSSC FOR ASHOK LEYLAND GENERATOR",
        price: "2999 per piece",
        techDesc: "We have designed this controller for all types of Gensets.",
        addInfo: "Item Code: MCBASSC <br>Packaging Details: Box Packing"
    },
    {
        productId: 23,
        img: "assets/agssc.jpg",
        category: "Auto Genset Controller",
        title: "AGSSC FOR SUDHIR GENERATOR",
        price: "2999 per piece",
        techDesc: "We have designed this controller for all types of Gensets.",
        addInfo: "Item Code: MCBASSC <br>Packaging Details: Box Packing"
    },
    {
        productId: 24,
        img: "assets/agssc.jpg",
        category: "Auto Genset Controller",
        title: "AGSSC FOR EICHER GENERATOR",
        price: "2999 per piece",
        techDesc: "We have designed this controller for all types of Gensets.",
        addInfo: "Item Code: MCBASSC <br>Packaging Details: Box Packing"
    },
    {
        productId: 25,
        img: "assets/agssc.jpg",
        category: "Auto Genset Controller",
        title: "AGSSC FOR KEY START GENERATOR",
        price: "2999 per piece",
        techDesc: "We have designed this controller for all types of Gensets.",
        addInfo: "Item Code: MCBASSC <br>Packaging Details: Box Packing"
    },
    {
        productId: 26,
        img: "assets/agssc.jpg",
        category: "Auto Genset Controller",
        title: "AGSSC FOR ANY LOCAL MADE GENERATOR",
        price: "2999 per piece",
        techDesc: "Operating Voltage	220 V AC & 12V DC <br>Model Name/Number	Power Control India <br>Operation Type	Fully Automatic <br>Phase	1-Phase <br>Brand	POWER CONTROL INDIA <br>Mounting Type	Wall <br>Power	230V AC",
        addInfo: "Item Code: MCBASSC <br>Packaging Details: Box Packing"
    },
    {
        productId: 27,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/PCI-ASU%20(2).jpg?alt=media&token=3e870dba-c594-46f6-815b-742a38029375",
        category: "Auto Generator Stop Unit",
        title: "PCI ASU",
        price: "599 per piece",
        techDesc: "Phase	Single Phase<br>Power Source	Battery, Electrical<br>Material	High Quality Plastic based Tray with superior quality Epoxy for curcuit Protection<br>Frequency	50Hz<br>Color	Red<br>Supply Voltage	230V AC<br>Type	DIGITAL<br>Weight	.300 Grams<br>Primary Voltage	230V AC and 12V DC<br>Protection	Fuse<br>Application Use	Automatic Generator Stop<br>Product Code	PCI-ASU<br>Warranty Of Components	1 YEAR",
        addInfo: "Model Number: PCI-SU"
    },
    {
        productId: 28,
        img: "https://5.imimg.com/data5/SELLER/Default/2021/8/IB/EY/NF/40930076/se-hm-1-hour-meter-220-24-ac-dc-500x500-500x500.jpg",
        category: "Hour Meter",
        title: "PCI HM1",
        price: "349 per piece",
        techDesc: "Non - resettable <br>7 digit version with automatic recycle to zero Shock & Vibration Proof <br>Display: 99999.99 <br>Voltage: 12V DC, 24V; 110V AC, 220, 380V <br>Frequency: 50 or 60Hz",
        addInfo: "Item Code: PCI-HM1 <br>Delivery Time: 7 WORKING DAYS <br>Packaging Details: BOX PACKING"
    },
    {
        productId: 29,
        img: "https://5.imimg.com/data5/ANDROID/Default/2021/3/BN/ZD/KH/40930076/product-jpeg-500x500.jpg",
        category: "Electric Rectifier",
        title: "PCI MT6",
        price: "350 per piece",
        techDesc: "Phase	Three Phase <br>Input Voltage	380 V <br>Output Voltage	0-48 V <br>Model Name/Number	PCI-5W <br>Brand	POWER CONTROL INDIA <br>Frequency	50Hz <br>Current	6 Amp",
        addInfo: "Model Name: PCI-5W <br>Packaging Type: Box Packing"
    },
    {
        productId: 30,
        img: "assets/sample.jpg",
        category: "IRI",
        title: "PCI IRI",
        price: "---",
        techDesc: "No data available, contact us for enquiry.",
        addInfo: "No data available, contact us for enquiry."
    },
    {
        productId: 31,
        img: "assets/sample.jpg",
        category: "Ruttonsha",
        title: "Ruttonsha",
        price: "---",
        techDesc: "No data available, contact us for enquiry.",
        addInfo: "No data available, contact us for enquiry."
    },
    {
        productId: 32,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/kg541.jpg?alt=media&token=778aab5d-5d13-4492-971b-fbba6266ac43",
        category: "",
        title: "KG541",
        price: "4899 per piece",
        techDesc: "Genset Brand	KOEL by Kirloskar <br>Model Number	KG 541 <br>Phase	3-Phase <br>Usage/Application	Industrial <br>Warranty	1 Year",
        addInfo: "Item Code: KG541 <br>Delivery Time: 5-7 DAYS <br>Packaging Details: BOX PACKING"
    },
    {
        productId: 33,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/kg934%20v2-500x500.jpg?alt=media&token=4e91dc64-b9e4-4f1f-bf55-47c84c044b16",
        category: "Koel Green Controller",
        title: "KG934",
        price: "---",
        techDesc: "No data available, contact us for enquiry.",
        addInfo: "No data available, contact us for enquiry."
    },
    {
        productId: 34,
        img: "https://5.imimg.com/data5/ANDROID/Default/2021/3/BN/ZD/KH/40930076/product-jpeg-500x500.jpg",
        category: "Koel Green Controller",
        title: "GMS534E",
        price: "---",
        techDesc: "No data available, contact us for enquiry.",
        addInfo: "No data available, contact us for enquiry."
    },
    {
        productId: 35,
        img: "https://firebasestorage.googleapis.com/v0/b/website-3b0cf.appspot.com/o/hmi%20211%20.jpg?alt=media&token=221cc51e-678d-478a-a5cc-434ae018dc4f",
        category: "Cummins Controller",
        title: "HMI 211",
        price: "23,500 per piece",
        techDesc: "Model Name/Number	hmi 211 <br>Brand	Cummins <br>Usage/Application	Power Command Controller <br>Mounting Type	Panel Mount <br>Phase	Three phase <br>Display Resolution	Digital <br>Touch Screen Type	NON TOUCHSCREEN",
        addInfo: "Item Code: HMI211 <br>Packaging Details: BOX PACKING"
    }
]

// Products database ends here




function openLightbox(givenId){
    productCategory.innerHTML = Products[givenId-1].category;
    productName.innerHTML = Products[givenId-1].title;
    productImg.src = Products[givenId-1].img;
    productPrice.innerHTML = Products[givenId-1].price;
    lightboxTechDesc.innerHTML = Products[givenId-1].techDesc;
    lightboxAddInfo.innerHTML = Products[givenId-1].addInfo;
    lightbox.style.display = "flex";
}

function closeLightbox(){
    lightbox.style.display = "none";
}