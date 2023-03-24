import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Flex, Heading, Input, Text } from 'theme-ui';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth';
import { Translate, translate } from 'react-i18nify';
import { toast } from 'react-toastify';
import { ButtonWithIcon } from 'components/atoms';
import { InputField } from 'components/molecules';

type SignInForm = {
    username: string;
    password: string;
};

export const SignInPage: FC<{}> = () => {
    const auth = getAuth();

    const schema = yup.object().shape({
        username: yup
            .string()
            // .email(translate('auth.error.emailValid'))
            .required(translate('auth.error.emailValid')),
        password: yup
            .string()
            .min(5, translate('auth.error.passwordMinimum', { count: 5 }))
            .required(translate('auth.error.passwordMinimum', { count: 5 }))
    });

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<SignInForm>({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const signInError = () =>
        toast('Something went wrong during sign in. Please try again later', {
            type: 'error'
        });

    const signIn = ({ username, password }: SignInForm) => {
        signInWithEmailAndPassword(auth, username, password).catch(signInError);
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).catch(signInError);
    };

    return (
        <Container
            sx={{
                display: 'flex',
                // flexDirection: 'column',
                justifyContent: 'center'
                // alignItems: 'center'
            }}
        >
            <Flex
                sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 'narrow'
                }}
                as="form"
                onSubmit={handleSubmit(signIn)}
            >
                <Flex
                    sx={{
                        alignItems: 'center',
                        flexDirection: 'column',
                        mb: 5
                    }}
                >
                    <Heading as="h1">Family Feud</Heading>
                    <Text>
                        <Translate value="auth.welcome" />
                    </Text>
                    <Text>
                        <Translate value="auth.welcomeSubtitle" />
                    </Text>
                </Flex>
                <InputField
                    {...register('username', { required: true })}
                    defaultValue=""
                    label={translate('auth.email')}
                    errors={errors}
                    type="username"
                />
                <InputField
                    {...register('password', { required: true })}
                    defaultValue=""
                    type="password"
                    label={translate('auth.password')}
                    errors={errors}
                />
                <Button variant="primary" onClick={handleSubmit(signIn)}>
                    <Translate value="auth.signIn" />
                </Button>
                <ButtonWithIcon
                    variant="outlined"
                    onClick={signInWithGoogle}
                    icon={<FcGoogle size={20} />}
                >
                    <Translate value="auth.signInWithGoogle" />
                </ButtonWithIcon>
                <Button variant="text" onClick={() => navigate('/sign-up')}>
                    <Translate value="auth.createAccountInstead" />
                </Button>
            </Flex>
        </Container>
    );
};
