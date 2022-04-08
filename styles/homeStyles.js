import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: "900",
        color: "white",
    },
    appContainer: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 25,
        backgroundColor: "#111344",
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        width: "80%",
        padding: 12,
        color: "black",
        backgroundColor: "white",
        borderRadius: 6,
        marginRight: 15,
    },
    addBtn: {
        borderRadius: 6,
        backgroundColor: "#FFB60A",
        // borderColor: 'white',
        // borderWidth: 5,
        color: "white",
        padding: 12,
    },
});
