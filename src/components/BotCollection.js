import React from "react";
import Botcard from "./BotCard"

function BotCollection({ bots, setBots, addBotToArmy }) {

  function deleteBot(deletedBot) {
    const UpdatedBots = bots.filter((bot) => {
      return bot.id !== deletedBot.id
    })
    setBots(UpdatedBots)
  }

  // Your code here
  const displayBotCard = bots.map((bot) => {
    return <Botcard key={bot.id} bot={bot} onDelete={deleteBot} addBotToArmy={addBotToArmy} />
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {displayBotCard}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
