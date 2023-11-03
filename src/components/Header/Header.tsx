import { DetailedHTMLProps, HTMLAttributes, ReactNode, FC } from 'react';
import './Card.scss';
import cn from 'classnames';
interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Body: FC<HeaderProps> = ({ className, ...props }) => {
  return <></>;
};
