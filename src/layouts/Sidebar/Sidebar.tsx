import { DetailedHTMLProps, HTMLAttributes, ReactNode, FC, useState } from 'react';
import './Sidebar.scss';
import cn from 'classnames';
import { JournalItem } from '../../components/JournalList/JournalItem/JournalItem';
import { JournalSvg } from './JournalSvg/JournalSvg';
import { Card } from '../../components/Card/Card';
import { PlusSvg } from './PlusSvg/PlusSvg';
import { JournalListAddButton } from '../../components/JournalList/JournalListAddButton/JournalListAddButton';
interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  date: {
    title: string;
    text: string;
    data: Date;
  }[];
}

export const Sidebar: FC<SidebarProps> = ({ date, className, ...props }) => {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <JournalSvg />
        <JournalListAddButton />
      </div>
      <div className="sidebarList">
        {date.map((elem) => (
          <JournalItem title={elem.title} date={elem.data} text={elem.text} />
        ))}
      </div>
    </div>
  );
};
