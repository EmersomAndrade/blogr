import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isBg?: boolean,
    isBorder?: boolean
};

export function Button({ isBg = false, isBorder = false, ...props }: ButtonProps) {
    return (
        < button
            className={`button ${isBg ? 'bg-true' : ''} ${isBorder ? 'border' : ''}`}
            {...props}
        />
    )
}