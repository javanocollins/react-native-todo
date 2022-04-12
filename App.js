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
    const [placeholderText, setPlaceholderText] = useState({
        text: "Enter a goal...",
        showError: false,
    });

    function goalInputHandler(text) {
        setGoalInput(text);
    }

    function addGoalHandler() {
        if (goalInput.length < 1) {
            setPlaceholderText({ 
                text: "Enter a valid goal", 
                showError: true 
            });

            setTimeout(() => {
                setPlaceholderText({
                    text: "Enter a goal...",
                    showError: false,
                });
            }, 3000);

            return;
        }

        setGoals({
            todos: [
                ...goals.todos,
                {
                    goal: goalInput,
                    completed: false,
                    id: Math.floor(Math.random() * 500000000000),
                },
            ],
        });
        setGoalInput("");
    }

    function deleteGoalHandler(id) {
        let newGoals = goals.todos.filter((goal, idx) => idx !== id);
        setGoals({todos: newGoals});
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
                    placeholder={placeholderText.text}
                    placeholderTextColor={
                        placeholderText.showError
                            ? "rgba(255, 0, 0, 0.75)"
                            : "#bbb"
                    }
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
