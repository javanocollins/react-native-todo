import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
} from "react-native";

import { todosStyles } from "../../styles/todosStyles";

const Todos = ({
    goals,
    deleteGoalHandler,
    completeGoalHandler,
    editGoalHandler,
    goalInputHandler,
}) => {
    const [goalInput, setGoalInput] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    function editGoalHandler(id) {
        let goal = goals.todos.find((item, idx) => id === idx);

        if (isEditing) {
            goalInputHandler(goal.goal)
            console.log(goal.goal)
        }

    }

    return (
        <View style={todosStyles.goalsContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {goals.todos.map((item, idx) => {
                    return (
                        <View key={idx} style={todosStyles.goalItem}>
                            <View
                                style={
                                    item.completed
                                        ? todosStyles.goalTextViewCompleted
                                        : todosStyles.goalTextView
                                }
                            >
                                <TextInput
                                    style={
                                        item.completed
                                            ? todosStyles.goalTextCompleted
                                            : todosStyles.goalText
                                    }
                                    onFocus={() => setIsEditing(true)}
                                    value={isEditing ? goalInput : item.goal}
                                    onChange={() => editGoalHandler(idx)}
                                />
                            </View>
                            <View style={todosStyles.deleteBtnView}>
                                {/* <Button
                                        title="X"
                                        color={"white"}
                                        onPress={() => deleteGoalHandler(idx)}
                                    /> */}
                                <Text
                                    onPress={() => completeGoalHandler(idx)}
                                    style={{ fontSize: 25 }}
                                >
                                    {item.completed ? "👍" : "👎"}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default Todos;
