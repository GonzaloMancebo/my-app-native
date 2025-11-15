import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000000ff",
  },
  card: {
    padding: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "80%",
  },

  containerImage: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },

  logo: {
    width: 280,
    height: 280,
    resizeMode: "contain",
    borderRadius: 500,
  },

  imagelogin: {
    height: "60%",
    width: "60%",
  },

  input: {
    width: "100%",
    paddingVertical: 12,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.85)",
    fontSize: 16,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
  },

  loginButton: {
    width: "100%",
    height: "100%",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },

  loginText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
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
    width: 150,
    backgroundColor: "blue",
    height:40,
    textAlign: "center",
    alignContent: "center",
    justifyContent:"center",
    marginTop:20,
    borderRadius: 50
  },
  loadingText: {
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    gap: 10,
  },

  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255,255,255,0.85)",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    width: "100%"
  },
});
