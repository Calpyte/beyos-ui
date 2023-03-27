import * as React from 'react';
import ScrollTop from './components/ScrollTop';
import ThemeRoutes from './routes';
import { useEffect, useState } from 'react';
import { Role } from 'components/role';

export default function App() {
    const [role, setRole] = useState(Role.CLIENT);

    useEffect(() => {
        setRole(Role.CLIENT);
    }, [role]);

    return (
        <ScrollTop>
            <ThemeRoutes role={role} />
        </ScrollTop>
    );
}
