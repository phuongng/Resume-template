import React from "react";
import styles from './mycv.module.css';


import avatar from "./avatarCopy.png";
// ------contact section/ icon-----------------

import { FaLocationArrow } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
// ------follow section/ icon-----------------
import { FaGlobe } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiCodepen } from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';



import { MdOutlineSpeakerNotes } from 'react-icons/md';
import { RiContactsBookLine } from 'react-icons/ri';
import { RiFileInfoLine } from 'react-icons/ri';
import { GrCertificate } from 'react-icons/gr';


import { SiUdemy } from 'react-icons/si';
import { FiLinkedin } from 'react-icons/fi';
// ------detail section title/ icon-----------------
import { FaGraduationCap } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { IoApps } from 'react-icons/io5';



const App = () => {



  return (
    <>
      <div className={styles.mainCV}>
        <div className={styles.leftSection}>
          {/* profile and bio section */}
          <div className={styles.profile}>
            <div className={styles.photo}>
              <img src={avatar} alt="myAvatar" />
            </div>

            <div className={styles.bio}>
              <h1 className={styles.name}>Phuong Nguyen</h1>
              {/* <p className={styles.profession}>Front-end Developer</p> */}
            </div>

          </div>

          <div className={styles.introduction}>
            {/* intro section - PART 1: ABOUT  */}
            <div className={styles.introSection + ' ' + styles.about}>
              <hr className={styles.dashLine}></hr>

              <div className={styles.titleIconLeft}>
                <MdOutlineSpeakerNotes />

                <h1 className={styles.title}>Summary</h1>
              </div>

              <p className={styles.paragraph}>
                An Information Systems student with a concentration track on key technical skills in information system analysis, design, and development. <br></br>
                Passionate about front-end development, creating responsive aesthetic websites/ web applications with interactive animation, mobile-friendly. <br></br>
                Exceptionally persevering, organized, detail-oriented, industrious, and always keep learning and discovering new things.
              </p>
            </div>

            {/* intro section - PART 2: CONTACT  */}
            <div className={styles.introSection + ' ' + styles.contact + ' ' + styles.link}>
              <hr className={styles.smallDashLine}></hr>

              <div className={styles.titleIconLeft}>
                <RiContactsBookLine />

                <h1 className={styles.title}>Contact</h1>
              </div>


              <div className={styles.infoSection}>
                <FaLocationArrow className={styles.infoSectionIcon} />
                <span>Perry Hall, MD 21128</span>

              </div>

              <div className={styles.infoSection}>
                <FaPhone className={styles.infoSectionIcon} />

                <span>+1 443 - *** **** </span>

              </div>

              <div className={styles.infoSection}>
                <MdMail className={styles.infoSectionIcon} />

                <span>pnguye20@students.towson.com</span>

              </div>

              <div className={styles.infoSection}>
                <FaLinkedin className={styles.infoSectionIcon} />

                <span>LinkedIn.com/in/phuongng-profile</span>

              </div>


            </div>


            {/* intro section - PART 3: CONTACT  */}
            <div className={styles.introSection + ' ' + styles.contact + ' ' + styles.link}>
              <hr className={styles.smallDashLine}></hr>
              <div className={styles.titleIconLeft}>
                <RiFileInfoLine />

                <h1 className={styles.title}>Info</h1>
              </div>



              <div className={styles.infoSection + ' ' + styles.link}>
                <FaGlobe className={styles.infoSectionIcon} />
                <a href="https://github.com/phuongng">
                  <span>www.phuongmadethis.com</span>
                </a>
              </div>


              <div className={styles.infoSection + ' ' + styles.link}>
                <FaGithub className={styles.infoSectionIcon} />
                <a href="https://github.com/phuongng">
                  <span>github.com/phuongng</span>
                </a>
              </div>

              <div className={styles.infoSection + ' ' + styles.link}>
                <SiCodepen className={styles.infoSectionIcon} />
                <a href="https://codepen.io/phuongng">
                  <span>codepen.io/phuongng</span>
                </a>
              </div>

              <div className={styles.infoSection + ' ' + styles.link}>
                <CgFigma className={styles.infoSectionIcon} />
                <a href="https://www.figma.com/@phuongmadethis">
                  <span>figma.com/@phuongmadethis</span>
                </a>
              </div>
            </div>



            {/* intro section - PART 4: CV  */}
            <div className={styles.introSection + ' ' + styles.contact + ' ' + styles.link}>
              <hr className={styles.smallDashLine}></hr>

              <div className={styles.titleIconLeft}>
                <GrCertificate />
                <h1 className={styles.title}>Certificate</h1>
              </div>
              <div className={styles.infoSection}>
                <SiUdemy className={styles.infoSectionIcon} />
                <span>Advanced CSS and SASS - Udemy,Inc</span>
              </div>


              {/* <div className={styles.infoSection}>
                <SiUdemy className={styles.infoSectionIcon} />
                <span>React - The Complete Guide - Udemy,Inc</span>
              </div> */}

              <div className={styles.infoSection}>
                <SiUdemy className={styles.infoSectionIcon} />
                <span>Complete 2022 Web Development - Udemy,Inc</span>
              </div>

              <div className={styles.infoSection}>
                <FiLinkedin className={styles.infoSectionIcon} />
                <a href="https://www.linkedin.com/learning/certificates/de604155376e5431010d6b332e8a2b28e84de6cee376a5a3a4123bdd63cd351f">

                  <span>Interactive Animations with CSS & JS     - LinkedIn Learning</span>
                </a>

              </div>

            </div>
          </div>


        </div>
        {/*----------------- end leftSection ------------------------------------------*/}


        {/*----------------- begin rightSection ------------------------------------------*/}
        <div className={styles.rightSection}>
          {/*----------------- detail-section PART 1: EDUCATION ---------------*/}
          <div className={styles.detailSection + ' ' + styles.edu}>
            <div className={styles.detailTitle}>
              <div className={styles.titleIcon}>
                <FaGraduationCap className={styles.icon} />
              </div>
              <span>Education</span>
            </div>
            <div className={styles.detailContent}>
              <div className={styles.timelineBlock}>
                <h1>Bachelor of Science, Computer Information Systems</h1>
                <p>Towson University</p>
                <time>2020 - 2022</time>
              </div>
              <div className={styles.timelineBlock}>
                <h1>Associate of Science, Computer Science</h1>
                <p>Community College of Baltimore County</p>
                <time>2018 - 2020</time>
              </div>
            </div>
          </div>




          {/*----------------- detail-section PART 2: TECHNICAL SKILLS---------------*/}
          <div className={styles.detailSection + ' ' + styles.skill}>
            <div className={styles.detailTitle}>
              <div className={styles.titleIcon}>
                <FaLaptopCode className={styles.icon} />
              </div>
              <span>Skills</span>
            </div>
            <div className={styles.detailContent}>
              <ul className={styles.favorList}>
                <li> HTML5, CSS3/SCSS, JavaScript, React JS, ThreeJS</li>
                <li>Java, MySQL, MongoDB</li>
                <li>Github, Netlify, Heroku</li>
                <li>Adobe - Photoshop, Premiere, Lightroom, After Effect, XD, & Figma</li>
                <li>Microsoft Word, Microsoft PowerPoints, Microsoft Excel </li>
                <li>Photography</li>
              </ul>
            </div>
          </div>

          {/*----------------- detail-section PART 3: TOOLS ---------------*/}
          <div className={styles.detailSection}>
            <div className={styles.detailTitle}>
              <div className={styles.titleIcon}>
                <IoApps className={styles.icon} />
              </div>
              <span>Project</span>
            </div>
            <div className={styles.detailContent + ' ' + styles.tool}>
              <ul className={styles.favorList}>
                <li>
                  <div className={styles.titleWebsite}>
                    <h1>Personal Portfolio Website</h1>
                    <h1 className={styles.websiteName}>www.phuongmadethis.com</h1>
                  </div>
                  <p>Languages: React JS, CSS3/SCSS, HTML  </p>
                  <p> Responsive web application, Mobile friendly, Interactive Animations</p>
                  <p> Cloned Youtube & Instagram frontend homepage</p>
                  <p> Created animation background and icon</p>
                  <p> Displayed different styles of photo galleries for the different photography categories</p>
                  <p>Designed a 404 Not Found page</p>

                </li>

                <li>
                  <div className={styles.titleWebsite}>
                    <h1> theEssentialist </h1>
                    <h1 className={styles.websiteName}>https://theessentialist.us/</h1>
                  </div>
                  <p>Languages: React JS, CSS, HTML, MongoDB  </p>
                  <p> A Group Project of Web-Based Programming course at Towson University</p>
                  <p> Role: Front End Developer</p>
                  <p> Designed the logo with Adobe Photoshop</p>
                  <p> Created the footer and navigation section</p>
                </li>

                <li>
                  <div className={styles.titleWebsite}>
                    <h1>preView </h1>
                    <h1 className={styles.websiteName}>https://phuongng.github.io/preView/</h1>
                  </div>
                  <p>Languages: HTML, CSS, JavaScript  </p>
                  <p>A Group Project of Software Engineering course at Towson University </p>
                  <p> Role: Front End Developer</p>
                  <p>Designed the logo with Adobe Photoshop  and created logo animation</p>
                  <p> Responsible for 85% of the design/coding of the homepage</p>
                  <p> Implemented the carousel and video grid layout for the In Theaters, Movie pages</p>
                </li>

                <li>
                  <div className={styles.titleWebsite}>
                    <h1> Charm Lit Mag </h1>
                    <h1 className={styles.websiteName}>https://charmlitmag.org/</h1>
                  </div>
                  <p> A Group Project of Information Systems Capstone course at Towson University</p>
                  <p> Role: UI/UX designer, solutions architect </p>
                  <p> Prepared and designed the user interface, and implemented a solution for the second customer’s requirement </p>
                  <p> Created a more dynamic and interactive "This is not a snow day" page as a customer’s requirement </p>
                  <p> Demonstrated the "How to create a blog page" in the Squarespace with the 17 pages tutorial</p>
                </li>

              </ul>

            </div>
          </div>


          {/*----------------- detail-section PART 4: CERTIFICATE---------------*/}

          {/* ----------------------------------------------------------------------------------- */}




        </div>
        {/* end rightSection */}
      </div>
    </>
  );
};



export default App;