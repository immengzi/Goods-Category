import Page from "./components/page";
import { DataProvider, useData } from "./dataProvider";

function App() {
    return (
        <DataProvider>
            <ConditionalPage />
        </DataProvider>
    );
}

function ConditionalPage() {
    const { isValid } = useData();
    if (isValid) {
        return <Page />;
    } else {
        return <div>Loading or not available...</div>;
    }
}

export default App;
