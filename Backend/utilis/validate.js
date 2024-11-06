export const validate = (req) => {
  const { email, firstName } = req.body;
  if (!email ) {
    throw new Error("Enter the required fields");
  }
};
