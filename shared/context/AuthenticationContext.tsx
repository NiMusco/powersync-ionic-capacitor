import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserStatus } from '../../shared/types/user';
import { Organization } from '../../shared/types/organization';

interface AuthContextProps {
    isAuthenticated: boolean;
    user: Partial<User> | null;
    login: (credentials: any) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        return storedAuth ? JSON.parse(storedAuth) : false;
    });

    const [user, setUser] = useState<Partial<User> | null>(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (credentials: any) => {
        // Mock organization data
        const mockOrganization: Organization = {
            id: 'org-1',
            createdAt: new Date(),
            updatedAt: new Date(),
            name: 'Memory Organization',
            code: 'MEMORG',
            description: 'A memory organization for testing',
            imageUrl: 'https://via.placeholder.com/100',
            createdById: '1',
            createdBy: {} as User,
            userGroups: [],
            memberships: [],
            divisions: [],
            files: [],
            reports: [],
            locations: [],
            assets: [],
            guardTourSpecs: [],
            taskLists: [],
            tasks: []
        };

        const userData: Partial<User> = {
            id: '1',
            externalId: 'external-1',
            createdAt: new Date(),
            updatedAt: new Date(),
            email: 'john.doe@example.com',
            firstName: 'John',
            lastName: 'Doe',
            imageUrl: 'https://via.placeholder.com/150',
            organizations: [mockOrganization],
            statusUpdates: [
                {
                    id: '1',
                    createdAt: new Date(),
                    status: UserStatus.ACTIVE,
                    userId: '1',
                    user: {} as User
                }
            ],
            memberships: [],
            files: [],
            locations: [],
            assets: [],
            reports: [],
            reportStatusUpdates: [],
            guardTourSpecs: [],
            guardTours: [],
            taskListsCreated: [],
            taskListsOwned: [],
            tasksCreated: [],
            tasksOwned: [],
            tasksCancelled: [],
            permissions: ["ACTIVITY_SHOW", "LOCATIONS_SHOW", "MAP_SHOW"],
        };

        setIsAuthenticated(true);
        setUser(userData);

        // Store authentication state in local storage
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);

        // Remove authentication state from local storage
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        const storedUser = localStorage.getItem('user');

        if (storedAuth && storedUser) {
            setIsAuthenticated(JSON.parse(storedAuth));
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
