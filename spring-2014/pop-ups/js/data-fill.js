var person = {
	'taco': {
			'name': 'Paco el Taco',
			'biography': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
			'picture': 'http://farm9.staticflickr.com/8357/8321203454_cffe7a92f1_m.jpg'
		},
	'luis': {
			'name': 'Luis Blackaller',
			'biography': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore <a href="http://black.mitplw.com">magnam aliquam quaerat voluptatem</a>. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
			'picture': 'http://farm9.staticflickr.com/8259/8662461612_0190aca83f_m.jpg'
		},

		'luna': {
			'name': 'Luna White',
			'biography': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
			'picture': 'http://2.bp.blogspot.com/-lsNOd19gZbM/TbHRje_DnGI/AAAAAAAAAI4/m0ty7ap_H-c/s1600/luna+white.jpeg'
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
	$('#about-pic').css( 'background-position', 'center' );
	$('#about-pic').css( 'background-size', 'cover' );
	$('#about-information').html( '<h2>' + person[ID].name + '</h2>' + person[ID].biography );
};