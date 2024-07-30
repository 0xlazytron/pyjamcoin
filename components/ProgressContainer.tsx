// components/ProgressBarContainer.tsx

import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import { getRaised } from '../hooks/firebase'; // Ensure the correct path to your firebase file

const ProgressBarContainer: React.FC = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const fetchRaisedAmount = async () => {
            const raised = await getRaised();
            const hardCap = 250; // Hard cap value
            const calculatedPercentage = (raised / hardCap) * 100;
            setPercentage(Math.min(calculatedPercentage, 100)); // Ensure it doesn't exceed 100%
        };

        fetchRaisedAmount();
    }, []);

    return <ProgressBar percentage={percentage} />;
};

export default ProgressBarContainer;
