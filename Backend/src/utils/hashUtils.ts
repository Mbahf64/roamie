import { createHmac } from "crypto";
import { hash, compare, genSalt } from "bcryptjs";

export default class HashUtils {
  static hashString = async (
    value: string,
    saltRounds: number = 12
  ): Promise<string> => {
    // Generate the salt using bcryptjs with specified salt rounds (default to 12)
    const salt = await genSalt(saltRounds);
    // Generate a hashed value using bcryptjs with the generated salt
    const result = await hash(value, salt);
    return result;
  };

  static validateHash = async (
    value: string,
    hashedValue: string
  ): Promise<boolean> => {
    // Compare a plain value with the hashed value using bcryptjs
    const result = await compare(value, hashedValue);
    return result;
  };

  static processHmac = (value: string, key: string): string => {
    // Create an HMAC (Hash-based Message Authentication Code) using sha256
    const result = createHmac("sha256", key).update(value).digest("hex");
    return result;
  };
}
