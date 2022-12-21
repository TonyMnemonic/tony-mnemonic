import styles from './columns.module.css';

type ColumnsProps = {
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

const Columns = ({ space, children, style }: ColumnsProps) => (
    <div className={styles.columns} style={{ columnGap: spaces[space], ...style }}>{ children }</div>
);

export default Columns;
