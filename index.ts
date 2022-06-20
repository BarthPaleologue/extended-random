/**
 * Returns an array of three numbers representing a random Vector3 of the given magnitude
 * @param magnitude the magnitude of the vector3
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 * @return an array of three numbers representing the vector
 * @see http://corysimon.github.io/articles/uniformdistn-on-sphere/
 */
export function randVector3(magnitude = 1, rand = Math.random): number[] {
    const theta = 2 * Math.PI * rand();
    const phi = Math.acos(1 - 2 * rand());

    const x = Math.sin(phi) * Math.cos(theta) * magnitude;
    const y = Math.sin(phi) * Math.sin(theta) * magnitude;
    const z = Math.cos(phi) * magnitude;

    return [x, y, z];
}

/**
 * Returns a random value between -1 and 1
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 */
export function centeredRand(rand = Math.random): number {
    return (rand() - 0.5) * 2;
}

/**
 * Returns a random integer between min and max (excluded)
 * @param min the minimum value
 * @param max the maximum value
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 */
export function randRangeInt(min: number, max: number, rand = Math.random): number {
    return Math.floor(rand() * (max - min + 1)) + min;
}

/**
 * Returns a random number between min and max (excluded)
 * @param min the minimum value
 * @param max the maximum value
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 */
export function randRange(min = 0, max = 1, rand = Math.random): number {
    return rand() * (max - min) + min;
}

/**
 * Returns a random number using the normal distribution of the given mean and std using the Box-Mueller transform
 * @param mean The mean value of the distribution
 * @param std The standard deviation to the mean value
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 * @see https://www.baeldung.com/cs/uniform-to-normal-distribution
 */
export function normalRandom(mean: number, std: number, rand = Math.random): number {
    return mean + std * Math.sqrt(-2 * Math.log(rand())) * Math.cos(2 * Math.PI * rand());
}

/**
 * Returns whereas a random number from the uniform distribution between 0 and 1 is lesser than p
 * @param p The probability of the function returning true
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 */
export function uniformRandBool(p: number, rand = Math.random) {
    return rand() < p;
}