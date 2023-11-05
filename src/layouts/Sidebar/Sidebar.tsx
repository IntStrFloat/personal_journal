import { DetailedHTMLProps, HTMLAttributes, ReactNode, FC, useState, useContext } from 'react';
import './Sidebar.scss';
import cn from 'classnames';
import { JournalItem } from '../../components/JournalList/JournalItem/JournalItem';
import { JournalSvg } from './JournalSvg/JournalSvg';
import { Card } from '../../components/Card/Card';
import { PlusSvg } from './PlusSvg/PlusSvg';
import { JournalListAddButton } from '../../components/JournalList/JournalListAddButton/JournalListAddButton';
import { Header } from '../../components/Header/Header';
import { UserContext } from '../../context/user.context';
interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  date: {
    title: string;
    text: string;
    data: Date;
    id: number;
  }[];
}

export const Sidebar: FC<SidebarProps> = ({ date, className, ...props }) => {
  const { userId } = useContext(UserContext);
  console.log(date);
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <Header />
        <JournalListAddButton />
      </div>
      <div className="sidebarList">
        {date
          .filter((element) => element.id === userId)
          .map((elem) => (
            <JournalItem title={elem.title} date={new Date(elem.data)} text={elem.text} />
          ))}
      </div>
    </div>
  );
};
