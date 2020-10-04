document.addEventListener('DOMContentLoaded', e => {
  let lang =
    JSON.parse(localStorage.getItem('lang')) === 'english'
      ? 'english'
      : 'nepali';

  let nepali = {
    langBtn: 'अ्ग्रेजीमा परिवर्तन गर्नुहोस्',
    title1: 'कार्बन फुटप्रिन्ट भनेको के हो?',
    paragraph1:
      'कार्बन फुटप्रिन्ट ग्रीन हाउस ग्यास (कार्बन डाइअक्साइड र मिथेन सहित) को कुल राशि हो जुन हाम्रो कार्यहरू द्वारा उत्पन्न गरिएको हो। संयुक्त राज्यमा एक व्यक्तिको लागि औसत कार्बन फुटप्रिन्ट १६  टन हो, जुन विश्वमा सब भन्दा उच्च दर हो। विश्वव्यापी रूपमा, औसत ४ टनको नजिक छ। विश्वव्यापी तापक्रममा २ प्रतिशतको वृद्धिलाई बेवास्ता गर्ने उत्तम अवसर पाउन २०५० सम्ममा प्रतिवर्ष औसत विश्वव्यापी कार्बन फुटप्रिन्ट २ टन भित्र झर्नु पर्छ।',
    paragraph2:
      'व्यक्तिगत कार्बन पदचिह्न १६ टनबाट २ टनसम्म घटाउनु पर्छ। यो तपाइँको सबै गतिविधिहरु बाट उत्सर्जन सार संग काम गर्दछ - केतपाइँ खाने के बाट सबै तपाइँ तपाइँको लुगा धुने के के गर्न को लागी सबै कुरा। यो सबै CO2e मा मापन गरिएको छ, जुन कार्बन डाइअक्साइड बराबर हो र कार्बन फुटप्रिन्टहरू मापन गर्न मानक इकाई हो। यसले अनिवार्य रूपमा कुनै पनि मात्रा वा हरितगृह ग्यासको प्रकार लिन्छ र यसलाई CO2 को मात्रामा अभिव्यक्त गर्दछ कि बराबर ग्लोबल वार्मिंग प्रभाव हुनेछ। यसले हामीलाई सजिलैसँग विभिन्न ग्याँसहरूमा प्रभावहरू तुलना गर्न अनुमति दिन्छ।कार्बन फुटब्रेन्ट भनेको के हो? यो कसरी गणना गरिएको छ?',
    title2: 'यो कसरी गणना गरिएको छ?',
    paragraph3:
      'यो तपाइँको सबै गतिविधिहरु बाट उत्सर्जन सार संग काम गर्दछ - तपाइँ के खान देखि सबै तपाइँ तपाइँको लुगा धुने के के सबै केहि। यो सबै CO2e मा मापन गरिएको छ, जो कार्बन डाइअक्साइड बराबर हो र कार्बन पदचिह्न मापन को लागी एक मानक इकाई हो। यसले अनिवार्य रूपमा कुनै पनि मात्रा वा हरितगृह ग्यासको प्रकार लिन्छ र यसलाई CO2 को मात्रामा अभिव्यक्त गर्दछ कि बराबर ग्लोबल वार्मिंग प्रभाव हुनेछ। यसले हामीलाई सजिलैसँग विभिन्न ग्याँसहरूमा प्रभावहरू तुलना गर्न अनुमति दिन्छ।',
    title3: 'नेपालमा C02 उत्सर्जन',
    title4: 'C02 उत्सर्जनको इतिहास',
  };

  let english = {
    langBtn: 'Change to Nepali',
    title1: 'WHAT IS CARBON FOOTPRINT ?',
    paragraph1:
      'A Carbon Footprint is the total amount of greenhouse gases (including carbon dioxide and methane) that are generated by our actions. The average carbon footprint for a person in the United States is 16 tons, one of the highest rates in the world. Globally, the average is closer to 4 tons. To have the best chance of avoiding a 2℃ rise in global temperatures, the average global carbon footprint per year needs to drop under 2 tons by 2050. Lowering individual carbon footprints from 16 tons to 2 tons doesn’t happen overnight! By making small changes to our actions, like eating less meat, taking less connecting flights and line drying our clothes, we can start making a big difference. ',
    title2: 'HOW IT IS CALCULATED ?',
    paragraph2:
      "It works by summing up the emissions from all your activities -- everything from what you eat to what setting you wash your clothes with. It's all measured in CO2e, which stands for carbon dioxide equivalent and is a standard unit for measuring carbon footprints.It essentially takes any quantity or type of greenhouse gas and expresses it in the amount of CO2 that would have the equivalent global warming impact.It just allows us to easily compare impacts across different gases.",
    title3: 'C02 EMISSIONS IN NEPAL',
    title4: 'SOURCES OF METHANE ',
  };

  if (lang === 'english') {
    lang = 'nepali';
    changeLang();
  } else {
    lang = 'english';
    changeLang();
  }

  document.getElementById('langBtn').addEventListener('click', changeLang);

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
});
