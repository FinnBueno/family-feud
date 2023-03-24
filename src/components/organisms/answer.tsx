import React, { useEffect } from 'react';
import { Answer, useFamilyFeud } from 'services/hooks/use-family-feud';
import { Box, Flex, Grid, Heading, Text } from 'theme-ui';

const pad = (nmbr: number): string => {
    if (nmbr < 10 && nmbr > -1) {
        return ` ${nmbr}`;
    }
    return `${nmbr}`;
};

export const AnswerDisplay: React.FC<{
    alwaysShowAnswers: boolean;
    answer: Answer;
    index: number;
    onClick: (_: number) => void;
}> = ({ answer, index, onClick = (_: number) => {}, alwaysShowAnswers }) => {
    const show = answer.visible;
    return (
        <Flex
            variant="layout.questionBlock"
            sx={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                cursor: 'pointer'
            }}
            onClick={() => onClick(index)}
        >
            <Flex
                sx={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text variant="answer" sx={{ textAlign: 'center' }}>
                    {show || alwaysShowAnswers ? answer.content : '???'}
                </Text>
            </Flex>
            <Flex variant="layout.answerNumber">
                <Text variant="answerNumber" sx={{ textAlign: 'center' }}>
                    {show ? pad(answer.number) : '??'}
                </Text>
            </Flex>
        </Flex>
    );
};
