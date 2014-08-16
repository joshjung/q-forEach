var assert = require('assert'),
	Q = require('q');

require('../index')(Q);

describe('Q.forEach()', function() {
	describe('should work on array [5,4,3,2,1]', function() {

		it('Should have resolutions equal to original.', function(done) {
			var array = [5, 4, 3, 2, 1];
			Q.forEach(array, function(value) {
				var defer = Q.defer();
				setTimeout(function() {
					defer.resolve(value);
				}, 100);
				return defer.promise;
			}).then(function(resolutions) {
				assert.deepEqual(array, resolutions);
				done();
			});
		});
	});

	describe('should work on object {one: 1, two: 2, three: 3, four: 4, five: 5}', function() {
		it('Should have resolutions equal to original.', function(done) {
			var obj = {
				one: 1,
				two: 2,
				three: 3,
				four: 4,
				five: 5
			};

			Q.forEach(obj, function(value) {
				var defer = Q.defer();
				setTimeout(function() {
					defer.resolve(value);
				}, 100);
				return defer.promise;
			}).then(function(resolutions) {
				assert.deepEqual([1, 2, 3, 4, 5], resolutions);
				done();
			});
		});
	});
});