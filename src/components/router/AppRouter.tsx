import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppMainLayout from "../layout/AppMainLayout";
import AnnotationPage from "../../pages/AnnotationPage";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppMainLayout/>}>
                    <Route path="annotation" element={<AnnotationPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter