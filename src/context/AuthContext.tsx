import React, {useState} from 'react';

const useAuthContextValue = () => {
  const [user, setUser] = useState('alvaro');

  const value = {
    user,
    setUser,
  };

  return {value};
};

export const AuthContext = React.createContext({});

export const AuthProvider: React.FC = ({children}) => {
  const {value} = useAuthContextValue();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const {value} = useAuthContextValue();
  const context = React.useContext(AuthContext) as typeof value;

  return context;
};
