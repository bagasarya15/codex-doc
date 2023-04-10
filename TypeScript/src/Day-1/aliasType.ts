{
    type alphanumeric = string | number | boolean;
    let input: alphanumeric;
    input = 100;
    input = 'Hi';

    function addUnion(a: alphanumeric, b:alphanumeric)
    {
        if(typeof a === 'number' && typeof b === 'number')
        {
            return a + b;
        }
        if(typeof a === 'string' && typeof b === 'string')
        {
            return a + b;
        }
    }
    console.log(addUnion);
}