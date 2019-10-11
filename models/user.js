
module.exports = (sequelize, type) => {

    return sequelize.define('users', {

        user_id: {

          type: type.INTEGER,

          primaryKey: true,

          autoIncrement: true

        },

        username: {

            type: type.STRING,

            defaultValue: null

        },

        useremail: {

            type: type.STRING,

            defaultValue: null

        },

        userdob:{

            type: type.STRING,

            defaultValue: null

        },

        upassword:{

            type: type.STRING,

            dafaultValue: null

        }

    })

}


/*module.exports=(queryInterface,sequelize) =>{
    return queryInterface.createTable('band',{
        id:{
            allownull:false,
            autoIncreament: true,
            primaryKey:true,
            type: Sequelize.INTEGER
        },
        bandname:{
            allownull:false,
            type: Sequelize.STRING
        },
        noOfMembers:{
            allownull:false,
            type: Sequelize.INTEGER
        },
        description:{
            allownull:false,
            type: Sequelize.STRING
        }
    });

band.belongsTo(models.users){
    foreignKey: "userId"
}
var user = sequelize.define();*/