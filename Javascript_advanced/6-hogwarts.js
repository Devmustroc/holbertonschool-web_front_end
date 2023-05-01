const studentHogwarts = function() {
    let privateScore = 0;
    let name = null;
    const changeScoreBy = (points) => {
        privateScore += points;
    };
    return {
        setName: (newName) => {
            name = newName;
        },
        rewardStudent: () => {
            changeScoreBy(1);
        },
        penalizeStudent: () => {
            changeScoreBy(-1);
        },
        getScore: () => {
            return `${name}: ${privateScore}`
        }
    };
};

const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());