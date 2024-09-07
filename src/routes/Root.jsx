import "../App.css";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div>
        <h1>WattleWatch</h1>
        <Outlet />
        <nav>
          <ul>
            <li>
              <a href={`/map`}>Map</a>
            </li>
            <li>
              <a href={`/camera`}>Camera</a>
            </li>
            <li>
              <a href={`/`}>Log</a>
            </li>
            <li>
              <a href={`/`}>Account</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
