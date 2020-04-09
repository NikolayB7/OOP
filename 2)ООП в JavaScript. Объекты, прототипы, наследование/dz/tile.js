let tile = {

    material: '',
    type: '',
    size_x: 20.5,
    size_y: 20,
    outdoor: '',
    color: '',
    cover: '',
    images: ['pic1', 'pic2'],

    __proto__: goods,
    imperialSize() {
        return [+(this.size_x * 25.4).toFixed(2), +(this.size_y * 24.4).toFixed(2)]
    },
    isSquare() {
        console.log('isSquare ');
    }
}

console.log(tile.imperialSize());
console.log(tile.isSquare());
