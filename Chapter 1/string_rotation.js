/**
 * Assume you have a method isSubString which checks if one word is a substring of another. Given two strings,
 * s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubString.
 * e.g., "waterbottle" is a rotation of "erbottlewat"
 */

/**
 * Solution:
 *  If we saw the example we don't know the rotation point of the string. But we can split s1 = "waterbottle" into
 *  x = "wat" y = "bottle"
 *  s1 = xy and "erbottlewat" will be yx
 *  if s2 is a rotation of s1 that means 
 *  s2 = yx = "erbottlewat"
 * 
 *  We can't directly find the substring in s1 because it was xy and s2 was yx.
 *  But, if you see that
 *  = xyxy (yx is there in this)
 * So, if we concatenate the s1 = s1+s1 the s2 will always be there
 */


function isRotation(s1, s2) {
    if(!s1 || !s2) return false;

    s1 = s1 + s1;

    return s1.includes(s2);
}