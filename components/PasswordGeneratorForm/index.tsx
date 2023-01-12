import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import Button from 'components/Button';
import RangeInput from 'components/RangeInput';
import CheckBox from 'components/CheckBox';
import Indicator from 'components/Indicator';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import cn from 'classnames';
import { Strength } from 'types/strength';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    register: UseFormRegister<any>;
    length: string | number;
    currentStrength: Strength;
}

const PasswordGeneratorForm: React.FC<IProps> = ({
                                                     register, length, currentStrength, className,
                                                     ...props
                                                 }) => {
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
                <Button className={styles.generateButton}
                        icon={'right-arrow'}
                >
                    Generate
                </Button>
            </div>
        </form>
    );
};

export default PasswordGeneratorForm;
