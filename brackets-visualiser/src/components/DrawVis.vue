<template>
  <div>
    <b-form-slider :value="roundShowRange" @slide="slide" :range="true" :max="roundMax"></b-form-slider>
    <p>Visualising rounds: {{ roundShowRange }}</p>
    <div id="bracket-container">
      <bracket :rounds="rounds">
        <template #player="{ player }">
          {{ player.name }}
        </template>
        <template #player-extension-bottom="{ match }">
          <a :href="match.outputDir">{{ match.results }}</a>
        </template>
      </bracket>
    </div>
  </div>
</template>

<script>
import Bracket from "vue-tournament-bracket";
import results from "../results.json";

export default {
  name: 'DrawVis',
  components: {
    Bracket
  },
  computed: {
    rounds() {
      const [start, end] = this.roundShowRange;
      const clampedResults = results.map((round, round_idx) => {
        if (round_idx < end) {
          return round;
        } else {
          return {
            ...round,
            games: round.games.map(game => {
              return {
                player1: {
                  ...game.player1,
                  name: round_idx == end ? game.player1.name : "?",
                  winner: null
                },
                player2: {
                  ...game.player2,
                  name: round_idx == end ? game.player2.name : "?",
                  winner: null
                }
              };
            })
          };
        }
      });
      return clampedResults.slice(start, this.roundMax);
    },
  },
  data () {
    return {
      roundMax: results.length,
      roundShowRange: [0, results.length]
    }
  },
  methods: {
    slide(e) {
      const [start, end] = e;
      this.roundShowRange = [start, end];
    },
  }
}
</script>

<style>
#bracket-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vtb-item-players {
  flex-direction: column;
  background-color: #ccc;
  min-width: 200px;
  margin: 0;
  color: #000;
  font-style: oblique;
  border: 3px #000 solid;
}
.vtb-item-players .winner {
  color: #000;
  font-weight: bold;
  font-style: normal;
  background-color: rgba(14, 190, 49, 0.5);
}
.vtb-item-players .defeated {
  color: gray;
  background-color: lightgray;
  background: repeating-linear-gradient(
    -45deg,
    #efe1e1,
    #efe1e1 5px,
    #fff2f2 5px,
    #fff2f2 10px
  );
  font-style: normal;
  text-decoration: line-through;
}
.vtb-item-players .winner.highlight {
  background-color: rgb(36, 175, 87);
}
.vtb-item-players .defeated.highlight {
  color: #000;
}
</style>
