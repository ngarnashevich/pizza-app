import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

type ButtonProps = React.ComponentProps<'button'> & {
    className?: keyof typeof styles;
};

const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(styles.button, className && styles[className])}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
