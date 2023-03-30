//your JS code here. If required.
// Create the student object with a name property
const student = {
  name: "John Doe"
};

// Add getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
  // Return an array of all the keys in the object
  return Object.keys(this);
};

// Call getKeys() on the student object
console.log(student.getKeys()); // Output: ["name"]
