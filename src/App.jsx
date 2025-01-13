import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DocumentList from "./components/DocumentList";
import "./App.css";

function App() {
    return (
        <div className="app">
            <header className="header">
                <img src="logo1.png" alt="Logo" className="logo" />
            </header>
            <div className="main-content">
                <aside className="sidebar">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Documents</li>
                            <li>Settings</li>
                        </ul>
                    </nav>
                </aside>
                <div className="content-area">
                    <div className="document-item">Document 1</div>
                    <div className="document-item">Document 2</div>
                    <div className="document-item">Document 3</div>
                    <div className="document-item">Document 4</div>
                    <div className="document-item">Document 5</div>
                    <div className="document-item">Document 6</div>
                </div>
            </div>
        </div>

    );
}

export default App;
