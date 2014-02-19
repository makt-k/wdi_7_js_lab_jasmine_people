describe('Person', function(){
  var person;

  beforeEach(function() {
    person2 = new Person('John', 'Dover', args = {age: 37});
    person3 = new Person('Mark', 'Dover', args = {weight: 50, height: 178});
    person = new Person('Bill', 'Dover', args = {friends: [person2, person3]});
  });

  // it('should require a first and last name', function() {
  //   // expect(person.first_name).not.toBeDefined();
  //   // expect(person.last_name).not.toBeDefined();
  //   expect(person).
  // });

  it('should have optional age, default to a random value between 25 and 45', function() {
    expect(person.age).toBeLessThan(46);
    expect(person.age).toBeGreaterThan(24);
    expect(person2.age).toBe(37);
  });

  it('should have optional weight, default to a random value between 60 and 100', function() {
    expect(person3.weight).toBe(50);
    expect(person.weight).toBeLessThan(101);
    expect(person.weight).toBeGreaterThan(59);
  });

  it('should have optional height, default to a random value between 150 and 200', function() {
    expect(person3.height).toBe(178);
    expect(person.height).toBeLessThan(201);
    expect(person.height).toBeGreaterThan(149);
  });

  it('should have optional friends array, default to no friends', function () {
    expect(person.friends).toEqual([person2, person3]);
    expect(person2.friends).toEqual([]);
  });

  describe('Getting a persons full name', function() {
    beforeEach(function() {
      person.fullName();
      person2.fullName();
      person3.fullName();
    });

    it('Should return the persons full name', function(){
      expect(person.full_name).toBe('Bill Dover');
      expect(person2.full_name).toBe('John Dover');
      expect(person3.full_name).toBe('Mark Dover');
    });
  });

  describe('Getting converting the weight of a person in stone', function() {
    beforeEach(function () {
      person3.toStone();
    });

    it('Should return the weight in stones', function() {
      expect(person3.weight_in_stones).toBe('7.873');

    });
  });

  describe('Add to a persons friends list', function() {
    beforeEach(function () {
      person3.addFriend(person);
      person.addFriend(person2);
    });

    it('Should add person to person3 friend list', function() {
      expect(person3.friends).toEqual([person]);
      expect(person.friends).toEqual([person2, person3, person2]);
    });
  });


  describe('Delete a persons from friends list', function() {
    beforeEach(function () {
      person.deleteFriend(person2);
    });

    it('Should delete person to person3 friend list', function() {
      expect(person.friends).toEqual([person3]);
    });
  });
});














