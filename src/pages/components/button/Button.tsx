import styles from './Button.module.css'

const Button = ({  text,
    onClick,
    classNames,
    children,
    ...restProps}: any) => {
        const buttonStyle = {
            cursor: 'pointer',
          };
        
    return <button className={`${styles.commonButton} {...classNames}`}style={buttonStyle} onClick={onClick}  {...restProps}>{children}</button>
}

export default Button