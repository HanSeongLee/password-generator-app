import React, { HTMLAttributes, useCallback, useState } from 'react';
import TextField from 'components/TextField';
import PasswordGeneratorForm from 'components/PasswordGeneratorForm';
import { useForm } from 'react-hook-form';
import { generatePassword } from 'lib/utils';

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

    const onCopy = useCallback(() => {
        const tempElement = document.createElement('textarea');
        tempElement.value = password;
        document.body.appendChild(tempElement);

        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
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
    }, []);

    return (
        <div {...props}>
            <TextField placeholder={'P4$5W0rD!'}
                       value={password}
                       onCopy={onCopy}
            />
            <PasswordGeneratorForm register={register}
                                   watch={watch}
                                   onSubmit={handleSubmit(onSubmit)}
            />
        </div>
    );
};

export default PasswordGeneratorContainer;
