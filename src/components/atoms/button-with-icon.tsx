import { FC } from 'react';
import { Button, ButtonProps, Flex } from 'theme-ui';

export const ButtonWithIcon: FC<ButtonProps & { icon: any }> = ({
    icon,
    children,
    ...rest
}) => (
    <Button {...rest}>
        <Flex
            sx={{
                alignItems: 'center'
            }}
        >
            <Flex mr={2}>{icon}</Flex>
            {children}
        </Flex>
    </Button>
);
