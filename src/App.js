import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

// Importing Material UI Stuff
import { Container } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { darkTheme, createMuiTheme } from "./theme";

//Importing Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


//Importing Routes
import Routes from "./routes";

import style from "./style";

import GithubLogo from '../src/assets/social-icons/github.svg'
import LinkedInLogo from '../src/assets/social-icons/linkedin.svg'
import InstagramLogo from '../src/assets/social-icons/instagram.svg'

const useStyles = makeStyles(style);

function Content() {
  const classes = useStyles();
  const [theme, setTheme] = useState(createMuiTheme(darkTheme));

  window.addEventListener('mousemove',(e)=>{
    document.getElementById('diver').style.top = (e.clientY) + 'px' 
    document.getElementById('diver').style.left = (e.clientX) + 'px'
    
    document.getElementById('small').style.top = (e.clientY) + 'px' 
    document.getElementById('small').style.left = (e.clientX) + 'px'
  })
  
  return (
    <>
      <div class="preloader">
      <svg
        id="logo"
        width="575"
        height="114"
        viewBox="0 0 575 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8718 107.384C12.0878 107.384 9.87985 106.616 8.24785 105.08C6.71185 103.544 5.94385 101.384 5.94385 98.6V14.648C5.94385 11.864 6.71185 9.704 8.24785 8.168C9.87985 6.632 12.0878 5.864 14.8718 5.864H43.3839C59.9918 5.864 72.8559 10.328 81.9759 19.256C91.1919 28.088 95.7999 40.52 95.7999 56.552C95.7999 72.68 91.1919 85.208 81.9759 94.136C72.8559 102.968 59.9918 107.384 43.3839 107.384H14.8718ZM42.2318 92.264C65.5599 92.264 77.2239 80.36 77.2239 56.552C77.2239 32.84 65.5599 20.984 42.2318 20.984H24.5198V92.264H42.2318Z"
          stroke="white"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M129.194 107.384C126.41 107.384 124.202 106.616 122.57 105.08C121.034 103.544 120.266 101.384 120.266 98.6V14.648C120.266 11.864 121.034 9.704 122.57 8.168C124.202 6.632 126.41 5.864 129.194 5.864H181.178C183.962 5.864 186.122 6.488 187.658 7.736C189.194 8.984 189.962 10.76 189.962 13.064C189.962 15.464 189.194 17.336 187.658 18.68C186.122 19.928 183.962 20.552 181.178 20.552H138.41V48.488H178.298C181.082 48.488 183.242 49.112 184.778 50.36C186.314 51.608 187.082 53.432 187.082 55.832C187.082 58.136 186.314 59.912 184.778 61.16C183.242 62.408 181.082 63.032 178.298 63.032H138.41V92.696H181.178C183.962 92.696 186.122 93.368 187.658 94.712C189.194 95.96 189.962 97.784 189.962 100.184C189.962 102.488 189.194 104.264 187.658 105.512C186.122 106.76 183.962 107.384 181.178 107.384H129.194Z"
          stroke="white"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M284.695 9.896C286.231 6.632 288.775 5 292.327 5C294.727 5 296.887 5.768 298.807 7.30399C300.727 8.84 301.687 10.76 301.687 13.064C301.687 14.12 301.399 15.32 300.823 16.664L260.935 102.488C260.071 104.312 258.727 105.752 256.903 106.808C255.175 107.768 253.303 108.248 251.287 108.248C249.271 108.248 247.351 107.768 245.527 106.808C243.799 105.752 242.503 104.312 241.639 102.488L201.895 16.664C201.319 15.32 201.031 14.168 201.031 13.208C201.031 10.808 201.991 8.84 203.911 7.30399C205.927 5.768 208.183 5 210.679 5C212.311 5 213.799 5.432 215.143 6.296C216.583 7.064 217.687 8.264 218.455 9.896L251.575 83.48L284.695 9.896Z"
          stroke="white"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M400.596 95.72C401.748 97.448 402.324 99.128 402.324 100.76C402.324 102.968 401.412 104.792 399.588 106.232C397.86 107.672 395.796 108.392 393.396 108.392C391.86 108.392 390.372 108.056 388.932 107.384C387.588 106.616 386.436 105.512 385.476 104.072L366.324 74.984C364.404 71.912 362.34 69.752 360.132 68.504C358.02 67.256 355.236 66.632 351.78 66.632H337.668V98.888C337.668 101.768 336.852 104.072 335.22 105.8C333.588 107.432 331.38 108.248 328.596 108.248C325.812 108.248 323.556 107.432 321.828 105.8C320.196 104.072 319.38 101.768 319.38 98.888V14.648C319.38 11.864 320.148 9.704 321.684 8.168C323.316 6.632 325.524 5.864 328.308 5.864H364.308C375.828 5.864 384.564 8.456 390.516 13.64C396.564 18.728 399.588 26.12 399.588 35.816C399.588 43.688 397.332 50.168 392.82 55.256C388.404 60.248 382.116 63.464 373.956 64.904C376.74 65.576 379.188 66.776 381.3 68.504C383.412 70.232 385.476 72.632 387.492 75.704L400.596 95.72ZM361.716 52.376C368.724 52.376 373.86 51.08 377.124 48.488C380.388 45.8 382.02 41.72 382.02 36.248C382.02 30.68 380.388 26.648 377.124 24.152C373.86 21.56 368.724 20.264 361.716 20.264H337.524V52.376H361.716Z"
          stroke="white"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M516.156 96.296C516.732 97.544 517.02 98.792 517.02 100.04C517.02 102.248 516.108 104.12 514.284 105.656C512.556 107.192 510.54 107.96 508.236 107.96C506.7 107.96 505.26 107.576 503.916 106.808C502.572 105.944 501.516 104.648 500.748 102.92L492.108 83.624H441.42L432.78 102.92C432.012 104.648 430.956 105.944 429.612 106.808C428.268 107.576 426.78 107.96 425.148 107.96C422.94 107.96 420.924 107.192 419.1 105.656C417.276 104.12 416.364 102.248 416.364 100.04C416.364 98.792 416.652 97.544 417.228 96.296L456.972 10.904C457.836 8.984 459.132 7.54399 460.86 6.584C462.684 5.528 464.604 5 466.62 5C468.636 5 470.508 5.528 472.236 6.584C474.06 7.54399 475.404 8.984 476.268 10.904L516.156 96.296ZM447.756 69.224H485.772L466.764 26.456L447.756 69.224Z"
          stroke="white"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M537.716 108.248C530.324 108.536 526.628 105.992 526.628 100.616C526.628 98.312 527.252 96.584 528.5 95.432C529.652 94.184 531.524 93.464 534.116 93.272L538.724 92.984C542.66 92.792 545.636 91.544 547.652 89.24C549.668 86.936 550.676 83.432 550.676 78.728V14.36C550.676 11.576 551.492 9.368 553.124 7.736C554.852 6.008 557.108 5.144 559.892 5.144C562.772 5.144 565.028 6.008 566.66 7.736C568.388 9.368 569.252 11.576 569.252 14.36V78.728C569.252 96.872 560.276 106.616 542.324 107.96L537.716 108.248Z"
          stroke="white"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
      </svg>
    </div>

    <section id="home" class="content">
      <div class="container">
        <Router >
          <div style={{width:'100%',padding:'0rem 0rem'}}>
            <NavBar />
            <div className="mobile___hidden" style={{position:'fixed',bottom:'1%',left:'2%',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <img src={GithubLogo} style={{objectFit:'contain'}} />
              <img src={LinkedInLogo} style={{objectFit:'contain'}} />
              <img src={InstagramLogo} style={{objectFit:'contain'}} />
              <div style={{width:'0.1rem',height:'8rem',background:'#63718A'}}></div>
            </div>
            
            <Container style={{maxWidth:'1150px'}}>
              <Routes />
            </Container>
            <Footer/>

            <div className="mobile___hidden" style={{position:'fixed',bottom:'1%',right:'2%',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <div style={{writingMode: 'vertical-rl',textOrientation:'mixed',color:'#63718A',marginBottom:'1rem'}}>devrajchatribin9978@gmail.com</div>
              <div style={{width:'0.125rem',height:'8rem',background:'#63718A'}}></div>
            </div>
          </div>
          <div id="diver">
          </div>
          <div id="small">
          </div>
        </Router>
      </div>
    </section>
    </>
  )
}


function App() {
  const [theme, setTheme] = useState(createMuiTheme(darkTheme));

  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}

export default App;
