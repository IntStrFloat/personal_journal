import classNames from 'classnames';
import { DetailedHTMLProps, FC, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.css';
interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  ref?: ForwardedRef<HTMLInputElement>;
  appearence?: string;
  isValid: boolean;
}

export const Input: FC<InputProps> = forwardRef(
  ({ className, appearence, isValid, ...props }, ref) => {
    return (
      <input
        className={classNames(styles.input, {
          [styles.inValid]: !isValid,
          [styles.title]: appearence == 'title',
        })}
        ref={ref}
        {...props}
      ></input>
    );
  },
);
