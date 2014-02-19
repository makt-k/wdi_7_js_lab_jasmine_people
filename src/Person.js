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
  this.full_name = (this.first_name + ' ' + this.last_name);
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
