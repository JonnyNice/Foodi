require 'pry'

puts "🌱 Seeding spices..."

# Seed your database here

User.destroy_all
Recipe.destroy_all
Comment.destroy_all

cr1 = User.create(username: "keith", email: 'good ass cook', password: 'secrettunnel')
cr2 = User.create(username: "john", email: 'chef for 20 years', password: 'secretstreet')
cr3 = User.create(username: "jacob", email: 'hates cooking', password: 'jingleheimer')
cr4 = User.create(username: "morgan", email: 'Oprahs personal chef', password: 'asdasd')
cr5 = User.create(username: "ryan", email: 'big time griller', password: 'fart')
r1 = Recipe.create(name: "Mac&Cheese", ingredients: 'mac, cheese', instructions: "add mac add cheese cook", cooktime: 3, spicy: false, vegan: true, contains_thc: true, user: cr1)
r2 = Recipe.create(name: "Wings", ingredients: 'chicken, sauce', instructions: "marinate then cook", cooktime: 99, spicy: true, vegan: true, contains_thc: false, user: cr5)
r3 = Recipe.create(name: "Salad", ingredients: 'lettuce, dressing, croutons', instructions: "toss", cooktime: 44, spicy: false, vegan: true, contains_thc: true, user: cr4)
r4 = Recipe.create(name: "HotDog", ingredients: 'pig, pig intestine', instructions: "boil or grill", cooktime: 345, spicy: true, vegan: true, contains_thc: false, user: cr2)
r5 = Recipe.create(name: "pb&j", ingredients: 'pb, j', instructions: "make it", cooktime: 2, spicy: false, vegan: true, contains_thc: true, user: cr3)
r6 = Recipe.create(name: "burger", ingredients: 'beef, buns', instructions: "grill", cooktime: 7, spicy: false, vegan: true, contains_thc: false, user: cr1)
c1 = Comment.create(comment: "loved it, amazing", rating: 5, user: cr3, recipe: r1)
c2 = Comment.create(comment: "gross", rating: 2, user: cr2, recipe: r4)
c3 = Comment.create(comment: "wow so good", rating: 4, user: cr1, recipe: r3)
c4 = Comment.create(comment: "faded asf", rating: 3, user: cr5, recipe: r2)
c5 = Comment.create(comment: "my family was all food poisoned", rating: 1, user: cr4, recipe: r5)
c6 = Comment.create(comment: "killed my uncle, 10/10", rating: 5, user: cr1, recipe: r4)
c7 = Comment.create(comment: "tasted like feet, loved it", rating: 5, user: cr3, recipe: r6)

binding.pry

puts "✅ Done seeding!"
