const PermissionChecker = require('./problem');

// Before you implement this class, create a test case for the following scenario:

describe("PermissionChecker", () => {
    // A teenager with a GPA of 3.5 wants to attend a concert that starts at 8 PM and lasts for 3 hours. The teenager is not grounded. The system should return true, with a message explaining why permission was granted.
    test("Teenager with GPA 3.5 attending a concert", () => {
      const teenager = {
        grounded: false,
        gpa: 3.5
      };
  
      const event = {
        time: 8, 
        duration: 3,
        type: 'concert'
      };
  
      const permissionChecker = new PermissionChecker();

      const result = permissionChecker.canGoOut(teenager, event);
      expect(result).toBe(true);
    });
  
    // A teenager with a GPA of 2.0 wants to attend a party that starts at 9 PM and lasts for 4 hours. The teenager is not grounded. The system should return false, with a message explaining why permission was denied.
    test("Teenager with GPA 2.0 attending a party", () => {
      const teenager = {
        grounded: false,
        gpa: 2.0
      };
  
      const event = {
        time: 9, 
        duration: 4, 
        type: 'party'
      };
  
      const permissionChecker = new PermissionChecker();

      const result = permissionChecker.canGoOut(teenager, event);
      expect(result).toBe(false);
    });
  
    // A teenager with a GPA of 2.8 wants to attend a study group that starts at 7 PM and lasts for 2 hours. The teenager is not grounded. The system should return true, with a message explaining why permission was granted.


    test("Teenager with GPA 2.8 attending a study group", () => {
      const teenager = {
        grounded: false,
        gpa: 2.8
      };
  
      const event = {
        time: 7, 
        duration: 2,
        type: 'study group'
      };
  
      const permissionChecker = new PermissionChecker();

      const result = permissionChecker.canGoOut(teenager, event);
      expect(result).toBe(true);
    });
  });
  