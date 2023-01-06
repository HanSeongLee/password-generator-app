import React, { CSSProperties, InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {

}

const RangeInput = React.forwardRef<HTMLInputElement, IProps>(({ value, max, className, ...props }, ref) => {
    return (
        <div className={cn(styles.rangeInputWrapper, className)}
             style={{
                 '--progress-width': `${(Number(value) / Number(max)) * 100}%`,
             } as CSSProperties}
        >
            <input className={styles.input}
                   type={'range'}
                   {...props}
                   ref={ref}
            />
        </div>
    );
});

export default RangeInput;
