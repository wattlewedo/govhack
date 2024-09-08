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
          <Button href={`/Log`}>Log</Button>
          <Button href={`/Social`}>Social</Button>
          <Button href={`/Account`}>Account</Button>
        </ButtonGroup>
      </menu>
    </div>
  );
}
