  const OpenAI = require("openai")
  const openai = new OpenAI({apiKey:'sk-None-ao3srDu4R7SOpbaaYFJXT3BlbkFJudITvsptHG0tnPRutSXp'});

  async function main(command,messagearr) {
    console.log(messagearr);
    console.log("Space is here...........");
    const completion = await openai.chat.completions.create({

      messages: messagearr,


      
      temperature:0.7 ,
      model: "gpt-4-turbo",
    });
    
    return completion.choices[0].message.content;
  }

  module.exports  = main;