import { ThemeStyles } from 'theme-ui';

const defaultHeadingStyle = {
    fontFamily: 'heading',
    fontWeight: 'heading',
    color: 'body',
    mt: 4,
    mb: 2
};

// generate styles for h1 through HEADING_AMOUNT
const HEADING_AMOUNT = 6;
export const headingStyles = [...Array(HEADING_AMOUNT).keys()].reduce(
    (total: { [key: string]: object }, key) => ({
        ...total,
        [`h${key + 1}`]: {
            ...defaultHeadingStyle,
            fontSize: HEADING_AMOUNT - key
        }
    }),
    {}
);

// this is styles to apply to ALL related HTML elements
// maybe this needs to be in variants instead?
// cause this overrides variants
export const styles: ThemeStyles = {
    ...headingStyles,
    p: {
        color: 'text',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body'
    },
    a: {
        color: 'primary'
    },
    pre: {
        fontFamily: 'monospace',
        overflowX: 'auto',
        code: {
            color: 'inherit'
        }
    },
    code: {
        fontFamily: 'monospace',
        fontSize: 'inherit'
    },
    table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0
    },
    th: {
        textAlign: 'left',
        borderBottomStyle: 'solid'
    },
    td: {
        textAlign: 'left',
        borderBottomStyle: 'solid'
    },
    img: {
        maxWidth: '100%'
    },
    // Default for Divider component
    // hr: {},
    // Default for Progress component
    // progress: {},
    // :root styles
    root: {
        fontFamily: 'body',
        fontWeight: 'body'
    }
};
