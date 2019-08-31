let smartphone = {
    id: 2016,
    brand: "Vestel",
    model: "Venus",
    color: "Black",
    isAndroid: true,
    allProperties: function() {
        return "id: " + this.id + ", brand: " + this.brand + ", model: " + this.model + ", color: " + this.color + ", isAndroid: " + this.isAndroid;
    }
};

function allProperties() {
    document.getElementById("properties").innerHTML = smartphone.allProperties();
}