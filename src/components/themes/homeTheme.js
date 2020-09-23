const styles = (theme) => ({
  root: {
    flexGrow: 1,
    // height: '100%',
  },
  darkModeRoot: {
    flexGrow: 1,
    backgroundColor: '#262a30',
    height: '100%',
  },
  content: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  darkMode: {
    backgroundColor: '#262a30',
    transition: '.5s',
    // height: '100vh',
  },
  lightMode: {
    backgroundColor: 'white',
    transition: '.5s',
  },
  introduction: {
    'text-align': 'left',
    color: '#262a30',
    font: '600 230% Montserrat, sans-serif',
    padding: '0px 5% 0px 5%',
    margin: '8% 0% 5% 0%',
    transition: '.5s',
  },
  introductionLight: {
    'text-align': 'left',
    color: 'white',
    font: '600 230% Montserrat, sans-serif',
    padding: '0px 5% 0px 5%',
    margin: '8% 0% 5% 0%',
    transition: '.5s',
  },
  story: {
    color: '#262a30',
    margin: '-3% 0% 12% 0%',
    font: '400 130% Hind, sans-serif',
    padding: '0px 3% 0px 6%',
    'text-align': 'left',
    transition: '.5s',
    'line-height': 1.3,
  },
  storyLight: {
    color: 'white',
    margin: '-3% 0% 12% 0%',
    font: '400 130% Hind, sans-serif',
    padding: '0px 3% 0px 6%',
    'text-align': 'left',
    transition: '.5s',
    'line-height': 1.3,
  },
  underline: {
    'border-bottom': '1px solid currentColor',
    color: '#262a30',
    'text-decoration': 'none',
    'line-height': '.6',
    display: 'inline-block',
    '&:hover': { 'border-bottom': '2px solid currentColor' },
  },
  underlineLight: {
    'border-bottom': '1px solid currentColor',
    color: 'white',
    'text-decoration': 'none',
    'line-height': '.9',
    display: 'inline-block',
    '&:hover': { 'border-bottom': '2px solid currentColor' },
  },
  projectsButton: {
    padding: '3% 4% 3% 4%',
    margin: '6% 0% 4% 0%',
    'border-radius': 5,
    'box-shadow': ' 0px 0px 0px 0px white',
    color: '#252525',
    border: '#252525 solid 2px',
    font: '700 90% Montserrat, sans-serif',
    'text-transform': 'capitalize',
    backgroundColor: 'white',
    transition: '.4s',
    '&:hover': {
      transition: '.4s',
      color: 'white',
      backgroundColor: '#252525',
      'box-shadow': ' 0px 0px 0px 0px white',
    },
  },
  projectsButtonLight: {
    padding: '3% 4% 3% 4%',
    margin: '6% 0% 4% 0%',
    'border-radius': 5,
    'box-shadow': ' 0px 0px 0px 0px white',
    color: 'white',
    border: 'white solid 2px',
    font: '700 90% Montserrat, sans-serif',
    'text-transform': 'capitalize',
    backgroundColor: '#252525',
    transition: '.4s',
    '&:hover': {
      transition: '.4s',
      color: '#252525',
      backgroundColor: 'white',
      'box-shadow': ' 0px 0px 0px 0px white',
    },
  },

  dialogButton: {
    padding: '2% 3% 2% 3%',
    margin: '0% 2.5% 2% 0%',
    'border-radius': 3,
    'box-shadow': ' 0px 0px 0px 0px white',
    color: '#252525',
    border: '#252525 solid 2px',
    font: '700 90% Montserrat, sans-serif',
    'text-transform': 'capitalize',
    backgroundColor: 'white',
    transition: '.4s',
    '&:hover': {
      transition: '.4s',
      color: 'white',
      backgroundColor: '#252525',
      'box-shadow': ' 0px 0px 0px 0px white',
    },
  },
  socialIconsContainer: {
    color: '#252525',
    margin: '3% 5% 10% 6%',
    padding: '0px auto 0% auto',
    display: 'flex',
    transition: '.5s',
    'text-align': 'left',
    '&:hover > div': {
      opacity: 0.5,
      transition: '.5s',
      position: 'relative',
    },
    '&:hover > div:hover': {
      opacity: 1,
      transition: '.5s',
      position: 'relative',
    },
  },
  socialIconsContainerLight: {
    color: 'white',
    // width: 'fit-content',
    // height: '30px',
    margin: '3% 5% 10% 6%',
    padding: '0px auto 0% auto',
    // bottom: 10,
    display: 'flex',
    transition: '.5s',
    'text-align': 'left',
    '&:hover > div': {
      opacity: 0.5,
      transition: '.5s',
      position: 'relative',
    },
    '&:hover > div:hover': {
      opacity: 1,
      transition: '.5s',
      position: 'relative',
    },
  },
  linkedinSocialIconContainer: { marginTop: '-4px' },
  githubSocialIcons: {
    'font-size': '35px',
    display: 'inline-block',
    margin: '0px 5px',
  },
  linkedinSocialIcons: {
    'font-size': '45px',
    display: 'inline-block',
  },
  mediumIcon: {
    width: '35px',
    display: 'inline-block',
    filter:
      'invert(0%) sepia(30%) saturate(60%) hue-rotate(100deg) brightness(100%) contrast(118%)',
  },
  darkModeIcon: {
    'font-size': '40px',
    display: 'inline-block',
    transform: 'rotate(45deg)',
  },
  profilePicture: {
    width: '14%',
    'border-radius': 5,
    // 'text-align': 'left',
    // border: '#252525 solid 3px',
    // 'box-shadow': ' 5px 5px 5px -5px #252525',
    margin: '0px 0px .7px 0px',
    transition: '.5s',
  },
  logoPicture: {
    width: '14%',
    margin: '0px 0px 0px 0px',
    'border-radius': '5px',
    transition: '.5s',
    '&:hover': {
      filter: 'none',
    },
  },
  projectsHeader: {
    color: '#262a30',
    padding: '0px 20px 0px 20px',
    font: '500 50px Montserrat, sans-serif',
    margin: '0px',
    transition: '.5s',
  },
  projectsHeaderLight: {
    color: 'white',
    padding: '0px 20px 0px 20px',
    font: '500 50px Montserrat, sans-serif',
    margin: '0px',
    transition: '.5s',
  },

  projectContainerOne: {
    margin: '70px 0px 20px 0px',
    padding: '10px 20px 0px 20px',
  },
  projectContainerTwo: {
    margin: '-35px 0px 40px 0px',
    padding: '20px 20px 0px 20px',
  },
  projectContainerThree: {
    margin: '-40px 0px 20px 0px',
    padding: '10px 20px 0px 20px',
  },

  projectPicture: {
    width: '100%',
    'border-radius': '3px',
    '&:hover': {
      'box-shadow': '0px 4px 6px 0px',
    },
    'box-shadow': '0px 4px 6px 0px',
    transition: '.5s',
    // position: 'absolute',
    // 'z-index': 999,
  },
  projectPictureLight: {
    width: '100%',
    'border-radius': '3px',
    'box-shadow': '0px 1px 6px 0px #fff',
    '&:hover': {
      'box-shadow': '0px 1px 6px 0px #fff',
    },
    transition: '.5s',
  },
  projectPictureMobile: {
    // border: '#252525 solid .25px',
    'box-shadow': '0px 4px 6px 0px',
    'border-radius': '3px',
    width: '50%',
    '&:hover': {
      'box-shadow': '0px 4px 6px 0px',
    },
    transition: '.5s',
    // position: 'absolute',
  },
  projectPictureLightMobile: {
    'border-radius': '3px',
    width: '50%',
    'box-shadow': '0px 1px 6px 0px #fff',
    '&:hover': {
      'box-shadow': '0px 1px 6px 0px #fff',
    },
    transition: '.5s',
  },
  hrefLink: {
    'text-decoration': 'none',
    color: '#262a30',
  },
  hrefLinkLight: {
    'text-decoration': 'none',
    color: 'white',
  },
  projectSocialIcon: { 'font-size': '35px', padding: '1px 0px 1px 0px' },
  projectTitle: {
    font: '600 22px Montserrat, sans-serif',
    margin: '0px 0px 0px 0px',
    padding: '10px 20px 0px 20px',
    color: '#262a30',
    transition: '.5s',
    position: 'relative',
    'text-align': 'center',
    'z-index': 99,
  },
  projectDescription: {
    padding: '0px 10px 0px 10px',
    marginTop: '10px',
    font: '400 14px Hind, sans-serif',
    'text-align': 'center',
    color: '#262a30',

    transition: '.5s',
    'z-index': 9,
  },
  projectDescriptionMobile: {
    // padding: '0px 90px 0px 90px',
    padding: '0px 10px 0px 10px',
    marginTop: '10px',
    font: '400 14px Hind, sans-serif',
    'text-align': 'center',
    color: '#262a30',

    transition: '.5s',
    'z-index': 9,
  },
  projectDescriptionLightMobile: {
    padding: '0px 10px 0px 10px',
    marginTop: '10px',
    font: '400 14px Hind, sans-serif',
    'text-align': 'center',
    color: 'white',
    transition: '.5s',
  },
  projectTitleLight: {
    font: '600 22px Montserrat, sans-serif',
    margin: '30px 0px 0px 0px',
    padding: '10px 20px 10px 20px',
    color: 'white',
    transition: '.5s',
  },
  projectDescriptionLight: {
    padding: '0px 10px 0px 10px',
    marginTop: '10px',
    font: '400 16px Hind, sans-serif',
    'text-align': 'center',
    color: 'white',
    transition: '.5s',
  },
  //   projectPaper: {
  //     'border-radius': '0px',
  //     '&:hover': {
  //       opacity: 1,
  //       backgroundColor: 'white',
  //     },
  //     'overflow-y': 'hidden',
  //     width: 'fit-content',
  //   },

  button: {
    'text-align': 'center',
    position: 'absolute',
    padding: '7px 12px 7px 12px',
    top: '93%',
    left: '50%',
    'border-radius': 3,
    transform: 'translate(-50%, -50%)',
    margin: 'auto',
    color: 'white',
    font: '500 16px Montserrat, sans-serif',
    'text-transform': 'capitalize',
    backgroundColor: '#262b2f',
    transition: '.5s',
    '&:hover': {
      transition: '.5s',
      // color: '#34a1fd',
      backgroundColor: '#34a1fd',
    },
  },
  buttonLight: {
    'text-align': 'center',
    position: 'absolute',
    padding: '7px 12px 7px 12px',
    top: '93%',
    left: '50%',
    'border-radius': 3,
    transform: 'translate(-50%, -50%)',
    margin: 'auto',
    color: '#262b2f',
    font: '500 16px Montserrat, sans-serif',
    'text-transform': 'capitalize',
    backgroundColor: 'white',
    transition: '.5s',
    '&:hover': {
      transition: '.5s',
      // color: '#34a1fd',
      backgroundColor: '#34a1fd',
    },
  },
  //   buttonText: { margin: '-10px' },

  GridListRoot: {
    display: 'grid',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    alignItems: 'flex-end',
  },
  gridList: {
    // width: 700,
    width: '100%',
    transform: 'translateZ(0)',
    flexWrap: 'nowrap',
    // 'overflow-y': 'scroll !important',
    height: '100%',
    transition: '.5s',
    '&::-webkit-scrollbar': {
      width: '.5em',
      marginBottom: '10px',
      position: 'relative',
    },
    '&::-webkit-scrollbar-track': {
      // boxShadow: 'inset 0 0 6px #000',
      // border: '#252525 solid 1px',
      backgroundColor: '#eeeeee',
      // 'border-radius': '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#262b2f',
      // 'border-radius': '5px',
    },
  },
  gridListLight: {
    width: '102%',
    // width:'600px',
    transform: 'translateZ(0)',
    flexWrap: 'nowrap',
    // 'overflow-y': 'scroll !important',
    height: '102%',
    transition: '.5s',
    '&::-webkit-scrollbar': {
      width: '.5em',
      marginBottom: '10px',
      position: 'relative',
    },
    '&::-webkit-scrollbar-track': {
      // boxShadow: 'inset 0 0 6px #000',
      // border: '#252525 solid 1px',
      backgroundColor: '#000',
      // 'border-radius': '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'white',
      // 'border-radius': '5px',
    },
  },
  formContainer: {
    font: '400 15px Hind, sans-serif',
    'text-transform': 'lowercase',
  },
  cover: { width: 158 },
  dialogMessage: {
    font: '700 120% Montserrat, sans-serif',
  },
  dialogLabels: { font: '500 110% Montserrat, sans-serif' },
  dialogTitle: {
    // padding: '0px 5% 0px 5%',
    margin: '0% 0% -2% 0%',
  },
});
export default styles;
