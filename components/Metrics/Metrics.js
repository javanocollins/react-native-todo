import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
} from "react-native";

import { metricsStyles } from "../../styles/metricsStyles";

const Metrics = ({ goals }) => {
    let incomplete = goals.todos.filter(goal => goal.completed === false)
    return (
        <View style={metricsStyles.container}>
            <View style={metricsStyles.numView}>
                <Text style={metricsStyles.metricNumber}>
                    {goals.todos.length}
                </Text>
                <Text>Total Goals</Text>
            </View>
            <View style={metricsStyles.numView}>
                <Text style={metricsStyles.metricNumber}>
                    {incomplete.length}
                </Text>
                <Text>Incomplete</Text>
            </View>
        </View>
    );
};

export default Metrics;
