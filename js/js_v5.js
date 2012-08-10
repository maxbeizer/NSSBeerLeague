$(document).ready(function() {
//START tablesort plugin
$("#standingsTable").stupidtable();
var entryId = localStorage.getItem('id');

//search for key that starts with "team". foreach find the teamName property, 
//store it to a variable and append the table body.
Object.keys(localStorage)
      .forEach(function(key){
        // parsing team objects for standings table
           if (/^(team)/.test(key)) {
            var teamObj = JSON.parse(localStorage.getItem(key));
            var teamName = teamObj.teamName;
            var wins = JSON.parse(teamObj.iWins);
            var losses = JSON.parse(teamObj.iLoss);
            if (wins+losses == 0){
                var percentage = 0;
            }else{
                var percentage = wins/(wins+losses);
            }
            teamLog = "";
            teamLog += '<tr><td>'+teamName+'</td><td>'+wins+'</td><td>'+losses+'</td><td>'+percentage+'</td></tr>' ;           
            $("#standingsBody").append(teamLog); //update the table
            }
        // parsing week objects for schedule/scores table
            if (/^(week)/.test(key)) {
            var weekObj = JSON.parse(localStorage.getItem(key));
            var weekNum = JSON.parse(weekObj.week);
            var home1 = JSON.parse(weekObj.home1);
            var away1 = JSON.parse(weekObj.away1);
            var home2 = JSON.parse(weekObj.home2);
            var away2 = JSON.parse(weekObj.away2);
            







            weekLog = " => ";
            weekLog += away1+" : "+home1 ;           
            $("#scheduleTable #game1 td:first-child").append(weekLog); //update the table
            }
       });



//submit to capture form data as a result object and give it an entry ID
$('#signUp').submit(function(e){
    e.preventDefault;
    var result = { };
    $.each($('#signUp').serializeArray(), function() {
    result[this.name] = this.value;
    });
    entryId++;
    var teamInfo = 'teamId'+entryId;
    window.localStorage.setItem('id', entryId);
    window.localStorage.setItem(teamInfo, JSON.stringify(result));
});// end submit method

// START scores form logic
$('form.scoreForm').submit(function(e){
    e.preventDefault;
    var result = { };
    $.each($('form.scoreForm').serializeArray(), function() {
    result[this.name] = this.value;
    });
    entryId++;    
    var weekInfo = 'weekId'+entryId;
    window.localStorage.setItem('id', entryId);
    window.localStorage.setItem(weekInfo, JSON.stringify(result));    
});// end scores submit

}); //end doc ready