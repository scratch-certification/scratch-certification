// Local Imports
const securify = require('./utilities.js').securify;

// External Imports
const fetch = require('node-fetch');
const cryptoRandomString = require('crypto-random-string');
const html = require('node-html-parser');

// Function Definitions
function createHash(site, owner, len) {
  var hash = 'Copy this entire paragraph. To prevent man in the middle attacks, make sure this paragraph is from ' + site + ' and is owned by ' + owner +', otherwise DO NOT TRUST THIS: ' + cryptoRandomString({ length: len || 45, characters: 'abcdefghijklmnopqrstuvwxyz' }) + ' - Delete the comment after verifying.'
  return hash;
}

function checkHash(hash, user) {
  try {
    return fetch(`https://scratch.mit.edu/site-api/comments/user/${user}/?page=1`)
      .then((res => {
        return res.text();
      }))
      .then((data) => {
        const root = html.parse(data);
        var comment = {
          plaintext: root.querySelector('.content').text.trim(),
          username: root.querySelector('#comment-user').getAttribute('data-comment-user')
        };
        if (comment.plaintext == hash && comment.username == user) {
          return 302;
        } else {
          return 404;
        }
      });
  } catch (error) {
    return 400;
  }
}

function createCode(str, len) {
  var code = str;
  if (!len) len = 5;
  for (let i = 0; i < len; i++) {
    code = securify(code);
  }
  return code;
}

// Export
module.exports = {
  createHash,
  checkHash,
  createCode,
}
