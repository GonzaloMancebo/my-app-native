import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E9BD70",
  },
  imagelogin: {
    height: "100%",
    width: "100%",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "80%",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  loginText: {
    backgroundColor: "#000000",
    color: "white",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
  },
  card: {
    padding: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  logo: {
    height: 300,
    width: "100%",
    borderRadius: 200,
  },
  focusedInput: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
  },
  focusedInputPassword: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "#ffffff",
  },
  loadingIndicator: {
    width: 170,
  },
  loginButton: {
    width: 170,
  },
  loadingText:{
    color: "white",
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    margin: 5,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
    borderRadius: 5,
    textAlign: "center"
  }
  },
);
