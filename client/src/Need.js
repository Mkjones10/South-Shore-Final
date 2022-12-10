import React from "react";
import "./styles/Needs.css";
import Major from "./Major.png";
import Fund from "./funding.png";
import Stat from './stat.png'
export default function Need() {
  return (
    <>
      <div className="head">
        <h1 className="h1">What do the Shouth Shore Community need?</h1>
      </div>
      <div className="boxes">
        
          <h1 className="h2">Mental Health Centers</h1>
          <div className="why">
            <h1>Why are mental health centers important?</h1>
            <p className="whyp">
               
            Often, people in Chicago are highly affected by gun violence. Whether people lost close loved ones, was a victim of gun violence, or saw or heard about people getting shot. Unfortunately, in South Shore, this is a reality for most individuals. Often the trauma experienced is not handled in a safe and healthy way, due to a lack of resources in the community. This leads to more violence and increased suicide rates.. 
            </p>
          </div>
        <div className="stylely" style={{backgroundImage: `url(${Major})`}}></div>
        
      <div className="style2" style={{ backgroundImage: `url(${Fund})` }}>
        </div>
          <div className="mentals">
            <div className="mental">
              <p className="p1">
                There are 5 major mental health facilities in the south shore
                neighborhood. Within SSH's service area, 87% of the population
                identifies as African American or black. African Americans deal
                with mental health issues more than any other race/ethic group
                in this community. These major facilities service 411,148
                individuals through this community area.
              </p>
            </div>
            <div className="mental">
              <p className="p1">
                In predominently African American communities such as South
                shore, the suicide rate is at 24%.The suicide rate is at the
                highest between the ages of 18 - 29. Meanwhile, since 2009, the
                city has closed six mental health clinics. Between 2009 and
                2012, the state cut $113.7 million in funding for mental health
                service
              </p>
            </div>
            <div className="mental">
              <p className="p1">
                In communities with a high amount of gun violence, the people in
                the community often suffer from mental health issues such as
                anxiety, depression, and post tramatic stress disorder(ptsd).
                However, due to the South Shore community suffering from
                poverty, often there is no way to get and recieve help for most
                of the individuals in the community.
              </p>
            </div>
          </div>
        

        <div className="econ">
          <h2 className="h2">Economic Stability</h2>
        </div>

        <div className="li">
          <h2 className="h2">2015-2019 South Shore Data
            Employment Status (Count & Percent)</h2>
          <ul className="list">
            <li>Employed:  21,358 | 83.8 ​</li>
            <li>Unemployed: 4,137 | 16.2</li>
            <li>In Labor Force: 25,496 | 61.6​</li>
            <li>Not in Labor Force: 15,903 | 38.4</li>
          </ul>


        </div>
        <p className="whyp">The COVID-19 pandemic has increased unemployment rates in some of the poorest areas of Chicago, exacerbating the issue. As of June 2021, fewer than 5,000 South Shore residents were collecting unemployment benefits out of the approximately 302,410-strong labor force, the MassHire report says. Still, more than 16,000 South Shore residents were unemployed as of the end of summer 2021, meaning about two-thirds of unemployed residents aren't collecting benefits.</p>
        <div className="li">
          <h2 className="h2">Suggested Next Steps: </h2>
          <ul className="list">
            <li>Increase the number of quality employment opportunities in the South Shore community. For example, a group led by Derek Dudley, a producer of "The Chi" series on Showtime, is getting ready to construct a film and television studio space. This will provide job opportunities for hundreds of people in the South Shore community. </li>
            <li>Provide funding for skill building trainings</li>
            <li>Provide funding for skill building trainings</li>
          </ul>
        </div>
        <div className="school">
          <h2 className="h2"> School Resources</h2>
          <div className="heady">
            <div className="why">
              <h2 className="why">Why Are School Resources Important? </h2>
            </div>


          </div>
          .<p className="whyp">
            The needs have changed over the span of the last 2 decades. The violence amongst youth in South Shore has rapidly increased. We need youth protection programs, places for youth to go after school, and added protection to mainstream school routes. We would like to achieve a safer community for young adults like ourselves.
          </p>
          <div className="li">
            <h2 className="h2">Access to Quality Educational Resources</h2>
            <p className="whyp">Lack of access to quality education and disengagement in school correlate with heightened risk for violence. Lack of education can limit access to jobs and therefore income and other resources, which may be associated with involvement in quality-of-life crimes and potential violence.</p>
            <ul className="list">
              <h3 className="h2">School Quality Ratings Report</h3>
              <li>30% (16 of 53) schools in the Greater Stony Island Region are Level 1 or 1+ (exceeds expectations, highest ranking)</li>
              <h4 className="h2">High schools</h4>
              <li>South Shore International High School is Level 2+ (good standing)</li>
              <li>Camelot Excel South Shore is Level 2 (provisional support)</li>
              <h4 className="h2">K-8 schools</h4>
              <li>Bouchet Math and Science is Level 2+
              </li>
              <li>Bradwell School of Excellence is Level 2+
              </li>
              <li>Powell Academy is Level 2+</li>
            </ul>
            
          </div>
        <div className="stat" style={{ backgroundImage: `url(${Stat})` }}></div>
        </div>
      </div>
    </>
  );
}
  
