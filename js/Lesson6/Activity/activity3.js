//3. create cylinder obj
// Volume of a cylinder : V=3.14*r**2*h  
var geometry = {
    // property or attribute
    radius: 5,
    height: 10,
    // Method
    getVolume: function () {
        let volume = 3.14 * this.radius ** 2 * this.height;
        return volume;
    }
}; 
console.log(geometry.getVolume());
