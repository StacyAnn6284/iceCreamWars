import "./Votes.css";
import { useState } from "react";

function Votes() {
  const [DuttonVotes, setDuttonVotes] = useState(0);
  const [monsterVotes, setMonsterVotes] = useState(0);
  const [deereTracksVotes, setDeereTracksVotes] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);

  const duttonVotesincrement = () => {
    setDuttonVotes(DuttonVotes + 1);
    setTotalVotes(totalVotes + 1);
  };

  const monsterVotesincrement = () => {
    setMonsterVotes(monsterVotes + 1);
    setTotalVotes(totalVotes + 1);
  };
  const deereTracksVotesincrement = () => {
    setDeereTracksVotes(deereTracksVotes + 1);
    setTotalVotes(totalVotes + 1);
  };

  let duttonPercentage = ((DuttonVotes / totalVotes) * 100).toFixed(1);
  let monsterPercentage = ((monsterVotes / totalVotes) * 100).toFixed(1);
  let deereTracksPercentage = ((deereTracksVotes / totalVotes) * 100).toFixed(
    1
  );
  let votingbars = "flex";
  if (totalVotes < 1) {
    votingbars = "none";
  }

  let novotes = "flex";
  if (totalVotes >= 1) {
    novotes = "none";
  }

  let duttonBars = "flex";
  if (DuttonVotes < 1) {
    duttonBars = "none";
  }

  let monsterBars = "flex";
  if (monsterVotes < 1) {
    monsterBars = "none";
  }

  let deereTracksBars = "flex";
  if (deereTracksVotes < 1) {
    deereTracksBars = "none";
  }

  return (
    <div className="votesBox">
      <h1>Vote Here</h1>
      <div className="votingButtons">
        <button onClick={duttonVotesincrement}> Sorta Beth Dutton</button>
        <button onClick={monsterVotesincrement}>Sea Monster</button>
        <button onClick={deereTracksVotesincrement}>John Deere Tracks</button>
      </div>
      <div style={{ display: `${novotes}` }}>
        <h2>No Votes Yet</h2>
      </div>
      <div className="votingbars" style={{ display: `${votingbars}` }}>
        <div className="bars" style={{ display: `${duttonBars}` }}>
          <h3>
            Sorta Beth Dutton: {DuttonVotes} ({duttonPercentage}%)
          </h3>
          <div
            style={{ width: `${duttonPercentage}%` }}
            className="bethDuttonBar"
          ></div>
        </div>
        <div className="bars" style={{ display: `${monsterBars}` }}>
          <h3>
            Sea Monster: {monsterVotes} ({monsterPercentage}%)
          </h3>
          <div
            style={{ width: `${monsterPercentage}%` }}
            className="monsterBar"
          ></div>
        </div>
        <div className="bars" style={{ display: `${deereTracksBars}` }}>
          <h3>
            John Deere Tracks: {deereTracksVotes} ({deereTracksPercentage}%)
          </h3>
          <div
            style={{ width: `${deereTracksPercentage}%` }}
            className="deereTracksBar"
          ></div>
        </div>
      </div>
      //{" "}
    </div>
  );
}

{
}
export default Votes;
