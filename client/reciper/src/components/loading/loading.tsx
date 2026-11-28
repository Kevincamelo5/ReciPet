import React, { useState, useEffect } from "react";
import './loading.css';

export default function LoadingScreen({ onFinish }) {
    const [progress, setProgress] = useState(0);
    const [dots, setDots] = useState('');

    //progresive search simulate.
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIimeout(onFinish, 400); //delay before to show
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 200);
        return () => clearInterval(interval);
    }, [])
}