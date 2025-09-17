import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // instead of my-limt-key we can have userID if we are tracking user authentication in our app.
    // so for one user, rateLimiting is enforced.
    const { success } = await rateLimit.limit("my-limit-key");
    if (!success) {
      return res
        .status(429)
        .json({ message: "too many requests, please try again later!" });
    }
    next();
  } catch (error) {
    console.log("rate limit error: ", error);
    next(error);
  }
};

export default rateLimiter;
