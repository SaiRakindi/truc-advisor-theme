import { Component } from 'react';

import { colors } from '../../model/colors';

import './index.css';

class Colors extends Component {
    render() {
        return (
            <div className='colors-container'>
                <div className='light-theme-container'>
                    <h1 style={{ textAlign: 'center', fontFamily: 'Roboto' }}>
                        Light Colors
                    </h1>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <div>
                            {Object.keys(colors.light).map((color) => (
                                <div
                                    key={color}
                                    style={{
                                        height: '40px',
                                        // width: '40px',
                                        margin: '20px',
                                    }}>
                                    {color}
                                </div>
                            ))}
                        </div>
                        <div>
                            {Object.values(colors.light).map((color) => (
                                <div
                                    key={color}
                                    style={{
                                        height: '40px',
                                        // width: '40px',
                                        margin: '20px',
                                    }}>
                                    {color}
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '-10px' }}>
                            {Object.values(colors.light).map((color) => (
                                <div
                                    key={color}
                                    style={{
                                        backgroundColor: color,
                                        height: '40px',
                                        width: '100px',
                                        margin: '20px',
                                    }}></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='dark-theme-container'>
                    <h1 style={{ textAlign: 'center' }}>Dark Colors</h1>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <div>
                            {Object.keys(colors.dark).map((color) => (
                                <div
                                    key={color}
                                    style={{
                                        height: '40px',
                                        // width: '40px',
                                        margin: '20px',
                                    }}>
                                    {color}
                                </div>
                            ))}
                        </div>
                        <div>
                            {Object.values(colors.dark).map((color) => (
                                <div
                                    key={color}
                                    style={{
                                        height: '40px',
                                        // width: '40px',
                                        margin: '20px',
                                    }}>
                                    {color}
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '-10px' }}>
                            {Object.values(colors.dark).map((color) => (
                                <div
                                    key={color}
                                    style={{
                                        backgroundColor: color,
                                        height: '40px',
                                        width: '100px',
                                        margin: '20px',
                                    }}></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='contrast-theme-container'>
                    <h1 style={{ textAlign: 'center' }}>Contrast Colors</h1>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <div>
                            {Object.keys(colors.contrast).map((color) => (
                                <div
                                    key={color}
                                    style={{
                                        height: '40px',
                                        // width: '40px',
                                        margin: '20px',
                                    }}>
                                    {color}
                                </div>
                            ))}
                        </div>
                        <div>
                            {Object.values(colors.contrast).map((color) => (
                                <div
                                    key={color}
                                    style={{
                                        height: '40px',
                                        // width: '40px',
                                        margin: '20px',
                                    }}>
                                    {color}
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '-10px' }}>
                            {Object.values(colors.contrast).map((color) => (
                                <div
                                    key={color}
                                    style={{
                                        backgroundColor: color,
                                        height: '40px',
                                        width: '100px',
                                        margin: '20px',
                                    }}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Colors;
