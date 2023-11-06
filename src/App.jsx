import React, { useState } from 'react';
import './App.css';
import Result from './Components/Result/Result';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import name from '@rstacruz/startup-name-generator';

const App = () => {
    const [headerText, setHeaderText] = useState("DomainDive");
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!(inputText.length > 0));
        setSuggestedNames(inputText.length > 0 ? name(inputText) : []);
    };

    return (
        <div>
            <Header
                headTitle={headerText}
                headerExpanded={headerExpanded} />
            <Search onInputChange={handleInputChange} />
            <Result suggestedNames={suggestedNames} />
        </div>
    );
}

export default App;
