// variables
var app = {};
// app.url = "https://services.coastalresilience.org:6080/arcgis/rest/services/NCS/NCS_CountryDashboard/MapServer";


// create an object that has multiple panes

// have a true/false for whether that pane will be displayed

// have another catagory for pane type, full screen image, left image, right image, etc....

// for each type have a header value and a text body value

// also have a media attribute, path to media

app.config = {
	mainPanel:{
		display:true,
		id: 'mainPanel',
		type: 'fullScreenMedia', // cant change this for now.
		header: 'RESILIENT COASTAL CITIES',
		body: 'Increasing frequency and severity of extreme hazard events worldwide call for heightened collaboration between organizations to implement more strategic adaptation solutions that reduce disaster risk and build community resilience. Over the last few years, there has been growing awareness of the need to develop robust partnerships and programs of work between the environmental and humanitarian sectors. The Nature Conservancy’s (TNC) growing body of work in climate adaptation and mitigation has led to a new and innovative partnership with the International Federation of the Red Cross (IFRC) and the American Red Crosses Global Disaster Preparedness Center (GDPC).',
		mediaType: 'image', // image or video
		mediaPath: 'images/Indo_1.jpg',
		logoMediaPath: 'images/redCrossLogo.jpg',

	},
	panel2:{
		display:true,
		id: 'panel2',
		type: 'fullScreenMedia',
		header: 'Header needed?',
		body: 'The goal of Resilient Coastal Cities is to enhance local collaboration and problem solving to support effective climate change adaptation within the humanitarian cycle of preparedness, response, and recovery. TNC is providing city-specific ecosystem data that can assist and guide city level planners and community members to make informed decisions for appropriate nature-based adaptation solutions, or natural infrastructure, as a critical component of disaster risk reduction before, during, and after flood events. This app is designed to support local coalition planning for Palang Merah Indonesia and the city of Semarang in Central Java, Indonesia.',
		mediaType: 'image', // image or video
		mediaPath: 'images/Indo_2.jpg'

	},
	panel3:{
		display:true,
		id: 'panel3',
		type: 'imageLeft',
		header: 'Title needed?',
		body: 'By blending TNC’s experience with science-based ecosystem conservation with the Red Cross’s experience in community mobilization, one of the project’s main objectives is to assess flooding through social media and identify opportunities for mangrove restoration as a means to reduce coastal inundation.<br> <b>Scroll down to explore the app now!</b>',
		mediaType: 'image', // image or video
		mediaPath: 'images/Indo_3.jpg'

	},
	panel4:{
		display:true,
		id: 'panel4',
		type: 'fullScreenImage',
		header: 'test header',
		body: 'test body text',
		mediaType: 'image', // image or video
		mediaPath: 'images/infographic.jpg'
	},
	appPanel:{
		display:true, // always display true?
		id: 'mapPanel', // cant change this yet
		location: 'appCode2/index.html', // embed the location of the app index.html file
		type: 'map',

	}
}

app.type = {
	fullScreenMedia: "class1 class2",
	imageLeft: "imageLeftClass1 imageLeftClass2"
}
