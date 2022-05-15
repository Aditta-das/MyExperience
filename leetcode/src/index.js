import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import QuestionForm from './Pages/question';
import Home from './Pages/home';
import Resume from './Pages/resume';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ReactDOM.render(<QuestionForm/>, document.getElementById('root'));

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/dropaquestion" element={<QuestionForm/>}></Route>
      <Route path="/resume" element={<Resume/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);