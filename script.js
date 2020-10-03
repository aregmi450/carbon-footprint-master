$(document).ready(function () {
	let nepali = {
	  nepali: 'अ्ग्रेजीमा परिवर्तन गर्नुहोस्',
	  knowMore: 'अझै धेरै जान्नुहोस्',
	  homeEnergyLabel: 'गृह उर्जा',
	  electricLabel: 'मासिक बिजुली बिल',
	  currency1: 'रु',
	  helpBlock1:
		'यदि लागू हुँदैन भने ० प्रविष्ट गर्नुहोस्। यदि खाली छोडियो भने ० मा पूर्वनिर्धारित हुनेछ।',
	  gasLabel: 'मासिक खाना पकाउने ग्यास बिल',
	  currency2: 'रु',
	  helpBlock2:
		'यदि लागू हुँदैन भने ० प्रविष्ट गर्नुहोस्। यदि खाली छोडियो भने ० मा पूर्वनिर्धारित हुनेछ।',
	  travelLabel: 'यात्रा',
	  carLabel: 'वार्षिक कार तपाईको कारमा चालित छ',
	  distance1: 'कि.मि.',
	  helpBlock3:
		'यदि लागू हुँदैन भने ० प्रविष्ट गर्नुहोस्। यदि खाली छोडियो भने ० मा पूर्वनिर्धारित हुनेछ।',
	  wheeler: 'वार्षिक दूरी तपाईंको दुई व्हीलरमा चालित',
	  distance2: 'कि.मि.',
	  helpBlock4:
		'यदि लागू हुँदैन भने ० प्रविष्ट गर्नुहोस्। यदि खाली छोडियो भने ० मा पूर्वनिर्धारित हुनेछ।',
	  flightLabel: 'बितेको वर्षमा लिएको घण्टा संख्या',
	  hourLabel: 'घण्टा',
	  wasteLabel: 'फोहोर',
	  recycleLabel: 'के तपाई अखबार रिसायकल गर्नुहुन्छ?',
	  selection1: 'तपाईंले चयन गर्नु पर्छ।',
	  yesLabel1: 'हो',
	  noLabel1: 'होईन',
	  plasticLabel: 'के तपाईं प्लास्टिकलाई रिसायकल गर्नुहुन्छ?',
	  selection2: 'तपाईंले चयन गर्नु पर्छ।',
	  yesLabel2: 'हो',
	  noLabel2: 'होईन',
	  calculateBtn: 'हिसाब गर्नुहोस्',
	};
	// let ids = document.querySelectorAll('*[id]');
  
	document.getElementById('nepali').addEventListener('click', () => {
	  Object.keys(nepali).forEach(key => {
		document.getElementById(`${key}`).textContent = nepali[key];
	  });
	});
  
	// hide results template and error alerts on initial page load
	$('#results').hide();
	$('.alert').hide();
  
	// prevent ability to type negative numbers or spaces in input fields
	$("[type='number']").bind('keydown', function (e) {
	  var code = e.keyCode || e.which;
  
	  if (code == 189 || code == 173 || code == 32 || code == 69 || code == 109) {
		return false;
	  }
	});
  
	$('#calculateBtn').on('click', function () {
	  var calculateAndDisplayScore = function () {
		window.scrollTo(0, 400);
		// hide form template if all inputs are completed
		$('#form').hide();
  
		// get input values
		var electricInput = document.getElementById('electric').value;
		var gasInput = document.getElementById('gas').value;
		var carInput = document.getElementById('car').value;
		var oilInput = document.getElementById('two-wheeler').value;
		var flightsInput = document.getElementById('flights-4-more').value;
		var flights4MoreInput = flightsInput >= 4 ? flightsInput : 0;
		var flights4LessInput = flightsInput < 4 ? flightsInput : 0;
  
		// set variables for calculating each component score
		var electricScore = '';
		var gasScore = '';
		var carScore = '';
		var flights4MoreScore = '';
		var newspaperScore = '';
		var alumTinScore = '';
  
		var totalScore = '';
  
		if (document.getElementById('optionsRadio1').checked) {
		  newspaperScore = 0;
		} else {
		  newspaperScore = 184;
		}
		// console.log("Newspaper score is: " + newspaperScore);
  
		if (document.getElementById('optionsRadio3').checked) {
		  alumTinScore = 0;
		} else {
		  alumTinScore = 166;
		}
		// console.log("Aluminum and tin score is: " + alumTinScore);
  
		if (electricInput === 0 || electricInput === 'undefined') {
		  electricScore = 0;
		} else {
		  electricScore = electricInput * 105;
		}
		// console.log("Electric score is: " + electricScore);
  
		if (gasInput === 0 || gasInput === 'undefined') {
		  gasScore = 0;
		} else {
		  gasScore = gasInput * 105;
		}
		// console.log("Gas score is: " + gasScore);
  
		if (oilInput === 0 || oilInput === 'undefined') {
		  oilScore = 0;
		} else {
		  oilScore = oilInput * 113;
		}
		// console.log("Oil score is: " + oilScore);
  
		if (carInput === 0 || carInput === 'undefined') {
		  carScore = 0;
		} else {
		  carScore = carInput * 0.79;
		}
		// console.log("Car score is: " + carScore);
  
		if (flights4LessInput === 0 || flights4LessInput === 'undefined') {
		  flights4LessScore = 0;
		} else {
		  flights4LessScore = flights4LessInput * 1100;
		}
		// console.log("Flights taken 4 hours or less score is: " + flights4LessScore);
  
		if (flights4MoreInput === 0 || flights4MoreInput === 'undefined') {
		  flights4MoreScore = 0;
		} else {
		  flights4MoreScore = flights4MoreInput * 4400;
		}
		// console.log("Flights taken 4 hours or more score is: " + flights4MoreScore);
  
		// calculate scores for each category
		var energyScore = electricScore + gasScore + oilScore;
		var travelScore = carScore + flights4LessScore + flights4MoreScore;
		var wasteScore = newspaperScore + alumTinScore;
  
		// calculate total score and round to nearest whole integer
		totalScore = Math.round(energyScore + travelScore + wasteScore);
		var formattedScore = totalScore.toLocaleString('en');
		// console.log(totalScore);
  
		document.getElementById('score').innerHTML = formattedScore;
  
		// display results
		$('#results').show();
  
		// refresh page when recalculate button clicked
		$('#recalculateBtn').on('click', function () {
		  document.getElementById('electric').value = 0;
		  document.getElementById('gas').value = 0;
		  document.getElementById('car').value = 0;
		  document.getElementById('two-wheeler').value = 0;
		  document.getElementById('flights-4-more').value = 0;
		  location.reload();
		  window.scrollTo(0, 0);
		});
	  };
  
	  // check selection made for recycling newspaper before calculating and displaying score
	  var recycleNewspaperSelectionYes = document.getElementById('optionsRadio1')
		.checked;
	  var recycleNewspaperSelectionNo = document.getElementById('optionsRadio2')
		.checked;
	  var recycleAlumTinSelectionYes = document.getElementById('optionsRadio3')
		.checked;
	  var recycleAlumTinSelectionNo = document.getElementById('optionsRadio4')
		.checked;
  
	  if (
		(recycleNewspaperSelectionYes == false &&
		  recycleNewspaperSelectionNo == false) ||
		(recycleAlumTinSelectionYes == false &&
		  recycleAlumTinSelectionNo == false)
	  ) {
		if (
		  recycleNewspaperSelectionYes == false &&
		  recycleNewspaperSelectionNo == false
		) {
		  $('#newspaper-alert').show();
		} else {
		  $('#newspaper-alert').hide();
		}
  
		if (
		  recycleAlumTinSelectionYes == false &&
		  recycleAlumTinSelectionNo == false
		) {
		  $('#alum-tin-alert').show();
		} else {
		  $('#alum-tin-alert').hide();
		}
	  } else {
		calculateAndDisplayScore();
	  }
	});
  });
  