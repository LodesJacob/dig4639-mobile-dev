// create class Adder
class Adder {

    constructor( props ) {
        // setup props for this.props.a & this.props.b
        this.props = props;
    }

    sum() {
        // sum this.props.a + this.props.b or return undefined
        var result;
        if ( this.props.a && this.props.b ) {
            // if a & b exist, result = the sum
            result = this.props.a + this.props.b;
        } else {
            // if not, return undefined
            result = undefined;
        }

        // return result
        return result;
    }

    render() {
        // return the <p> or undefined
        var result, sum, sentence;

        // sum = the sum function
        sum = this.sum();

        if ( sum ) {
            // if the sum exists
            sentence = 'The sum of ' + this.props.a + ' and ' + this.props.b + ' is ' + sum;

            // write <p>
            result = '<p>' + sentence + '</p>';

        } else {
            // return undefined if sum doesn't exist
            result = undefined;
        }

        //return the result
        return result;
    }

}

//export the Adder class
module.exports = Adder;