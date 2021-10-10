import React from "react";
import "../css/Profile.css";
import bikefoto from "../images/imagebike.jpg";
import dishoekFoto from "../images/dishoekvuurtoren.jpg";

function Profile() {
  return (
    <div className="profile">
      <article className="profile__article">
        <h2 style={{ display: "flex" }}>Wie ben ik?</h2>

        <p>
          Ik ben Hidde Greijdanus, 19 jaar. Ik ben geslaagd voor het VWO,
          richting natuur en techniek. En vorig jaar heb ik wiskunde gestudeerd
          in Utrecht.
        </p>
      </article>

      <article className="profile__article">
        <h2 style={{ display: "flex" }}>Hobbies</h2>

        <p>
          In mijn vrije tijd doe ik aan wielrennen,hardlopen en zwemmen. Fietsen
          doe ik door heel zeeland en soms een tochtje door België of over de
          Utrechtse heuvelrug. Hardlopen doe ik over het strand en over de
          duinen rond Dishoek, en het zwemmen doe ik in het vrijburgbad in
          Vlissingen.
          <img
            alt="actie foto wielrennen hidde greijdanus"
            class="profile__inhoud__img"
            src={bikefoto}
          ></img>
        </p>
      </article>

      <article className="profile__article">
        <h2 style={{ display: "flex" }}>Werk</h2>

        <p>
          Ik werk bij c-port in de haven, de werkzaamheden zijn bij
          Kloosterboer.
        </p>
      </article>

      <article className="profile__article">
        <h2 style={{ display: "flex" }}>Woonplaats</h2>

        <p>Ik woon in Dishoek in de buurt van Koudekerke.</p>
        <img
          alt="foto duinen van dishoek"
          class="profile__inhoud__img"
          src={dishoekFoto}
        ></img>
      </article>
    </div>
  );
}

export default Profile;
