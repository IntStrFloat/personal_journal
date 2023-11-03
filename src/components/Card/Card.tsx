import { DetailedHTMLProps, HTMLAttributes, ReactNode, FC } from 'react';
import './Card.scss';
import cn from 'classnames';
interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(className, 'cardItem')} {...props}>
      {children}
    </div>
  );
};
