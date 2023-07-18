import './App.css';
import MyAgGrid from "./myTable/MyAgGrid";
import {Group} from "./classes/group/Group";
import {fetchGroups} from "./classes/group/GroupService";
import {User} from "./classes/user/User";
import {fetchUsers} from "./classes/user/UserService";
import {Computer} from "./classes/computer/Computer";
import {fetchComputers} from "./classes/computer/ComputerService";


function App() {
    return (
        <div style={{margin: '2% 10%'}}>
            <h3>Groups</h3>
            <MyAgGrid classType={new Group()} funcType={fetchGroups}></MyAgGrid>
            <br/><br/><br/>
            <h3>Users</h3>
            <MyAgGrid classType={new User()} funcType={fetchUsers}></MyAgGrid>
            <br/><br/><br/>
            <h3>Computers</h3>
            <MyAgGrid classType={new Computer()} funcType={fetchComputers}></MyAgGrid>
            {/*<AxiosExample></AxiosExample>*/}
        </div>
    );
}

export default App;
