import "./log.css";
import { significantTrees } from "../data/MBRC_Planning_Scheme_-_Heritage_Landscape_Significant_Trees";

const TreeProfile = () => {
  const treeFeatures = significantTrees.features;

  return (
    <div className="log">
      <h1>Log</h1>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Type</th>
              <th>Seen</th>
            </tr>
          </thead>

          {treeFeatures.map((t) => {
            return (
              <tbody>
                <tr className={t.properties.seen ? "seen" : "unseen"}>
                  <td>{t.properties.OBJECTID}</td>
                  <td>{t.properties.TREE_TYPE}</td>
                  <td>
                    {t.properties.seen
                      ? t.properties.seen.toLocaleDateString("en-au")
                      : null}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TreeProfile;
