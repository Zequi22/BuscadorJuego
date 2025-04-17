const gameData = [
  { name: "ELDEN RING", genre: "ACCIÓN", developer: "FROMSOFTWARE", rating: 96, year: 2022, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "PC"], image: "./recursos/Elden_ring.jpg" },
  { name: "BLOODBORNE", genre: "ACCIÓN", developer: "FROMSOFTWARE", rating: 92, year: 2015, console: ["PS4"], image: "./recursos/Bloodborne.jpeg" },
  { name: "SEKIRO: SHADOWS DIE TWICE", genre: "AVENTURA", developer: "FROMSOFTWARE", rating: 90, year: 2019, console: ["PS4", "XBOX ONE", "PC"], image: "./recursos/Sekiro.jpg" },
  { name: "DARK SOULS", genre: "ACCIÓN", developer: "PLAYSTATION STUDIOS", rating: 89, year: 2011, console: ["PS3", "XBOX 360", "PC"], image: "./recursos/Dark_souls.webp" },
  { name: "THE LAST OF US PART 1", genre: "AVENTURA", developer: "PLAYSTATION STUDIOS", rating: 95, year: 2022, console: ["PS5", "PS4", "PC"], image: "./recursos/TLOU_part_1.webp" },
  { name: "THE LAST OF US PART 2", genre: "AVENTURA", developer: "PLAYSTATION STUDIOS", rating: 93, year: 2020, console: ["PS4"], image: "./recursos/TLOU_part_2.webp" },
  { name: "GRAND THEFT AUTO III", genre: "ACCIÓN", developer: "ROCKSTAR GAMES", rating: 97, year: 2001, console: ["PS2", "XBOX", "PC"], image: "./recursos/GTA3.jpg" },
  { name: "GRAND THEFT AUTO IV", genre: "ACCIÓN", developer: "ROCKSTAR GAMES", rating: 98, year: 2008, console: ["PS3", "XBOX 360", "PC"], image: "./recursos/GTA4.jpg" },
  { name: "GRAND THEFT AUTO V", genre: "ACCIÓN", developer: "ROCKSTAR GAMES", rating: 96, year: 2013, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "PC"], image: "./recursos/GTA5.png" },
  { name: "GOD OF WAR (2018)", genre: "AVENTURA", developer: "PLAYSTATION STUDIOS", rating: 94, year: 2018, console: ["PS4", "PC"], image: "./recursos/GOW4.gif" },
  { name: "GOD OF WAR: RAGNAROK", genre: "AVENTURA", developer: "PLAYSTATION STUDIOS", rating: 94, year: 2022, console: ["PS5", "PS4", "PC"], image: "./recursos/GOWRagnarok.jpg" },
  { name: "HORIZON ZERO DAWN", genre: "ACCIÓN", developer: "PLAYSTATION STUDIOS", rating: 89, year: 2017, console: ["PS4", "PC"], image: "./recursos/Horizonzerodawn.webp" },
  { name: "HORIZON FORBIDDEN WEST", genre: "ACCIÓN", developer: "PLAYSTATION STUDIOS", rating: 88, year: 2022, console: ["PS5", "PS4", "PC"], image: "./recursos/Horizonforbiddenwest.webp" },
  { name: "SPIDER-MAN (PS4/PS5)", genre: "ACCIÓN", developer: "PLAYSTATION STUDIOS", rating: 87, year: 2018, console: ["PS5", "PS4", "PC"], image: "./recursos/Spiderman.jpg" },
  { name: "SPIDER-MAN 2 (PS5)", genre: "ACCIÓN", developer: "PLAYSTATION STUDIOS", rating: 91, year: 2023, console: ["PS5", "PC"], image: "./recursos/Spiderman2.webp" },
  { name: "SUPER MARIO ODYSSEY", genre: "AVENTURA", developer: "NINTENDO", rating: 97, year: 2017, console: ["SWITCH"], image: "./recursos/SuperMarioOddisey.jpg" },
  { name: "THE LEGEND OF ZELDA: BREATH OF THE WILD", genre: "AVENTURA", developer: "NINTENDO", rating: 97, year: 2017, console: ["NINTENDO SWITCH"], image: "./recursos/ZeldaBOTW.jpg" },
  { name: "THE LEGEND OF ZELDA: TEARS OF THE KINGDOM", genre: "AVENTURA", developer: "NINTENDO", rating: 96, year: 2023, console: ["NINTENDO SWITCH"], image: "./recursos/ZeldaTOTK.jpg" },
  { name: "SONIC FRONTIERS", genre: "AVENTURA", developer: "SEGA", rating: 75, year: 2022, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "NINTENDO SWITCH", "PC"], image: "./recursos/SonicFrontiers.jfif" },
  { name: "PERSONA 3 Reload", genre: "RPG", developer: "SEGA", rating: 88, year: 2024, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "SWITCH"], image: "./recursos/Persona3Reload.jpg" },
  { name: "PERSONA 4 Golden", genre: "RPG", developer: "SEGA", rating: 93, year: 2012, console: ["PS2", "PSVITA", "PC", "SWITCH"], image: "./recursos/Persona4Golden.jpg" },
  { name: "PERSONA 5 Royal", genre: "RPG", developer: "SEGA", rating: 95, year: 2021, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "SWITCH"], image: "./recursos/Persona5Royal.jpg" },
  { name: "GRAN TURISMO 7", genre: "DEPORTIVO", developer: "PLAYSTATION STUDIOS", rating: 87, year: 2022, console: ["PS5", "PS4"], image: "./recursos/GranTurismo7.webp" },
  { name: "FORZA HORIZON 3", genre: "DEPORTIVO", developer: "MICROSOFT STUDIOS", rating: 91, year: 2016, console: ["XBOX ONE", "PC"], image: "./recursos/ForzaHorizon3.webp" },
  { name: "FORZA HORIZON 4", genre: "DEPORTIVO", developer: "MICROSOFT STUDIOS", rating: 92, year: 2018, console: ["XBOX ONE", "PC"], image: "./recursos/ForzaHorizon4.jpg" },
  { name: "FORZA HORIZON 5", genre: "DEPORTIVO", developer: "MICROSOFT STUDIOS", rating: 92, year: 2021, console: ["XBOX SERIES X/S", "XBOX ONE", "PC"], image: "./recursos/ForzaHorizon5.jpg" },
  { name: "HALO: THE MASTER CHIEF COLLECTION", genre: "SHOOTER", developer: "MICROSOFT STUDIOS", rating: 85, year: 2014, console: ["XBOX SERIES X/S", "XBOX ONE", "PC"], image: "./recursos/HaloMasterChiefCollection.webp" },
  { name: "HALO INFINITE", genre: "SHOOTER", developer: "MICROSOFT STUDIOS", rating: 87, year: 2021, console: ["XBOX SERIES X/S", "XBOX ONE", "PC"], image: "./recursos/HaloInfinite.webp" },
  { name: "ASSASSIN’S CREED: THE EZIO COLLECTION", genre: "AVENTURA", developer: "UBISOFT", rating: 80, year: 2016, console: ["PS4", "XBOX ONE", "SWITCH"], image: "./recursos/AssasinsCreedEzioCollection.webp" },
  { name: "PRINCE OF PERSIA: THE LOST CROWN", genre: "AVENTURA", developer: "UBISOFT", rating: 86, year: 2024, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "PC", "SWITCH"], image: "./recursos/POPLostCrown.jpg" },
  { name: "WATCH DOGS", genre: "ACCIÓN", developer: "UBISOFT", rating: 77, year: 2014, console: ["PS4", "XBOX ONE", "PC"], image: "./recursos/Watchdogs.webp" },
  { name: "WATCH DOGS 2", genre: "ACCIÓN", developer: "UBISOFT", rating: 81, year: 2016, console: ["PS4", "XBOX ONE", "PC"], image: "./recursos/Watchdogs2.jpg" },
  { name: "FIFA 24", genre: "DEPORTIVO", developer: "EA", rating: 77, year: 2023, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "PC", "SWITCH"], image: "./recursos/FURBO24.jpg" },
  { name: "F1 23", genre: "DEPORTIVO", developer: "EA", rating: 82, year: 2023, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "PC"], image: "./recursos/COSHE23.jpg" },
  { name: "MADDEN NFL 24", genre: "DEPORTIVO", developer: "EA", rating: 70, year: 2023, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "PC"], image: "./recursos/FURBOamericano24.webp" },
  { name: "RED DEAD REDEMPTION", genre: "ACCIÓN", developer: "ROCKSTAR GAMES", rating: 95, year: 2010, console: ["PS3", "XBOX 360"], image: "./recursos/RedDeadRedemption.jpg" },
  { name: "RED DEAD REDEMPTION 2", genre: "ACCIÓN", developer: "ROCKSTAR GAMES", rating: 97, year: 2018, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "PC"], image: "./recursos/RedDeadRedemption2.jpg" },
  { name: "FORSPOKEN", genre: "ACCIÓN", developer: "SQUARE ENIX", rating: 64, year: 2023, console: ["PS5", "PS4", "PC"], image: "./recursos/Forspoken.jpg" },
  { name: "CONCORD", genre: "ACCIÓN", developer: "PLAYSTATION STUDIOS", rating: 63, year: 2024, console: ["PS5", "PC"], image: "./recursos/elinnombrable.jpg" },
  { name: "FINAL FANTASY XV", genre: "RPG", developer: "SQUARE ENIX", rating: 81, year: 2016, console: ["PS4", "XBOX ONE", "PC"], image: "./recursos/FFXV.jpg" },
  { name: "FINAL FANTASY XVI", genre: "RPG", developer: "SQUARE ENIX", rating: 87, year: 2023, console: ["PS5"], image: "./recursos/FFXVI.PNG" },
  { name: "DRAGON QUEST XI", genre: "RPG", developer: "SQUARE ENIX", rating: 91, year: 2017, console: ["SWITCH", "PC", "PS4", "XBOX SERIES X/S"], image: "./recursos/DragonQuestXI.jpg" },
  { name: "GRAND THEFT AUTO TRILOGY (REMASTERIZADO)", genre: "ACCIÓN", developer: "ROCKSTAR GAMES", rating: 53, year: 2021, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "SWITCH", "PC"], image: "./recursos/GTATrilogy.jpg" },
  { name: "CALL OF DUTY: BLACK OPS 2", genre: "SHOOTER", developer: "MICROSOFT STUDIOS", rating: 83, year: 2012, console: ["PS3", "XBOX 360", "PC"], image: "./recursos/CallofdutyBlacksops2.jpg" },
  { name: "CALL OF DUTY: BLACK OPS 3", genre: "SHOOTER", developer: "MICROSOFT STUDIOS", rating: 81, year: 2015, console: ["PS4", "XBOX ONE", "PC"], image: "./recursos/CallofdutyBlacksops3.jpg" },
  { name: "CALL OF DUTY: BLACK OPS 4", genre: "SHOOTER", developer: "MICROSOFT STUDIOS", rating: 83, year: 2018, console: ["PS4", "XBOX ONE", "PC"], image: "./recursos/CallofdutyBlacksops4.jpg" },
  { name: "CALL OF DUTY: BLACK OPS COLD WAR", genre: "SHOOTER", developer: "MICROSOFT STUDIOS", rating: 76, year: 2020, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "PC"], image: "./recursos/CallofdutyBlacksopsColdwar.jpg" },
  { name: "CALL OF DUTY: BLACK OPS 6", genre: "SHOOTER", developer: "MICROSOFT STUDIOS", rating: 83, year: 2024, console: ["PS5", "PS4", "XBOX SERIES X/S", "XBOX ONE", "PC"], image: "./recursos/CallofdutyBlacksops6.jpeg" },
  { name: "SILENT HILL 2", genre: "TERROR", developer: "KONAMI", rating: 89, year: 2001, console: ["PS2"], image: "./recursos/SilentHill2.jpg" },
  { name: "SUPER MARIO GALAXY", genre: "PLATAFORMAS", developer: "NINTENDO", rating: 97, year: 2007, console: ["WII"], image: "./recursos/SuperMarioGalaxy.jpg" },
  { name: "PORTAL", genre: "PUZZLE", developer: "VALVE", rating: 90, year: 2007, console: ["PC", "XBOX 360", "PS3"], image: "./recursos/Portal.jpg" },
  { name: "PORTAL 2", genre: "PUZZLE", developer: "VALVE", rating: 95, year: 2011, console: ["PC", "PS3", "XBOX 360"], image: "./recursos/Portal2.jpg" },
  { name: "HALF-LIFE", genre: "SHOOTER", developer: "VALVE", rating: 96, year: 1998, console: ["PC"], image: "./recursos/HalfLife.jpg" },
  { name: "HALF-LIFE 2", genre: "SHOOTER", developer: "VALVE", rating: 96, year: 2004, console: ["PC", "XBOX"], image: "./recursos/HalfLife2.jpg" },
  { name: "RESIDENT EVIL 2 REMAKE", genre: "TERROR", developer: "CAPCOM", rating: 91, year: 2019, console: ["PS4", "XBOX SERIES X/S","XBOX ONE", "PC"], image: "./recursos/ResidentEvil2Remake.PNG" },
  { name: "RESIDENT EVIL 4 REMAKE", genre: "TERROR", developer: "CAPCOM", rating: 93, year: 2023, console: ["PS4", "XBOX SERIES X/S","XBOX ONE", "PC"], image: "./recursos/ResidentEvil4.jpg" },
  { name: "UNCHARTED 4: A THIEF'S END", genre: "AVENTURA", developer: "PLAYSTATION STUDIOS", rating: 93, year: 2016, console: ["PS4"], image: "./recursos/Uncharted_4.jpeg" },
  { name: "METAL GEAR SOLID 3: SNAKE EATER", genre: "SIGILO", developer: "KONAMI", rating: 91, year: 2004, console: ["PS2"], image: "./recursos/MetalGearSolid3.jpg" },
  { name: "METAL GEAR SOLID 2: SONS OF LIBERTY", genre: "SIGILO", developer: "KONAMI", rating: 96, year: 2001, console: ["PS2"], image: "./recursos/MetalGearSolid2.jpg" },
  { name: "NINTENDOGS", genre: "SIMULACIÓN", developer: "NINTENDO", rating: 85, year: 2005, console: ["NINTENDO DS"], image: "./recursos/Nintedogs.jpg" },
  { name: "Wii Sports", genre: "DEPORTIVO", developer: "NINTENDO", rating: 81, year: 2006, console: ["WII"], image: "./recursos/WiiSports.jpg" },
  { name: "The Legend of Zelda: Twilight Princess", genre: "AVENTURA", developer: "NINTENDO", rating: 95, year: 2006, console: ["WII"], image: "./recursos/ZeldaTwlightPrincess.jpg" },
  { name: "Super Smash Bros. Brawl", genre: "LUCHA", developer: "NINTENDO", rating: 93, year: 2008, console: ["WII"], image: "./recursos/SuperSmashBrosBrawl.jpg" },
  { name: "Super Mario Galaxy 2", genre: "PLATAFORMAS", developer: "NINTENDO", rating: 97, year: 2010, console: ["WII"], image: "./recursos/SuperMarioGalaxy2.png" },
  { name: "Mario Kart Wii", genre: "CARRERAS", developer: "NINTENDO", rating: 85, year: 2008, console: ["WII"], image: "./recursos/MarioKartWii.jpg" },
  { name: "Pokémon Diamond", genre: "RPG", developer: "GAME FREAK", rating: 91, year: 2006, console: ["NINTENDO DS"], image: "./recursos/PokemonDiamond.png" },
  { name: "Mario Kart DS", genre: "CARRERAS", developer: "NINTENDO", rating: 91, year: 2005, console: ["NINTENDO DS"], image: "./recursos/MarioKartDS.png" },
  { name: "The Legend of Zelda: Phantom Hourglass", genre: "AVENTURA", developer: "NINTENDO", rating: 90, year: 2007, console: ["NINTENDO DS"], image: "./recursos/ZeldaPhantomHourglass.jpg" },
  { name: "New Super Mario Bros.", genre: "PLATAFORMAS", developer: "NINTENDO", rating: 89, year: 2006, console: ["NINTENDO DS"], image: "./recursos/NewSuperMarioBrosds.jpg" },
  { name: "Animal Crossing: Wild World", genre: "SIMULACIÓN", developer: "NINTENDO", rating: 85, year: 2005, console: ["NINTENDO DS"], image: "./recursos/AnimalCrossingWildWorld.jpg" },
  { name: "HALO 3", genre: "SHOOTER", developer: "MICROSOFT STUDIOS", rating: 94, year: 2007, console: ["XBOX 360"], image: "./recursos/Halo3.jpg" },
  { name: "HALO REACH", genre: "SHOOTER", developer: "MICROSOFT STUDIOS", rating: 91, year: 2010, console: ["XBOX 360"], image: "./recursos/HaloReach.png" },
  { name: "GOW: JUDGMENT", genre: "ACCIÓN", developer: "MICROSOFT STUDIOS", rating: 80, year: 2013, console: ["XBOX 360"], image: "./recursos/GOWJudgment.jpg" },
  { name: "FABLE II", genre: "RPG", developer: "MICROSOFT STUDIOS", rating: 89, year: 2008, console: ["XBOX 360"], image: "./recursos/Fable2.webp" },
  { name: "FABLE III", genre: "RPG", developer: "MICROSOFT STUDIOS", rating: 82, year: 2010, console: ["XBOX 360"], image: "./recursos/Fable3.jpg" },
  { name: "Gears of War 4", genre: "ACCIÓN", developer: "MICROSOFT STUDIOS", rating: 84, year: 2016, console: ["XBOX ONE", "PC"], image: "./recursos/GearsOfWar4.jpg" },
  { name: "SUNSET OVERDRIVE", genre: "ACCIÓN", developer: "MICROSOFT STUDIOS", rating: 81, year: 2014, console: ["XBOX ONE"], image: "./recursos/SunsetOverdrive.png" },
  { name: "LITTLEBIGPLANET", genre: "PLATAFORMAS", developer: "PLAYSTATION STUDIOS", rating: 93, year: 2008, console: ["PS3"], image: "./recursos/LittleBigPlanet1.jfif" },
  { name: "LITTLEBIGPLANET 2", genre: "PLATAFORMAS", developer: "PLAYSTATION STUDIOS", rating: 92, year: 2011, console: ["PS3"], image: "./recursos/LittleBigPlanet2.png" },
  { name: "UNCHARTED: DRAKE'S FORTUNE", genre: "AVENTURA", developer: "PLAYSTATION STUDIOS", rating: 88, year: 2007, console: ["PS3"], image: "./recursos/UnchartedDrakesFortune.jpg" },
  { name: "UNCHARTED 2: AMONG THIEVES", genre: "AVENTURA", developer: "PLAYSTATION STUDIOS", rating: 96, year: 2009, console: ["PS3"], image: "./recursos/Uncharted_2.png" },
  { name: "UNCHARTED 3: DRAKE'S DECEPTION", genre: "AVENTURA", developer: "PLAYSTATION STUDIOS", rating: 93, year: 2011, console: ["PS3"], image: "./recursos/Uncharted_3.jpg" },
  { name: "GRAN TURISMO 5", genre: "DEPORTIVO", developer: "PLAYSTATION STUDIOS", rating: 92, year: 2010, console: ["PS3"], image: "./recursos/GranTurismo5.png" },
  { name: "GRAN TURISMO 6", genre: "DEPORTIVO", developer: "PLAYSTATION STUDIOS", rating: 88, year: 2013, console: ["PS3"], image: "./recursos/GranTurismo6.jpg" },
  { name: "MARIO KART 8 DELUXE", genre: "CARRERAS", developer: "NINTENDO", rating: 92, year: 2017, console: ["SWITCH"], image: "./recursos/MarioKart8Deluxe.jpg" },
  { name: "SUPER MARIO PARTY", genre: "FAMILIA", developer: "NINTENDO", rating: 80, year: 2018, console: ["SWITCH"], image: "./recursos/SuperMarioParty.jpg" },
];

