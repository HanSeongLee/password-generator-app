import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import CopyIcon from '/public/icons/icon-copy.svg';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    copied: boolean;
    onCopy: () => void;
}

const TextField = React.forwardRef<HTMLInputElement, IProps>(({ copied, onCopy, className, ...props }, ref) => {
    return (
        <div className={cn(styles.inputWrapper, className)}>
            <input className={styles.input}
                   type={'text'}
                   disabled
                   {...props}
            />
            <div className={styles.buttonContainer}>
                {copied && (
                    <span className={styles.copiedText}>
                        Copied
                    </span>
                )}
                <button className={styles.copyButton}
                        type={'button'}
                        onClick={onCopy}
                >
                    <CopyIcon className={styles.copyIcon}
                              alt={'Copy'}
                    />
                </button>
            </div>
        </div>
    );
});

export default React.memo(TextField);
