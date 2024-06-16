import { LightningElement } from 'lwc';
export default class BmiCalculators extends LightningElement {
    height = '';
    weight = '';
    bmiNum = '';
    result='';
    flag = false;
    hanldeChange(event) {
        const { name, value } = event.target;
        if (name === 'height') {
            this.height = value;
        }
        if (name === 'weight') {
            this.weight = value;
        }
    } 
    handleClick(event) {
        event.preventDefault();
        let bmi;
        let heights = Number(this.height) / 100;
        bmi = Number(this.weight) / (heights * heights);
        this.bmiNum = Number(bmi.toFixed(2));
        if (this.bmiNum < 18.5) {
            this.result = 'you are very Underweight and possibly mahlnourished.'
        }
        else if (this.bmiNum >= 18.5 && this.bmiNum <= 24.9) {
            this.result = 'you have a healthy weight range for youn and middle-aged adults';

        }
        else if (this.bmiNum >= 25 && this.bmiNum <= 29.9) {
            this.result = 'you are overweight';

        }
        else {
            this.result = 'you are obese';
        }
        this.flag = true;
    }
    handleReClick(event) {
        this.height = '';
        this.weight = '';
        this.bmiNum = '';
        this.result = '';
        this.flag = false;
    }



}