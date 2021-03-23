$(document).ready(function () {

    var apiKey = 'a1fbb820'
  
    $("#movieForm").submit(function (event) {
      event.preventDefault()
  
      var movie = $("#movie").val()
  
      var baseUrl = "https://www.omdbapi.com/?apikey=" + apiKey
  
      var result = ''
  
      var movieSign;
  
      $.ajax({
        method: 'GET',
        url: baseUrl + "&t=" + movie,
        success: function (data) {
  
          result = `
                  <img style="float:left" class="img-thumbnail" width= "200" height = "200" src="${data.Poster}">
                  `
  
          $("#result").html(result)
  
          console.log(result);
          console.log(data.Released.split(" "));
          var dateArr = data.Released.split(" ");
          movieSign = getZodiacSign(parseInt(dateArr[0]), dateArr[1]);
  
          var releaseDate = data.Released
          $("#release-date").html("Movie's B Day: " + releaseDate + " " + movieSign);
  
          if (releaseDate === true) {
            $("#release-date").append(releaseDate);
          }
          const URL = 'https://aztro.sameerkumar.website/?sign=' + movieSign + '&day=today';
          fetch(URL, {
              method: 'POST'
            })
            .then(response => response.json())
            .then(json => {
              const date = json.current_date;
              console.log(json);
              //include description here
            });
        }
      });
    });
  })
  
  function getZodiacSign(day, month) {
  
    var signs = {
      'capricorn': 'capricorn',
      'aquarius': 'aquarius',
      'pisces': 'pisces',
      'aries': 'aries',
      'taurus': 'taurus',
      'gemini': 'gemini',
      'cancer': 'cancer',
      'leo': 'leo',
      'virgo': 'virgo',
      'libra': 'libra',
      'scorpio': 'scorpio',
      'sagittarius': 'sagittarius'
    }
  
    if ((month == "Jan" && day <= 20) || (month == "Dec" && day >= 22)) {
      return zodiacSigns.capricorn;
    } else if ((month == "Jan" && day >= 21) || (month == "Feb" && day <= 18)) {
      return signs.aquarius;
    } else if ((month == "Feb" && day >= 19) || (month == "Mar" && day <= 20)) {
      return signs.pisces;
    } else if ((month == "Mar" && day >= 21) || (month == "Apr" && day <= 20)) {
      return signs.aries;
    } else if ((month == "Apr" && day >= 21) || (month == "May" && day <= 20)) {
      return signs.taurus;
    } else if ((month == "May" && day >= 21) || (month == "Jun" && day <= 20)) {
      return signs.gemini;
    } else if ((month == "Jun" && day >= 22) || (month == "Jul" && day <= 22)) {
      return signs.cancer;
    } else if ((month == "Jul" && day >= 23) || (month == "Aug" && day <= 23)) {
      return signs.leo;
    } else if ((month == "Aug" && day >= 24) || (month == "Sep" && day <= 23)) {
      return signs.virgo;
    } else if ((month == "Sep" && day >= 24) || (month == "Oct" && day <= 23)) {
      return signs.libra;
    } else if ((month == "Oct" && day >= 24) || (month == "Nov" && day <= 22)) {
      return signs.scorpio;
    } else if ((month == "Nov" && day >= 23) || (month == "Dec" && day <= 21)) {
      return signs.sagittarius;
    }
  
  }