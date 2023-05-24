const generatePassword = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    // Initial values
    const initialValues = [10, 20, 30, 40];
  
    // Combine the current time with initial values
    const combinedValues = initialValues.map(value => {
      return (value + hours + minutes).toString();
    });
  
    // Create the password by concatenating the values
    const password = combinedValues.join("");
  
    return password;
  };
  
  // Example usage
  const password = generatePassword();
  console.log(password);
  