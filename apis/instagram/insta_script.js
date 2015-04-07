$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/tags/wattstowers/media/recent?access_token=806401368.5aa13be.4a08df065cbb41469c9cc20041432d3b",
    success: function(data) {
        for (var i = 0; i < 18; i++) {
            $(".hashtag").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a></li>");
        }
    }
});

