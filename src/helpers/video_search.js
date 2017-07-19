const youtube_url = 'https://www.googleapis.com/youtube/v3/search';
const key = 'AIzaSyCR7M6CQcjevymrItkF3cOdDgLSClKMeW0';


function build_url (query) {
  return youtube_url + '?key='  + key + '&part=snippet&q=' + query;
}

export function video_search(query) {
  var videos = [];
  var url = build_url(query)
  var xhttp = new XMLHttpRequest();
  var that = this;
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var resultList = JSON.parse(xhttp.responseText).items;
      for (var i = 0; i < resultList.length; ++i) {
        videos.push({id:resultList[i].id.videoId, title:resultList[i].snippet.title, thumbnail:resultList[i].snippet.thumbnails.default.url})
      }
      that.props.sendResults(videos);
    }
  }
  xhttp.open("GET", url, true);
  xhttp.send();
}
