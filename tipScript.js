document.addEventListener('DOMContentLoaded', e => {
  let lang =
    JSON.parse(localStorage.getItem('lang')) === 'english'
      ? 'english'
      : 'nepali';

  let nepali = {
    langBtn: 'अ्ग्रेजीमा परिवर्तन गर्नुहोस्',
    title1: 'कार्बन कटौती',
    paragraph1:
      'सुझाव र सल्लाह तपाईंलाई कार्बन र ऊर्जा लागत कटौती गर्न मद्दतको लागि।',
    summary1:
      '१. धोएको कपडा ड्राई क्लिन गर्नु को बिकल्पमा झुण्ड्याएर सुकाउनु होस् । ',
    paragraph2: `लुगा धुक्ने प्रयोगको सट्टा धुनु पर्दा
            <span शैली = "फन्ट-वजन: "००"
              > १५३kg CO <sub> २ </sub> एक बर्ष </ span
            >
            - त्यो <span शैली = "फन्ट-वजन: "००"> एनपीआर, 85($68) </span> प्रत्येक
            वर्ष, 150 चक्रको आधारमा एक बर्ष।`,
    summary2: '२. तताउने कार्य 1 ले घटाउनु होस्।',
    paragraph3: `तपाईंले आफ्नो हिटिङ्ग 1°c ले घटाए विधुत खपत 8% ले घट्छ । सरदर 12,500 kwh ग्यास बिल ले  कार्बन उत्सर्जन 184 केजीले घटाउँछ, जुन नेरू 6460 प्रति बर्ष बचत हो।`,
    paragraph4:
      'चाहे जति मात्र पानी तताउदा 72 केजी कार्बन बचत हुन्छ- जुन नेरू 3525 ($30) प्रति बर्ष',
    summary3: '३.  कित्लीमा पानी तताउन चाहे जति मात्र  भर्नु होस् ।',
    paragraph4: `
चाहे जति मात्र पानी तताउदा 72 केजी कार्बन बचत हुन्छ- जुन नेरू 3525 ($30) प्रति बर्ष`,
    summary4: '४. नुहाउन जाँदा कम समय बिताउनु होस्',
    paragraph5: `स्नानमा १ मिनेट कम खर्च गरेमा वर्षको २k किलोग्राम सीओ २ र एनपीआर रु ११७५ ($१०) बचत गर्न सक्दछ (दिनको एक स्नान र 9 केडब्लु नुहाउनेमा आधारित)।`,
    summary5: '५. विद्युतीय उपकरणहरू बन्द गर्नुहोस् जब प्रयोगमा छैन',
    paragraph6: `

पूर्ण रूपमा केवल एक LCD टिभी बन्द गर्दै (यसमा छोड्नु भन्दा पनि
            अतिरिक्त) १8 घण्टा को लागी एक दिन को बारे मा बचत हुनेछ
            <span शैली = "फन्ट-वजन: "००"> k किलो सीओ <sub> २ </sub> एक वर्ष </ span> -
            बचत <span शैली = "फन्ट-वजन: "००"> एनपीआर 10 १०० एक वर्ष ($ २.6464) </span>।
            सबै अन्य बिजुली उपकरणहरू बन्द गर्नुहोस् जब गुणा गर्न प्रयोगमा छैन
            बचत।`,
    last: `कुल सम्भावित बचतहरू छन्
        <span शैली = "फन्ट-वजन:" ०० "
          > 7 437kg CO <sub> २ </sub> र NPR १,470० ($ १०) </ span
        >
        प्रत्येक वर्ष।
        <span शैली = "फन्ट-वजन:" ०० "
          > तपाईंको पैसा बचत गर्नुहोस् साथै प्लानेट:) </ span>`,
  };

  let english = {
    langBtn: 'Change to Nepali',
    title1: 'CARBON REDUCTION',
    paragraph1: 'Tips and Advice to help you cut carbon and energy costs.',
    summary1: '1. Hang out the washing instead of clothes drying.',
    paragraph2: `Hanging the washing out instead of using the clothes drier will
            <span style="font-weight: 700" 
              >about 153kg CO<sub>2</sub> a year</span
            >
            - that's <span style="font-weight: 700">NPR 7,985 ($68)</span> each
            year, based on 150 cycles a year.`,
    summary2: '2. Turn down the heating by 1⁰C.',
    paragraph3: `Reducing your heating by 1⁰C can
            <span style="font-weight: 700"
              >reduce your energy consumption by 8%.</span
            >
            For an average household gas bill of 12,500kWh this will
            <span style="font-weight: 700"
              >reduce your CO<sub>2</sub> emissions by 184kg -</span
            >
            that's
            <span style="font-weight: 700">NPR 6460 ($55) each year.</span>`,
    summary3:
      '3. Only fill the kettle with the amount of water you need to boil.',
    paragraph4: `Only boiling the amount of water for your hot drink will save
            <span style="font-weight: 700">72kg CO<sub>2</sub></span> a year -
            that's
            <span style="font-weight: 700">NPR 3525 ($30) per annum</span>.`,
    summary4: '4. Spend less time in the shower',
    paragraph5: ` Spending 1 minute less in the shower can save
            <span style="font-weight: 700"
              >23kg CO<sub>2</sub> and NPR 1175 ($10) a year </span
            >(based on one shower a day and a 9kW shower).`,
    summary5: `5. Turn electrical equipment off when not in use`,
    paragraph6: `Fully turning off just one LCD TV (rather than leaving it on
            standby) for 18 hours a day will save about
            <span style="font-weight: 700">5kg CO<sub>2</sub> a year </span>-
            saving<span style="font-weight: 700">NPR 310 a year ($2.64)</span>.
            Turn off all other electrical equipment when not in use to multiply
            the savings.`,
    last: `Total Potential savings are
        <span style="font-weight: 900"
          >437kg CO<sub>2</sub> and NPR 17,470 ($150)</span
        >
        each year.
        <span style="font-weight: 900"
          >Save your MONEY as well as PLANET :)</span
        >`,
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
        document.getElementById(key).innerHTML = nepali[key];
      });
      lang = 'nepali';
      localStorage.setItem('lang', JSON.stringify(lang));
    } else {
      Object.keys(english).forEach(key => {
        document.getElementById(key).innerHTML = english[key];
      });
      lang = 'english';
      localStorage.setItem('lang', JSON.stringify(lang));
    }
  }

  document.getElementById('langBtn').addEventListener('click', changeLang);
});
