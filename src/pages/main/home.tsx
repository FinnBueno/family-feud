import { FC } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Button, Flex, Text } from 'theme-ui';
import { useFamilyFeud } from 'services/hooks/use-family-feud';
import { QuestionDisplay } from 'components/organisms/question';

export const MainPage: FC<{}> = () => {
    const { currentQuestion, questions } = useFamilyFeud();
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
                <QuestionDisplay
                    alwaysShowAnswers={false}
                    onClick={() => {}}
                    question={questions[currentQuestion]}
                />
            )}
        </Flex>
    );
};
