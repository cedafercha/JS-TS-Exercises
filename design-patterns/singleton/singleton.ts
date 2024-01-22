class Singleton {
    private static instance: Singleton;
    public randomNumber: number;
     
    private constructor() {
        this.randomNumber = Math.random();
    }

     public static getInstance(): Singleton {
        if(!this.instance) {
            this.instance = new Singleton();
        }

        return this.instance;
     }
}

const firstSingleton = Singleton.getInstance();
const secondSingleton = Singleton.getInstance();

console.log('First instance: ', firstSingleton);
console.log('Second instance: ', secondSingleton);

firstSingleton.randomNumber = 10;

// the randomNumber changes in both Singleton calls
console.log('First instance: ', firstSingleton);
console.log('Second instance: ', secondSingleton);