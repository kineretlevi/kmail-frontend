import { theme } from "../../theme/customeTheme"

const paperStyle = {
    width: "13vw", 
    maxWidth: '100%', 
    height: "90vh", 
    marginTop: "3vh", 
    marginLeft: "2vw",
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
    marginTop: '30px',
    marginBottom: '30px',
    width: "90%", 
    height: "8.2vh", 
    borderRadius: "30px",
    justifyContent: 'flex-start',
    paddingLeft: 2, 
    gap: 2, 
    fontSize: "0.8rem"
}

const clickedBtnStyle = {
    color: theme.palette.info.main,
    marginTop: '30px',
    marginBottom: '30px',
    width: "90%", 
    height: "8.2vh", 
    borderRadius: "30px",
    justifyContent: 'flex-start',
    paddingLeft: 2, 
    gap: 2, 
    fontSize: "0.8rem"
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