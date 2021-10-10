import React, { useState, useEffect } from "react";
import "../css/PostBox.css";
import { Avatar, Button } from "@material-ui/core";
import { db } from "../firebase";
import { useStateValue } from "../Stateprovider";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Picker from "emoji-picker-react";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

function PostBox({ blogname }) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [{ user, profile }, dispatch] = useStateValue();
  const [nchar, setNchar] = useState(0);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [openEmoji, setOpenEmoji] = useState(false);

  let naam;

  const onEmojiClick = (e, emojiObject) => {
    e.preventDefault();
    e.stopPropagation();

    setChosenEmoji(emojiObject);
  };

  useEffect(() => {
    if (chosenEmoji) {
      //   setTweetMessage((old)=>{
      //       console.log(old)
      //       return[...old,chosenEmoji.emoji]
      //   })
      const oldmes = tweetMessage;
      const newmes = oldmes.concat(chosenEmoji.emoji);

      setTweetMessage(newmes);
    }
  }, [chosenEmoji]);

  const sendTweet = (e) => {
    e.preventDefault();

    if (profile.length != 0) {
      console.log("hi");
      db.collection("posts")
        .add({
          username: profile.username,
          userId: profile.userId,
          verified: false,
          text: tweetMessage,
          avatar: profile.imageUrl,
          createdAt: new Date().getTime().toString(),
          likes: 0,
          comments: 0,
          shares: 0,
          token: "",
          blogname: blogname,
        })
        .then((docRef) => {
          db.collection("posts")
            .doc(`${docRef.id}`)
            .update({ token: `${docRef.id}` });
        })
        .catch((error) => console.log(error));
    }

    setTweetMessage("");

    setOpenEmoji(false);
  };

  useEffect(() => {
    //check length tweetmessage
    let len = tweetMessage.length;
    let nchar2 = 0;

    for (let i = 0; i != len; i++) {
      if (tweetMessage[i] != " ") {
        nchar2++;
      }
    }
    setNchar(nchar2);
    if (nchar2 > 250) {
      let newTweetMessage = tweetMessage;
      newTweetMessage = newTweetMessage.replace(
        `${newTweetMessage[newTweetMessage.length - 1]}`,
        ""
      );
      setTweetMessage(newTweetMessage);
    }
    if (len > 0) {
      let testmessage = tweetMessage;
      let newmes = /@[a-z]+/i.exec(testmessage);

      if (newmes) {
        let testmes = newmes[0].split("@");
        let num = -1;

        testmes.forEach(function (val) {
          if (num < 0) {
            num++;
          } else {
            naam = val;
          }
        });

        //  finalmessage=testmessage.replace(/@[a-z]+/i,`<Link to="${naam}">${newmes}</Link>`)
        //  console.log(finalmessage)
      }
    }

    // let docje=document.getElementById("newmes")
    // docje.innerHTML=newstring
  }, [tweetMessage]);

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={profile.imageUrl}></Avatar>

          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's your comment?"
            type="text"
          ></input>
          <div id="newmes"></div>
          <p className="maxchar2">{nchar}/250</p>
        </div>
        <div className="pickerContainer">
          {openEmoji && (
            <Picker
              pickerStyle={{ width: "400px" }}
              onEmojiClick={onEmojiClick}
            />
          )}
        </div>

        <div className="tweetBox__footer">
          <div
            className={`tweetBox__tweetbutton ${
              !tweetMessage && "tweetBox__tweetButtonO"
            }`}
          >
            <Button
              onClick={sendTweet}
              type="submit"
              className="tweetBox__tweetButton"
            >
              Post
            </Button>
          </div>

          <div className="addedEmojiCon">
            <Tooltip title="Add Emoji">
              <IconButton onClick={() => setOpenEmoji(!openEmoji)}>
                <EmojiEmotionsIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </form>

      <div id="emoji"></div>
    </div>
  );
}

export default PostBox;
