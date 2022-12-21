import styles from './stack.module.css';

type StackProps = {
    space: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xXLarge',
    children: React.ReactNode,
    style?: React.CSSProperties,
};

const spaces = {
    xSmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xLarge: '32px',
    xXLarge: '48px',
};

const Stack = ({ children, space, style }: StackProps) => (
    <div className={styles.stack} style={{ rowGap: spaces[space], ...style }}>
        {children}
    </div>
);

export default Stack;
