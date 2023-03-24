import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'services/auth';
import { Flex } from 'theme-ui';
import { SignInPage } from 'pages/auth/sign-in';
import { SignUpPage } from 'pages/auth/sign-up';
import { MainPage } from 'pages/main';
import { AdminPage } from 'pages/admin';

export const AppRouter: FC<{}> = () => {
    const { authenticatedWrap, unauthenticatedWrap } = useAuth();
    return (
        <Flex sx={{ height: '100%' }}>
            <Routes>
                <Route
                    path="/sign-in"
                    element={unauthenticatedWrap(SignInPage)}
                />
                <Route
                    path="/sign-up"
                    element={unauthenticatedWrap(SignUpPage)}
                />
                <Route path="/admin" element={authenticatedWrap(AdminPage)} />
                <Route path="/" element={unauthenticatedWrap(MainPage)} />
            </Routes>
        </Flex>
    );
};
