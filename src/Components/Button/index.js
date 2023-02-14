import { BUTTON_TYPE_CLASSES } from "./types";

const Button = ({ children, buttonType, ...otherProps }) => {
  return <button className={`basic-button ${BUTTON_TYPE_CLASSES[buttonType] ?? ''}`} {...otherProps}>
        {children}
    </button>;
};

export default Button;