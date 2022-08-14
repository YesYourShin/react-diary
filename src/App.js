import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: 'Shin',
    content: '안녕1',
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: 'Dong',
    content: '안녕2',
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: 'Hoon',
    content: '안녕3',
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  console.log('first');
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
