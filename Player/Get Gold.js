hack("Set Gold", "Set's the amount of gold you have currently.", async (hack, player) => { 
    const value = await InputTypes.integer("Please enter the amount of gold you want to get.", 1, 9999999) 
    player.data.gold = value 
    success(`You now have ${value} gold.`)


