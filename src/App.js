import Page from "./components/page";
import {DataProvider} from "./dataProvider";

function App() {
    return (
        <DataProvider>
            <Page/>
        </DataProvider>
    );
}

export default App;
