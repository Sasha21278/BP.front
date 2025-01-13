import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./DocumentList.css"; // Убедись, что стили подключены

const DocumentList = () => (
    <div className="document-list">
        <div className="document">
            <FontAwesomeIcon icon={faFile} className="document-icon" />
            <div className="document-name">Document 1</div>
        </div>
        <div className="document">
            <FontAwesomeIcon icon={faFile} className="document-icon" />
            <div className="document-name">Document 2</div>
        </div>
        <div className="document">
            <FontAwesomeIcon icon={faFile} className="document-icon" />
            <div className="document-name">Document 3</div>
        </div>
    </div>
);

export default DocumentList;
