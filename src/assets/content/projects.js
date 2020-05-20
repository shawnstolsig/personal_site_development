// media imports
import shiftManagrPreview from '../images/shiftManagr.png'
import shiftManagrVideo from '../videos/shiftManagr.mp4'
import eftLootTrainerPreview from '../images/eftLootTrainer.png'
import eftLootTrainerVideo from '../videos/eftLootTrainer.mp4'
import chirpPreview from '../images/chirp.png'
import chirpVideo from '../videos/chirp.mp4'
import portfolioPreview from '../images/portfolio.png'

// data for project cards
const projects = [
	{
		title: "shiftMANAGR",
		imageUrl: shiftManagrPreview,
		videoUrl: shiftManagrVideo,
		caption: "A work force management app that enables supervisors to create a graphical representation of their workspace and assign employees to workstations.",
		description: [
			"The idea behind shiftMANAGR was to create a tool to help a shift leader manage and communicate workstation assignments for their employees. While I specifically designed it as a tool for an Amazon operations leader, shiftMANAGR would create value in any industry where employees are frequently rotated between different roles and/or workstations: hospitals, manufacturing, security, and construction are a few examples.",
			"I created shiftMANAGR as my capstone project while at PDX Code Guild." 
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
			"This app is a mini-game I created for Escape from Tarkov (EFT) computer game. I created a UI similiar to that experienced in-game, where players must visually identify items and choose the most valuable items to loot. Since the value of each item changes dynamically through EFT's in-game flea market, I leveraged a community-created API from Tarkov Market (https://tarkov-market.com/) to pull rouble values for each of the games 2000+ items. I created my own backend/database to store these values as the API is rate-limited.",
		],
		repoUrl: "https://github.com/shawnstolsig/tarkov_loot_simulator",
		demoUrl: null,
		stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Vue.js', 'Vuetify', 'Django', 'Django REST Framework', 'SQLite'],
	},
	{
		title: "Chirp",
		imageUrl: chirpPreview,
		videoUrl: chirpVideo,
		caption: "A Twitter clone I developed while completing the React curriculum at tylermcginnis.com. ",
		description: [
			"This is a basic Twitter clone that I created while learning React, React Hooks, React Router, and Redux. This app uses some starter code from www.tylermcginnis.com to simulate a backend; the UI is designed to provide a smooth user experience with asynchronous data fetching. ",
		],
		repoUrl: "https://github.com/shawnstolsig/tyler_mcginnis_react_course/tree/master/react-redux/chirp",
		demoUrl: null,
		stack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux'],
	},
	{
		title: "Personal Website",
		imageUrl: portfolioPreview,
		videoUrl: null,
		caption: "This website!",
		description: [
			"A personal website for my portfolio and information about myself.  You're already on it!",
		],
		repoUrl: "https://github.com/shawnstolsig/personal_site_development",
		demoUrl: "https://www.shawnstolsig.com",
		stack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Material-UI'],
	},

]

export default projects