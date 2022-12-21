import styles from "./text.module.css";

type TextProps = {
    weight: "300" | "500" | "700",
    children: string,
    size: "small" | "medium" | "large",
    color: "black" | "white" | "gray",
};

const sizes = {
    xSmall: '12px',
    small: '14px',
    medium: '16px',
    large: '24px',
    xLarge: '32px',
    xXLarge: '48px',
};

const Text = ({ weight, size, children, color }: TextProps) => (
    <div className={styles.text} style={{ 'fontWeight': weight, 'fontSize': sizes[size], color }}>{children}</div>
);

Text.defaultProps = {
    weight: "300",
    size: "medium",
    color: "white",
};

export default Text;
