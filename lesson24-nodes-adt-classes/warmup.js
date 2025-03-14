// create an object representation of a family tree (3 levels deep minimum)

const familyTree = {
    name: "John Doe",
    age: 70,
    children: [
      {
        name: "Michael Doe",
        age: 45,
        children: [
          {
            name: "Emma Doe",
            age: 20,
            children: []
          },
          {
            name: "Liam Doe",
            age: 18,
            children: []
          }
        ]
      },
      {
        name: "Sarah Doe",
        age: 42,
        children: [
          {
            name: "Olivia Doe",
            age: 16,
            children: []
          }
        ]
      }
    ]
  };
  
  console.log(familyTree);
  