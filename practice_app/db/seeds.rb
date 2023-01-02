require 'pry'

puts "🌱 Seeding spices..."

# Seed your database here

Creator.destroy_all
Recipe.destroy_all
Comment.destroy_all

cr1 = Creator.create(name: "keith", bio: 'good ass cook')
cr2 = Creator.create(name: "john", bio: 'chef for 20 years')
cr3 = Creator.create(name: "jacob", bio: 'hates cooking')
cr4 = Creator.create(name: "morgan", bio: 'Oprahs personal chef')
cr5 = Creator.create(name: "ryan", bio: 'big time griller')
r1 = Recipe.create(name: "Mac&Cheese", ingredients: 'mac, cheese', instructions: "add mac add cheese cook", cooktime: 3, spicy: false, vegan: true, contains_thc: true, creator: cr1)
r2 = Recipe.create(name: "Wings", ingredients: 'chicken, sauce', instructions: "marinate then cook", cooktime: 99, spicy: true, vegan: true, contains_thc: false, creator: cr5)
r3 = Recipe.create(name: "Salad", ingredients: 'lettuce, dressing, croutons', instructions: "toss", cooktime: 44, spicy: false, vegan: true, contains_thc: true, creator: cr4)
r4 = Recipe.create(name: "HotDog", ingredients: 'pig, pig intestine', instructions: "boil or grill", cooktime: 345, spicy: true, vegan: true, contains_thc: false, creator: cr2)
r5 = Recipe.create(name: "pb&j", ingredients: 'pb, j', instructions: "make it", cooktime: 2, spicy: false, vegan: true, contains_thc: true, creator: cr3)
r6 = Recipe.create(name: "burger", ingredients: 'beef, buns', instructions: "grill", cooktime: 7, spicy: false, vegan: true, contains_thc: false, creator: cr1)
c1 = Comment.create(comment: "loved it, amazing", rating: 5, creator: cr3, recipe: r1)
c2 = Comment.create(comment: "gross", rating: 2, creator: cr2, recipe: r4)
c3 = Comment.create(comment: "wow so good", rating: 4, creator: cr1, recipe: r3)
c4 = Comment.create(comment: "faded asf", rating: 3, creator: cr5, recipe: r2)
c5 = Comment.create(comment: "my family was all food poisoned", rating: 1, creator: cr4, recipe: r5)
c6 = Comment.create(comment: "killed my uncle, 10/10", rating: 5, creator: cr1, recipe: r4)
c7 = Comment.create(comment: "tasted like feet, loved it", rating: 5, creator: cr3, recipe: r6)


binding.pry

puts "✅ Done seeding!"
