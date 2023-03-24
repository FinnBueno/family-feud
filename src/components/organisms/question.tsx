import { AnswerDisplay } from 'components/organisms/answer';
import React, { useEffect } from 'react';
import { Question, useFamilyFeud } from 'services/hooks/use-family-feud';
import { Box, Flex, Grid, Heading } from 'theme-ui';

export const QuestionDisplay: React.FC<{
    alwaysShowAnswers: boolean;
    question: Question;
    onClick: any;
}> = ({ question, onClick, alwaysShowAnswers = false }) => {
    const showQuestion = question.visible;

    if (showQuestion) {
        return (
            <Flex
                sx={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Heading variant="question" sx={{ textAlign: 'center' }}>
                    {question.content}
                </Heading>
            </Flex>
        );
    }

    return (
        <Flex sx={{ width: '100%', height: '100%' }}>
            <Grid
                gap={4}
                columns="1fr 1fr"
                m={4}
                sx={{
                    gridAutoFlow: 'column',
                    gridTemplateRows: '1fr 1fr 1fr 1fr',
                    width: '100%'
                }}
            >
                {question.answers.map((answer, i) => (
                    <AnswerDisplay
                        alwaysShowAnswers={alwaysShowAnswers}
                        onClick={() => onClick(question, i)}
                        answer={answer}
                        index={i + 1}
                    />
                ))}
            </Grid>
        </Flex>
    );
};
