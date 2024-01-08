import React from "react";
import myPhoto from '../assets/myPhoto.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function About(){
    const titleStyle = {
        textAlign: 'center',
    };
    return (

        <div className="container mt-5">
                        <h2 style={titleStyle}>About Me</h2>

          <div className="row align-items-center">
            <div className="col-md-6">

              <div className="text-center">
                <img src={myPhoto}  className="img-fluid rounded" style={{ width: '150px' }} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                {/* <h2 style={titleStyle}>About Me</h2> */}
                <p className="mt-3">
              Hello! I'm a first-generation fourth-year Computer Science and Engineering major at UC Merced. My passion lies in software engineering, where I enjoy solving complex problems and creating innovative solutions.
            </p>
            <p>
              In my free time, I focus on self-improvement activities such as exploring business endeavors and hitting the gym. Engaging in these activities not only sharpens my skills but also brings me fulfillment in life. Please review my Projects below!
            </p>
              </div>
            </div>
          </div>
        </div>
      );
};
export default About;