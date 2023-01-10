import React, { FormHTMLAttributes, useMemo } from 'react';
import styles from './style.module.scss';
import Button from 'components/Button';
import RightArrowIcon from '/public/icons/icon-arrow-right.svg';
import RangeInput from 'components/RangeInput';
import CheckBox from 'components/CheckBox';
import Indicator from 'components/Indicator';
import { UseFormRegister, UseFormWatch } from 'react-hook-form/dist/types/form';
import cn from 'classnames';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    register: UseFormRegister<any>;
    watch: UseFormWatch<any>;
}

const PasswordGeneratorForm: React.FC<IProps> = ({ register, watch, className, ...props }) => {
    const [
        length, uppercase, lowercase, numbers,
        symbols
    ] = watch([
        'length', 'uppercase', 'lowercase', 'numbers',
        'symbols'
    ]);

    const currentStrength = useMemo(() => {
        let strength = 0;

        if (length === 0) {
            return strength;
        }

        if (uppercase) {
            strength++;
        }
        if (lowercase) {
            strength++;
        }
        if (numbers) {
            strength++;
        }
        if (symbols) {
            strength++;
        }

        return length < 8 ?
            Math.min(strength, 1) :
            length < 12 ?
                Math.min(strength, 2) :
                strength;
    }, [
        length, uppercase, lowercase, numbers,
        symbols
    ]);

    return (
        <form className={cn(styles.passwordGeneratorForm, className)}
              {...props}
        >
            <div>
                <div className={styles.rangeInputLabelWrapper}>
                    <label className={styles.label}>
                        Character Length
                    </label>
                    <span className={styles.value}>
                    {length}
                </span>
                </div>
                <RangeInput {...register('length', { valueAsNumber: true })}
                            value={length}
                            min={0}
                            max={20}
                            step={1}
                />
            </div>

            <div className={styles.checkboxContainer}>
                <CheckBox id={'uppercase'}
                          {...register('uppercase')}
                >
                    Include Uppercase Letters
                </CheckBox>
                <CheckBox id={'lowercase'}
                          {...register('lowercase')}
                >
                    Include Lowercase Letters
                </CheckBox>
                <CheckBox id={'numbers'}
                          {...register('numbers')}
                >
                    Include Numbers
                </CheckBox>
                <CheckBox id={'symbols'}
                          {...register('symbols')}
                >
                    Include Symbols
                </CheckBox>
            </div>

            <div className={styles.footer}>
                <Indicator strength={currentStrength} />
                <Button className={styles.generateButton}>
                    Generate <RightArrowIcon className={styles.rightArrowIcon} />
                </Button>
            </div>
        </form>
    );
};

export default PasswordGeneratorForm;
