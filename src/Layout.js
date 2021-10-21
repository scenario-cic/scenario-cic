/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
export default function Layout({ children }) {
    return (
        <Flex
            sx={{
                minHeight: '100vh',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <main
                sx={{
                    variant: 'layout.main',
                }}
            >
                {children}
            </main>
        </Flex>
    );
}
