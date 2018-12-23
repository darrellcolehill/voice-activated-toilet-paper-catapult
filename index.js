var https = require('https')
var http = require('http')
exports.handler = (event, context) => {

  try {

    if (event.session.new) {
      // New Session
      console.log("NEW SESSION")
    }

    switch (event.request.type) {

      case "LaunchRequest":
        // Launch Request
        console.log(`LAUNCH REQUEST`)
        context.succeed(
          generateResponse(
            buildSpeechletResponse("then eat some indian food you libtard", true),
            {}
          )
          //code that tells the raspberry pi that the user invoked the skill
          //req.write("ADD URL TO WEBSITE AND THE QUERY THAT TELLS THE RASPBERRY THAT THE USER JUST INVOKED THE SKILL");
        )
        break;

      case "IntentRequest":
        // Intent Request
        console.log(`INTENT REQUEST`)

        switch(event.request.intent.name) {
          
            case "launchTP":
             var endpoint = "http://d50652ae.ngrok.io/launchTP" // ENDPOINT GOES HERE
            var body = ""
            http.get(endpoint, (response) => {
              //response.on('data', (chunk) => { body += chunk })
              response.on('end', () => {
               context.succeed(
          generateResponse(
            buildSpeechletResponse("Reinforcements are on the way", true),
            {}
          )
        )
              })
            })
            break;
          default:
            throw "Invalid intent"
        }

        break;

      case "SessionEndedRequest":
        // Session Ended Request
        console.log(`SESSION ENDED REQUEST`)
        break;

      default:
        context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)

    }

  } catch(error) { context.fail(`Exception: ${error}`) }

}

// Helpers
buildSpeechletResponse = (outputText, shouldEndSession) => {

  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession
  }

}

generateResponse = (speechletResponse, sessionAttributes) => {

  return {
    version: "1.0",
    sessionAttributes: sessionAttributes,
    response: speechletResponse
  }

}