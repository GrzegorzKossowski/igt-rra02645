import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';
import Content from './components/content/Content';
import DesktopBar from './components/navigation/DesktopBar';
import Footer from './components/footer/Footer';
import Features from './components/features/Features';
import Header from './components/header/Header';
import MobileBar from './components/navigation/MobileBar';
import SignUp from './components/signup/SignUp';
import Testimonial from './components/testimonial/Testimonial';
import { ThemeContext } from './components/ThemeContext';

function App() {
    const [isChecked, setIsChecked] = useState<boolean>(true);
    return (
        <ThemeProvider theme={isChecked ? defaultTheme : darkTheme}>
            <ThemeContext.Provider value={isChecked}>
                <DesktopBar isChecked={isChecked} setIsChecked={setIsChecked} />
                <MobileBar isChecked={isChecked} setIsChecked={setIsChecked} />
                <Header />
                <Content />
                <Features />
                <SignUp />
                <Testimonial />
                <Footer />
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export default App;
