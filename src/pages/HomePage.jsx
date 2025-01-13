import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DocumentList from "../components/DocumentList";

const HomePage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <DocumentList />
            </div>
        </div>
    );
};

export default HomePage;
