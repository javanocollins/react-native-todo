import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import Metrics from "./components/Metrics/Metrics";
import Todos from "./components/Todos/Todos";

import { homeStyles } from "./styles/homeStyles";

const initialGoals = [
    // {
    //     goal: "Machine Learning",
    //     completed: false,
    // },
    // {
    //     goal: "Deep Learning",
    //     completed: false,
    // },
];

export default function App() {
    const [goals, setGoals] = useState({ todos: initialGoals });
    const [goalInput, setGoalInput] = useState("");
    const [completeGoal, setCompleteGoal] = useState({});

    function goalInputHandler(text) {
        setGoalInput(text);
    }

    function addGoalHandler() {
        setGoals({
            todos: [...goals.todos, { goal: goalInput, completed: false }],
        });
        setGoalInput("");
    }
    
    function deleteGoalHandler(id) {
        let newGoals = goals.todos.filter((goal, idx) => idx !== id);
        setGoals(newGoals);
    }

    function completeGoalHandler(id) {
        let update = goals.todos.map((item, idx) => {
            if (idx === id) {
                return { ...item, completed: !item.completed };
            } else {
                return item;
            }
        });

        setGoals({ todos: update });
    }

    return (
        <View style={homeStyles.appContainer}>
            <StatusBar
                animated={true}
                barStyle={"light-content"}
                showHideTransition={"slide"}
            />
            <Text style={homeStyles.title}>GOALSETTER</Text>
            <Metrics goals={goals} />
            <View style={homeStyles.inputContainer}>
                <TextInput
                    style={homeStyles.textInput}
                    onChangeText={goalInputHandler}
                    value={goalInput}
                />
                <TouchableOpacity
                    title="Add Goal"
                    onPress={addGoalHandler}
                    style={homeStyles.addBtn}
                >
                    <Text style={{ color: "black" }}>Add Me</Text>
                </TouchableOpacity>
            </View>

            <Todos
                goals={goals}
                deleteGoalHandler={deleteGoalHandler}
                completeGoalHandler={completeGoalHandler}
                goalInputHandler={goalInputHandler}
            />
        </View>
    );
}
