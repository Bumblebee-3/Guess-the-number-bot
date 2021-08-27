const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.TOKEN, //Discord Bot Token
prefix: "$getServerVar[prefix]" //Discord Bot Prefix
})
bot.onMessage()

bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]. Bot By Bumblebee!]` 
})
bot.loadCommands(`./Commands/`)

bot.status({
  text: "gtn!help",
  type: "PLAYING",
  status: "dnd",
  time: 12
})

bot.status({
  text: "Source Code By Bumblebee!",
  type: "PLAYING",
  status: "idle",
  time: 12
})


bot.variables({
  prefix: "gtn!",
  guess_the_number_channel: "",
  winning_number: "",
  gtntries: "0",
  gtn: "false",
  gtnwins: "0",
  gtnattempts: "0",
  gtnstatus: "No ongoing game.",
  n1: "",
  n2: "",
})