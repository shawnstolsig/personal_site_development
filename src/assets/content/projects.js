import shiftManagrPreview from '../images/shiftManagr.png'
import shiftManagrVideo from '../videos/shiftManagr.mp4'
import eftLootTrainerPreview from '../images/eftLootTrainer.png'
import eftLootTrainerVideo from '../videos/eftLootTrainer.mp4'

// data for project cards
const projects = [
	{
		title: "shiftMANAGR",
		imageUrl: shiftManagrPreview,
		videoUrl: shiftManagrVideo,
		caption: "A work force management app that enables supervisors to create a graphical representation of their workspace and assign employees to workstations.",
		description: [
			"The idea behind shiftMANAGR was to create a tool to help a shift leader manage and communicate workstation assignments for their employees. While I specifically designed it as something that would be useful to an Amazon operations leader, shiftMANAGR would be useful in any industry where employees are frequently rotated between different roles and/or workstations: hospitals, security, manufacturing, and construction to name a few.",
			"I created shiftMANAGR as my final capstone project while at PDX Code Guild." 
		],
		repoUrl: "https://github.com/shawnstolsig/pdx_code_guild_capstone",
		demoUrl: null,
		stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Vue.js', 'Vuex', 'Vuetify', 'Django', 'Django REST Framework', 'JSON Web Token Authentication', 'SQLite'],
	},
	{
		title: "EFT: Loot Trainer",
		imageUrl: eftLootTrainerPreview,
		videoUrl: eftLootTrainerVideo,
		caption: "A mini-game to train looting proficiency in Escape from Tarkov (a computer game).",
		description: [
			"This app is a simple mini-game I created for Escape from Tarkov (EFT) computer game. The idea was to create a UI similiar to what players experience in the game, where they must visually identify items and choose the most valuable items to loot. Since the value of each item changes dynamically through EFT's in-game flea market, I leveraged a community-created API from Tarkov Market (https://tarkov-market.com/) to pull Rouble values for each of the games 2000+ items. I created my own backend/database to store these values as the API is rate-limited.",
		],
		repoUrl: "https://github.com/shawnstolsig/tarkov_loot_simulator",
		demoUrl: null,
		stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Vue.js', 'Vuetify', 'Django', 'Django REST Framework', 'SQLite'],
	},

]

export default projects