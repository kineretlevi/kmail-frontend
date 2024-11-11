import { theme } from "../../theme/customeTheme"

// Using MUI's responsive style system.
const paperStyle = {
    width: { xs: '65vw', sm: '45vw', md: '20vw' }, 
    maxWidth: '100%',
    height: { xs: '86.5vh', md: '89.9vh' },
    marginTop: { xs: '3vh', md: '3vh' },
    marginLeft: { xs: 0, md: '2vw' },
    padding: { xs: 2, md: 0 },
}

const boxStyle = {
    height: "70px"
}

const iconBtnStyle = {
    display: "flex",
    justifyContent: 'flex-start',
    marginTop: "10px",
    marginBottom: 0
}

const btnStyle = {
    marginTop: '20px',
    marginBottom: '20px',
    width: "90%",
    height: { xs: '6vh', md: '8.2vh' }, 
    borderRadius: "30px",
    justifyContent: 'flex-start',
    paddingLeft: { xs: 1, md: 2 },
    gap: { xs: 1, md: 2 },
    fontSize: { xs: "0.7rem", md: "0.8rem" },
}

const clickedBtnStyle = {
    ...btnStyle,
    color: theme.palette.info.main,
}

const arrowBackIconStyle = {
    height: "30px", 
    width: "30px"
}

export {
    paperStyle,
    boxStyle,
    btnStyle,
    clickedBtnStyle,
    iconBtnStyle,
    arrowBackIconStyle
}