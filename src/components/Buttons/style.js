export default function style(theme) {
  return {
    outlinedBtn: {
      borderRadius: 5,
      height: "fit-content",
      textTransform: "unset !important",
      border: `2px solid #5D5FEF`,
      fontSize:'0.8rem',
      color: '#5D5FEF',
      background: '#B6CFFF',
      fontWeight: 500,
      "-webkit-background-clip": "text",
      [theme.breakpoints.down("sm")]: {
        fontSize:'0.8rem',
      },
    
    },
  };
}
