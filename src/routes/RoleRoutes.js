import { Role } from 'components/role';
import { useState } from 'react';

export default function RoleRoutes({ role }) {
    const [state, setstate] = useState(Role.CLIENT);

    const adminMenus = [
        {
            icon: <HomeOutlinedIcon />,
            title: 'Dashboard',
            to: '/demo-page',
            type: 'group',
            items: []
        },
        {
            icon: <FilterAltOutlinedIcon />,
            title: 'Combustion Module',
            type: 'group',
            items: [
                {
                    title: 'Measure',
                    to: 'combustion/measure',
                    type: 'item'
                },
                {
                    title: 'Help',
                    to: 'combustion/help',
                    type: 'item'
                },
                {
                    title: 'Report',
                    to: 'combustion/report',
                    type: 'item'
                }
            ]
        },
        {
            icon: <AdminPanelSettingsIcon />,
            title: 'Admin Module',
            type: 'group',
            items: [
                {
                    title: 'Admin Control',
                    to: 'combustion/measure',
                    type: 'item'
                },
                {
                    title: 'Client Control',
                    to: 'combustion/help',
                    type: 'item'
                },
                {
                    title: 'Report',
                    to: 'combustion/report',
                    type: 'item'
                }
            ]
        }
    ];

    const clientMenus = [
        {
            icon: <HomeOutlinedIcon />,
            title: 'Dashboard',
            to: '/demo-page',
            type: 'group',
            items: []
        },
        {
            icon: <FilterAltOutlinedIcon />,
            title: 'Combustion Module',
            type: 'group',
            items: [
                {
                    title: 'Measure',
                    to: 'combustion/measure',
                    type: 'item'
                },
                {
                    title: 'Help',
                    to: 'combustion/help',
                    type: 'item'
                },
                {
                    title: 'Report',
                    to: 'combustion/report',
                    type: 'item'
                }
            ]
        }
    ];

    useEffect(() => {
        setstate(role);
        if (state === Role.ADMIN) {
        }
    }, [role]);

    return <></>;
}
