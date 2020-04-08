let goods = {
    'price': 200,
    'title': 'Text title',
    'image': '',
    'producer': 'Prod',
    'country': 'UK',
    'description': 'text description',
    'weight': 2,
    'height': 150,
    'width': 100,
    'depth': 170,
    'unit': '',
    'getCost': function () {
        return this.price * this.unit;
    }

}