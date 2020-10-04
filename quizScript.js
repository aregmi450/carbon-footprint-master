document.addEventListener('DOMContentLoaded', e => {
  let lang =
    JSON.parse(localStorage.getItem('lang')) === 'english'
      ? 'english'
      : 'nepali';

  let nepali = {
    langBtn: 'अ्ग्रेजीमा परिवर्तन गर्नुहोस्',
    fact1: 'तपाइँ कति कार्बन फूटप्रिन्टको बारेमा जान्नुहुन्छ?',
    aboutSubheader: 'पत्ता लगाउन क्विज लिनुहोस्!',
    fact: 'कार्बन फुटप्रिन्ट तथ्यांक जुन तपाईं चकित हुन सक्नुहुन्छ!',
    paragraph1:
      '१. मासु उत्पादनहरूमा अन्न र तरकारीहरू भन्दा प्रति क्यालोरी ठूलो कार्बन फुटप्रिन्ट हुन्छ। किनभने किनभने गाईवस्तु, भेडा र बाख्रा जस्ता पशुहरूले धेरै मीथेन ग्यास उत्पादन गर्दछन्। २०१६ मा, उनीहरूले मिथेन युनिभर्सिटीमा सस्टेनेबल सिस्टम सेन्टर द्वारा संकलित कार्बन फुटप्रिन्ट तथ्यांकका अनुसार मेथेनको सीओ २ मा १७० करोड मेट्रिक टन उत्पादन गरे। र हो, ती सबै वातावरणमा समाप्त हुन्छन्।',
    paragraph2:
       '२. मासु मात्र समस्या होइन, केन्द्रले भन्छ। पनीर र दही जस्तो दुग्ध उत्पादनहरूले उत्सर्जित ग्रीनहाउस ग्यासहरूको करीव १%% योगदान पुर्‍याउँछन् - कुखुरा, समुद्री खाना र अण्डाहरू भन्दा पनि खराब हो, जसले केवल ग्रीनहाउस ग्यासहरूको १४ % योगदान गर्दछ। तरकारीहरू, यस बीच, केवल ९.९ % योगदान गर्दछ।',
    paragraph3:
      '३. केन्द्रले पत्ता लगायो कि एक अमेरिकी परिवारले खाना खपतको माध्यमबाट मात्र प्रत्येक वर्ष .१.१ मेट्रिक टन CO2e उत्सर्जन गर्दछ। हो, यो टन्स हो। खाद्य उत्पादनको उत्सर्जनको ८३% को लागी खाता, र यसको यातायात ११% को लागी।',
    paragraph4:
      '४. र तथ्य पानाले औंल्याएको छ कि यदि तपाई गति सीमा पछ्याउनुहुन्छ भने, तपाईले टिकट मात्र प्राप्त गर्नुहुने छैन, तपाईको ईन्धनको अर्थव्यवस्था पनि सुधार गर्नुहुन्छ र विस्तारमा तपाईको कार्बन फुटप्रिन्टलाई अझ ठूलो ईन्धन दक्षता मार्फत सक्रिट गर्नुहुन्छ। शाब्दिक - तपाई अझ राम्रो पनि हुनुहुनेछ। केन्द्रले पत्ता लगायो कि ५० माइल प्रति घण्टा वा अधिक ड्राइभ गर्दा, प्रत्येक माइल प्रति बृद्धि प्रति गैलन २० देखि ४० सेन्ट बढी तिर्ने बराबर हुन्छ।',
    paragraph5:
      '५. तपाईंको कम्युटको कुरा गर्दै: वातावरणीय वकालत समूह नुइनेर्जीका अनुसार यातायात भनेको CO2 को सब भन्दा ठूलो उत्पादक हो, केवल बिजुली उत्पादनको पछि।',
    paragraph6:
      '६. फोहोर घटाउँदै, आश्चर्य आश्चर्य, वास्तवमा एक फरक पार्छ। फोहर घटाउने प्रत्येक १०% को लागी, तपाईं १२०० पाउन्ड CO2e लाई बेवास्ता गर्न सक्नुहुनेछ, सस्टेनेबल सिस्टमको लागि केन्द्रका अनुसार। र त्यो केवल रिसाइक्लि not मात्र होइन, कि कम प्याकेजिंगको साथ उत्पादनहरू किन्दा र किराना पसलमा प्लास्टिकको झोला अस्वीकार गरेर पनि।',
    paragraph7:
      '७. न्युनेर्जी भन्छन् कि जीवाश्म ईन्धन र कोइलाले ६७% उत्पादन गरिएको बिजुलीको स्रोत हुन्। यदि तपाईं आफ्नो कार्बन पदचिह्न कम गर्न कोशिस गर्दै हुनुहुन्छ भने, अर्को पटक तपाईं बत्तीहरू छोड्नुभयो भनेर सोच्नुहोस्।',
    paragraph8:
      '८. कर्पोरेसनहरू, आश्चर्यजनक रूपमा सबैमा सब भन्दा ठूलो कार्बन पदचिह्नहरू छन्। बस १०० कम्पनीहरु संसारको ७०% भन्दा बढी उत्सर्जनको लागि जिम्मेवार छन्, जलवायु उत्तरदायित्व संस्थानको सहयोगमा नाफामुखी CDP को २०१७ को रिपोर्ट अनुसार।',
  };

  let english = {
    langBtn: 'Change to Nepali',
    fact1: 'How much do you know about CARBON FOOTPRINT?',
    aboutSubheader: 'Take a quiz to find out!',
    fact: 'Carbon footprint figures that might surprise you!',
    paragraph1:
      "1. Meat products have bigger carbon footprints per calorie than grains or vegetables. That's because animals like cattle, sheep and goats produce a lot of methane gas. In 2016, they produced 170 million metric tons in CO2e of methane, according to a carbon footprint fact sheet compiled by the Center for Sustainable Systems at the University of Michigan. And yes, all that ends up in the atmosphere.",
    paragraph2:
      "2.  Meat isn't the only problem, the center says. Dairy products like cheese and yogurt contribute almost 19% of greenhouse gases emitted -- even worse than poultry, seafood and eggs, which only contribute 14% of greenhouse gases. Vegetables, meanwhile, contribute a mere 4.9%.",
    paragraph3:
      "3. The center found that on average, one American household emits 8.1 metric tons of CO2e each year through food consumption alone. Yes, that's TONS. The production of food accounts for 83% of emissions, and its transportation accounts for 11%. ",
    paragraph4:
      "4. And the fact sheet points out that if you follow the speed limit, not only will you not get a ticket, you'll also improve your fuel economy and, by extension, shrink your carbon footprint through greater fuel efficiency. You'll also be better off -- literally. The center found that when driving 50 mph or more, every 5 mph increase is equivalent to paying between 20 and 40 cents more per gallon.",
    paragraph5:
      '5. Speaking of your commute: Transportation is one of the biggest producers of CO2, only behind electricity generation, according to environmental advocacy group NuEnergy.',
    paragraph6:
      "6. Reducing waste, surprise surprise, actually makes a difference. For every 10% of waste reduction, you can avoid 1,200 pounds of CO2e, according to the Center for Sustainable Systems. And that's not just recycling, that's also simply by buying products with less packaging and refusing plastic bags at the grocery store.",
    paragraph7:
      "7. NuEnergy says that fossil fuels and coal are the source of 67% of generated electricity. If you're trying to reduce your carbon footprint, think about that next time you leave the lights on.",
    paragraph8:
      "8. Corperations, unsurprisingly, have the biggest carbon footprints of all. Just 100 companies are responsible for more than 70% of the world's emissions, according to a 2017 report from the nonprofit CDP in collaboration with the Climate Accountability Institute.",
  };

  if (lang === 'english') {
    lang = 'nepali';
    changeLang();
  } else {
    lang = 'english';
    changeLang();
  }

  function changeLang() {
    if (lang === 'english') {
      Object.keys(nepali).forEach(key => {
        document.getElementById(key).textContent = nepali[key];
      });
      lang = 'nepali';
      localStorage.setItem('lang', JSON.stringify(lang));
    } else {
      Object.keys(english).forEach(key => {
        document.getElementById(key).textContent = english[key];
      });
      lang = 'english';
      localStorage.setItem('lang', JSON.stringify(lang));
    }
  }

  document.getElementById('langBtn').addEventListener('click', changeLang);
});
