import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
    const [user, setUser] = useState(null);  // 创建 user 状态和 setUser 更新函数

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn setUser={setUser} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/homepage" element={<div>Homepage Placeholder</div>} />
            </Routes>
        </Router>
    );
}

export default App;
