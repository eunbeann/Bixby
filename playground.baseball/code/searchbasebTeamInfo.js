var TEAMDICT = require('./lib/teaminfo.js');

export default function (inputTeamName) {
  // var num = Math.ceil(Math.random() * 100);
  // var likes = http.getUrl(server+num+"/comments", {format:"json"});



  var teamSearchResult = TEAMDICT.filter(function(team) {
    // team.likes = likes,review_no;

    return (team.clubName.toUpperCase() == inputTeamName.toUpperCase())
  })
  
  return teamSearchResult;
}