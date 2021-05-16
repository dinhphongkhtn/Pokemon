
export class PokedexLocal {

  getPokemonDetail = async (pokemons) => {
    for (const element of pokemons) {

      await fetch(element.url)
        .then(res => res.json())
        .then(res => {
          element.front_default = res.sprites.front_default;
          element.id = res.id;
          element.types = res.types.slice(0, 1).shift().type.name;
          element.alltypes = res.types;
          element.official_artwork = res.sprites.other['official-artwork']['front_default'];
          element.stats = res.stats;

          if(element.front_default === null){
              element.front_default = element.official_artwork;
          };
          if(element.official_artwork === null){
            element.official_artwork = element.front_default;
          }
          //  console.log( element.alltypes);
        })
        .catch(error => {

        });
    }


    // return Promise.resolve(pokeImg);
  };
  getPokeData = async (limit,offset) => {
    var Pokedex = require('pokedex-promise-v2');

    var options = {
      protocol: 'https',
      hostName: 'pokeapi.co',
      versionPath: '/api/v2/',
      cacheLimit: 100 * 1000, // 100s
      timeout: 5 * 1000, // 5s,
      limit: limit,
      offset:offset
    }
    // , types:[{slot:'', type:{name:'',url:''}}]
    let results = [{ name: '', url: '', front_default: '', id: 0, official_artwork: '' }];
    let count = 0;
    var P = new Pokedex(options);
    await P.getPokemonsList() // with Promise
      .then((res) => {
        //console.log(response);
        //  console.log(response.results);
        // count =res.count;
        // console.log(count);
        results = [...res.results];
      })
      .catch(function (error) {
        console.log('There was an ERROR: ', error);
      });
    await this.getPokemonDetail(results);

    return Promise.resolve(results);

  };


}
