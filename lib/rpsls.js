export function rps(input) {
  var player = 0
  if (input == null) {
    return JSON.parse('{"player":"' + int_to_str(Math.floor(Math.random() * 3)) + '"}')
  } else {
    player = str_to_int(input, false)
    if (player == -1) {
      suggest(false)
      return
    }
  }
  let opponent = Math.floor(Math.random() * 3)
  let result = compute_result(player, opponent)
  return ('{\"player\":\"' + int_to_str(player) + '\",\"opponent\":\"' + int_to_str(opponent) + '\",\"result\":\"' + result + '\"}')
}

export function rpsls(input) {
  var player = 0
  if (input = null) {
    return JSON.parse('{"player":"' + int_to_str(Math.floor(Math.random() * 5)) + '"}')
  } else {
    player = str_to_int(input, true)
    if (player == -1) {
      suggest(true)
      return
    }
  }
  let opponent = Math.floor(Math.random() * 5)
  let result = compute_result(player, opponent)
  return ('{\"player\":\"' + int_to_str(player) + '\",\"opponent\":\"' + int_to_str(opponent) + '\",\"result\":\"' + result + '\"}')
}

function str_to_int(input, ls_allowed) {
  switch(input.toString().toUpperCase()) {
    case 'ROCK':
      return 0
    case "PAPER":
      return 1
    case "SCISSORS":
      return 2
    case "LIZARD":
      if(ls_allowed) {
        return 3
      } else {
        console.error(input + " is out of range.")
        return -1
      }
    case "SPOCK":
      if(ls_allowed) {
        return 4
      } else {
        console.error(input + " is out of range.")
        return -1
      }
    default:
      console.error(input + " is out of range.")
      return -1
  }
}

function int_to_str(input) {
  switch(input) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
    case 3:
      return 'lizard'
    case 4:
      return 'spock'
  }
}

function suggest(is_rpsls) {
  if(is_rpsls) {
    console.log("Possible choices are: 'rock', 'paper', 'scissors', 'lizard', and 'spock'.")
  } else {
    console.log("Possible choices are: 'rock', 'paper', and 'scissors'.")
  }
}

function compute_result(p, o) {
  switch(true) {
    case ((p == 2) && (o == 1)):
    case ((p == 1) && (o == 0)):
    case ((p == 0) && (o == 2)):
    case ((p == 3) && (o == 4)):
    case ((p == 4) && (o == 2)):
    case ((p == 2) && (o == 3)):
    case ((p == 3) && (o == 1)):
    case ((p == 1) && (o == 4)):
    case ((p == 4) && (o == 0)):
    case ((p == 1) && (o == 0)):
      return 'win'
    case (p == o):
      return 'draw'
    default:
      return 'lose'
  }
}