function Person(first_name, last_name, args){
  args = args || {};
  this.first_name = first_name;
  this.last_name = last_name;
  this.age = args.age || Math.floor(Math.random() * (45 - 25 + 1) + 25);
  this.weight = args.weight || Math.floor(Math.random() * (100 - 60 + 1) + 60);
  this.height = args.height || Math.floor(Math.random() * (200 - 150 + 1) + 150);
  this.friends = args.friends || [];
};


Person.prototype.fullName = function() {
  return this.full_name = (this.first_name + ' ' + this.last_name);
};

Person.prototype.toStone = function() {
  stones = this.weight * 0.15747;
  this.weight_in_stones = stones.toFixed(3);
};

Person.prototype.addFriend = function(person) {
  this.friends.push(person);
};

Person.prototype.deleteFriend = function(person) {
  index = this.friends.indexOf(person);
  this.friends.splice(index, 1);
};

Person.prototype.greetPeople = function(options) {
  options = options || [];
  greeting = options.greeting || "Hi";
  people = options.people || this.friends;

  if((people.length === 0) && (this.friends.length === 0)) {
    return 'Error- no friends';
  } else {
    var result = [];
    for(var i = 0; i < people.length; i++) {
      result.push(greeting + ' ' + people[i].fullName());
    };
    return result;
  }
};
