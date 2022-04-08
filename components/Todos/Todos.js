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

const Todos = ({ goals, deleteGoalHandler, completeGoalHandler }) => {
    return (
        <View style={todosStyles.goalsContainer}>
            <ScrollView>
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
                                <Text style={todosStyles.goalText}>
                                    {item.goal}
                                </Text>
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
