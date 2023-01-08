import React, { CSSProperties, HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { Strength, StrengthProps } from 'types/strength';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    strength: Strength;
}

const Indicator: React.FC<IProps> = ({ strength, className, ...props }) => {
    return (
        <div className={cn(styles.indicator, className)}
             {...props}
        >
            <div>
                Strength
            </div>

            <div className={styles.value}>
                {StrengthProps[strength].label}
                <div className={styles.barContainer}
                     style={{
                         '--bar-color': StrengthProps[strength].color
                     } as CSSProperties}
                >
                    {[...new Array(4)].map((_, index) => (
                        <span className={cn(styles.bar, {
                            [styles.fill]: index < strength
                        })}
                              key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

Indicator.defaultProps = {
    strength: Strength.EMPTY,
};

export default Indicator;
