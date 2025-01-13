import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DocumentList from "./components/DocumentList";
import DocumentDetail from "./components/DocumentDetail";
import "./App.css";

function App() {
  return (
      <div className="app">
        <Sidebar />
        <div className="main">
          <Header />
          <DocumentList />
          {/* Пример: Детали документа можно подключить по условию */}
          {/* <DocumentDetail /> */}
        </div>
      </div>
  );
}

export default App;
