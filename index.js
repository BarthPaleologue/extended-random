"use strict";
exports.__esModule = true;
exports.uniformRandBool = exports.normalRandom = exports.randRange = exports.randRangeInt = exports.centeredRand = exports.randVector3 = void 0;
/**
 * Returns an array of three numbers representing a random Vector3 of the given magnitude
 * @param magnitude the magnitude of the vector3
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 * @return an array of three numbers representing the vector
 * @see http://corysimon.github.io/articles/uniformdistn-on-sphere/
 */
function randVector3(magnitude, rand) {
    if (magnitude === void 0) { magnitude = 1; }
    if (rand === void 0) { rand = Math.random; }
    var theta = 2 * Math.PI * rand();
    var phi = Math.acos(1 - 2 * rand());
    var x = Math.sin(phi) * Math.cos(theta) * magnitude;
    var y = Math.sin(phi) * Math.sin(theta) * magnitude;
    var z = Math.cos(phi) * magnitude;
    return [x, y, z];
}
exports.randVector3 = randVector3;
/**
 * Returns a random value between -1 and 1
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 */
function centeredRand(rand) {
    if (rand === void 0) { rand = Math.random; }
    return (rand() - 0.5) * 2;
}
exports.centeredRand = centeredRand;
/**
 * Returns a random integer between min and max (excluded)
 * @param min the minimum value
 * @param max the maximum value
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 */
function randRangeInt(min, max, rand) {
    if (rand === void 0) { rand = Math.random; }
    return Math.floor(rand() * (max - min + 1)) + min;
}
exports.randRangeInt = randRangeInt;
/**
 * Returns a random number between min and max (excluded)
 * @param min the minimum value
 * @param max the maximum value
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 */
function randRange(min, max, rand) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    if (rand === void 0) { rand = Math.random; }
    return rand() * (max - min) + min;
}
exports.randRange = randRange;
/**
 * Returns a random number using the normal distribution of the given mean and std using the Box-Mueller transform
 * @param mean The mean value of the distribution
 * @param std The standard deviation to the mean value
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 * @see https://www.baeldung.com/cs/uniform-to-normal-distribution
 */
function normalRandom(mean, std, rand) {
    if (rand === void 0) { rand = Math.random; }
    return mean + std * Math.sqrt(-2 * Math.log(rand())) * Math.cos(2 * Math.PI * rand());
}
exports.normalRandom = normalRandom;
/**
 * Returns whereas a random number from the uniform distribution between 0 and 1 is lesser than p
 * @param p The probability of the function returning true
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 */
function uniformRandBool(p, rand) {
    if (rand === void 0) { rand = Math.random; }
    return rand() < p;
}
exports.uniformRandBool = uniformRandBool;
