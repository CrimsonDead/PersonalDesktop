import React from "react";
import moment from "moment";

const HomeBody = () => {
    const currentTime = moment().format('LT');
    const currentDate = moment().format('LL');
    return (
        <div className="homePage">
            <h1 className="homePageTime">{currentTime}</h1>
            <h2 className="homePageDate">{currentDate}</h2>
        </div>
    );
};

export default HomeBody;