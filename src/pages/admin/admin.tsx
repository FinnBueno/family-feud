import { FC } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Button, Flex, Text } from 'theme-ui';
import { Question, useFamilyFeud } from 'services/hooks/use-family-feud';
import { QuestionDisplay } from 'components/organisms/question';
import { Controls } from 'pages/admin/controls';

export const AdminPage: FC<{}> = () => {
    const { currentQuestion, questions, updateQuestion } = useFamilyFeud();

    const showAnswer = (question: Question, answerIndex: number) => {
        const newQuestion = { ...question };
        newQuestion.answers[answerIndex].visible =
            !newQuestion.answers[answerIndex].visible;
        updateQuestion(currentQuestion, newQuestion);
    };

    return (
        <Flex
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {currentQuestion < 0 || currentQuestion >= questions.length ? (
                <Text>Loading</Text>
            ) : (
                <Flex
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Controls />
                    <QuestionDisplay
                        alwaysShowAnswers
                        onClick={showAnswer}
                        question={questions[currentQuestion]}
                    />
                </Flex>
            )}
        </Flex>
    );
};
