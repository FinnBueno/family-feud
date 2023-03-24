import { FC } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Button, Flex, Text } from 'theme-ui';
import { useFamilyFeud } from 'services/hooks/use-family-feud';
import { QuestionDisplay } from 'components/organisms/question';

export const Controls: FC<{}> = () => {
    const { currentQuestion, questions, setActiveQuestion, updateQuestion } =
        useFamilyFeud();
    const toggleQuestionVisibility = () => {
        const question = questions[currentQuestion];
        updateQuestion(currentQuestion, {
            ...question,
            visible: !question.visible
        });
    };
    return (
        <Flex
            sx={{
                width: '100%',
                display: 'flex'
            }}
        >
            <Flex sx={{ flex: 1 }}>
                <Button
                    onClick={() =>
                        currentQuestion > 0 &&
                        setActiveQuestion(currentQuestion - 1)
                    }
                >
                    Previous
                </Button>
            </Flex>
            <Flex sx={{ flex: 1, justifyContent: 'center' }}>
                <Text
                    sx={{
                        fontSize: '2rem'
                    }}
                >
                    {currentQuestion}
                </Text>
            </Flex>
            <Flex sx={{ flex: 1 }}>
                <Button onClick={toggleQuestionVisibility}>
                    Toggle Question
                </Button>
            </Flex>
            <Flex sx={{ flex: 1 }}>
                <Button
                    onClick={() =>
                        currentQuestion < 19 &&
                        setActiveQuestion(currentQuestion + 1)
                    }
                >
                    Next
                </Button>
            </Flex>
        </Flex>
    );
};
