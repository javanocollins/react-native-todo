import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    FlatList,
    Pressable,
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
            goalInputHandler(goal.goal);
            console.log(goal.goal);
        }
    }

    return (
        <View style={todosStyles.goalsContainer}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={goals.todos}
                renderItem={(itemData) => {
                    console.log(itemData);
                    return (
                        <View style={todosStyles.goalItem}>
                            <Pressable
                                onPress={() =>
                                    deleteGoalHandler(itemData.index)
                                }
                                style={todosStyles.goalTextView}
                            >
                                    <TextInput
                                        style={
                                            itemData.item.completed
                                                ? todosStyles.goalTextCompleted
                                                : todosStyles.goalText
                                        }
                                        onFocus={() => setIsEditing(true)}
                                        value={itemData.item.goal}
                                        onChange={() =>
                                            editGoalHandler(itemData.index)
                                        }
                                    />
                            </Pressable>

                            <View style={todosStyles.deleteBtnView}>
                                <Text
                                    onPress={() =>
                                        completeGoalHandler(itemData.index)
                                    }
                                    style={{ fontSize: 25 }}
                                >
                                    {itemData.item.completed ? "👍" : "👎"}
                                </Text>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={(item, idx) => {
                    return item.id;
                }}
            />
        </View>
    );
};

export default Todos;
