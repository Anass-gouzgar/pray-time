import MainContent from './components/MainContent';

function App() {

  return (
    <div dir='rtl' className="flex justify-center items-center h-[100vh] bg-slate-900 ">
      <div className="flex items-center w-[100vw] h-1/2 bg-red-500">
          <MainContent />
      </div>
    </div>
  );
}

export default App
