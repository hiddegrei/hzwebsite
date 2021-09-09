import React from 'react';
import "../css/Profile.css"

function Profile() {
    return (
        <div className="profile">

            <div class="profile__inhoud">
          <img alt="" class="profile__inhoud__img" src="../images/imagebike.jpg"></img>

          <div class="profile__inhoud__textBlock">
              <h2  style={{display:'flex'}}>Wie ben ik?</h2>
              <article style={{display:'flex',marginTop:"10px"}}>
                  Ik ben Hidde Greijdanus, 19 jaar. Ik ben geslaagd voor het VWO, richting natuur en techniek.
                  En vorig jaar heb ik wiskunde gestudeerd in Utrecht.

              
              </article>

              <h2  style={{display:'flex'}}>Hobbies</h2>
              <article>
                  In mijn vrije tijd doe ik aan wielrennen,hardlopen en zwemmen.
              </article>

              <h2  style={{display:'flex'}}>Werk</h2>
              <article>
                  Ik werk bij c-port in de haven, de werkzaamheden zijn bij Kloosterboer.
              </article>

              <h2  style={{display:'flex'}}>Woonplaats</h2>
              <article>
                  Ik woon in Dishoek in de buurt van Koudekerke.
              </article>
              

          </div>
      </div>
            
        </div>
    )
}

export default Profile
