import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      placeholder={props.label}
      onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
