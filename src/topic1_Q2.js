/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
**/

function sortByType(users) {
  const order = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1,
  };
  const sorted = users.sort((a, b) => order[b.profession] - order[a.profession]);
  console.log('sorted', sorted)
  return sorted;
}