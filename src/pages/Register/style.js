export default {
  container: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
  },

  iosContainer: {
  	flex: 1,
  	backgroundColor: "red",
  	paddingTop: 35,
  	paddingBottom: 10,
  },

  header: {
  	container: {
      flex: -1,
      backgroundColor: "red",
      paddingHorizontal: 30,
      paddingVertical: 20,
      flexDirection: "row",
    },

    backButton: {
    	container: {
        width: 20,
      },

      content: {
        color: "white",
        fontWeight: "bold",
      },
    },

    title: {
    	main: {
        color: "white",
        fontSize: 16,
      },

      bold: {
        fontWeight: "bold",
      },
    },
  },

  main: {
  	container: {
      flex: 1,
      paddingHorizontal: 30,
      backgroundColor: "white",
    },

    form: {
    	groupContainer: {
        flex: -1,
        paddingTop: 50,
        paddingBottom: 30,
        justifyContent: "center",
      },

      input: {
        flex: -1,
        borderColor: "red",
        borderWidth: 2,
        height: 50,
        textAlign: "center",
        marginBottom: 25,
      },
    },

    toc: {
    	container: {
        alignItems: "center",
        justifyContent: "center",
      },

      blue: {
        color: "blue",
        fontWeight: "bold",
      },
    },
  },

  footer: {
  	container: {
      flex: -1,
      backgroundColor: "red",
      paddingHorizontal: 30,
      paddingVertical: 20,
      flexDirection: "row",
      justifyContent: "center",
    },

    text: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      "textAlign": "center",
    },
  },
};
