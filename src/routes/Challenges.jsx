const Challenges = () => {
    return (
        <div className="challenges-container">
            <h1>Challenges</h1>

            <div className="section">
                <h2>Daily</h2>
                <div className="challenge-item">
                    <div className="icon-placeholder" />
                    <div className="challenge-info">
                        <h3>Kola Galore</h3>
                        <p>Scan 20 Kolas</p>
                        <p>3/20</p>
                    </div>
                    <p className="time-left">16 Hours Left</p>
                </div>
                <div className="challenge-item">
                    <div className="icon-placeholder" />
                    <div className="challenge-info">
                        <h3>Explore!</h3>
                        <p>Go Somewhere new</p>
                        <p>1/1</p>
                    </div>
                    <p className="completed">Complete! <span className="redeem">Redeem Prize!</span></p>
                </div>
                <div className="challenge-item">
                    <div className="icon-placeholder" />
                    <div className="challenge-info">
                        <h3>Species, Species</h3>
                        <p>Scan 4 different Species</p>
                        <p>1/4</p>
                    </div>
                    <p className="time-left">16 Hours Left</p>
                </div>
            </div>

            <div className="section">
                <h2>Monthly</h2>
                <div className="challenge-item">
                    <div className="icon-placeholder" />
                    <div className="challenge-info">
                        <h3>Hop, Hop, Hop</h3>
                        <p>Visit a Nature Reserve</p>
                        <p>0/1</p>
                    </div>
                    <p className="time-left">19 Days Left</p>
                </div>
                <div className="challenge-item">
                    <div className="icon-placeholder" />
                    <div className="challenge-info">
                        <h3>New Friends</h3>
                        <p>Invite some friends</p>
                        <p>3/5</p>
                    </div>
                    <p className="time-left">19 Days Left</p>
                </div>
                <div className="challenge-item">
                    <div className="icon-placeholder" />
                    <div className="challenge-info">
                        <h3>Visit the Forest</h3>
                        <p>Scan 50 Trees</p>
                        <p>34/50</p>
                    </div>
                    <p className="time-left">19 Days Left</p>
                </div>
            </div>

            <div className="section">
                <h2>Complete</h2>
                <div className="challenge-item">
                    <div className="icon-placeholder" />
                    <div className="challenge-info">
                        <h3>Explore!</h3>
                        <p>Go Somewhere new</p>
                        <p>1/1</p>
                    </div>
                    <p className="completed">Complete! <span className="redeem">Redeem Prize!</span></p>
                </div>
                <div className="challenge-item">
                    <div className="icon-placeholder" />
                    <div className="challenge-info">
                        <h3>That's a Gecko</h3>
                        <p>Scan 5 lizards</p>
                        <p>5/5</p>
                    </div>
                    <p className="completed">Complete! <span className="redeem">Redeem Prize!</span></p>
                </div>
            </div>

            {/* <div className="bottom-navigation">
          <button className="nav-button">Map</button>
          <button className="nav-button">Trophy</button>
          <button className="nav-button active">Challenges</button>
          <button className="nav-button">Profile</button>
        </div> */}
        </div>
    );
};

export default Challenges;


