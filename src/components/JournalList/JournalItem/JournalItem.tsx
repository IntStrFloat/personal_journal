import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import './JournalItem.scss';
import { Card } from '../../Card/Card';
interface journalItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  date: Date;
  text: string;
}
export const JournalItem: FC<journalItemProps> = ({ title, date, text }) => {
  const formatedDare = new Intl.DateTimeFormat('ru-RU').format(date);
  return (
    <Card>
      <div className="journalItem">
        <div className="journalHeader">{title}</div>
        <div className="journalBody">
          <div className="date">{formatedDare}</div>
          <div className="text">{text}</div>
        </div>
      </div>
    </Card>
  );
};
