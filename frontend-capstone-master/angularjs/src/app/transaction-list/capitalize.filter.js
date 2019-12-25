export default () => function (input) {
    return input ? input[0].toUpperCase() + input.substring(1) : '';
};
