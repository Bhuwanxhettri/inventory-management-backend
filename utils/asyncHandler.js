const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.log(error)
    if (error.name === 'SequelizeUniqueConstraintError') {
      // Access the custom error message defined in the model
      const customErrorMessage = error.errors[0].message;
      return res.status(400).json({ error: customErrorMessage });
    }

    return res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = asyncHandler;
