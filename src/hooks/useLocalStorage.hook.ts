import { useEffect, useState } from 'react';
interface IJournalItem {
  id: number;
  title: string;
  text: string;
  data: Date;
}
export const useLocalStorage = (key: string) => {
  const [data, setData] = useState<IJournalItem[]>([]);
  useEffect(() => {
    const responce: IJournalItem[] = JSON.parse(localStorage.getItem(key)!);
    if (responce) {
      setData(responce);
    }
  }, []);
  const saveData = (journalItems: IJournalItem[]) => {
    localStorage.setItem(key, JSON.stringify(journalItems));
    setData(journalItems);
  };

  return [data!, saveData] as [IJournalItem[], (journalItems: IJournalItem[]) => void];
};
