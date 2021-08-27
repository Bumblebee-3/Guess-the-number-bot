module.exports = {
  name:"disable-guessthenumber",
  aliases:["disable-gtn","d-gtn"],
  code:`Disabled.
$setservervar[gtntries;0]
$setservervar[guess_the_number_channel;Not set]
$setservervar[winning_number;0]
$suppressErrors
$onlyperms[managechannels;You aint gonna fool me, you don't have the managechannels permission]`
}