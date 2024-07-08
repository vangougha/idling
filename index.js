const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [576410,1205960,1553910,48720,22100,236850,1049590,232010,570,322330,1304580,48700,394360,1265360,113200,413150,401680,232770,219150,341640,227300,1665460,270880];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible
//]

user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
