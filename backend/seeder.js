import 'dotenv/config';
import users from './data/users.js';
import characters from './data/characters.js';
import User from './models/userModel.js';
import Character from './models/characterModel.js';
import connectDB from './config/db.js';

connectDB();

const importData = async () => {
  try {
    await Character.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleCharacters = characters.map((character) => {
      return { ...character, user: adminUser };
    });

    await Character.insertMany(sampleCharacters);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Character.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}