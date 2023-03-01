
$.html5Translate = function(dict, lang){
	$('[data-translate-key]').each(function(){
			$(this).html( dict[ lang ][ $(this).data('translateKey') ] );
	});
};

$(document).ready(function() {
  $('.header__lang-link_en').click(function(event) {
    event.preventDefault();
    var lang = 'en';
    var dict = {
	en: {
			'SITE-TITLE': 'Traveling in Russia',
			'SITE-SUBTITLE': 'The real country is not in the news, but here.',
			'SITE-CAPTION': 'your shelf is top',
			'INTRO-TITLE': "What didn't we see there?",
			'INTRO-TEXT': "According to VTsIOM polls, 95% of Russians dream of going somewhere, but only 36% plan to spend their holidays in their native country. Like, what have we not seen here at home? In fact, Russia is a whole universe with the gentle sea of the south, the dense forests of the Sayans and the harsh ice of the Putorana Plateau. And you can also see all these beauties without millions in your account, a passport and many hours of flights. Like, for example, Vera Bashmakova, a brave young mother who took three children in her arms, put them in her Lada and drove 20 thousand kilometers across her native country. We have selected and described some interesting places worthy of your vacation.",
			'INTRO-TITLE-TIME': "time zones 11",
			'INTRO-TITLE-NATURE': "UNESCO natural heritage sites 12",
			'INTRO-TITLE-CULTURE': "UNESCO cultural heritage sites 16",
			'INTRO-TITLE-RESERVE': "nature reserves 105",
			'INTRO-TITLE-AIRPORT': "Airports 241",
			'INTRO-TITLE-CURONIAN': "Сuronian spit",
			'INTRO-PARAGRAF-CURONIAN1': "Here, in the middle of forests and sand dunes, you can see two water horizons - the calm Curonian Lagoon on one side and the rippling waves of the Baltic Sea on the other. A unique natural area on the edge of the Russian enclave.",
			'INTRO-PARAGRAF-CURONIAN2': "The Kaliningrad region does not end there. For a traveler and researcher, there is the westernmost point of Russia, the Baltic Spit, and the German heritage of a scattering of small seaside towns in the same neighborhood. The atmosphere of these places eliminates the fuss, dipping into the tranquility of nature and the smell of steel, cool sea.",
			'INTRO-TITLE-KOLSK': "Kolsk",
			'INTRO-PARAGRAF-KOLSK1': "Almost the entire peninsula is located beyond the Arctic Circle. The Saami tundra, from which to the south is the taiga, and to the north is the Arctic Ocean, pretending to be the Barents Sea.",
			'INTRO-PARAGRAF-KOLSK2': "Perhaps you watched Zvyagintsev and even heard the story of the Arctic festival in Teriberka. Perhaps the word 'Khibiny' did not remain under the snow of school memories of geography lessons. Perhaps you were not interested in the ultra-deep well penetrating the earth's crust, but apathy has long covered you from apatites. But your dream of seeing the northern lights comes true with a ticket to Murmansk.",
			'INTRO-TITLE-ALTAI': "Altai",
			'INTRO-PARAGRAF-ALTAI1': "Altai is one of the most beautiful places in Russia. First of all, because of the mountains: if you drive along the ridge, you will see slopes strewn with pine trees, mountain rivers and lakes. And if you open the windows in the car, you can get acquainted with the invisible miracle of these places - the mountain air.",
			'INTRO-PARAGRAF-ALTAI2': "The climate in Altai is temperate, so it is best to go here in summer. So you will see all the variety of local flora and fauna. Moose roam the forests of Altai, eagles fly over the ridges, and roe deer graze on the plains. And the famous manuls are also inhabitants of the Altai Territory.",
			'INTRO-TITLE-BAIKAL': "Winter Baikal",
			'INTRO-PARAGRAF-BAIKAL1': "Everyone knows Baikal as the largest lake in the world. Many also know that this is the largest source of fresh water and one of the most beautiful places in Russia.",
			'INTRO-PARAGRAF-BAIKAL2': "Of course, it's all true. But Baikal is still an ideal place for skiing competitions. This is a sport where a skier ties himself to a motorcycle and the tandem tries to develop as much speed as possible on the ice. In March 2019, a world record was set at the Baikal Mile festival - 197.011 km/h.",
			'INTRO-TITLE-KARELIA': "Karelia",
			'INTRO-PARAGRAF-KARELIA': "Siberia ends not in the Urals, but in Karelia: the Siberian larch that forms the taiga does not grow west of the Vodlozero. But here it swings up to 30 meters - the forests of the Karelian national parks, due to impenetrable swamps, have never known an ax. Some pines are more than half a millennium old. Touch a living creature that saw the sun before Ivan the Terrible saw it. In the virgin forest for a hundred kilometers you will not find a path. And on rare paths, trees a couple of meters from the ground are marked with bear claws. Let everyone know who's boss.",
			'INTRO-TITLE-DOGS': "To Baikal «on dogs»",
			'INTRO-PARAGRAF-TRANSSIB': "Based on the educational topic about the Trans-Siberian Railway - a journey from the capital to Baikal by electric trains.",
			'FOOTER-KARDS': "Cards",
			'FOOTER-WEATHER': "Weather",
			'FOOTER-SCHEDULE': "Schedule",
			'FOOTER-CALENDAR': "Calendar",
			'FOOTER-TRIPS': "Trips",
			'FOOTER-NAME': "&copy;2020.Renat",
		},

};
    $.html5Translate(dict, lang);
  });
	$('.header__lang-link_ru').click(function(event) {
    event.preventDefault();
    location.reload();
  });
});

