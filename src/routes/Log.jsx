import "./log.css";
import { significantTrees } from "../data/MBRC_Planning_Scheme_-_Heritage_Landscape_Significant_Trees";

const TreeProfile = () => {
  const treeFeatures = significantTrees.features;

  return (
    <div className="log">
      <h1>Log</h1>
      <div className="container">
        {treeFeatures.map((t) => {
          return (
            <div>
              <span></span>
              {t.properties.OBJECTID}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TreeProfile;
