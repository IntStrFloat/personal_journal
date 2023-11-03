import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { JournalItem } from './components/JournalList/JournalItem/JournalItem';
import { Body } from './layouts/Body/Body';
import { Sidebar } from './layouts/Sidebar/Sidebar';

interface IJournalItem {
  title: string;
  text: string;
  data: Date;
}

function App() {
  const [userData, setUserData] = useState<IJournalItem[]>([]);
  useEffect(() => {
    const localStorageData: IJournalItem[] = JSON.parse(localStorage.getItem('data')!);

    if (localStorageData) {
      setUserData(localStorageData.map((el) => ({ ...el, data: new Date(el.data) })));
    }
  }, []);
  useEffect(() => {
    console.log(1);
    if (userData.length) {
      console.log(userData);
      localStorage.setItem('data', JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <div className="mainLayout">
      <div className="sidebar">
        <Sidebar date={userData} />
      </div>
      <Body className="text" setData={setUserData}>
        Текст
      </Body>
    </div>
  );
}

export default App;
