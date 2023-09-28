const Projects = require('../models/Projects')

module.exports = {
    getProjects: async (req,res)=>{
        try{
            //grabbing projects
            const projects = await Projects.find()
            res.render('index.ejs', {projects: projects})
        }catch(err){
            console.log(err)
        }
    }
}
