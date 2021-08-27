module.exports = {
    name: "guess-number",
    aliases:["give-up","gn"],
    code: `$title[Guess The Number Winning Number]
$description[The winning number for GTN is $getservervar[winning_number].]
$onlyPerms[admin;You need to be an Admin to use this.]
$suppressErrors`
}