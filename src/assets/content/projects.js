import shiftManagrPreview from '../images/shiftManagr.png'
import shiftManagrVideo from '../videos/shiftManagr.mp4'

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
		stackDesc: "This is a full-stack app using a Vue.js frontend and Django (with Django REST Framework) backend. I leveraged the Vuetify component library for UI and authentication is handled using JSON web tokens. For demo/development purposes, I used a SQLite database."
	},

]

export default projects