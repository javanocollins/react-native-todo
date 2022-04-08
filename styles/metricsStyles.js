import { StyleSheet } from "react-native";

export const metricsStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    numView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        marginHorizontal: 15,
        borderRadius: 10,
        height: 100
    },
    metricNumber: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: '900'
    },
});
