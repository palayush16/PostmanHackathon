import React from 'react'
import { TwitterTweetEmbed , TwitterTimelineEmbed} from 'react-twitter-embed';
import Navbar from "../components/Navbar";


const feeds = () => {
    const Feeds = [
        {
            "id": "1511102816772837387",
            "text": "“When I first reached out to them, I was like, ‘Hey, we’re hoping to give you at least like $5K each,’ and now every time I email them, I’m like, ‘Hey, just an update, you’re getting $170,000 each now.\" 🙌🏽  #transgender #trans #Texas #LGBT #LGBTQ https://t.co/6FaKUEgesc"
        },
        {
            "id": "1511014991159345157",
            "text": "\"The State of #Florida has no right to declare them outcasts, or to treat their allies as outlaws, by punishing schools where someone dares to affirm their identity and dignity.\" #DontSayGay #gay #LGBT #LGBTQ READ MORE: https://t.co/X8BpTKZ9FZ"
        },
        {
            "id": "1510773147854901250",
            "text": "Join our Center South in recognizing, supporting National #DayOfSilence with a Silent Disco next #Friday, 4/8! Students nationwide take a vow of silence to shed light on #bullying &amp; #harassment that #LGBT #LGBTQ classmates experience every day. EVENT INFO: https://t.co/mRlNs6Ljt7 https://t.co/DfSfFAJUoS"
        },
        {
            "id": "1510716269888163843",
            "text": "Our #Gospel #Brunch is as spirited as it sounds! With more than 100 guests, the indoor-outdoor event was like \"a family reunion\" with performances, inspiring messages, delicious soul food, and warm fellowship. #LGBT #LGBTQ #BlackHistoryMonth READ MORE: https://t.co/zMWSGwCBAd"
        }
       
    ];
  return (
      
      <div className="feed-page">
        
        <Navbar/>
        <div className="tweets">
        {Feeds.map(({id}) => (   
        <TwitterTweetEmbed class  key={id} tweetId={id}  />
        ))}

        
        </div>
          
     </div>
  )
}

export default feeds