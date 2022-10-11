import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ yourBots, SetYourBots, removeFromBot }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {yourBots.map((bot) => {
            return (<BotCard key={bot.id} bot={bot} isInArmy={true} handleBot={removeFromBot} />)

          })}

          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
