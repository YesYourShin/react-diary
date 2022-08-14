import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id: 1,
//     author: 'Shin',
//     content: '안녕1',
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: 'Dong',
//     content: '안녕2',
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: 'Hoon',
//     content: '안녕3',
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      id: dataId.current,
      author,
      content,
      emotion,
      created_date,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = targetId => {
    const newDiaryList = data.filter(it => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(data.map(it => (it.id === targetId ? { ...it, content: newContent } : it)));
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} onEdit={onEdit} diaryList={data} />
    </div>
  );
}

export default App;
