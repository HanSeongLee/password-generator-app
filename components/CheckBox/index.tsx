import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {

}

const CheckBox = React.forwardRef<HTMLInputElement, IProps>(({
                                                                 id, value, className, children
                                                                 , ...props
                                                             }, ref) => {
    return (
        <label className={cn(styles.checkboxWrapper, className)}
               id={id}
        >
            <input className={styles.input}
                   type={'checkbox'}
                   {...props}
                   id={id}
                   ref={ref}
            />
            {children}
        </label>
    );
});

export default CheckBox;
