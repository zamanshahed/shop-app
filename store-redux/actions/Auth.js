export const SIGNUP = "SIGNUP";

export const signup = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXVX5YT-7FFITZmRzeMzkwigKuAm5GR9c",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("auth action response went wrong !");
      }

      const resData = await response.json();
      console.log(resData);
    } catch (error) {
      console.log(error.message);
    }

    dispatch({ type: SIGNUP });
  };
};
