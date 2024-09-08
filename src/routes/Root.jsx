import { ButtonGroup, Button } from "react-bootstrap";
import "../App.css";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="app">
      <h1>WattleWatch</h1>
      <Outlet />
      <menu className="footer">
        <ButtonGroup>
          <Button href={`/map`}>Map</Button>
          <Button href={`/camera`}>Camera</Button>
          <Button href={`/log`}>Log</Button>
          <Button href={`/social`}>Social</Button>
          <Button href={`/account`}>Account</Button>
          <Button href={`/world`}>
            <img src="world.svg"></img>
          </Button>
        </ButtonGroup>
      </menu>
    </div>
  );
}
