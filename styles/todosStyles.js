import { StyleSheet } from "react-native";

export const todosStyles = StyleSheet.create({
    goalsContainer: {
        flex: 4,
        paddingBottom: 50
    },
    goalItem: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    goalTextView: {
        borderRadius: 6,
        paddingVertical: 15,
        padding: 10,
        marginRight: 10,
        backgroundColor: "#D84A05",
        flex: 3,
    },
    goalTextViewCompleted: {
        borderRadius: 6,
        paddingVertical: 15,
        padding: 10,
        marginRight: 10,
        backgroundColor: "#FCAB5F",
        flex: 3,
    },
    goalText: {
        color: "white",
        fontWeight: '600',
        fontSize: 16,
    },
    goalTextCompleted: {
        color: "white",
        fontWeight: '300',
        fontSize: 16,
    },
    // deleteBtnView: {
    //     borderRadius: 6,
    //     padding: 2,
    //     fontSize: 18,
    //     backgroundColor: "red",
    // },
});
