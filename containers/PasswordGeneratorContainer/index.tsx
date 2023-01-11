import React, { HTMLAttributes, useCallback, useMemo, useState } from 'react';
import TextField from 'components/TextField';
import PasswordGeneratorForm from 'components/PasswordGeneratorForm';
import { useForm } from 'react-hook-form';
import { generatePassword } from 'lib/utils';
import { Strength } from 'types/strength';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const PasswordGeneratorContainer: React.FC<IProps> = (props) => {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            length: 10,
            uppercase: true,
            lowercase: true,
            numbers: true,
            symbols: false,
        }
    });
    const [password, setPassword] = useState<string>('');
    const [copied, setCopied] = useState(false);
    const [
        length, uppercase, lowercase, numbers,
        symbols
    ] = watch([
        'length', 'uppercase', 'lowercase', 'numbers',
        'symbols'
    ]);

    const onCopy = useCallback(() => {
        if (password.length === 0) {
            window.alert('You have to generate a password first!');
            return ;
        }

        const tempElement = document.createElement('textarea');
        tempElement.value = password;
        document.body.appendChild(tempElement);

        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
        setCopied(true);
    }, [password]);

    const onSubmit = useCallback((data) => {
        const {
            length, uppercase, lowercase, numbers,
            symbols
        } = data;
        const password = generatePassword({
            length, uppercase, lowercase, numbers,
            symbols
        });
        setPassword(password);
        setCopied(false);
    }, []);

    const currentStrength: Strength = useMemo(() => {
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
        <div {...props}>
            <TextField placeholder={'P4$5W0rD!'}
                       value={password}
                       onCopy={onCopy}
                       copied={copied}
            />
            <PasswordGeneratorForm register={register}
                                   length={length}
                                   currentStrength={currentStrength}
                                   onSubmit={handleSubmit(onSubmit)}
            />
        </div>
    );
};

export default PasswordGeneratorContainer;
