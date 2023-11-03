import { FC, ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import './Button.scss';
import cn from 'classnames';
interface buttonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
}
export const Button: FC<buttonProps> = ({ children, className, ...props }) => {
  return (
    <button className={cn(className, 'button')} {...props}>
      {children}
    </button>
  );
};
