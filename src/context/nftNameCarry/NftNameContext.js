// Create a new context
const NftNameContext = React.createContext();

// Export a provider component
export const NftNameProvider = ({ children }) => {
    const [nftNames, setNftNames] = React.useState([]);

    const addNftName = (name) => {
        setNftNames([...nftNames, name]);
    };

    return (
        <NftNameContext.Provider value={{ nftNames, addNftName }}>
            {children}
        </NftNameContext.Provider>
    );
};

// Export the context itself
export const useNftName = () => React.useContext(NftNameContext);
