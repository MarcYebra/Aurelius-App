User.destroy_all

User.create!(
  first_name: "Marc",
  last_name: "Yebra",
  email: "marcyebra4@gmail.com",
  password: "password",
  password_confirmation: 'password'
)

puts "User seeded: Marc Yebra (marcyebra4@gmail.com)"