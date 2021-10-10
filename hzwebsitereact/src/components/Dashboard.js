import React, { useState, useEffect } from "react";
import "../css/Dashboard.css";
import Chart from "react-google-charts";
import { db } from "../firebase";
import { useStateValue } from "../Stateprovider";

function Dashboard() {
  const [{ user }, dispatch] = useStateValue();
  const [toets1, setToets1] = useState(0);
  const [toets2, setToets2] = useState(0);
  const [toets3, setToets3] = useState(0);
  const [toets4, setToets4] = useState(0);
  const [toets5, setToets5] = useState(0);
  const [toets6, setToets6] = useState(0);
  const [toets7, setToets7] = useState(0);
  const [toets8, setToets8] = useState(0);
  const [toets9, setToets9] = useState(0);
  const [toets10, setToets10] = useState(0);
  const [toets11, setToets11] = useState(0);
  const [toets12, setToets12] = useState(0);
  const [toets13, setToets13] = useState(0);
  const [toets14, setToets14] = useState(0);
  const [toets15, setToets15] = useState(0);

  const [ready, setReady] = useState(false);

  const [q1, setQ1] = useState(0);
  const [q2, setQ2] = useState(0);
  const [q3, setQ3] = useState(0);
  const [q4, setQ4] = useState(0);

  const [port, setPort] = useState(0);
  const [per1, setPer1] = useState(0);
  const [per2, setPer2] = useState(0);

  useEffect(() => {
    db.collection("exams")
      .get()
      .then((data) => {
        data.docs.map((doc) => {
          if (doc.data().naam === "toets1") {
            setToets1(doc.data().cijfer);
          }
          if (doc.data().naam === "toets2") {
            setToets2(doc.data().cijfer);
          }
          if (doc.data().naam === "toets3") {
            setToets3(doc.data().cijfer);
          }
          if (doc.data().naam === "toets4") {
            setToets4(doc.data().cijfer);
          }
          if (doc.data().naam === "toets5") {
            setToets5(doc.data().cijfer);
          }
          if (doc.data().naam === "toets6") {
            setToets6(doc.data().cijfer);
          }
          if (doc.data().naam === "toets7") {
            setToets7(doc.data().cijfer);
          }
          if (doc.data().naam === "toets8") {
            setToets8(doc.data().cijfer);
          }
          if (doc.data().naam === "toets9") {
            setToets9(doc.data().cijfer);
          }
          if (doc.data().naam === "toets10") {
            setToets10(doc.data().cijfer);
          }
          if (doc.data().naam === "toets11") {
            setToets11(doc.data().cijfer);
          }
          if (doc.data().naam === "toets12") {
            setToets12(doc.data().cijfer);
          }
          if (doc.data().naam === "toets13") {
            setToets13(doc.data().cijfer);
          }
          if (doc.data().naam === "toets14") {
            setToets14(doc.data().cijfer);
          }
          if (doc.data().naam === "toets15") {
            setToets15(doc.data().cijfer);
          }
        });
        setReady(true);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets1")
        .set({
          naam: "toets1",
          cijfer: toets1,
        })
        .catch((error) => console.log(error));
    }
  }, [toets1]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets2")
        .set({
          naam: "toets2",
          cijfer: toets2,
        })
        .catch((error) => console.log(error));
    }
  }, [toets2]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets3")
        .set({
          naam: "toets3",
          cijfer: toets3,
        })
        .catch((error) => console.log(error));
    }
  }, [toets3]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets4")
        .set({
          naam: "toets4",
          cijfer: toets4,
        })
        .catch((error) => console.log(error));
    }
  }, [toets4]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets5")
        .set({
          naam: "toets5",
          cijfer: toets5,
        })
        .catch((error) => console.log(error));
    }
  }, [toets5]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets6")
        .set({
          naam: "toets6",
          cijfer: toets6,
        })
        .catch((error) => console.log(error));
    }
  }, [toets6]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets7")
        .set({
          naam: "toets7",
          cijfer: toets7,
        })
        .catch((error) => console.log(error));
    }
  }, [toets7]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets8")
        .set({
          naam: "toets8",
          cijfer: toets8,
        })
        .catch((error) => console.log(error));
    }
  }, [toets8]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets9")
        .set({
          naam: "toets9",
          cijfer: toets4,
        })
        .catch((error) => console.log(error));
    }
  }, [toets9]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets10")
        .set({
          naam: "toets10",
          cijfer: toets10,
        })
        .catch((error) => console.log(error));
    }
  }, [toets10]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets11")
        .set({
          naam: "toets11",
          cijfer: toets11,
        })
        .catch((error) => console.log(error));
    }
  }, [toets11]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets12")
        .set({
          naam: "toets12",
          cijfer: toets12,
        })
        .catch((error) => console.log(error));
    }
  }, [toets12]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets13")
        .set({
          naam: "toets13",
          cijfer: toets13,
        })
        .catch((error) => console.log(error));
    }
  }, [toets13]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets14")
        .set({
          naam: "toets14",
          cijfer: toets14,
        })
        .catch((error) => console.log(error));
    }
  }, [toets14]);

  useEffect(() => {
    if (ready && user) {
      db.collection("exams")
        .doc("toets15")
        .set({
          naam: "toets15",
          cijfer: toets15,
        })
        .catch((error) => console.log(error));
    }
  }, [toets15]);

  useEffect(() => {
    if (toets1 >= 5.5 && toets2 >= 5.5 && toets3 >= 5.5) {
      setQ1(12.5);
    } else {
      setQ1(0);
    }
    if (toets4 >= 5.5 && toets5 >= 5.5) {
      setQ2(10);
    } else {
      setQ2(0);
    }
    if (toets6 >= 5.5 && toets7 >= 5.5 && toets8 >= 5.5 && toets9 >= 5.5) {
      setQ3(12.5);
    } else {
      setQ3(0);
    }
    if (toets10 >= 5.5 && toets11 >= 5.5 && toets12 >= 5.5) {
      setQ4(10);
    } else {
      setQ4(0);
    }
    if (toets11 >= 5.5) {
      setPort(12.5);
    } else {
      setPort(0);
    }
    if (toets12 >= 5.5) {
      setPer1(1.25);
    } else {
      setPer1(0);
    }
    if (toets13 >= 5.5) {
      setPer2(1.25);
    } else {
      setPer2(0);
    }
  }, [
    toets1,
    toets2,
    toets3,
    toets4,
    toets5,
    toets6,
    toets7,
    toets8,
    toets9,
    toets10,
    toets11,
    toets12,
    toets13,
    toets14,
    toets15,
  ]);

  return (
    <div className="dash">
      <div className="dash__tableDiagram">
        <div className="dash__tableBox">
          <table id="courses">
            <tr>
              <th>Quartile</th>
              <th>course</th>
              <th>Exam</th>

              <th>credits</th>
              <th>grade</th>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets1 == 0 && "yellow") ||
                  (toets1 >= 5.5 && "green") ||
                  (toets1 < 5.5 && "red")
                }`,
              }}
            >
              <td rowSpan="3">1</td>
              <td>CU75002V2 - Computer science basics</td>
              <td>TOETS01 - Theorietentamen</td>

              <td>7.50</td>
              <td>
                <input
                  onChange={(e) => {
                    if (user) {
                      setToets1(e.target.value);
                    }
                  }}
                  type="text"
                  value={toets1}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets2 == 0 && "yellow") ||
                  (toets2 >= 5.5 && "green") ||
                  (toets2 < 5.5 && "red")
                }`,
              }}
            >
              <td>CU75002V2 - Programme and Career Orientation</td>

              <td>TOETS01 - Assesment</td>

              <td>2.50</td>
              <td>
                <input
                  onChange={(e) => setToets2(e.target.value)}
                  type="text"
                  value={toets2}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets3 == 0 && "yellow") ||
                  (toets3 >= 5.5 && "green") ||
                  (toets3 < 5.5 && "red")
                }`,
              }}
            >
              <td>CU75002V2 - Programming Basics</td>
              <td>TOETS01 - Casus toets</td>

              <td>5.00</td>
              <td>
                <input
                  onChange={(e) => setToets3(e.target.value)}
                  type="text"
                  value={toets3}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets4 == 0 && "yellow") ||
                  (toets4 >= 5.5 && "green") ||
                  (toets4 < 5.5 && "red")
                }`,
              }}
            >
              <td rowSpan="2">2</td>
              <td rowSpan="2">CU75004V1 - Object-oriented programming</td>
              <td>TOETS01 - Casustoets</td>

              <td>5.00</td>
              <td>
                <input
                  onChange={(e) => setToets4(e.target.value)}
                  type="text"
                  value={toets4}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets5 == 0 && "yellow") ||
                  (toets5 >= 5.5 && "green") ||
                  (toets5 < 5.5 && "red")
                }`,
              }}
            >
              {/* <td  >2</td> */}

              <td>TOETS02 - groepsopdracht</td>

              <td>5.00</td>
              <td>
                <input
                  onChange={(e) => setToets5(e.target.value)}
                  type="text"
                  value={toets5}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets6 == 0 && "yellow") ||
                  (toets6 >= 5.5 && "green") ||
                  (toets6 < 5.5 && "red")
                }`,
              }}
            >
              <td rowSpan="4">3</td>
              <td>Framework Development 1</td>
              <td>Case study</td>

              <td>5.00</td>
              <td>
                <input
                  onChange={(e) => setToets6(e.target.value)}
                  type="text"
                  value={toets6}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets7 == 0 && "yellow") ||
                  (toets7 >= 5.5 && "green") ||
                  (toets7 < 5.5 && "red")
                }`,
              }}
            >
              <td rowSpan="3">Framework Project 1</td>
              <td>Project</td>

              <td>2.50</td>
              <td>
                <input
                  onChange={(e) => setToets7(e.target.value)}
                  type="text"
                  value={toets7}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets8 == 0 && "yellow") ||
                  (toets8 >= 5.5 && "green") ||
                  (toets8 < 5.5 && "red")
                }`,
              }}
            >
              <td>assesment</td>

              <td>2.50</td>
              <td>
                <input
                  onChange={(e) => setToets8(e.target.value)}
                  type="text"
                  value={toets8}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets9 == 0 && "yellow") ||
                  (toets9 >= 5.5 && "green") ||
                  (toets9 < 5.5 && "red")
                }`,
              }}
            >
              <td>Report</td>

              <td>2.50</td>
              <td>
                <input
                  onChange={(e) => setToets9(e.target.value)}
                  type="text"
                  value={toets9}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets10 == 0 && "yellow") ||
                  (toets10 >= 5.5 && "green") ||
                  (toets10 < 5.5 && "red")
                }`,
              }}
            >
              <td rowSpan="3">4</td>
              <td rowSpan="3">Framework Project 2</td>
              <td>Portfolio</td>

              <td rowSpan="3">10.00</td>
              <td>
                <input
                  onChange={(e) => setToets10(e.target.value)}
                  type="text"
                  value={toets10}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets11 == 0 && "yellow") ||
                  (toets11 >= 5.5 && "green") ||
                  (toets11 < 5.5 && "red")
                }`,
              }}
            >
              <td>Project</td>

              <td>
                <input
                  onChange={(e) => setToets11(e.target.value)}
                  type="text"
                  value={toets11}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets12 == 0 && "yellow") ||
                  (toets12 >= 5.5 && "green") ||
                  (toets12 < 5.5 && "red")
                }`,
              }}
            >
              <td>Assesment</td>

              <td>
                <input
                  onChange={(e) => setToets12(e.target.value)}
                  type="text"
                  value={toets12}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets13 == 0 && "yellow") ||
                  (toets13 >= 5.5 && "green") ||
                  (toets13 < 5.5 && "red")
                }`,
              }}
            >
              <td>entire year</td>
              <td>Portfolio</td>
              <td>Portfolio</td>

              <td>12.50</td>
              <td>
                <input
                  onChange={(e) => setToets13(e.target.value)}
                  type="text"
                  value={toets13}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets14 == 0 && "yellow") ||
                  (toets14 >= 5.5 && "green") ||
                  (toets14 < 5.5 && "red")
                }`,
              }}
            >
              <td>entire year</td>
              <td>Personality 1</td>
              <td>Personality 1</td>

              <td>1.25</td>
              <td>
                <input
                  onChange={(e) => setToets14(e.target.value)}
                  type="text"
                  value={toets14}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  (toets15 == 0 && "yellow") ||
                  (toets15 >= 5.5 && "green") ||
                  (toets15 < 5.5 && "red")
                }`,
              }}
            >
              <td>entire year</td>
              <td>Personality 2</td>
              <td>Personality 2</td>

              <td>1.25</td>
              <td>
                <input
                  onChange={(e) => setToets15(e.target.value)}
                  type="text"
                  value={toets15}
                ></input>
              </td>
            </tr>

            <tr
              style={{
                "background-color": `${
                  q1 + q2 + q3 + q4 + port + per1 + per2 >= 45 ? "green" : "red"
                }`,
              }}
            >
              <td>Totaal</td>

              <td></td>
              <td></td>
              <td>60</td>
              <td>{q1 + q2 + q3 + q4 + port + per1 + per2}</td>
            </tr>
          </table>
        </div>
        <div className="dash__tableBox__data">
          <div class="dash__tableBox__data__row">
            <div
              class="dash__tableBox__data__color"
              style={{ "background-color": "yellow" }}
            ></div>
            <div class="dash__tableBox__data__name">Not yet completed</div>
          </div>

          <div class="dash__tableBox__data__row">
            <div
              class="dash__tableBox__data__color"
              style={{ "background-color": "green" }}
            ></div>
            <div class="dash__tableBox__data__name">passed</div>
          </div>

          <div class="dash__tableBox__data__row">
            <div
              class="dash__tableBox__data__color"
              style={{ "background-color": "red" }}
            ></div>
            <div class="dash__tableBox__data__name">failed</div>
          </div>
        </div>
      </div>

      <div className="dash__graph">
        <Chart
          width={600}
          height={"500px"}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Quartile", "Credits behaald", "NBSA"],
            ["1", q1, 45],
            ["2", q1 + q2, 45],
            ["3", q1 + q2 + q3, 45],
            ["4", q1 + q2 + q3 + q4 + port + per1 + per2, 45],
          ]}
          options={{
            title: "Credits",
            hAxis: { title: "Quartile", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0, maxValue: 60 },

            // For the legend to fit, we make the chart area smaller
            //chartArea: { width: '50%', height: '70%' },
            // lineWidth: 25
          }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
