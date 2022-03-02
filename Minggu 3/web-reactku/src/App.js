import React, { Component } from 'react';
import Header from './component/footer';
import Footer from './component/footer';
import List from './component/list'; 

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Component dari Class App</h1>
                <List />
                <Footer judul='Halaman Footer' nama='Reza' />
            </div>
        );
    }
} export default App;

