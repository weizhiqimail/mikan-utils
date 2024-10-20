/**
 * 手机号正则表达式
 */
export const phoneRegexp = /^1\d{10}$/;

/**
 * 校验输入的字符串是否为有效的手机号
 *
 * @param {any} phone - 待校验的手机号
 * @returns {boolean} - 如果是有效的手机号返回 true，否则返回 false
 *
 * @example
 * const valid = isPhone('13812345678');
 * console.log(valid); // 输出: true
 */
export function isPhone(phone: any): boolean {
  return phoneRegexp.test(String(phone)); // 将输入转换为字符串
}

/**
 * 邮箱正则表达式
 */
export const emailRegexp = /^[0-9a-zA-Z]+@[0-9a-zA-Z\-]+\.[0-9a-zA-Z]+$/;

/**
 * 校验输入的字符串是否为有效的邮箱地址
 *
 * @param {string} email - 待校验的邮箱地址
 * @returns {boolean} - 如果是有效的邮箱地址返回 true，否则返回 false
 *
 * @example
 * const valid = isEmail('test@example.com');
 * console.log(valid); // 输出: true
 */
export function isEmail(email: string): boolean {
  return emailRegexp.test(email);
}

/**
 * 字符串是否为数字的正则表达式
 */
export const stringNumberRegexp = /^\d+$/;

/**
 * 校验输入的字符串是否为有效的数字字符串
 *
 * @param {string} str - 待校验的字符串
 * @returns {boolean} - 如果是有效的数字字符串返回 true，否则返回 false
 *
 * @example
 * const valid = stringNumberRegexp.test('12345');
 * console.log(valid); // 输出: true
 */
export function isStringNumber(str: string | number): boolean {
  return stringNumberRegexp.test(String(str));
}
