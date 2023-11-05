import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Taskpage from '../Taskpage/Taskpage';
import Notespage from '../Notespage/Notespage';

const Allroutes = ({isadd ,setIsadd}) => {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage isadd={isadd} setIsadd={setIsadd}/>} />
                <Route path="/taskpage" element={<Taskpage isadd={isadd} setIsadd={setIsadd}/>} />
                <Route path="/notespage" element={<Notespage isadd={isadd} setIsadd={setIsadd}/>} />
            </Routes>
        </div>
    );
};

export default Allroutes;