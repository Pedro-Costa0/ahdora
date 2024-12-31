import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Principal from './pages/principal/';

export default function Rotas(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Principal/>}/>
            </Routes>
        </BrowserRouter>
    )
}