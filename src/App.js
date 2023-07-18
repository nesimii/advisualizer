import './App.css';
import AxiosExample from "./axiosExample/AxiosExample";
import MyAgGrid from "./MyAgGrid";
import {Group} from "./classes/group/Group";
import {fetchGroups} from "./classes/group/GroupService";


function App() {
    return (
        <div>
            <MyAgGrid classType={new Group()} funcType={fetchGroups}></MyAgGrid>
            <AxiosExample></AxiosExample>
        </div>
    );
}

export default App;
