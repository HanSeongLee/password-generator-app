import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import RightArrowIcon from '/public/icons/icon-arrow-right.svg';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: 'right-arrow';
}

const Button: React.FC<IProps> = ({ icon, className, children, ...props }) => {
    return (
        <button className={cn(styles.button, className)}
                {...props}
        >
            {children} {icon === 'right-arrow' && (
                <RightArrowIcon className={styles.rightArrowIcon} />
            )}
        </button>
    );
};

export default React.memo(Button);
