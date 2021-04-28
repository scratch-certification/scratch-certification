// Import
function securify(str) {
    if (Math.round(Math.random() * 2) == 1) {
      str += Math.round(Math.random() * 9);
    } else {
      var chars = ['@', '!', '*', '%', '$', '#', '(', ')', '+', '_', '|', '~', '`'];
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }
  
  // Export
  exports.securify = securify;