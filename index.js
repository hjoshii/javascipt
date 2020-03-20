// object literals pattern

// this approach is benificial when only we have object property not a function

const circle = {
    radius: 1,
    location: {
        x: 10,
        y: 20
    },
    show: function () {
        console.log('show')
    }
}


//factory function 

function createCircle(radius) {
    return {
        radius,
        show: function () {
            console.log("Show")
        }
    }
}

const c = createCircle(5);

c.show()


//constructor function

// always use function name with capital letter

function Circle() {
    this.radius = 10;
    this.show = function () {
        console.log("Show")
    }
}

const cir = new Circle()

cir.show()

