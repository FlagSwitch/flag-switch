

import React, { ReactNode, FC } from 'react';

import { useStyles } from './IconCounter.style';

interface IIconCounterProps {
    icon: ReactNode;
    count: number;
    className?: string;
}

const IconCounter: FC<IIconCounterProps> = ({
    icon,
    count,
}) => {
    const { classes: styles } = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.counter}>
                {count}
            </div>
        </div>
    );
};

export default IconCounter;