var person = {
	'taco': {
			'name': 'Paco el Taco',
			'biography': 'Luis Blackaller works as Art Director and UI/UX Designer in WemoLab, and holds a part-time teaching position at the <a href="http://iml.usc.edu/luisblackaller/" target="blank">Institute of Multimedia Literacy</a> at USC. Luis has a multidisciplinary background that covers aspects of entertainment, science, design, art and storytelling. He holds a Mathematics degree, and has worked as a designer, artist and animator among academy award winners in films like <a href="http://www.imdb.com/name/nm1509586/" target="blank">Amores Perros, 21 Grams and Babel</a>. In addition to this, he holds a MS from the <a href="http://www.media.mit.edu/people/alumni" target="blank">MIT Media Lab</a>, where he developed software to explore creative social systems and their relationship with artistic expression and communication. After graduating from MIT, Luis worked as a Producer and Creative Director for the Next Billion Network at the MIT Media Lab, where he designed and supervised the execution of alternative strategies of communication and promotion of research, directing a team of documentary videographers and web developers for more than a year. This path encouraged him to start the Boston film collective <a href="http://fantasticsoup.com/" target="blank">Fantastic Soup</a>, where he directed and produced a number of experimental and commercial video pieces. Luis has a big cranium that can only be matched by the size of his imagination. For more information about his work please visit <a href="http://black.mitplw.com">black</a> and <a href="http://blacklog.mitplw.com">blacklog</a>.',
		'picture': 'http://farm9.staticflickr.com/8357/8321203454_cffe7a92f1_m.jpg'
		},
	'luis': {
		'name': 'Luis Blackaller',
		'biography': 'Luis Blackaller works as Art Director and UI/UX Designer in WemoLab, and holds a part-time teaching position at the <a href="http://iml.usc.edu/luisblackaller/" target="blank">Institute of Multimedia Literacy</a> at USC. Luis has a multidisciplinary background that covers aspects of entertainment, science, design, art and storytelling. He holds a Mathematics degree, and has worked as a designer, artist and animator among academy award winners in films like <a href="http://www.imdb.com/name/nm1509586/" target="blank">Amores Perros, 21 Grams and Babel</a>. In addition to this, he holds a MS from the <a href="http://www.media.mit.edu/people/alumni" target="blank">MIT Media Lab</a>, where he developed software to explore creative social systems and their relationship with artistic expression and communication. After graduating from MIT, Luis worked as a Producer and Creative Director for the Next Billion Network at the MIT Media Lab, where he designed and supervised the execution of alternative strategies of communication and promotion of research, directing a team of documentary videographers and web developers for more than a year. This path encouraged him to start the Boston film collective <a href="http://fantasticsoup.com/" target="blank">Fantastic Soup</a>, where he directed and produced a number of experimental and commercial video pieces. Luis has a big cranium that can only be matched by the size of his imagination. For more information about his work please visit <a href="http://black.mitplw.com">black</a> and <a href="http://blacklog.mitplw.com">blacklog</a>.',
		'picture': 'http://farm9.staticflickr.com/8259/8662461612_0190aca83f_m.jpg'
		}


	};
/* old
function fillInfo(ID){
	imageURL = person[ID].picture; 
	$('#about-pic').css( 'background-image', 'url(' + imageURL + ')' );
	$('#about-information').html( '<h2>'+ person[ID].name +'</h2>' );
	$('#about-information').append( person[ID].biography );
};
*/
function fillInfo(ID){
	imageURL = person[ID].picture; 
	$('#about-pic').css( 'background-image', 'url(' + imageURL + ')' );
	$('#about-pic').css( 'background-size', '100% 100%' );
	$('#about-information').html( '<h2>' + person[ID].name + '</h2>' + person[ID].biography );
};