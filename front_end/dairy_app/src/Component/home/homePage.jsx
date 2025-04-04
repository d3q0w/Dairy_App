import React, { useState } from "react";
import LocationResult from "../Common/LocationResult";
import LocationSearch from "../Common/LocationSearch";




const HomePage = () => {

    const [locationSearchResults, setLocationSearchResults] = useState([]);

    // Function to handle search results
    const handleSearchResult = (results) => {
        setLocationSearchResults(results);
    };

    return (
        <div className="home">
            {/* HEADER / BANNER ROOM SECTION */}
            <section>
                <header className="header-banner">
                    
                    <div className="overlay"></div>
                    <div className="animated-texts overlay-content">
                        <h1>
                            Make Changes with <span className="phegon-color">DairyApp Today!</span>
                        </h1><br />
                        <h3>Step into a haven of ease and more production</h3>
                    </div>
                </header>
            </section>

            {/* SEARCH/FIND AVAILABLE Location SECTION */}
            <LocationSearch handleSearchResult={handleSearchResult} />
            <LocationResult locationSearchResults={locationSearchResults} />

            <h4><a className="view-locations-home" href="/locations">All Locations</a></h4>

            <h2 className="home-services">Features of <span className="phegon-color">DairyApp</span></h2>

            {/* SERVICES SECTION */}
            <section className="service-section"><div className="service-card">
                
                <div className="service-details">
                    <h3 className="service-title">Pick-UP bookings</h3>
                    <p className="service-description"> Just book and your products will be picked up at no time.</p>
                </div>
            </div>
                <div className="service-card">
                    
                    <div className="service-details">
                        <h3 className="service-title">Secured Data</h3>
                        <p className="service-description">Your farming and production info is safe with us!.</p>
                    </div>
                </div>
                <div className="service-card">
                    
                    <div className="service-details">
                        <h3 className="service-title">Statements</h3>
                        <p className="service-description">Keep track of your productions for pick-Up with statements.</p>
                    </div>
                </div>
                <div className="service-card">
                    
                    <div className="service-details">
                        <h3 className="service-title">Quality Service</h3>
                        <p className="service-description">We have ready team to help you in your productions in the farm</p>
                    </div>
                </div>

            </section>
            {/* AVAILABLE ROOMS SECTION */}
            <section>

            </section>
        </div>
    );
}

export default HomePage;