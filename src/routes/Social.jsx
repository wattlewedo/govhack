import "./social.css";
import { ButtonGroup, Button } from "react-bootstrap";
import "../App.css";

const Social = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-details">
                    <img
                        src="person-planting.png"
                        alt="Profile"
                        className="profile-pic"
                    />
                    <div className="profile-info">
                        <h2>Jennifer Johnson</h2>
                        <p><strong>14</strong> Level</p>
                        <p><strong>16,789</strong> Score</p>
                        <p><strong>106</strong> Unique Finds</p>
                    </div>
                </div>
            </div>

            <div className="bio-section">
                <p>
                Hi! I’m Jennifer Johnson, an avid plant explorer and nature enthusiast. 
                My love for the outdoors started as a child, and over the years, I’ve developed 
                a keen eye for discovering unique plant species. Join me on this journey as I 
                document my unique finds and share tips for plant identification and conservation! 🌿
                </p>
            </div>

            <Button className="friends-button" href={"/Friends"}>Friends</Button>

            <div className="activity-section">
                <h3>Recent Activity</h3>
                <div className="activity-item">
                    <p><strong>DD/MM/YY</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="activity-item">
                    <p><strong>DD/MM/YY</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="activity-item">
                    <p><strong>DD/MM/YY</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
    );
};

export default Social;
