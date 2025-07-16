
import countryFacts from "../API/countryData.json";


export const About = () => {

  return (
    
    <section className="section-about container">
 <div className="about-summary container-card bg-white-box"  style={{ marginBottom: "140px" }}>
  <h2 className="container-title">About WorldAtlas</h2>
  <p className="paragraph">
    Welcome to <span style={{ color: '#a855f7', fontWeight: 'bold' }}>WorldAtlas</span> —  
    your gateway to discovering the most fascinating countries, cultures, and facts around the world.  
    We aim to simplify global learning, offering detailed insights into every nation’s history, population, and unique features.  
    Whether you're a student, traveler, or enthusiast, WorldAtlas brings the wonders of our planet straight to you —  
    in a way that's informative, engaging, and easy to explore.
  </p>
</div>


      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>
         
      <div className="gradient-cards">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default About;
