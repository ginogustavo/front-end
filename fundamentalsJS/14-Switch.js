let sign = prompt("which one is your zodiac sign?");
console.log(sign);

let msg = "";
switch (sign) {
  case "aries":
  case "Aries":
    msg =
      "The bad thing about conflict is that it can make communication feel like a minefield. Who knows...";
    break;
  case "taurus":
  case "tauru":
    msg =
      "If there's a power tug-of-war in your life, today is a good time to grab the rope harder, lean in,...";
    break;
  case "gemini":
    msg =
      "There could be a battle in your world when someone puts you on the spot and makes you feel...";
    break;
  case "cancer":
    msg =
      "Big changes are entering your mind right now. Your subconscious is thinking up things to explore....";
    break;
  case "leo":
    msg =
      "Your creativity is on a huge upswing, so give it plenty of room to soar! Clear your schedule and...";
    break;
  case "virgo":
    msg =
      "If you're waiting for your hectic life to calm down so you can spend more time with the people you...";
    break;
  case "libra":
    msg =
      "Chemistry is important in a relationship, but you also need to be on the same basic timetable as...";
    break;
  case "scorpio":
  case "scorpious":
    msg =
    "Today, whether you're prepared for it or not, you could finally get the challenge you've been...";
    break;
  case "sagittarius":
    msg =
      "You're finally ready to take some bold action! It's time to step up and make the grand gesture you...";
    break;
  case "capricorn":
    msg =
      "This may not be an easy day in terms of communication. People aren't understanding what you're...";
    break;
  case "aquarius":
    msg =
      "Just because you and someone important don't agree on a critical thing doesn't mean you can't find...";
    break;
  case "pisces":
    msg =
      "Every time something ends, there is a beginning, too, a germ of a new idea or hint of a potential...";
    break;
  default:
    msg = "No Sign";
    break;
}
console.log(msg);


let sign_dates = {
    aries: 'March 21 - April 19',
    taurus: 'Abril 20 - May 20',
    gemini: 'May 21 - Jun 20',
    cancer: 'Jun 21 - July 22',
    leo: 'July 23 - August 23',
    virgo: 'August 24 - September 22',
    libra: 'September 23 - October 22',
    scorpio: 'October 23 - November 21',
    sagittarius: 'November 22 - December 21',
    capricorn: 'December 22 - January 19',
    aquarius: 'January 20 - February 19',
    pisces: 'Febru ary 20 - March 20'
}

let dates = sign_dates[sign]
console.log(dates)