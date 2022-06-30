import { Component } from 'react';
import { infoColors } from '../../model/colors';

import './index.css';

class InfoColors extends Component {
    render() {
        return (
            <div className='info-colors-container'>
                <div className='light-theme-container'>
                    <h1 style={{ textAlign: 'center' }}>Light Colors</h1>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <div>
                            {Object.keys(infoColors.light).map((color) => (
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
                            {Object.values(infoColors.light).map((color) => (
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
                            {Object.values(infoColors.light).map((color) => (
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
                            {Object.keys(infoColors.dark).map((color) => (
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
                            {Object.values(infoColors.dark).map((color) => (
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
                            {Object.values(infoColors.dark).map((color) => (
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
                            {Object.keys(infoColors.contrast).map((color) => (
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
                            {Object.values(infoColors.contrast).map((color) => (
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
                            {Object.values(infoColors.contrast).map((color) => (
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

export default InfoColors;
