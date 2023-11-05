import { DetailedHTMLProps, HTMLAttributes, ReactNode, FC } from 'react';
import './Header.scss';
import cn from 'classnames';
import { SelectUser } from '../SelectUser/SelectUser';
import { JournalSvg } from '../../layouts/Sidebar/JournalSvg/JournalSvg';
interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <>
      <JournalSvg />
      <SelectUser />
    </>
  );
};
