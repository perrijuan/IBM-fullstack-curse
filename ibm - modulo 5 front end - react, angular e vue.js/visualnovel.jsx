import React from "React";
import novelblog from "../components/novelblog";
import App from "../src/App";


function app(){
    const novel = {
        title: 'fate stay night',
        author: 'kinoko nasu',
        description:'muito texto e fan service',
        type:'vm, hentai, eroge',
    };
    return (
        <div className="app">
            <novelblog title = {novel.title} author = {novel.author} description = {novel.description}/>
        </div>
    );
}

export default App;
