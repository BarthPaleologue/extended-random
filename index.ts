const defaultRand = (index?: number) => Math.random();

/**
 * Returns an array of three numbers representing a random Vector3 of the given magnitude
 * @param magnitude the magnitude of the vector3
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 * @param step? the step to use for the rng if using noise based rng
 * @return an array of three numbers representing the vector
 * @see http://corysimon.github.io/articles/uniformdistn-on-sphere/
 */
export function randVector3(magnitude = 1, rand = defaultRand, step?: number): number[] {
    const theta = 2 * Math.PI * rand(step);
    const phi = Math.acos(1 - 2 * rand(step));

    const x = Math.sin(phi) * Math.cos(theta) * magnitude;
    const y = Math.sin(phi) * Math.sin(theta) * magnitude;
    const z = Math.cos(phi) * magnitude;

    return [x, y, z];
}

/**
 * Returns a random value between -1 and 1
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 * @param step the step to use for the rng if using noise based rng
 */
export function centeredRand(rand = defaultRand, step?: number): number {
    return (rand(step) - 0.5) * 2;
}

/**
 * Returns a random integer between min and max (excluded)
 * @param min the minimum value
 * @param max the maximum value
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 * @param step the step to use for the rng if using noise based rng
 */
export function randRangeInt(min: number, max: number, rand = defaultRand, step?: number): number {
    return Math.floor(rand(step) * (max - min + 1)) + min;
}

/**
 * Returns a random number between min and max (excluded)
 * @param min the minimum value
 * @param max the maximum value
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 * @param step the step to use for the rng if using noise based rng
 */
export function randRange(min = 0, max = 1, rand = defaultRand, step?: number): number {
    return rand(step) * (max - min) + min;
}

/**
 * Returns a random number using the normal distribution of the given mean and std using the Box-Mueller transform
 * @param mean The mean value of the distribution
 * @param std The standard deviation to the mean value
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 * @param step the step to use for the rng if using noise based rng (will also use step + 1 !!!)
 * @see https://www.baeldung.com/cs/uniform-to-normal-distribution
 */
export function normalRandom(mean: number, std: number, rand = defaultRand, step?: number): number {
    return mean + std * Math.sqrt(-2 * Math.log(rand(step))) * Math.cos(2 * Math.PI * rand(step ? step + 1 : 0));
}

/**
 * Returns whereas a random number from the uniform distribution between 0 and 1 is lesser than p
 * @param p The probability of the function returning true
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 * @param step the step to use for the rng if using noise based rng
 */
export function uniformRandBool(p: number, rand = defaultRand, step?: number): boolean {
    return rand(step) < p;
}

/**
 * Returns a random hexadecimal string of a color (without a # at the start)
 * @param rand the rng (should return numbers between 0 and 1) defaults to Math.random
 * @param step the step to use for the rng if using noise based rng
 * @returns a random hexadecimal string of a color without a # at the start
 */
export function randomHexColorString(rand = defaultRand, step?: number): string {
    return Math.floor(rand(step) * 16777215).toString(16);
}