function displayResults(results) {
  const container = document.querySelector('.modern-results');
  container.innerHTML = '';

  results.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <div class="game-info">
        <div class="game-header">
          <h3>${game.name}</h3>
        </div>
        <div>
          <h3>Nota</h3>
          <p>${game.rating}</p>
        </div>
        <div class="GENEROSDiv">
          <h3>GÉNERO</h3>
          <p>${game.genre}</p>
        </div>
        <div class="GENEROSDiv">
          <h3>Consolas</h3>
          <p>${game.console}</p>
        </div>
        <div>
          <h3>DESARROLLADORA</h3>
          <p>${game.developer}</p>
        </div>
        <div>
          <h3>AÑO</h3>
          <p>${game.year}</p>
        </div>
      </div>
      <!-- Imagen del juego -->
      <div class="game-image">
        <img src="${game.image}" alt="Imagen de ${game.name}" class="game-image">
      </div>
    `;
    container.appendChild(card);
  });
}

function applyFilters() {
  const name = document.getElementById('name-input').value.toLowerCase();
  const genre = document.getElementById('genre-select').value;
  const developer = document.getElementById('developer-input').value.toLowerCase();
  const rating = parseFloat(document.getElementById('rating-input').value) || 0;
  const console = document.getElementById('console-select').value;
  const year = parseInt(document.getElementById('year-input').value) || 0;

  let results = gameData.filter(game => {
    return (!name || game.name.toLowerCase().includes(name)) &&
           (!genre || game.genre === genre) &&
           (!developer || game.developer.toLowerCase().includes(developer)) &&
           game.rating >= rating &&
           (!console || game.console.includes(console)) &&  // Cambio aquí para verificar que la consola esté en el array
           (!year || game.year === year);
  });

  // Aplicar ordenamiento
  const sortField = document.getElementById('global-sort').value;
  const sortOrder = document.getElementById('sort-order').value;
  
  if (sortField) {
    results.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];
      
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();
      
      return sortOrder === 'asc' ? 
        valA > valB ? 1 : -1 : 
        valA < valB ? 1 : -1;
    });
  }

  displayResults(results);
}

document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll('input, select');
  inputs.forEach(input => {
    input.addEventListener('input', applyFilters);
    input.addEventListener('change', applyFilters);
  });
  displayResults(gameData);
});