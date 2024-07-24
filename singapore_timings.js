    function getSingaporeTime() {
    // Get current date and time in Singapore timezone
    var currentDate = new Date();
    var options = {
      timeZone: 'Asia/Singapore',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    
    var formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    return formattedDate;
  }
  
  console.log(getSingaporeTime());
  
  
  