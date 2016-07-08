import { BaseClass } from './BaseClass'
// Run npm start
class Polygon extends BaseClass {
    constructor() {
        super();
        let i = 0;

        console.log('number', i);
    }
}
var polygon = new Polygon();

polygon.test("test log from extended class");