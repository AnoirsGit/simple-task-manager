import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import defaultConfig from '../../shared/defaults/default-config.json';

interface ConfigContextType {
    config: Record<string, any>;  
    setConfig: (key: string, value: any) => void;
    getConfigByKey: (key: string) => any;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

const ConfigProvider = ({ children }: { children: ReactNode }) => {
    const [config, setConfigState] = useState<Record<string, any>>(() => {
        const storedConfig = localStorage.getItem('config');
        return storedConfig ? JSON.parse(storedConfig) : defaultConfig;
    });

    useEffect(() => {
        const storedConfig = localStorage.getItem('config');
        if (!storedConfig) {
            localStorage.setItem('config', JSON.stringify(defaultConfig));
        }
    }, []);

    const setConfig = (key: string, value: any) => {
        setConfigState(prevConfig => {
            const updatedConfig = { ...prevConfig, [key]: value };
            localStorage.setItem('config', JSON.stringify(updatedConfig));
            return updatedConfig;
        });
    };

    const getConfigByKey = (key: string) => { 
        return config[key];
    };

    return (
        <ConfigContext.Provider value={{ config, setConfig, getConfigByKey }}>
            {children}
        </ConfigContext.Provider>
    );
};

// Custom hook for using the config context
const useConfigContext = () => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error('useConfigContext must be used within a ConfigProvider');
    }
    return context;
};

export { ConfigProvider, useConfigContext };
