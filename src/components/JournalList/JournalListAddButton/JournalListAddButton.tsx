import { DetailedHTMLProps, HTMLAttributes, ReactNode, FC } from 'react';
import './JournalListAddButton.scss';
import cn from 'classnames';
import { Card } from '../../Card/Card';
import { PlusSvg } from '../../../layouts/Sidebar/PlusSvg/PlusSvg';
interface JournalListAddButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const JournalListAddButton: FC<JournalListAddButtonProps> = ({ className, ...props }) => {
  return (
    <Card className="sidebarAddButton" {...props}>
      <PlusSvg /> Новое воспоминание
    </Card>
  );
};
