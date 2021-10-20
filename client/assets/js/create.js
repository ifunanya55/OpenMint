Moralis.initialize("AoMPSVgQKKY8qNgwNM087UN3pYP3du50NwmWnHtN"); // Application id from moralis.io
Moralis.serverURL = 'https://undhzl8r7aym.usemoralis.com:2053/server'; //Server url from moralis.io

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='erc-721.html';
});

$('#multipleButton').click(() =>{
  // window.location.href='erc-1155.html';
});
