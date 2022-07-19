import { Fragment, useEffect, useReducer, useState } from "react";
import Companies from "./Companies";
import HomeContents from "./HomeContents";
import Jobs from "./Jobs";
import Header from "./Layout/Header";
import Profile from "./Profile";
import Projects from "./Projects";
import Message from "./Message";
import Profilesetting from "./Profilesetting";
import ErrorModal from "./Layout/ErrorModal";
import Helpcenter from "./Helpcenter";
import About from "./About";
import Forum from "./Forum";
import Footer from "./Layout/Footer";

const headerbanner = (states, action) => {
  switch (action.type) {
    case "HOME":
      return (states = 1);
    case "COMPANIES":
      return (states = 2);
    case "WIKI":
      return (states = 3);
    case "PROFILES":
      return (states = 4);
    case "JOBS":
      return (states = 5);
    case "MESSAGES":
      return (states = 6);
    case "SETTINGS":
      return (states = 7);
    default:
      return (states = 0);
  }
};

const Footerbanner = (states, action) => {
  switch (action.type) {
    case "HELPCENTER":
      return (states = 1);
    case "ABOUT":
      return (states = 2);
    case "FORUM":
      return (states = 3);
    default:
      return (states = null);
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(headerbanner, 1);
  const [footer, footDispatch] = useReducer(Footerbanner, 0);

  const [isJob, setIsJob] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isContent, setIsContent] = useState(true);
  const [isFooterContent, setIsFooterContent] = useState(false);

  const closeFooterContent = () => {
    setIsFooterContent(false);
  };

  const openFooterContent = () => {
    setIsFooterContent(true);
  };

  const isprojhandler = () => {
    setIsProject((event) => !event);
  };

  const isjobhandler = () => {
    setIsJob((event) => !event);
  };

  const helpcenter = () => {
    footDispatch({
      type: "HELPCENTER",
    });
  };

  const about = () => {
    footDispatch({
      type: "ABOUT",
    });
  };

  const forum = () => {
    footDispatch({
      type: "FORUM",
    });
  };

  const reset = () => {
    footDispatch({
      type: "RESET",
    });
  };

  const home = () => {
    dispatch({
      type: "HOME",
    });
  };

  const companies = () => {
    dispatch({
      type: "COMPANIES",
    });
  };

  const wiki = () => {
    dispatch({
      type: "WIKI",
    });
  };

  const profiles = () => {
    dispatch({
      type: "PROFILES",
    });
  };

  const jobs = () => {
    dispatch({
      type: "JOBS",
    });
  };

  const messages = () => {
    dispatch({
      type: "MESSAGES",
    });
  };

  const settings = () => {
    dispatch({
      type: "SETTINGS",
    });
  };

  useEffect(() => {
    if (footer !== 0) {
      setIsContent(false);
    }
  }, [footer]);

  return (
    <Fragment>
      <meta charSet="UTF-8" />
      <title>WorkWise Html Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <link rel="stylesheet" type="text/css" href="css/animate.css" />
      <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="css/line-awesome.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="css/line-awesome-font-awesome.min.css"
      />
      <link
        href="vendor/fontawesome-free/css/all.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="css/jquery.mCustomScrollbar.min.css"
      />
      <link rel="stylesheet" type="text/css" href="lib/slick/slick.css" />
      <link rel="stylesheet" type="text/css" href="lib/slick/slick-theme.css" />
      <link rel="stylesheet" type="text/css" href="css/style.css" />
      <link rel="stylesheet" type="text/css" href="css/responsive.css" />
      <div
        className={
          isProject === true || isJob === true ? "wrapper overlay" : "wrapper"
        }
      >
        {footer !== 1 && footer !== 3 ? (
          <Header
            home={home}
            companies={companies}
            projects={wiki}
            profiles={profiles}
            jobs={jobs}
            messages={messages}
            settings={settings}
          />
        ) : null}
        {/* <HomeContents /> */}
        {isContent && (
          <Fragment>
            {state === 1 && (
              <HomeContents
                isProject={isProject}
                isJob={isJob}
                isprojhandler={isprojhandler}
                isjobhandler={isjobhandler}
              />
            )}
            {state === 2 && <Companies />}
            {state === 3 && <Projects />}
            {state === 4 && <Profile />}
            {state === 5 && <Jobs />}
            {state === 6 && <Message />}
            {state === 7 && <Profilesetting />}
          </Fragment>
        )}

        <footer>
          <div>
            {footer === 1 && (
              <Helpcenter
                home={home}
                companies={companies}
                projects={wiki}
                profiles={profiles}
                jobs={jobs}
                messages={messages}
                settings={settings}
              />
            )}
            {footer === 2 && <About />}
            {footer === 3 && <Forum home={home} />}
          </div>

          <Footer helpcenter={helpcenter} forum={forum} about={about} />
        </footer>
      </div>
    </Fragment>
  );
};

export default Home;
