import React from "react";
import "../css/SideBar.css";
import { useStateValue } from "../Stateprovider";

function SideBar() {
  const [{ user, profile }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <nav class="sideNav">
        <a href="https://hz.nl/" target="_blank">
          Hz.nl
        </a>

        <a
          href="https://hz.nl/over-de-hz/regelingen-documenten-1/onderwijs-en-examenregelingen"
          target="_blank"
        >
          CER
        </a>
        <a
          href="https://hz.nl/uploads/documents/Regelingen/OERS/2019-2020/2020-2021-ICT-Implementation-Regulations-CER-HZ-DEF1.0.pdf"
          target="_blank"
        >
          IR
        </a>

        <a href="https://learn.hz.nl/" target="_blank">
          {" "}
          Learn
        </a>

        <a
          href="https://teams.microsoft.com/go#id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiI1ZTNjZTZjMC0yYjFmLTQyODUtOGQ0Yi03NWVlNzg3ODczNDYiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZDcyNzU4YTAtYTQ0Ni00ZTBmLWEwYWEtNGJmOTVhNGExMGU3L3YyLjAiLCJpYXQiOjE2MzEwMTczNTQsIm5iZiI6MTYzMTAxNzM1NCwiZXhwIjoxNjMxMDIxMjU0LCJhY2N0IjowLCJhaW8iOiJBVVFBdS84VEFBQUFNU1gyc25UdjZJckZ2RnRuSnRyOWErRHZneHRQUzZYd1ZDMWZ4ZXoyUFY0NU9DYjZoUWRQNFJOaFdwd21mYzJuTWNUVExCaWttc2lNcWl3dWp2SWV4dz09IiwibmFtZSI6IkdyZWlqZGFudXMsIEguQS4gKGhpZGRlKSIsIm5vbmNlIjoiZGU2MmFiNTktYzhhZi00ZDZmLWE4YjUtOTllYzY4NmMxMDU4Iiwib2lkIjoiMDRmNzUzNzYtNTM3MS00ZTk5LThkOGItYTc1ZjE4NDY5MzRiIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaC5hLmdyZWlqZGFudXNAc3R1ZGVudHMudXUubmwiLCJyaCI6IjAuQVR3QW9GZ24xMGFrRDA2Z3FrdjVXa29RNThEbVBGNGZLNFZDalV0MTduaDRjMFk4QU1BLiIsInN1YiI6IklqV0xuSUxLV2wwMm5yMkM1cEJyWkREeHo0WVlKUUdNeXRRY3FPNGZ6YlEiLCJ0aWQiOiJkNzI3NThhMC1hNDQ2LTRlMGYtYTBhYS00YmY5NWE0YTEwZTciLCJ1cG4iOiJoLmEuZ3JlaWpkYW51c0BzdHVkZW50cy51dS5ubCIsInV0aSI6ImoxcnQ5bEpBd1V5X0p3S2pnblZwQUEiLCJ2ZXIiOiIyLjAiLCJ4bXNfbXBjaSI6MjU5MjAwLCJ4bXNfcGNpIjozNjAwfQ.fHBE7iMsKwoEk3qt5OUXBKd5tPW6q2QvktQ3qYm16_7U_cAIWshaSTtH9LYZ8lhT5bDBfThwht81nwCG2SSxei4fwyLHJB6tCZt-lAbY7hKbP_nGUuy38yN5Pc33tQSFk7_rfDYCC7FGyMkM2cHgtr20WePTPgrCChBuXhbb0zEPiCuNLpEzGWglKcm5t5YED3pK9HcBVPCiuZfu7WqWAMsQtG0swsPb6YD6NpEVLLYksg02gRlihdgNMadxzXseXq4rq6v7uQnynoBnVYOH_HiI0Gnxxiqg5gJ_LboDtpS3blrt7YiajqlEkAVaZPGNC09g2haME5gk2y3ZUCjNsw&client_info=eyJ1aWQiOiIwNGY3NTM3Ni01MzcxLTRlOTktOGQ4Yi1hNzVmMTg0NjkzNGIiLCJ1dGlkIjoiZDcyNzU4YTAtYTQ0Ni00ZTBmLWEwYWEtNGJmOTVhNGExMGU3In0&state=eyJpZCI6IjBjNDM3Y2U4LTZjN2ItNDM0Zi05YTVkLTM3MDQ4NjFiNzYyOCIsInRzIjoxNjMxMDE3NjUxLCJtZXRob2QiOiJyZWRpcmVjdEludGVyYWN0aW9uIn0%3d&session_state=77b3dc12-1199-42fa-92cf-ad40667e7fbc"
          target="_blank"
        >
          Teams{" "}
        </a>

        <a
          href="https://apps.hz.nl/angular/studievoortgang/studiestatus"
          target="_blank"
        >
          {" "}
          study progress
        </a>

        <a href="https://github.com/hiddegrei/hzwebsite.git" target="_blank">
          {" "}
          Github
        </a>

        {user ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="sidebar__welcome">Hi {profile.username}</div>
            <a href="/login"> log out</a>
          </div>
        ) : (
          <a href="/login"> log in</a>
        )}
      </nav>
    </div>
  );
}

export default SideBar;
