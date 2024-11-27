const baseStyle = {
  color: "black.900",
  fontFamily: "Stigfier",
};
const sizes = {
  textxs: {
    fontSize: "18px",
    fontWeight: 400,
  },
  texts: {
    fontSize: "20px",
    fontWeight: 400,
  },
  textmd: {
    fontSize: {
      md: "24px",
      base: "24px",
      sm: "22px",
    },
    fontWeight: 400,
  },
  textlg: {
    fontSize: {
      md: "32px",
      base: "28px",
      sm: "30px",
    },
    fontWeight: 400,
  },
  textxl: {
    fontSize: {
      md: "40px",
      base: "36px",
      sm: "38px",
    },
    fontWeight: 400,
  },
  text2xl: {
    fontSize: {
      md: "42px",
      base: "32px",
      sm: "38px",
    },
    fontWeight: 400,
  },
  text3xl: {
    fontSize: {
      md: "48px",
      base: "38px",
      sm: "44px",
    },
    fontWeight: 400,
  },
  text4xl: {
    fontSize: {
      md: "64px",
      base: "48px",
    },
    fontWeight: 400,
  },
  text5xl: {
    fontSize: {
      md: "96px",
      base: "48px",
    },
    fontWeight: 400,
  },
};
const defaultProps = {
  size: "textxl",
};

const Text = {
  baseStyle,
  sizes,
  defaultProps
}
export default Text;